"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

// React Client Component
function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className="button p-3 my-2 bg-blue-400"
      onClick={() => setLiked(!liked)}
    >
      {liked ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
}

export default LikeButton;
