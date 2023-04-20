import React from 'react';

type HeadingProps = {
    title: string;
};
export const Heading = ({ title }: HeadingProps) => {
    return <h1>{title}</h1>;
};
