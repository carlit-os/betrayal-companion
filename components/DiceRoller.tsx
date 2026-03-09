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
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-stone-500">
        Dice Roller
      </h3>

      <div className="mb-5 flex items-center gap-3">
        <span className="text-sm text-stone-500">Dice:</span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setNumDice(Math.max(1, numDice - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-200 text-stone-500 transition hover:border-stone-300 hover:bg-stone-50"
          >
            -
          </button>
          <span className="w-8 text-center text-lg font-bold text-stone-900">
            {numDice}
          </span>
          <button
            onClick={() => setNumDice(Math.min(8, numDice + 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-200 text-stone-500 transition hover:border-stone-300 hover:bg-stone-50"
          >
            +
          </button>
        </div>
        <button
          onClick={handleRoll}
          disabled={rolling}
          className="ml-3 rounded-lg bg-red-800 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-95 disabled:opacity-50"
        >
          {rolling ? "Rolling..." : "Roll"}
        </button>
      </div>

      <div ref={diceRef} className={`min-h-[56px] ${rolling ? "dice-rolling" : ""}`}>
        {results && (
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-stone-300 bg-stone-50 text-xl font-bold tabular-nums text-stone-900 shadow-inner"
                >
                  {r}
                </div>
              ))}
            </div>
            <div className="text-sm text-stone-500">
              = <span className="text-lg font-bold text-stone-900">{total}</span>
            </div>
          </div>
        )}
      </div>

      <p className="mt-3 text-[10px] uppercase tracking-wide text-stone-300">
        Betrayal dice: each die shows 0, 1, or 2
      </p>
    </div>
  );
}
