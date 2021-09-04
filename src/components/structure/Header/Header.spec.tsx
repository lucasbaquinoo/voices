import { renderWithTheme } from 'lib/contexts/tests';
import { Header } from './Header';

describe('<Header />', () => {
  it('should render the Header', () => {
    const { container } = renderWithTheme(<Header />);
  });
});
