import './App.css';
import { Heading } from './Components/Heading';
import Counter from './Components/Counter';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <h1>My first Vite Project for React with Typescript</h1>
            <Heading title='Hello' />
            <Counter count={count} setCount={setCount} />
        </>
    );
}

export default App;
