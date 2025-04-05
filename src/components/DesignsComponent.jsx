import Masonry from "./ui/Masonry/Masonry";

const data = [
  { id: 1, image: 'clarity.png', height: 500 },
  { id: 2, image: 'nyu.gif', height: 700 },
  { id: 3, image: 'gaia.png', height: 1200 },
  { id: 4, image: 'gaiaapp.png', height: 500 },
  { id: 5, image: 'clarityapp.png', height: 500 },
];

export default function Designs() {
  return (
    <div className="flex justify-center mt-10 w-full h-screen">
        <div className="w-1/2">
            <Masonry data={data} />
        </div>
    </div>
  );
}
