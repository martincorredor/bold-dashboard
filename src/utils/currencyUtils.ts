export function formatToCurrency(amount: number): string {
  return '$ ' + amount.toLocaleString('es-CO');
}
