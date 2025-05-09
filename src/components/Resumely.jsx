import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function Resumely() {
    return(
        <div className="group">
            <Image
                src="/resumely.png"
                alt="Resume Generator"
                fill
                style={{
                  objectFit: "cover",
                }}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-1"
              />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-3xl bg-black px-6 py-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Resume Generator
            </div>

            <Link href="https://github.com/favils/resume.ly" target="_blank"rel="noopener noreferrer">
                <span className="absolute bottom-4 left-4 flex items-center gap-2 bg-black rounded-3xl px-4 py-2 text-white text-sm font-bold uppercase transition-all duration-300 hover:bg-white hover:text-black hover:gap-3 cursor-pointer">
                    Github Repo
                    <ArrowUpRight size={16} />
                </span>
            </Link>

            <Link href="https://resume-generator-bxf0.onrender.com/" target="_blank" rel="noopener noreferrer">
                <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-black rounded-3xl px-4 py-2 text-white text-sm font-bold uppercase transition-all duration-300 hover:bg-white hover:text-black hover:gap-3 cursor-pointer">
                    View Live
                    <ArrowUpRight size={16} />
                </span>
            </Link>
        </div>
    )
}