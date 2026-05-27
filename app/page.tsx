import OpeningSection from "@/components/OpeningSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] lg:flex">
      {/* Left Panel: Warm cream background, empty on large screens */}
      <div className="hidden lg:block lg:flex-1 bg-[#f3eadc]" />

      {/* Right Panel: Fixed mobile invitation preview (430px) */}
      <div className="w-full lg:w-[430px] lg:h-screen lg:overflow-y-auto lg:shrink-0 lg:shadow-[0_0_40px_rgba(0,0,0,0.12)] bg-[#fcf9f2] relative z-20">
        <OpeningSection />
      </div>
    </main>
  );
}
