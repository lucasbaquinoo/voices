import { screen } from '@testing-library/react';
import { renderWithTheme } from 'lib/contexts/tests';
import { Header } from './Header';

describe('<Header />', () => {
  it('should render the Header', () => {
    renderWithTheme(<Header />);

    expect(screen.findByAltText('Logo branco'));
  });
});
