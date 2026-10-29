"use client";

import { birthdayPageMap } from "@/features/birthdays";

import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const yearArray = pathname.split("/");
  const year = yearArray[yearArray.length - 1];

  const item = birthdayPageMap.find((item) => item.year === Number(year));

  if (!item) return <>This is not your birthday</>;

  return item.page;
}
