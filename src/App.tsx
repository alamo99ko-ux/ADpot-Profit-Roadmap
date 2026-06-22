/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#4A4A4A] font-sans overflow-hidden">
      {/* Header Section */}
      <header className="bg-[#5E6D5E] p-8 text-white flex justify-between items-end shadow-sm">
        <div className="space-y-1">
          <p className="text-sm opacity-80 uppercase tracking-widest">Analysis & Strategy</p>
          <h1 className="text-4xl font-serif font-light italic">AdPot Profit Roadmap</h1>
        </div>
        <div className="flex gap-8 text-right">
          <div>
            <p className="text-xs opacity-70 uppercase">Current Level</p>
            <p className="text-xl font-medium">Beginner Step 2</p>
          </div>
          <div>
            <p className="text-xs opacity-70 uppercase">Monthly Potential</p>
            <p className="text-xl font-medium">₩850,000+</p>
          </div>
        </div>
      </header>

      {/* Main Content: Step-by-Step Roadmap */}
      <main className="p-10 grid grid-cols-4 gap-6">
        {/* Step 1 */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#E8E2D9] flex flex-col">
          <div className="w-12 h-12 bg-[#D4E2D4] rounded-full flex items-center justify-center mb-6 text-[#5E6D5E] font-bold">01</div>
          <h3 className="text-xl font-serif mb-3 text-[#5E6D5E]">간편 클릭형 수익</h3>
          <p className="text-sm leading-relaxed mb-6 opacity-80">앱 내 클릭 미션과 출석체크 등 가장 진입장벽이 낮은 활동입니다. 자투리 시간을 활용해 꾸준한 기본 수익을 쌓으세요.</p>
          <div className="mt-auto">
            <div className="text-[10px] uppercase tracking-tighter text-[#A89F91] mb-1">난이도: 매우 쉬움</div>
            <div className="h-1 w-full bg-[#F0EDE8] rounded-full overflow-hidden">
              <div className="h-full bg-[#5E6D5E] w-[25%]"></div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#E8E2D9] flex flex-col">
          <div className="w-12 h-12 bg-[#E9DCC9] rounded-full flex items-center justify-center mb-6 text-[#8B7E66] font-bold">02</div>
          <h3 className="text-xl font-serif mb-3 text-[#8B7E66]">SNS 링크 배포</h3>
          <p className="text-sm leading-relaxed mb-6 opacity-80">카톡, 밴드, 카페 등 평소 활동하는 커뮤니티에 캠페인 링크를 공유합니다. 타겟팅된 정보 전달로 클릭률을 높이는 것이 핵심입니다.</p>
          <div className="mt-auto">
            <div className="text-[10px] uppercase tracking-tighter text-[#A89F91] mb-1">난이도: 쉬움</div>
            <div className="h-1 w-full bg-[#F0EDE8] rounded-full overflow-hidden">
              <div className="h-full bg-[#8B7E66] w-[45%]"></div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#E8E2D9] flex flex-col border-2 border-[#D4E2D4]">
          <div className="w-12 h-12 bg-[#5E6D5E] rounded-full flex items-center justify-center mb-6 text-white font-bold">03</div>
          <h3 className="text-xl font-serif mb-3 text-[#5E6D5E]">콘텐츠 큐레이션</h3>
          <p className="text-sm leading-relaxed mb-6 opacity-80">단순 공유를 넘어 블로그나 포스트에 상세 리뷰를 작성합니다. 신뢰도 높은 정보를 제공하여 실제 구매나 가입 전환을 유도합니다.</p>
          <div className="mt-auto">
            <div className="text-[10px] uppercase tracking-tighter text-[#A89F91] mb-1">난이도: 보통 (권장)</div>
            <div className="h-1 w-full bg-[#F0EDE8] rounded-full overflow-hidden">
              <div className="h-full bg-[#5E6D5E] w-[70%]"></div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#E8E2D9] flex flex-col">
          <div className="w-12 h-12 bg-[#3D453D] rounded-full flex items-center justify-center mb-6 text-white font-bold">04</div>
          <h3 className="text-xl font-serif mb-3 text-[#3D453D]">퍼포먼스 분석</h3>
          <p className="text-sm leading-relaxed mb-6 opacity-80">어떤 캠페인이 높은 수익을 주는지 데이터를 분석하고, 유료 광고(SA/DA)를 병행하여 대량의 유입과 고수익을 창출하는 단계입니다.</p>
          <div className="mt-auto">
            <div className="text-[10px] uppercase tracking-tighter text-[#A89F91] mb-1">난이도: 높음 (전문가)</div>
            <div className="h-1 w-full bg-[#F0EDE8] rounded-full overflow-hidden">
              <div className="h-full bg-[#3D453D] w-[95%]"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Insight Section */}
      <footer className="bg-[#F0EDE8] mx-10 mb-10 p-6 rounded-[24px] flex items-center gap-8">
        <div className="bg-[#5E6D5E] text-white px-4 py-2 rounded-full text-xs font-semibold">TOP TIP</div>
        <p className="text-sm italic opacity-90">
          "현재 사용자님의 활동 데이터를 분석한 결과, <span className="font-bold">Step 2(SNS 배포)</span>에서의 전환율이 평균보다 15% 높습니다. 지금 바로 카페/커뮤니티 타겟팅을 강화해보세요!"
        </p>
        <button className="ml-auto bg-white border border-[#E8E2D9] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#5E6D5E] hover:text-white transition-colors">
          상세 분석 리포트 보기
        </button>
      </footer>
    </div>
  );
}
