"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { thingsToSay } from "../data/things-to-say";

function Card({ text, visible }: { text: string; visible: boolean }) {
  return (
    <div
      className={`
        ${visible ? "flex" : "hidden"} items-center justify-center
        mx-auto max-w-xl px-8 py-12
        rounded-2xl bg-rose-900
      `}
    >
      <p className="text-3xl max-w-md leading-normal">{text}</p>
    </div>
  );
}

export function ThingsToSay() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <section className="flex flex-col items-center justify-between gap-8 text-center py-12 h-screen">
      <h2 className="text-2xl">Just something I want you to know</h2>

      <div className="max-w-xl">
        {thingsToSay.map((item, index) => (
          <Card key={index} text={item.body} visible={index === currentIndex} />
        ))}
      </div>

      <div className="flex gap-20">
        <Button
          onClick={() =>
            setCurrentIndex((prev) => {
              if (prev === 0) return thingsToSay.length - 1;
              return prev - 1;
            })
          }
        >
          {"<"}
        </Button>

        <Button
          onClick={() =>
            setCurrentIndex((prev) => {
              if (prev === thingsToSay.length - 1) return 0;
              return prev + 1;
            })
          }
        >
          {">"}
        </Button>
      </div>
    </section>
  );
}
