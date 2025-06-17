import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Photobooth() {
    return (
        <div className="group h-full bg-white overflow-hidden relative">
            <Image
                src="/photobooth.gif"
                alt="Photobooth"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "auto",
                }}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-1"
            />

            <Link href="https://github.com/favils/photobooth" target="_blank" rel="noopener noreferrer">
                <span className="absolute bottom-4 left-4 flex items-center gap-2 bg-black rounded-3xl px-4 py-2 text-white text-sm font-bold uppercase transition-all duration-300 hover:bg-white hover:text-black hover:gap-3 cursor-pointer">
                    Github Repo
                    <ArrowUpRight size={16} />
                </span>
            </Link>

            <Link href="https://photobooth-pink.vercel.app/" target="_blank" rel="noopener noreferrer">
                <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-black rounded-3xl px-4 py-2 text-white text-sm font-bold uppercase transition-all duration-300 hover:bg-white hover:text-black hover:gap-3 cursor-pointer">
                    View Live
                    <ArrowUpRight size={16} />
                </span>
            </Link>
        </div>
    );
}
