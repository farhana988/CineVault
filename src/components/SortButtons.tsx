"use client";

import { MovieSortOption, SortOrder } from "@/types/movie.type";
import { ChevronDown, ChevronUp } from "lucide-react";

type SortButtonsProps = {
  active: MovieSortOption;
  order: SortOrder;
  onChange: (sortBy: MovieSortOption) => void;
  onOrderChange: (order: SortOrder) => void;
};

const sortOptions: { label: string; value: MovieSortOption }[] = [
  { label: "Popularity", value: "popularity" },
  { label: "Release Date", value: "release_date" },
  { label: "Rating", value: "vote_average" },
  { label: "Title", value: "title" },
];

export const SortButtons = ({
  active,
  order,
  onChange,
  onOrderChange,
}: SortButtonsProps) => {
  const handleClick = (sortBy: MovieSortOption) => {
    if (active === sortBy) {
      onOrderChange(order === "asc" ? "desc" : "asc");
    } else {
      onChange(sortBy);
      onOrderChange("desc");
    }
  };

  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {sortOptions.map((option) => {
        const isActive = active === option.value;
        return (
          <button
            key={option.value}
            onClick={() => handleClick(option.value)}
            className={`flex items-center gap-1 px-3 py-1 rounded-md font-medium transition-colors
              ${isActive ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/70"}
            `}
          >
            {option.label}
            {isActive && (
              <>
                {order === "asc" ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </>
            )}
          </button>
        );
      })}
    </div>
  );
};
