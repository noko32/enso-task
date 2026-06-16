"use client";

import { useState } from "react";
import { X, ChevronDown, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "./Checkbox";
import { NotificationItem } from "./NotificationItem";
import { TABS, MOCK_NOTIFICATIONS } from "./types";
import type { TabId } from "./types";

interface NotificationsFlyoutProps {
  open: boolean;
  onClose: () => void;
}

export function NotificationsFlyout({ open, onClose }: NotificationsFlyoutProps) {
  const [activeTab, setActiveTab] = useState<TabId>("unread");
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());

  function toggleChecked(id: string, checked: boolean) {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  return (
    <div
      className={cn(
        "fixed top-0 right-0 h-full w-[420px] bg-white border-l border-neutral-200 shadow-lg flex flex-col z-50",
        "transition-transform duration-250 ease-out",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-[14px]">
        <h1 className="text-[21px] font-[800] text-neutral-900">Notifications</h1>
        <div className="flex items-center gap-3">
          <button className="text-[13px] font-bold text-[#4A5C63] hover:text-neutral-800">
            Mark all as read
          </button>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded border border-neutral-300 text-[#4A5C63] hover:text-neutral-800"
          >
            <X size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 border-b border-neutral-200">
        <div className="flex items-center gap-3 py-2.5">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative flex items-center gap-1.5 text-sm font-medium pb-2.5",
                isActive ? "text-neutral-900" : "text-neutral-500"
              )}>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4A5C63] rounded-full" />
              )}
              {tab.label}
              <span
                className={cn(
                  "text-xs font-medium rounded-full px-2 py-0.5 min-w-[22px] text-center",
                  isActive && tab.id === "unread"
                    ? "bg-orange-500 text-white"
                    : isActive
                      ? "bg-[#77858B] text-white"
                      : "bg-[#77858B]/15 text-[#77858B]"
                )}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-2.5">
        <label className="flex items-center gap-2 text-sm text-neutral-500 cursor-pointer">
          <Checkbox />
          Select all
        </label>
        <button className="flex items-center gap-1 text-sm text-neutral-500">
          Type: All
          <ChevronDown size={14} strokeWidth={2} />
        </button>
      </div>

      {/* Section label */}
      <div className="px-5 py-2 border-t border-neutral-100">
        <span className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
          Today
        </span>
      </div>

      {/* Notification list */}
      <div className="flex-1 overflow-y-auto">
        {MOCK_NOTIFICATIONS.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            checked={checkedIds.has(notification.id)}
            onCheckedChange={(checked) => toggleChecked(notification.id, checked)}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-neutral-200 text-xs text-neutral-400">
        <span>Cleared automatically after 30 days</span>
        <button className="flex items-center gap-1 text-neutral-500 hover:text-neutral-700">
          <Settings size={14} strokeWidth={2} />
          Settings
        </button>
      </div>
    </div>
  );
}
