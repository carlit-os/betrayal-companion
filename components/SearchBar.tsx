"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useRef, useCallback, Suspense } from "react";

interface SearchBarProps {
  placeholder?: string;
  basePath: string;
}

function SearchInput({ placeholder, basePath }: SearchBarProps) {
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
    <input
      type="text"
      value={query}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-stone-800 bg-stone-900/50 px-3.5 py-2 text-sm text-stone-200 placeholder-stone-600 transition focus:border-stone-600 focus:outline-none"
    />
  );
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <Suspense
      fallback={
        <input
          type="text"
          disabled
          placeholder={props.placeholder}
          className="w-full rounded-lg border border-stone-800 bg-stone-900/50 px-3.5 py-2 text-sm text-stone-200 placeholder-stone-600"
        />
      }
    >
      <SearchInput {...props} />
    </Suspense>
  );
}
