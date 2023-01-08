import React from "react";
import styled from "styled-components";
const SlyledButton= styled.button`
background: #fff;
padding: 16px 32px;
border: 2 px solid #EB9B00;
&:hover {
    background: #B87B00;
    border: 2 px solid #EB9B00;
}
`
export const BlButton=()=>{
    return (
        <SlyledButton>
            Clique aqui
        </SlyledButton>
    )
}