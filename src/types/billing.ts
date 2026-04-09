export interface BillingSummary {
  totalDue: number;
  totalPaid: number;
}

export interface Billing {
  summary: BillingSummary;
}

