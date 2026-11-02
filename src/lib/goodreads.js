import { fallbackBooks } from "@/data/books";

// Goodreads retired shelf RSS feeds (/review/list_rss) in Oct 2026, so we read
// the public bookshelf widget instead. It returns a JS snippet wrapping HTML.
const USER_ID = "102513717";

function widgetUrl(limit) {
  const params = new URLSearchParams({
    shelf: "read",
    sort: "date_read",
    order: "d",
    num_books: String(limit),
    show_author: "1",
    show_cover: "1",
    show_rating: "1",
    show_review: "1",
    show_title: "1",
    widget_id: "1",
  });
  return `https://www.goodreads.com/review/custom_widget/${USER_ID}?${params}`;
}

// Pull the HTML string out of `var widget_code = '...'` and undo JS escaping.
function extractWidgetHtml(js) {
  const match = js.match(/var widget_code = '([\s\S]*?)'\s*\n\s*var widget_div/);
  if (!match) return "";
  return match[1]
    .replace(/\\n/g, "\n")
    .replace(/\\(["'\/\\])/g, "$1");
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(str) {
  return decodeEntities(
    str
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
  ).trim();
}

function divContents(html, className) {
  const re = new RegExp(
    `<div class="${className}">([\\s\\S]*?)</div>`
  );
  return html.match(re)?.[1] ?? "";
}

function parseBook(block) {
  const cover = divContents(block, "gr_custom_book_container_1");
  const link = decodeEntities(cover.match(/href="([^"]+)"/)?.[1] ?? "");
  // Drop the thumbnail size suffix (e.g. "._SY75_") to get the full-size cover.
  const image = (cover.match(/src="([^"]+)"/)?.[1] ?? "").replace(
    /\._[A-Z]{2}\d+_(?=\.\w+$)/,
    ""
  );

  return {
    id: link.match(/review\/show\/(\d+)/)?.[1] ?? link,
    title: stripHtml(divContents(block, "gr_custom_title_1")),
    author: stripHtml(divContents(block, "gr_custom_author_1")).replace(
      /^by\s+/,
      ""
    ),
    link: link.replace(/\?utm_[^"]*$/, ""),
    image,
    rating: (
      divContents(block, "gr_custom_rating_1").match(/star_active/g) ?? []
    ).length,
    readAt: null,
    review: stripHtml(divContents(block, "gr_custom_review_1")),
  };
}

export async function getRecentlyReadBooks(limit = 3) {
  try {
    const res = await fetch(widgetUrl(limit), {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallbackBooks.slice(0, limit);

    const html = extractWidgetHtml(await res.text());
    const books = html
      .split('<div class="gr_custom_each_container_1">')
      .slice(1, limit + 1)
      .map(parseBook)
      .filter((book) => book.title);

    return books.length > 0 ? books : fallbackBooks.slice(0, limit);
  } catch {
    return fallbackBooks.slice(0, limit);
  }
}
