import Image from "next/image";

export default function FavoritePage() {
  return (
    <main className="flex flex-col justify-center items-center -mt-2 -mb-0.5">
      <div className="relative w-[105vw] h-[80vh] rounded-lg overflow-hidden">
        <Image
        src="/favoritelist.png"
        alt="cafe list"
        fill
        priority
        />
      </div>
      
      
    </main>
  );
}
