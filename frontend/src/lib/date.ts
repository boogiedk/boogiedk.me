export function yearsSince(date: Date, now: Date = new Date()): number {
  const years = now.getFullYear() - date.getFullYear();
  const anniversaryPassed =
    now.getMonth() > date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate());

  return anniversaryPassed ? years : years - 1;
}
