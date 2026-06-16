import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({ checked, onChange, className }: CheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "w-[18px] h-[18px] shrink-0 rounded transition-colors",
        checked
          ? "bg-neutral-400 flex items-center justify-center"
          : "border-2 border-neutral-300",
        className
      )}
    >
      {checked && <Check size={13} strokeWidth={2.5} className="text-white" />}
    </button>
  );
}
