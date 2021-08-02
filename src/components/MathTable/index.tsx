import { useContext } from 'react';
import { useMaths } from '../../hooks/useMaths';

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
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default MathTable;