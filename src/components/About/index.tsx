import React from 'react';

import { Container, Content } from './style';

import mathImg from '../../assets/image/undraw_mathematics_4otb2.svg'

const About = () => {
  return (

    <>
      <Container>
        <Content>
          <p>
            Apenas mais uma página para estudo, ela foi criada para treinar os estudos sobre o
            ReactJS e tem como objetivo colocar os conteúdos (título e descrição) da matéria de
            cálculo 1, que curso durante o primeiro semestre de Sistemas para Internet no IFPB -
            Campus Guarabira.
          </p>
          <img src={mathImg} alt="mathematics img" width="284" height="285" />
        </Content>
      </Container>
    </>
  )
}

export default About;