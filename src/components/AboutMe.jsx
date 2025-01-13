import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutMe = () => {
    const textRef = useRef(null);
    const nameRef = useRef(null);
    const infoRef = useRef(null)

    useEffect(() => {
        const splitText = (element) => {
            const text = element.textContent;
            const letters = text.split("");
            element.innerHTML = '';
            letters.forEach((letter) => {
                const span = document.createElement('div');
                span.textContent = letter;
                element.appendChild(span);
            });
        };

        const name = nameRef.current.children;
        gsap.fromTo(
            name,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.3,
            }
        );

        const text = textRef.current.children;
        gsap.fromTo(
            text,
            {
                opacity: 0,
                y: -100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.3,
                ease: "power5.out",
                stagger: 0.1,
            }
        );

        const info = infoRef.current;
        gsap.fromTo(
            info,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 2,
                ease: "power1.out",
                stagger: 1,
                delay: 4,
            }
        );
    }, []);

    return (
        <div className="flex h-[50vh] flex-col items-center justify-center mt-10">
            <div className="text-center w-full">
                <div ref={nameRef} className="text-xl mb-[-20px] justify-center overflow-hidden font-thin flex flex-row gap-2">
                    <div>my</div><div><u>name</u></div> <div><i>is</i></div>
                </div>
                <div ref={textRef} className="flex p-4 overflow-hidden justify-center flex-row font-marbleyFree text-sxl">
                    <div><i>f</i></div>
                    <div><i>a</i></div>
                    <div><i>t</i></div>
                    <div><i>i</i></div>
                    <div><i>m</i></div>
                    <div><i>a</i></div>
                    <div className="m-3"></div>
                    <div><b>v</b></div>
                    <div><b>i</b></div>
                    <div><b>l</b></div>
                    <div><b>l</b></div>
                    <div><b>e</b></div>
                    <div><b>n</b></div>
                    <div><b>a</b></div>
                </div>

            </div>
            <div ref={infoRef}>
                - i'm an aspiring software engineer.
                <br />- getting my bachelors in computer science at New York University!
            </div>
        </div>
    );
};

export default AboutMe;
