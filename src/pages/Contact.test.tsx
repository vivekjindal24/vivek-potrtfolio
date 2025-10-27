import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('@/lib/env', () => ({
  env: {},
  isEmailConfigured: () => false,
  isContactEndpointConfigured: () => false,
}));

import Contact from './Contact';

describe('Contact page', () => {
  it('shows configuration notice when no transport is set', async () => {
    render(<Contact />);
    expect(await screen.findByText(/contact form isn't configured yet/i)).toBeInTheDocument();
  });
});
