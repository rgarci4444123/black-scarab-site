export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#111827]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[28px] border border-[#e7e5e4] bg-white">
          <header className="flex items-center justify-between px-8 py-6 md:px-12">
            <div className="text-lg font-bold tracking-tight">BLACK SCARAB</div>

            <nav className="hidden gap-8 text-sm text-[#6b7280] md:flex">
              <a href="#">Home</a>
              <a href="#">Industries</a>
              <a href="#">Solutions</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>

            <a
              href="#"
              className="rounded-full border border-[#e5e7eb] px-5 py-3 text-sm font-medium text-[#111827]"
            >
              Get Started
            </a>
          </header>

          <div className="border-t border-[#ececec]" />

          <section className="px-8 py-16 text-center md:px-12 md:py-20">
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              AI Infrastructure for Industry
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[#6b7280]">
              Advanced Edge AI Systems Tailored for Your Business Needs.
            </p>
          </section>

          <section className="border-y border-[#ececec] px-8 py-4 md:px-12">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <div className="rounded-full border border-[#dcdcdc] px-4 py-2 font-medium text-[#111827]">
                Agriculture
              </div>
              <div className="px-3 py-2 text-[#6b7280]">Manufacturing</div>
              <div className="px-3 py-2 text-[#6b7280]">Smart Cities</div>
              <div className="px-3 py-2 text-[#6b7280]">Energy</div>
              <div className="px-3 py-2 text-[#6b7280]">Healthcare</div>
            </div>
          </section>

          <section className="px-8 py-14 md:px-12">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight">
                Agriculture Technology
              </h2>
              <p className="mt-3 text-lg text-[#6b7280]">
                Optimize Your Farming Operations.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[22px] border border-[#d9e5d2]">
              <img
                src="/agriculture-hero.jpg"
                alt="Agriculture technology system"
                className="h-[280px] w-full object-cover"
              />
            </div>


            <div className="mt-10 text-center">
              <h3 className="text-2xl font-semibold">Precision Farming System</h3>
              <p className="mt-3 text-[#6b7280]">
                Advanced drone, AI computer, and smart sensors for crop monitoring.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
                <p className="text-sm font-bold">X-AGRO DRONE</p>
                <p className="mt-3 text-sm text-[#6b7280]">
                  Aerial crop monitoring and mapping
                </p>
                <p className="mt-5 text-2xl font-bold">$2,500</p>
              </div>

              <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
                <p className="text-sm font-bold">JETSON MODULE</p>
                <p className="mt-3 text-sm text-[#6b7280]">
                  Edge AI processing power
                </p>
                <p className="mt-5 text-2xl font-bold">$799</p>
              </div>

              <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
                <p className="text-sm font-bold">SOIL SENSORS</p>
                <p className="mt-3 text-sm text-[#6b7280]">
                  Climate and soil data sensors
                </p>
                <p className="mt-5 text-2xl font-bold">$299</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="#"
                className="inline-block rounded-full bg-[#1f2937] px-7 py-4 text-sm font-medium text-white"
              >
                Design My System
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
