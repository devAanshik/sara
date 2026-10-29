"use client";

import { ReactNode } from "react";
import { BirthdayPage2026 } from "../years/2026";

type BirthdayPageMapItem = {
  id: number;
  year: number;
  href: string;
  page: ReactNode;
};

export const birthdayPageMap: BirthdayPageMapItem[] = [
  {
    id: 1,
    year: 2026,
    href: "/birthday/2026",
    page: BirthdayPage2026(),
  },
];
