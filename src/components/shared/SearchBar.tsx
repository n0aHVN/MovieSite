import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import useSearchMovies from "@/hooks/useSearchMovies";
import type useSearchTVSeries from "@/hooks/useSearchTVSeries";

interface SearchBarProps {
  placeholder?: string;
  onDataChange: (data: any[]) => void;
  fallbackData: any[];
  useSearch: (query: string)=> ReturnType<typeof useSearchMovies| typeof useSearchTVSeries>;
}

export default function SearchBar({
  placeholder = "Enter a keyword",
  onDataChange,
  fallbackData,
  useSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(""); //This is used to trigger the search after a delay

  /**
    "debouncedSetQuery" is a memoized version of the "debounce()" function,
    preventing it from being recreated on every render thanks to useCallback.
  */
  const debouncedSetQuery = useCallback(
    debounce((val: string) => {
      setDebouncedQuery(val);
    }, 300),
    []
  );

// Update the debounced query whenever the query changes
  useEffect(() => {
    debouncedSetQuery(query);
  }, [query, debouncedSetQuery]);

  // Use the debounced query to fetch data
  const { data, isSuccess } = useSearch(debouncedQuery);

  /*
    If the query is empty, we reset the display data to the fallback data.
    If the query is not empty and the data is successfully fetched,
    we update the display data with the results.
  */
  useEffect(() => {
    if (!query.trim()) {
      onDataChange(fallbackData);
    } else if (isSuccess && data?.results) {
      onDataChange(data.results);
    }
  }, [query, data, isSuccess, fallbackData, onDataChange]);

  return (
    <div>
      <input
        type="text"
        className="outline-none rounded-full px-6 py-2 bg-black placeholder-gray-500 text-white flex-1 md:flex-auto md:w-96"
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
