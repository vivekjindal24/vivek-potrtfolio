import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('utils.cn', () => {
  it('merges conditional classes', () => {
    expect(cn('p-2', false && 'm-2', 'text-sm')).toBe('p-2 text-sm');
  });

  it('de-duplicates conflicting tailwind classes (keeps last)', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
    expect(cn('text-left', 'text-center')).toBe('text-center');
  });
});
