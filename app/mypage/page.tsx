import Image from "next/image";

export default function MyPage() {
  return (
    <main className="flex flex-col justify-center items-center mt-7">
      <div className="flex flex-col items-center gap-1.5">
        <Image
          src="/assets/profile.svg"
          alt="profile image"
          width={131}
          height={131}
          priority
        />
        <h2 className="text-[22px] pt-2">찜콩 님</h2>
        <p className="text-[12px] text-[#535353]">카페 이용 고객</p>
        <p className="text-[14px]">내 포인트 1,000P</p>
        <hr className="mt-2 w-[236.034px] border-[#535353]" />
      </div>
      <div className="flex flex-col items-center pt-3 gap-2">
        <button className="relative w-[220px] h-[35px] overflow-hidden rounded-xl group focus:outline-none">
          <img
            src="/assets/mypage-button.svg"
            alt="내 정보 수정"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center z-10 text-black">
            내 정보 수정
          </span>
        </button>
        <button className="relative w-[220px] h-[35px] overflow-hidden rounded-xl group focus:outline-none">
          <img
            src="/assets/mypage-button.svg"
            alt="내 보유 쿠폰 보기"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center z-10 text-black">
            내 보유 쿠폰 보기
          </span>
        </button>
        <button className="relative w-[220px] h-[35px] overflow-hidden rounded-xl group focus:outline-none">
          <img
            src="/assets/mypage-button.svg"
            alt="포인트 내역 보기"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center z-10 text-black">
            포인트 내역 보기
          </span>
        </button>
        <button className="relative w-[220px] h-[35px] overflow-hidden rounded-xl group focus:outline-none">
          <img
            src="/assets/mypage-button.svg"
            alt="카페 이용 내역 보기"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center z-10 text-black">
            카페 이용 내역 보기
          </span>
        </button>
        <button className="relative w-[220px] h-[35px] overflow-hidden rounded-xl group focus:outline-none">
          <img
            src="/assets/mypage-button.svg"
            alt="전체 설정"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center z-10 text-black">
            전체 설정
          </span>
        </button>
        <hr className="w-[246px] border-[#535353] mt-1.5" />
      </div>
      <div className="flex flex-col items-center pt-3 pb-1">
        <h3 className="text-[16px]">오늘의 이벤트</h3>
        <div className="flex flex-low pt-0.5 h-[120px]">
          <img src="/assets/ad1.svg" alt="광고" />
          <img src="/assets/ad2.svg" alt="광고" />
        </div>

        <hr className="w-[342.001px] border-[#535353] mt-2" />
      </div>
      <div className="flex flex-low items-center mt-2 mb-2">
        <p className="text-[14px]">카페 사장님이신가요?</p>
        <button className="relative w-[200px] h-[30px] overflow-hidden rounded-xl group focus:outline-none">
          <img
            src="/assets/mypage-button.svg"
            alt="사장님 계정으로 전환하기"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center z-10 text-[13px] text-[#404040]">
            사장님 계정으로 전환하기
          </span>
        </button>
      </div>
    </main>
  );
}
