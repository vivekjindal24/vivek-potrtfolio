import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  formatDate,
  truncate,
  debounce,
  isInViewport,
  scrollToElement,
  getReadingTime,
} from './helpers';

describe('helpers', () => {
  it('formatDate formats ISO string', () => {
    expect(formatDate('2025-10-27')).toMatch(/October\s+27,\s+2025/);
  });

  it('truncate truncates long text', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
    expect(truncate('short', 10)).toBe('short');
  });

  it('debounce delays invocation', async () => {
    vi.useFakeTimers();
    const fn = vi.fn();
    const debounced = debounce(fn, 200);
    debounced('a');
    debounced('b');
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(199);
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
    // last call args should be preserved
    expect(fn).toHaveBeenCalledWith('b');
    vi.useRealTimers();
  });

  it('isInViewport returns true for fully visible rect', () => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({
      top: 10,
      left: 10,
      bottom: 100,
      right: 100,
      width: 90,
      height: 90,
      x: 10,
      y: 10,
      toJSON: () => {},
    } as DOMRect);
    // jsdom default viewport ~ 1024x768
    expect(isInViewport(el)).toBe(true);
  });

  describe('scrollToElement', () => {
    const original = window.scrollTo;
    beforeEach(() => {
      Object.defineProperty(window, 'scrollTo', { value: vi.fn(), configurable: true });
    });
    afterEach(() => {
      Object.defineProperty(window, 'scrollTo', { value: original, configurable: true });
    });

    it('scrolls to element by id with offset', () => {
      const el = document.createElement('div');
      el.id = 'target';
      document.body.appendChild(el);
      vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({
        top: 200,
        left: 0,
        bottom: 240,
        right: 40,
        width: 40,
        height: 40,
        x: 0,
        y: 200,
        toJSON: () => {},
      } as DOMRect);
      Object.defineProperty(window, 'pageYOffset', { value: 100, configurable: true });
      scrollToElement('target', 20);
      expect(window.scrollTo).toHaveBeenCalledWith({ top: 280, behavior: 'smooth' });
    });
  });

  it('getReadingTime estimates minutes', () => {
    const text = new Array(401).fill('word').join(' '); // ~401 words
    expect(getReadingTime(text)).toBe(3); // ceil(401/200) => 3
  });
});
