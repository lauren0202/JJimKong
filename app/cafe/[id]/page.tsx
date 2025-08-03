//카페 상세(동적 라우트)

import { useParams } from 'next/navigation';

export default function CafeDetail() {
  const params = useParams();
  const { id } = params;
  return <div>카페 상세 페이지 - id: {id}</div>;
}