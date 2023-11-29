import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Number(((numPacked / numItems) * 100).toFixed(0));

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Yo got everything! Rready to go✈️"
          : `💼 You have ${numItems} items on your list, and you already packed 
        ${numPacked} (${percentage}%).`}
      </em>
    </footer>
  );
}
