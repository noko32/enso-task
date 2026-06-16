import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface BellButtonProps {
  count: number;
  onClick: () => void;
  className?: string;
}

export function BellButton({ count, onClick, className }: BellButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-10 h-10 flex items-center justify-center rounded-full",
        "bg-white border border-neutral-200 shadow-sm hover:bg-neutral-50 transition-colors",
        className
      )}
    >
      <Bell size={20} strokeWidth={1.75} className="text-neutral-600" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}
