"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HiddenGems() {
  const [hidden, setHidden] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");

  const handlePassword = () => {
    setError(null);
    if (password === "saranya2910") setHidden(false);
    else setError("Wrong Password");
  };

  return (
    <section className="max-w-360 mx-auto py-12 flex flex-col gap-12">
      <h2 className="text-8xl font-bebas">hidden gems I found</h2>

      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePassword();
          }}
          className={`${hidden ? "flex" : "hidden"} absolute inset-0 bg-background-light/20 backdrop-blur-2xl rounded-2xl flex-col gap-4 items-center justify-center`}
        >
          <div className="grid gap-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password to show"
              className="bg-background-light flex text-foreground-light py-1 px-4 text-sm rounded-2xl outline-0 shadow-2xl focus:shadow-foreground"
            />

            {error ? (
              <p className="ml-3 text-red-700 text-xs font-medium">{error}</p>
            ) : null}
          </div>

          <Button className="bg-background-light px-6 py-1 font-medium rounded-2xl">
            Show
          </Button>
        </form>

        {Array.from(["gem-1.jpg", "gem-2.jpg", "gem-3.jpg"]).map(
          (src, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src={`/media/birthday/2026/${src}`}
                className="group-hover:scale-105 transition ease-out"
              />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
