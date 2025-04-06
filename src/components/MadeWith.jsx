import RotatingText from "./ui/RotatingText/RotatingText"
  

export default function MadeWith() {
    return (
        <div className="bg-black min-h-screen text-white pt-4 pl-4 text-xs">
            
            <div className="flex flex-row items-center ml-auto mt-1.5 justify-center gap-1">
            Website made with 
            <RotatingText
                texts={['ReactBits', 'NextJS', 'JavaScript', 'Tailwind CSS', 'React', 'Framer Motion', 'GSAP']}
                mainClassName="px-2 sm:px-1 bg-white font-extrabold text-black overflow-hidden py-0.5 text- justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden "
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
            />
            </div>
        </div>
    )
}