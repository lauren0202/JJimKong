'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CafePage() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center items-center -mt-2 -mb-3">
      {/* 부모 div에 원하는 가로·세로 크기를 지정 */}
      <div
        className="relative w-[100vw] h-[80vh] rounded-lg overflow-hidden"
        onClick={() => router.push('/cafe/1')}
      >
        <Image
          src="/cafeseatlist.png"
          alt="cafe list"
          fill                                        // fill 모드 사용
          style={{
            objectFit: 'cover',                       // 비율 유지하면서 꽉 채우기
            objectPosition: 'top center',             // 상단 중앙 기준으로 크롭
          }}
          priority
        />
      </div>
    </main>
  );
}