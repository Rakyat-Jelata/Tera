'use client';

import { useState } from "react";

export default function FavoriteButton() {
  const [favorite, setFavorite] = useState(false);

  return (
    <button
      onClick={() => setFavorite(!favorite)}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
    >
      <span className="text-xl">
        {favorite ? "❤️" : "🤍"}
      </span>
    </button>
  );
}
