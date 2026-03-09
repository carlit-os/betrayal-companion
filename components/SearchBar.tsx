"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useRef, useCallback } from "react";

interface SearchBarProps {
  placeholder?: string;
  basePath: string;
}

export default function SearchBar({
  placeholder = "Search...",
  basePath,
}: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback(
    (value: string) => {
      setQuery(value);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams();
        if (value) params.set("q", value);
        const qs = params.toString();
        router.push(qs ? `${basePath}?${qs}` : basePath);
      }, 300);
    },
    [basePath, router]
  );

  return (
    <div className="relative">
      <svg
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-stone-200 bg-white py-2.5 pl-10 pr-4 text-sm text-stone-900 placeholder-stone-400 shadow-sm transition focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400"
      />
    </div>
  );
}
