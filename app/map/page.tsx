import Image from "next/image";

export default function MapPage() {
  return (
    <main className="flex flex-col justify-center items-center mt-3">
      <Image
        src="/assets/map-top.svg"
        alt="cafe map"
        width={420}
        height={354}
        priority
      />
      <Image
        src="/assets/map-bottom.svg"
        alt="cafe map"
        width={420}
        height={354}
        priority
        className="-mt-[45px] relative z-10"
      />
    </main>
  );
}
