import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About page content', () => {
  it('shows header, CGPA, and certification link', () => {
    render(<About />);

    // Header
    expect(screen.getByRole('heading', { name: /about\s*me/i })).toBeInTheDocument();

    // Education snippet (multiple occurrences expected across bio and sidebar)
    expect(screen.getAllByText(/Medicaps University/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/CGPA\s*:\s*8\.71\/?10/i)).toBeInTheDocument();

    // Certification link
    expect(
      screen.getByRole('link', {
        name: /Oracle APEX Cloud Developer Certified Professional \(Verified\)/i,
      })
    ).toBeInTheDocument();
  });
});
