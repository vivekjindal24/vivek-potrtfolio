import { describe, it, expect } from 'vitest';
import { reducer } from './use-toast';

describe('use-toast reducer', () => {
  it('ADD_TOAST adds toast with limit 1 (keeps most recent)', () => {
    const s0 = { toasts: [] } as unknown as Parameters<typeof reducer>[0];
    type A = Parameters<typeof reducer>[1];
    const s1 = reducer(s0, {
      type: 'ADD_TOAST',
      toast: { id: '1', title: 'A', open: true },
    } as unknown as A);
    const s2 = reducer(s1, {
      type: 'ADD_TOAST',
      toast: { id: '2', title: 'B', open: true },
    } as unknown as A);
    const ids1 = (s1.toasts as Array<{ id: string }>).map((t) => t.id);
    const ids2 = (s2.toasts as Array<{ id: string }>).map((t) => t.id);
    expect(ids1).toEqual(['1']);
    expect(ids2).toEqual(['2']);
  });

  it('UPDATE_TOAST merges properties by id', () => {
    const s0 = {
      toasts: [{ id: '1', title: 'A', description: 'd1', open: true }],
    } as unknown as Parameters<typeof reducer>[0];
    type A = Parameters<typeof reducer>[1];
    const s1 = reducer(s0, {
      type: 'UPDATE_TOAST',
      toast: { id: '1', title: 'A2' },
    } as unknown as A);
    const t0 = (s1.toasts as Array<{ id: string; title?: string; description?: string }>)[0];
    expect(t0).toMatchObject({ id: '1', title: 'A2', description: 'd1' });
  });

  it('DISMISS_TOAST closes a specific toast', () => {
    const s0 = {
      toasts: [
        { id: '1', open: true },
        { id: '2', open: true },
      ],
    } as unknown as Parameters<typeof reducer>[0];
    type A = Parameters<typeof reducer>[1];
    const s1 = reducer(s0, { type: 'DISMISS_TOAST', toastId: '1' } as unknown as A);
    const t1 = (s1.toasts as Array<{ id: string; open?: boolean }>).find((t) => t.id === '1');
    const t2 = (s1.toasts as Array<{ id: string; open?: boolean }>).find((t) => t.id === '2');
    expect(t1?.open).toBe(false);
    expect(t2?.open).toBe(true);
  });

  it('DISMISS_TOAST without id closes all', () => {
    const s0 = {
      toasts: [
        { id: '1', open: true },
        { id: '2', open: true },
      ],
    } as unknown as Parameters<typeof reducer>[0];
    type A = Parameters<typeof reducer>[1];
    const s1 = reducer(s0, { type: 'DISMISS_TOAST' } as unknown as A);
    const allClosed = (s1.toasts as Array<{ open?: boolean }>).every((t) => t.open === false);
    expect(allClosed).toBe(true);
  });

  it('REMOVE_TOAST removes by id or clears all', () => {
    const s0 = {
      toasts: [
        { id: '1', open: false },
        { id: '2', open: false },
      ],
    } as unknown as Parameters<typeof reducer>[0];
    type A = Parameters<typeof reducer>[1];
    const s1 = reducer(s0, { type: 'REMOVE_TOAST', toastId: '1' } as unknown as A);
    const ids1 = (s1.toasts as Array<{ id: string }>).map((t) => t.id);
    expect(ids1).toEqual(['2']);
    const s2 = reducer(s1, { type: 'REMOVE_TOAST' } as unknown as A);
    expect((s2.toasts as unknown[]).length).toBe(0);
  });
});
