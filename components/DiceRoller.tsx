"use client";

import { useState, useRef } from "react";
import { rollDice } from "../lib/dice";

export default function DiceRoller() {
  const [numDice, setNumDice] = useState(1);
  const [results, setResults] = useState<number[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);
  const diceRef = useRef<HTMLDivElement>(null);

  function handleRoll() {
    setRolling(true);
    setTimeout(() => {
      const roll = rollDice(numDice);
      setResults(roll.results);
      setTotal(roll.total);
      setRolling(false);
    }, 350);
  }

  return (
    <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-5">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-500">
        Dice Roller
      </h3>

      <div className="mb-4 flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setNumDice(Math.max(1, numDice - 1))}
            className="flex h-7 w-7 items-center justify-center rounded border border-stone-700 text-sm text-stone-400 transition hover:border-stone-600 hover:text-stone-300"
          >
            -
          </button>
          <span className="w-7 text-center text-sm font-semibold tabular-nums text-stone-200">
            {numDice}
          </span>
          <button
            onClick={() => setNumDice(Math.min(8, numDice + 1))}
            className="flex h-7 w-7 items-center justify-center rounded border border-stone-700 text-sm text-stone-400 transition hover:border-stone-600 hover:text-stone-300"
          >
            +
          </button>
        </div>
        <button
          onClick={handleRoll}
          disabled={rolling}
          className="rounded-md bg-stone-200 px-4 py-1.5 text-sm font-medium text-stone-900 transition hover:bg-stone-100 active:scale-[0.97] disabled:opacity-50"
        >
          {rolling ? "..." : "Roll"}
        </button>
      </div>

      <div
        ref={diceRef}
        className={`min-h-[44px] ${rolling ? "dice-rolling" : ""}`}
      >
        {results && (
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded border border-stone-700 bg-stone-800 text-lg font-bold tabular-nums text-stone-200"
                >
                  {r}
                </div>
              ))}
            </div>
            <span className="text-sm text-stone-500">
              ={" "}
              <span className="font-semibold text-stone-300">{total}</span>
            </span>
          </div>
        )}
      </div>

      <p className="mt-3 text-[10px] tracking-wide text-stone-700">
        Each die shows 0, 1, or 2
      </p>
    </div>
  );
}
