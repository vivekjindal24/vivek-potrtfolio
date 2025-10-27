import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from './Experience';

// Some components use framer-motion viewport; JSDOM doesn't scroll, but static render is fine.

describe('Experience page content', () => {
  it('shows M.Tech CGPA and Oracle certification link', () => {
    render(<Experience />);
    expect(screen.getByText(/CGPA:\s*8\.71\/?10/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /View Oracle Certification \(Verified\)/i })
    ).toBeInTheDocument();
  });
});
