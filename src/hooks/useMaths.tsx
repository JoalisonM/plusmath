import { ReactNode } from 'react';
import { createContext, useEffect, useState, useContext } from 'react'
import { api } from '../services/api';

interface Math {
    id: number;
    title: string;
    description: string;
}

interface MathsProviderProps {
    children: ReactNode; //aceita qualquer coisa jsx
}

// interface MathInput {
//     title: string;
//     description: string;
// }

type MathInput = Omit<Math, 'id'>

interface MathsContextData {
    maths: Math[];
    createMath: (math: MathInput) => Promise<void>;
}

export const MathsContext = createContext<MathsContextData>(
    {} as MathsContextData
);

export function MathsProvider({children}: MathsProviderProps) {
    const [maths, setMaths] = useState<Math[]>([]);

    useEffect(() => {
        api('maths')
        .then(response => setMaths(response.data.maths))
    }, []);

    async function createMath(mathInput: MathInput) {
        const response = await api.post('/maths', mathInput)

        const { math } = response.data;

        setMaths([
            ...maths,
            math
        ])
    }

    return (
        <MathsContext.Provider value={{maths, createMath}}>
            {children}
        </MathsContext.Provider>
    )
}

export function useMaths(){
    const context = useContext(MathsContext);

    return context;
}