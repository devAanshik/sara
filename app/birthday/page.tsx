import Link from "next/link";

import { birthdayPageMap } from "@/features/birthdays";

export default function Page() {
  return (
    <section>
      <h1>Choose a birthday year</h1>

      <ul>
        {birthdayPageMap.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.year}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
