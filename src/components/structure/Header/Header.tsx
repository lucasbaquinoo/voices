import * as S from './Header.styles';

export type HeaderProps = {
  children?: React.ReactChild;
};

export const Header = ({ children }: HeaderProps) => (
  <S.Wrapper>
    <h1>Oi</h1>
  </S.Wrapper>
);
