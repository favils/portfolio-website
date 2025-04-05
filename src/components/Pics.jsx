import BounceCards from "./ui/BounceCards/BounceCards";

const images = [
  "https://picsum.photos/400/400?grayscale",
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/700/700?grayscale",
  "https://picsum.photos/300/300?grayscale"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];


export default function Pics() {

    return (

      <div className="h-full border-2 border-black rounded-4xl bg-white">
        <div className="mt-2 flex justify-center text-sm italic">
        [ Refresh for New Pictures ]
        </div>
        <BounceCards
            className="custom-bounceCards mt-[-30px]"
            images={images}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
        />

      </div>
    );

  }