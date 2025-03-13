export default function AdminDashboard() {
  return (
    <div className="w-full">
      <h1 className="mb-24 font-header1">Dashboard</h1>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        <div className="rounded-8 bg-white p-16 shadow-place-card">
          <h2 className="mb-8 font-title3_bold">총 회원 수</h2>
          <p className="font-title1">256</p>
        </div>
        <div className="rounded-8 bg-white p-16 shadow-place-card">
          <h2 className="mb-8 font-title3_bold">오늘 신규 가입</h2>
          <p className="font-title1">12</p>
        </div>
        <div className="rounded-8 bg-white p-16 shadow-place-card">
          <h2 className="mb-8 font-title3_bold">활성 회원</h2>
          <p className="font-title1">189</p>
        </div>
      </div>
    </div>
  );
}
