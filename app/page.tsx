"use client";

import { useState } from "react";
import { BellButton } from "@/components/notifications/BellButton";
import { NotificationsFlyout } from "@/components/notifications/NotificationsFlyout";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-100 font-[family-name:var(--font-geist-sans)]">
      <div className="fixed top-4 right-4 z-50">
        <BellButton count={7} onClick={() => setOpen(true)} />
      </div>

      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}

      <NotificationsFlyout open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
