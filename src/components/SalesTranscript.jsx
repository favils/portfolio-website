import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react";

export default function Sales(){
    return (
        <div className="h-full bg-white relative">
              <Image
                src="/Sales.png"
                alt="ASL Interpreter"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-1"
              />
              <div className="hidden lg:block absolute bottom-35 left-24 text-white text-center text-2xl bg-black px-4 py-2 rounded-xl">
                AI Sales
                <br />
                Transcription.
            </div>
            <Link
                href="https://github.com/zikrya/Hackathon-Rilla"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-black rounded-3xl px-4 py-2 text-white text-sm font-bold uppercase transition-all duration-300 hover:bg-white hover:text-black hover:gap-3 cursor-pointer">
                Learn More
                <ArrowUpRight size={16} />
                </span>
            </Link>
        </div>
    )
}