'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(true);

  return (
    <main className="bg-white min-h-screen flex felx-col items-start py-8">
      
      <div className="w-full px-4">

        {/* 1. 헤더 */}
        <header className="flex justify-between items-center">
          <div className="flex items-center space-x-0">
            <div className="relative w-11 h-11">
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
            className="col-span-2 h-[200px] bg-[#ffffff] rounded-lg flex flex-col justify-center items-center relative"
            onClick={() => router.push('/map')}
          >
            <div className="absolute inset-0 overflow-hidden transform scale-125 -translate-y-8">
              <Image
                src="/search.png"
                alt="지구 위 돋보기"
                fill
                
                className="object-cover object-top"
              />
            </div>

          </button>

          {/* 오른쪽 상단 (1/3 너비) */}
          <button
            className="col-span-1 h-[200px] bg-[#ffffff] rounded-lg flex flex-col justify-center items-center"
            onClick={() => router.push('/mypage')}
          >
            
            <div className="relative w-70 h-90 mt-0">
              <Image
                src="/mypage.png"
                alt="마이페이지 버튼"
                fill
                sizes="64px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </button>

          {/* 왼쪽 하단 (1/3 너비) */}
          <button
            className="col-span-1 h-[200px] bg-[#ffffff] rounded-lg flex flex-col justify-center items-center"
            onClick={() => router.push('/cafe/1')}
          >
            
            <div className="relative w-70 h-90 mt-0">
              <Image
                src="/chair.png"
                alt="좌석 확인 버튼"
                fill
                sizes="64px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </button>

          {/* 오른쪽 하단 (2/3 너비) */}
          <button
            className="col-span-2 h-[200px] bg-[#ffffff] rounded-lg relative border-none"
            onClick={() => router.push('/favorite')}
          >
            
            <div className="absolute bottom-0 -right-6 w-80 h-50">
              <Image
                src="/favorite.png"
                alt="관심카페 확인하기 버튼"
                fill
                sizes="64px"
                style={{ objectFit: 'contain' }}
              />
              
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
            <p className="mt-2 text-sm text-gray-400">찜콩으로 내 주변 숨은 맛집 카페를 즐겨찾기하고, 좌석을 언제든 편리하게 확인해보세요.</p>
            <li>Q2. 질문을 남기려면 어떻게 하나요?</li>
            <p className="mt-2 text-sm text-gray-400">내 손안의 카페 솔루션, 찜콩과 함께라면 늘 새로운 커피 여행이 시작됩니다.</p>
          </ul>
        </section>

        {/* 4. 팝업 (구름 240px 높이) */}
        {showPopup && (
          <div className="absolute bottom-0 left-0 right-0 h-[240px]">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                src="/cloud.png"
                alt="구름 배경"
                fill
                sizes="100vw"
                className="object-cover object-top"
                />
              </div>
              
              <div className="absolute inset-0 px-4 pt-4 flex flex-col">
                
                <div className="flex-1 flex flex-col justify-center">
                  
                  <div>
                    <button
                      className="absolute bottom-2 right-3 text-xs text-gray-300"
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