export function pick(ary) {
  if (ary.length === 0) return null;
  return ary[Math.floor(Math.random() * ary.length)];
}