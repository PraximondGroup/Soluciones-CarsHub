/** Currency formatting — vehicles in Peru are commonly priced in US dollars. */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('es-PE').format(value);
}

/** "Caliente" threshold — lots with lots of action get a hot badge. */
export const HOT_BID_THRESHOLD = 28;

export function isHot(bids: number): boolean {
  return bids >= HOT_BID_THRESHOLD;
}
