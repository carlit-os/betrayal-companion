// Betrayal dice have 3 faces: 0, 1, 2 (two faces each on a d6)
export function rollDie(): number {
  const faces = [0, 0, 1, 1, 2, 2];
  return faces[Math.floor(Math.random() * 6)];
}

export function rollDice(count: number): { results: number[]; total: number } {
  const results = Array.from({ length: count }, () => rollDie());
  const total = results.reduce((sum, r) => sum + r, 0);
  return { results, total };
}
