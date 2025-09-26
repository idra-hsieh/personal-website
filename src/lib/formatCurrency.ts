export function formatCurrency(n: number, currency = "TWD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    n,
  );
}

export default formatCurrency;
