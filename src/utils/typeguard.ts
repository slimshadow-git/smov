export function isNotNull<T>(obj: T | null): obj is T {
  return obj != null;
}
