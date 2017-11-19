export function formatEffects(effects) {
  if (effects && effects.length > 0) {
    return (
      effects.map(e => `${e.skill} ${addSignPrefix(e.value)}`).join(', ')
    );
  }
  return ' ';
}

export function addSignPrefix(number) {
  return `${number > 0 ? '+' : ''}${number}`;
}
