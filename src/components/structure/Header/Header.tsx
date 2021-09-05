import logoImg from 'assets/images/logo_branco.png';
import * as S from './Header.styles';

export type HeaderProps = {
  children?: React.ReactChild;
};

export const Header = ({ children }: HeaderProps) => (
  <S.Wrapper>
    <img src={logoImg} alt="Logo branco" srcSet={logoImg} />
    {children}
  </S.Wrapper>
);
