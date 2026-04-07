"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  items: TabItem[];
  defaultTabId?: string;
  className?: string;
};

export function Tabs({ items, defaultTabId, className = "" }: TabsProps) {
  const initialTab = defaultTabId ?? items[0]?.id ?? "";
  const [activeTab, setActiveTab] = useState(initialTab);

  const selected = items.find((item) => item.id === activeTab);

  return (
    <div className={className}>
      <div className="mb-4 flex gap-2 border-b pb-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveTab(item.id)}
            className={`rounded-md px-3 py-2 text-sm transition-colors ${
              activeTab === item.id
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>{selected?.content ?? null}</div>
    </div>
  );
}
