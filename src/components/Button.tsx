'use client';

import { Button } from "@/components/ui/button"

interface IButtonComponent {
    onClick: () => void
    children: React.ReactNode
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}
export function ButtonComponent({onClick, children, variant}: IButtonComponent) {
  return <Button variant={variant} onClick={onClick} className="items-center gap-x-2 flex">{children}</Button>
}