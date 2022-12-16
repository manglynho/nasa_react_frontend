import { render, screen } from '@testing-library/react';

import { Navigation } from "./Navigation";

test('friend row section renders', () => {    
    render(<Navigation />);
    const title = screen.getByText('Images from NASA');
    expect(title).toBeInTheDocument();
});