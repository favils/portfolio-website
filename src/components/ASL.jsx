import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ASL() {

  return (
    <div className="h-full bg-white overflow-hidden">
        <Link href="https://github.com/favils/ASL-Interpreter">
        <Image
            src="/ASLI.png"
            alt="github"
            width={0}
            height={0}
            sizes="100vw"
            style={{
                objectFit: 'cover',
                height: '100%',
                width: 'auto',
            }}
            className="transition-transform duration-300 ease-in-out transform hover:scale-120 hover:rotate-6"
        />
        </Link>
      
        <div className="absolute top-10 left-20 text-white text-right text-3xl bg-black pointer-events-none">
            ASL
            <br/>Interpreter.
        </div>
    </div>
  );
}
