// app/cafe/[id]/page.tsx (동적 라우트 상세 페이지 with seat overlay)
"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function CafeDetailPage() {
  const { id } = useParams();
  const [showMarker, setShowMarker] = useState(false);

  const handleSeatClick = () => {
    setShowMarker(true);
  };

  return (
    <section className="p-4">
      
      <div
        className="w-full h-[700px] relative overflow-hidden rounded-lg shadow cursor-pointer"
        onClick={handleSeatClick}
      >
        <Image
          src="/cafeseats.png"
          alt="카페 좌석 배치도"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {showMarker && (
          <>
            {/* 체크 표시 */}
            <Image
              src="/check.png"
              alt="체크 표시"
              width={32}
              height={32}
              className="absolute top-[38%] left-[36%]"
            />
            {/* 코멘트 풍선 */}
            <Image
              src="/seatcomment.png"
              alt="코멘트"
              width={100}
              height={50}
              className="absolute top-[38%] left-[45%]"
            />
          </>
        )}
      </div>
    </section>
  );
}
