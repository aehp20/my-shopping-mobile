export function hasListItems<T>(list: T[] | undefined): boolean {
  return !!list && !!list.length
}
