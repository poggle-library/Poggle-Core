import React from 'react';

export interface BlogProps {
    text: string;
}

export function BlogPost({text} : BlogProps) {
    return <h1>Hi, {text}!</h1>
}


