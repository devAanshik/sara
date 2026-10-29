export function SingingVideos() {
  return (
    <section className="max-w-360 mx-auto py-12 flex flex-col gap-12">
      <h2 className="text-8xl font-bebas">Hope you like this</h2>

      <div className="grid gap-6">
        <div className="bg-muted rounded-2xl overflow-hidden">
          <video controls preload="metadata" className="w-full h-auto">
            <source src="/media/birthday/2026/khuda-jaane.mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
