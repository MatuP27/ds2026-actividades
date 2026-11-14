import { describe, it, expect } from 'vitest';
import { formatearPrecio } from './formatearPrecio';

describe('formatearPrecio', () => {
  it('4500 → "$ 4.500"', () => {
    expect(formatearPrecio(4500)).toBe('$ 4.500');
  });
});