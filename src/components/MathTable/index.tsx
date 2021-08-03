import { useMaths } from '../../hooks/useMaths';
import * as Feather from 'react-feather';

import { Container } from './style';

const MathTable = () => {
  const { maths } = useMaths();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {maths.map((math) => (
            <tr key={math.id}>
              <td>{math.title}</td>
              <td>{math.description}</td>
              <td className="button-delete"><Feather.Trash size={16} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default MathTable;