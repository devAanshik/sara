export function HeroSection() {
  return (
    <section className="relative max-w-360 mx-auto overflow-hidden min-h-svh flex flex-col items-center md:justify-center px-4 lg:px-6">
      <div className="text-[clamp(7rem,25vw,19.5rem)] py-[0.4em] max-md:py-[1em] gap-[0.5em] md:h-full font-bebas leading-none flex flex-col md:gap-6 items-start justify-center w-full">
        <div className="relative z-10 opacity-80 flex max-md:flex-col md:items-center justify-between w-full">
          <div data-scroll data-scroll-speed="0.3" className="flex-1">
            Happy
          </div>
        </div>

        <div className="self-end">
          <div className="absolute inset-0">
            <img
              src="/media/birthday/2026/hero-image-bg.png"
              alt=""
              className="absolute inset-0 left-auto md:right-[12vw] opacity-40 h-full object-cover"
            />
          </div>

          <div
            data-scroll
            data-scroll-speed="0.2"
            className="outline-text absolute z-20 max-md:opacity-0"
          >
            Birthday
          </div>

          <div
            data-scroll
            data-scroll-speed="-0.6"
            className="absolute z-15 inset-0 flex flex-col items-center"
          >
            <img
              src="/media/birthday/2026/hero-image.png"
              alt=""
              className="relative right-8 md:right-20 h-full object-cover drop-shadow-2xl drop-shadow-primary"
            />
          </div>

          <div
            data-scroll
            data-scroll-speed="0.2"
            className="relative z-20 md:z-12 max-md:opacity-80"
          >
            Birthday
          </div>
        </div>
      </div>
    </section>
  );
}
