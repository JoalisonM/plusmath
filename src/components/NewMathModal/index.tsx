import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useMaths } from '../../hooks/useMaths';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Form, Button } from './style';
interface NewMathModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewMathModal = ({ isOpen, onRequestClose }: NewMathModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createMath } = useMaths();

  async function handleCreateNewMath(event: FormEvent) {
    event.preventDefault();

    if (title && description) {
      await createMath({
        title,
        description,
      });

      setTitle('');
      setDescription('');

      notify();
      onRequestClose();
    }
  }

  const notify = () => toast.dark('🦄 Novo conteúdo adicionado', {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    draggablePercent: 60,
    role: "alert",
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <Form onSubmit={handleCreateNewMath}>
        <h2>Adicionar novo conteúdo</h2>

        <div className="label-input">
          <input
            type="text"
            placeholder="Título"
            id="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <label htmlFor="title">Título</label>
        </div>
        <div className="label-textarea">
          <textarea
            name="description"
            id="description"
            placeholder="Descrição"
            value={description}
            onChange={event => setDescription(event.target.value)}
          ></textarea>
          <label htmlFor="description">Descrição</label>
        </div>

        <Button>
          <button type="button" className="cancel" onClick={onRequestClose}>Cancelar</button>
          <button type="submit">Adicionar</button>
        </Button>
      </Form>
    </Modal>
  );
}

export default NewMathModal;