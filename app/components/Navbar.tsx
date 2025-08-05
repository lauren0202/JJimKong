import Image from "next/image";

export default function NavBar() {
  return (
    <main className="h-[89px]">
      <hr />
      <div className="flex flex-low justify-center items-center gap-15 mt-5">
        <button>
          <Image
            src="/assets/home-navbar.svg"
            alt="home"
            width={30}
            height={30}
            priority
          />
        </button>
        <button>
          <Image
            src="/assets/search-navbar.svg"
            alt="search"
            width={30}
            height={30}
            priority
          />
        </button>
        <button>
          <Image
            src="/assets/mappin-navbar.svg"
            alt="map-pin"
            width={30}
            height={30}
            priority
          />
        </button>
        <button>
          <Image
            src="/assets/heart-navbar.svg"
            alt="heart"
            width={30}
            height={30}
            priority
          />
        </button>
        <button>
          <Image
            src="/assets/mypage-navbar.svg"
            alt="mypage"
            width={30}
            height={30}
            priority
          />
        </button>
      </div>
    </main>
  );
}
