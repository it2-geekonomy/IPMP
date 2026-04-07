import { forwardRef } from "react";
import type {
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";

export const Table = forwardRef<HTMLTableElement, TableHTMLAttributes<HTMLTableElement>>(
  ({ className = "", ...props }, ref) => (
    <div className="w-full overflow-auto">
      <table
        ref={ref}
        className={`w-full caption-bottom text-sm ${className}`}
        {...props}
      />
    </div>
  ),
);

Table.displayName = "Table";

export function TableHeader(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={`border-b ${props.className ?? ""}`} {...props} />;
}

export function TableBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={props.className ?? ""} {...props} />;
}

export function TableRow(props: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={`border-b transition-colors hover:bg-gray-50 ${props.className ?? ""}`}
      {...props}
    />
  );
}

export function TableHead(props: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`h-10 px-3 text-left align-middle font-medium text-gray-600 ${props.className ?? ""}`}
      {...props}
    />
  );
}

export function TableCell(props: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={`p-3 align-middle ${props.className ?? ""}`} {...props} />;
}
