import Image from "next/image";

export default function AppBar() {
  return (
    <main>
      <div className="flex flex-low justify-center mt-[62px]">
        <button>
          <Image
            src="/assets/menu-appbar.svg"
            alt="menu bar"
            width={48}
            height={48}
            priority
          />
        </button>
        <p className="text-[22px] pt-2 pl-3 pr-50">찜콩</p>
        <Image
          src="/assets/logo-appbar.png"
          alt="logo"
          width={48}
          height={48}
          priority
        />
      </div>

      <hr />
    </main>
  );
}
