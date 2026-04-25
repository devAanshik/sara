import Link from "next/link";

const links = [
  {
    name: "Book a doctor's appointment 😉",
    href: "/book-appointment",
  },
  {
    name: `Find an "I Love You" card 💌`,
    href: "/i-love-you",
  },
];

function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="text-9xl">🫀</div>
      <div className="text-center text-foreground/70 text-pretty max-w-lg">
        <h1 className="text-4xl mb-4 text-foreground">
          Welcome to this website, my love!
        </h1>

        <p>I am working on this page darling. It's not ready yet.</p>
        <p>However, in the meanwhile, you can explore the following pages.</p>
      </div>

      <ul className="w-full flex flex-wrap items-start justify-center gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`
              flex-1 max-w-50 px-4 py-6
              border-t-2 border-foreground/12 shadow-xs shadow-black/20 bg-linear-to-b from-foreground/5 to-foreground/1 rounded-xl
              text-center text-pretty
              hover:scale-98 cursor-pointer
            `}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default Home;
