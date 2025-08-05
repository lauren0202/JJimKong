"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [mode, setMode] = useState<"select" | "customer-login" | "owner-login">(
    "select"
  );
  const router = useRouter();

  return (
    <main className="flex flex-col justify-end items-start flex-shrink-0 bg-[#fff]">
      <div className="px-5 pt-20 text-[#757575] font-medium text-[20px] leading-[22px]">
        카페 실시간 자리확인은
      </div>
      <h1 className="px-8 py-2 text-[#000] font-medium text-[40px]">찜콩</h1>

      <div className="flex flex-col items-center w-full pt-[50px]">
        <Image
          src="/assets/logo-sit.svg"
          alt="찜콩"
          width={277}
          height={252}
          priority
        />
      </div>
      {mode === "select" ? (
        <>
          <div className="w-full flex flex-col items-center">
            <h2 className="text-[24px] pb-10">환영합니다!</h2>
            <p className="text-[20px] pb-7">로그인 방법을 선택해주세요</p>
          </div>

          <div className="flex flex-row w-full items-center justify-center">
            <button
              className="flex flex-col mx-[5] my-[5] bg-[#C8DBBE] rounded-[30px] border-[5px] border-solid border-black/5 backdrop-blur-[2px]"
              onClick={() => setMode("customer-login")}
            >
              <span className="px-2 pt-6 text-[24px]">카페 이용 고객</span>
              <span className="pb-6 text-[20px]">로그인</span>
            </button>

            <button
              className="flex flex-col mx-[5] my-[5] bg-[#EDE4E0] rounded-[30px] border-[5px] border-solid border-black/5 backdrop-blur-[2px]"
              onClick={() => setMode("owner-login")}
            >
              <span className="px-3 pt-6 text-[24px]">카페 사장님</span>
              <span className="pb-6 text-[20px]">로그인</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="w-full mb-6 mt-2 text-[20px] text-center">
            {mode === "customer-login"
              ? "카페 이용 고객 로그인"
              : "카페 사장님 로그인"}
          </h2>
          <div className="flex flex-col w-full justify-center items-center mt-5 gap-2">
            <button
              className="flex items-center justify-center px-4 py-4 w-[339px] h-[48px] rounded-[15px] bg-[#FDE500] text-[17px]"
              onClick={() => router.push("/page")}
            >
              <img
                src="/assets/kakao.svg"
                alt="kakao"
                className="w-6 h-6 mr-3"
              />
              카카오로 시작하기
            </button>
            <button
              className="flex items-center justify-center px-4 py-4 w-[339px] h-[48px] rounded-[15px] border-[1px] border-[#D9D9D9] text-[17px]"
              onClick={() => router.push("/page")}
            >
              <img
                src="/assets/google.svg"
                alt="google"
                className="w-6 h-6 mr-3"
              />
              구글로 시작하기
            </button>
            <button
              className="flex items-center justify-center px-4 py-4 w-[339px] h-[48px] rounded-[15px] bg-[#000] text-[#fff] text-[17px]"
              onClick={() => router.push("/page")}
            >
              <img
                src="/assets/apple.svg"
                alt="apple"
                className="w-6 h-6 mr-3"
              />
              애플로 시작하기
            </button>
          </div>
        </>
      )}
    </main>
  );
}
