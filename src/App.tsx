import { useState } from 'react';
import Modal from 'react-modal'

import Header  from './components/Header/index';
import { GlobalStyle } from './styles/global';
import Dashboard from './components/Dashboard';
import NewMathModal from './components/NewMathModal';
import { MathsProvider } from './hooks/useMaths';

Modal.setAppElement('#root');

export function App() {
  const [isNewMathOpenModal, setIsNewMathOpenModal] = useState(false);

  function handleOpenNewMathModal() {
      setIsNewMathOpenModal(true);
  }

  function handleCloseNewMathModal() {
      setIsNewMathOpenModal(false);
  }
  
  return (
    <MathsProvider>
      <Header onOpenNewMathModal={handleOpenNewMathModal} />
      <Dashboard />
      <NewMathModal 
        isOpen={isNewMathOpenModal}
        onRequestClose={handleCloseNewMathModal}
      />
      <GlobalStyle />
    </MathsProvider>
  );
}
