import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ASL() {
    return (
        <div className="h-full bg-white overflow-hidden relative">
            <Image
                src="/ASLI.png"
                alt="ASL Interpreter"
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

            <div className="hidden lg:block absolute top-10 left-18 text-white text-right text-3xl bg-black px-4 py-2 rounded-xl">
                ASL
                <br />
                Interpreter.
            </div>

            <Link href="https://github.com/favils/ASL-Interpreter" target="_blank" rel="noopener noreferrer">
                <span className="absolute bottom-4 left-4 flex items-center gap-2 bg-black rounded-3xl px-4 py-2 text-white text-sm font-bold uppercase transition-all duration-300 hover:bg-white hover:text-black hover:gap-3 cursor-pointer">
                    Github Repo
                    <ArrowUpRight size={16} />
                </span>
            </Link>

            <Link href="https://web-app-4tma.onrender.com/" target="_blank" rel="noopener noreferrer">
                <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-black rounded-3xl px-4 py-2 text-white text-sm font-bold uppercase transition-all duration-300 hover:bg-white hover:text-black hover:gap-3 cursor-pointer">
                    View Live
                    <ArrowUpRight size={16} />
                </span>
            </Link>
        </div>
    );
}
