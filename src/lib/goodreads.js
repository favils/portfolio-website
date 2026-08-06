const RSS_URL =
  "https://www.goodreads.com/review/list_rss/102513717?shelf=read&sort=date_read&order=d";

function extractTag(xml, tag) {
  const re = new RegExp(
    `<${tag}>\\s*(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))\\s*</${tag}>`
  );
  const match = xml.match(re);
  if (!match) return "";
  return (match[1] ?? match[2] ?? "").trim();
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

export async function getRecentlyReadBooks(limit = 3) {
  try {
    const res = await fetch(RSS_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];

    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(
      0,
      limit
    );

    return items.map(([, item]) => ({
      id: extractTag(item, "book_id") || extractTag(item, "guid"),
      title: decodeEntities(extractTag(item, "title")),
      author: decodeEntities(extractTag(item, "author_name")),
      link: extractTag(item, "link"),
      image:
        extractTag(item, "book_large_image_url") ||
        extractTag(item, "book_medium_image_url"),
      rating: Number(extractTag(item, "user_rating")) || 0,
      readAt: extractTag(item, "user_read_at"),
      published: extractTag(item, "book_published"),
      review: stripHtml(extractTag(item, "user_review")),
    }));
  } catch {
    return [];
  }
}
