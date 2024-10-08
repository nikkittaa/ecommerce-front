import { primary } from "@/lib/colors";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration:  none;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    svg{
        height: 16px;
        margin-right: 5px;
    }
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 2px solid #fff;
    `}
    ${props => props.primary && css`
        background-color: ${primary};
        color: #fff;
        border: 2px solid ${primary};
    `}
    ${props => props.size === "l" && css`
        font-size: 1.2rem;
        padding: 10px 20px;
        svg{
            height: 20px;
        }
    `}

    ${props => props.size === "s" && css`
        font-size: 0.8rem;
        padding: 5px 5px;
        
    `}

    ${props => props.block && css`
        width: 100%;
        display: block;
    `}
    ${props => props.primary && props.outline &&  css`
        background-color: transparent;
        color: ${primary};
        border: 1px solid ${primary};
    `}
`;
const StyledButton = styled.button`
    ${ButtonStyle}
`;

export default function Button({children, ...rest}){
    return (
        <StyledButton {...rest} >{children}</StyledButton>
    );
}