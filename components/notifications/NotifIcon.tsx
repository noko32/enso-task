import {
  AtSign,
  MessageCircle,
  UserPlus,
  User,
  Calendar,
  SquareCheckBig,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { NotifIconType, IconVariant } from "./types";

const ICON_MAP: Record<NotifIconType, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  mention: AtSign,
  comment: MessageCircle,
  newLead: UserPlus,
  assignment: User,
  task: SquareCheckBig,
  calendar: Calendar,
};

const VARIANT_STYLES: Record<IconVariant, string> = {
  orange: "bg-orange-100 text-orange-600",
  gray: "bg-neutral-200 text-neutral-500",
  green: "bg-green-100 text-green-600",
};

interface NotifIconProps {
  type: NotifIconType;
  variant: IconVariant;
  className?: string;
}

export function NotifIcon({ type, variant, className }: NotifIconProps) {
  const Icon = ICON_MAP[type];
  return (
    <div
      className={cn(
        "w-9 h-9 shrink-0 rounded-lg flex items-center justify-center",
        VARIANT_STYLES[variant],
        className
      )}
    >
      <Icon size={18} strokeWidth={2} />
    </div>
  );
}
