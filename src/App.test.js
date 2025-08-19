import { render, screen } from '@testing-library/react';

import Presentation from '../src/components/Presentation';

test('renders Presentation component', () => {
  render(<Presentation />);

  // Cherche un h2
  const aboutHeading = screen.getByText(/À propos de moi/i);
  expect(aboutHeading).toBeInTheDocument();

  // Cherche un mot dans le paragraphe
  const paragraph = screen.getByText(/passionné de jeux vidéos/i);
  expect(paragraph).toBeInTheDocument();
});
