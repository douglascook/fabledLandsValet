export function addSignPrefix(number) {
  return `${number > 0 ? '+' : ''}${number}`;
}
