import React from "react";

const Name = ({ url: { query: { name } } }) => {
    return (
        <div>{name}</div>
    )
}


export default Name