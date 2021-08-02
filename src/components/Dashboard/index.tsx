import React from 'react';
import About from '../About';
import MathTable from '../MathTable';

import { Container } from './style'

const Dashboard = () => {
    return (
        <Container>
            <About />
            <MathTable />
        </Container>
    )
}
export default Dashboard;