'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(true);

  return (
    <main className="bg-[#EFFAF0] min-h-screen flex justify-center items-start py-8">
      {/* 흰색 카드 컨테이너 */}
      <div className="relative bg-white rounded-[32px] w-full max-w-sm shadow-md p-4 pb-[240px]">

        {/* 1. 헤더 */}
        <header className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative w-6 h-6">
              <Image
                src="/logo.png"
                alt="로고"
                fill
                sizes="24px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span className="text-xl font-bold">찜콩</span>
          </div>
          <button aria-label="검색">
            <div className="relative w-6 h-6">
              <Image
                src="/searchicon.svg"
                alt="검색"
                fill
                sizes="24px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </button>
        </header>

        {/* 2. 4개 박스 그리드 */}
        <section className="grid grid-cols-3 gap-2 mt-6">
          {/* 왼쪽 상단 (2/3 너비) */}
          <button
            className="col-span-2 h-[174px] bg-[#F5F3EE] rounded-lg flex flex-col justify-center items-center relative"
            onClick={() => router.push('/map')}
          >
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/search.png"
                alt="지구 위 돋보기"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-xl font-medium">내 주변 카페</span>
              <div className="relative w-16 h-16 mt-3">
                <Image
                  src="/bean.png"
                  alt="커피빈"
                  fill
                  sizes="64px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </button>

          {/* 오른쪽 상단 (1/3 너비) */}
          <button
            className="col-span-1 h-[174px] bg-[#8A795D] rounded-lg flex flex-col justify-center items-center"
            onClick={() => router.push('/mypage')}
          >
            <span className="text-white text-xl font-medium">마이페이지</span>
            <div className="relative w-16 h-16 mt-3">
              <Image
                src="/mypage.png"
                alt="사람 아이콘"
                fill
                sizes="64px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </button>

          {/* 왼쪽 하단 (1/3 너비) */}
          <button
            className="col-span-1 h-[174px] bg-[#D9EED7] rounded-lg flex flex-col justify-center items-center"
            onClick={() => router.push('/cafe/1')}
          >
            <span className="text-lg font-medium">좌석 확인</span>
            <div className="relative w-16 h-16 mt-3">
              <Image
                src="/chair.png"
                alt="소파 아이콘"
                fill
                sizes="64px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </button>

          {/* 오른쪽 하단 (2/3 너비) */}
          <button
            className="col-span-2 h-[174px] bg-[#8A795D] rounded-lg relative border-none"
            onClick={() => router.push('/favorite')}
          >
            <span className="absolute top-8 left-4 text-lg font-medium text-white">
              내 관심 카페 확인하기
            </span>
            <div className="absolute bottom-4 right-4 w-16 h-16">
              <Image
                src="/mug.png"
                alt="머그잔"
                fill
                sizes="64px"
                style={{ objectFit: 'contain' }}
              />
              <div className="absolute bottom-14 right-6 w-6 h-6">
                <Image
                  src="/heart.png"
                  alt="하트"
                  fill
                  sizes="24px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </button>
        </section>

        {/* 3. FAQ 위아래 실선 */}
        <section className="mt-6">
          <hr className="border-t border-gray-300 mb-2" />
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">자주 묻는 질문</span>
            
          </div>
          <hr className="border-t border-gray-300 mb-2" />
          <ul className="space-y-2 text-sm">
            <li>Q1. 좌석 예약은 어떻게 하나요?</li>
            <li>Q2. 질문을 남기려면 어떻게 하나요?</li>
          </ul>
        </section>

        {/* 4. 팝업 (구름 240px 높이) */}
        {showPopup && (
          <div className="absolute bottom-0 left-0 right-0 h-[240px]">
            <div className="relative h-full w-full">
              <Image
                src="/cloud.png"
                alt="구름 배경"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 px-4 pt-4 flex flex-col">
                
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-center text-sm">
                    저번에 방문했던 “스타벅스”와<br/>
                    유사한 카페예요!
                  </p>
                  <p className="mt-1 text-center text-lg font-bold">
                    “렛미얼론”
                  </p>
                  <div className="mt-3 flex justify-center">
                    <button className="text-sm font-medium underline">
                      더 알아보기
                    </button>
                  </div>
                  <div>
                    <button
                      className="absolute bottom-2 right-3 text-xs text-gray-500"
                      onClick={() => setShowPopup(false)}
                    >
                      오늘 하루동안 보지 않기 X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}