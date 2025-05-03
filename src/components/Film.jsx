import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Film(){
    return (
        <div className="h-full bg-white relative">
              <Image
                src="/film.png"
                alt="Filmographer Portfolio Website"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-rotate-3"
              />
              
            <Link
                href="https://www.behance.net/gallery/225048113/Filmographer-Portfolio-Website"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-black rounded-3xl px-4 py-2 text-white text-sm font-bold uppercase transition-all duration-300 hover:bg-white hover:text-black hover:gap-3 cursor-pointer">
                App/Brand Design
                <ArrowUpRight size={16} />
                </span>
            </Link>
        </div>
    )
}