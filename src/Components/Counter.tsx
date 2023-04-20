import React from 'react';
import { useState } from 'react';

interface counterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Counter({ count, setCount }: counterProps) {
    return (
        <>
            <h1>count is {count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        </>
    );
}
