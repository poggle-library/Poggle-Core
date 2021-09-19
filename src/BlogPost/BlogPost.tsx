import React from 'react';

export interface BlogProps {
    image: string,
    title: string,
    description: string
    button: string,
    location: string
}

interface trimmerProps {
    text: string,
    charLength: number,
}

const textTrimmer = ( text, charLength : trimmerProps) => {
    if(text.length > charLength) {
        return text.slice(0,charLength).concat("...")
    }
}

export const BlogPost: React.FC<BlogProps> = ({image, title, description, button, location}) => {
    return (
        <div style={{backgroundColor: 'white', width: "30rem", height: "35rem", borderRadius: "20px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <img src={image} alt="blog-post" style={{width: "100%", height:"15rem", objectFit: "cover", borderRadius: "20px 20px 0 0 "}} />
            <h1 style={{padding: "0 1rem"}}>{title}</h1>
            <p style={{padding: "0 1rem", fontSize: "18px"}}>{description.length > 400 ? textTrimmer(description, 400) : description}</p>
            <button style={{padding: "0.5rem", backgroundColor: "purple", borderRadius: "10px", color: "white", marginLeft: "10px"}} onClick={() => console.log(location)}>{button}</button>

        </div>
    )
}
