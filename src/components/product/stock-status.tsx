import type { StockState } from "@/lib/catalog";

const dotColor: Record<StockState["status"], string> = {
  "in-stock": "bg-success",
  "low-stock": "bg-error",
  "sold-out": "bg-subtle",
};

export function StockStatus({ stock }: { stock: StockState }) {
  return (
    <p className="type-small flex items-center gap-2">
      <span aria-hidden="true" className={`size-1.5 shrink-0 ${dotColor[stock.status]}`} />
      <span className={stock.status === "sold-out" ? "text-muted" : undefined}>{stock.label}</span>
    </p>
  );
}
