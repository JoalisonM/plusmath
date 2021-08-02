import { Container, Content } from './style';

import logoImg from '../../assets/image/logo2.svg'

interface HeaderProps {
  onOpenNewMathModal: () => (void);
}

const Header = ({ onOpenNewMathModal }: HeaderProps) => {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo img of plusMath" />
        <button type="button" onClick={onOpenNewMathModal}>Novo conteúdo</button>
      </Content>
    </Container>
  )
}

export default Header;
