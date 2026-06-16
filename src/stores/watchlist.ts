import { persistentAtom } from '@nanostores/persistent';

/**
 * The user's watchlist — IDs of auctions they've favorited.
 * Persisted to localStorage and reactive across all AuctionCards on the page.
 */
export const watchlist = persistentAtom<string[]>('carshub:watchlist', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function toggleWatch(id: string): void {
  const current = watchlist.get();
  watchlist.set(
    current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
  );
}

export function isWatched(id: string): boolean {
  return watchlist.get().includes(id);
}
