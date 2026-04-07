"use client";

import type { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
};

export function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        aria-label="Close modal backdrop"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
        {title ? <h2 className="mb-4 text-lg font-semibold">{title}</h2> : null}
        <div>{children}</div>
      </div>
    </div>
  );
}
