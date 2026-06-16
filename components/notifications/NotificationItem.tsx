import { AlertTriangle, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "./Checkbox";
import { NotifIcon } from "./NotifIcon";
import type { Notification } from "./types";

interface NotificationItemProps {
  notification: Notification;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function NotificationItem({
  notification,
  checked,
  onCheckedChange,
}: NotificationItemProps) {
  const { iconType, iconVariant, title, description, timestamp, unread, badges } =
    notification;

  return (
    <div
      className={cn(
        "group relative flex items-start gap-3 px-5 py-3 border-b border-neutral-100 transition-colors",
        checked ? "bg-neutral-100" : unread ? "bg-orange-50" : "hover:bg-orange-50"
      )}
    >
      <Checkbox checked={checked} onChange={onCheckedChange} />
      <NotifIcon type={iconType} variant={iconVariant} />
      <div className="flex-1 min-w-0 pr-8">
        <div className="flex items-start justify-between gap-2">
          <p
            className={
              unread
                ? "text-[13px] font-semibold text-neutral-900 leading-snug"
                : "text-[13px] font-medium text-neutral-700 leading-snug"
            }
          >
            {title}
          </p>
          <span className="text-xs text-neutral-400 shrink-0">{timestamp}</span>
        </div>
        <p className="text-xs text-neutral-500 mt-0.5 leading-snug">{description}</p>
        {badges.length > 0 && (
          <div className="flex items-center gap-2 mt-1.5">
            {badges.includes("actionNeeded") && (
              <span className="inline-flex items-center gap-1 text-[9.5px] font-medium text-orange-600">
                <AlertTriangle size={11} strokeWidth={2} />
                ACTION NEEDED
              </span>
            )}
            {badges.includes("slack") && (
              <span className="inline-flex items-center gap-1 text-[9.5px] font-medium bg-purple-100 text-purple-700 rounded px-1.5 py-0.5">
                # Slack
              </span>
            )}
          </div>
        )}
      </div>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded hover:bg-neutral-200 text-neutral-400 hover:text-neutral-600"
        aria-label="Move to trash"
      >
        <Trash2 size={15} strokeWidth={2} />
      </button>
    </div>
  );
}
