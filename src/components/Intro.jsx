import DecryptedText from "./ui/DecryptedText/DecryptedText";
import TextPressure from "./ui/TextPressure/TextPressure";
import Link from "next/link";
import Image from "next/image";

export default function Intro() {
    return (
      <div className="h-full p-[1rem] bg-emerald-100 flex flex-col text-4xl">
        <DecryptedText
            text="Hey! I'm Fatima ✽
            
            I'm a full-stack developer."
            speed={100}
            maxIterations={20}
            className="revealed"
            sequential="true"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            revealDirection="start"
        />
        <div className="flex flex-row ml-auto gap-2 mt-auto">
            <Link href="https://www.linkedin.com/in/fatimavillena/" className="transition duration-300 ease hover:scale-120 hover:drop-shadow-lg">
                <Image
                    src="/linkedin.png"
                    alt="linkedin"
                    height={50}
                    width={50}
                />
            </Link>
            <Link href="https://github.com/favils" className="transition duration-300 ease hover:scale-120 hover:drop-shadow-lg">
                <Image
                    src="/github.png"
                    alt="github"
                    height={50}
                    width={50}
                />
            </Link>
        </div>
      </div>
    );
  }
  