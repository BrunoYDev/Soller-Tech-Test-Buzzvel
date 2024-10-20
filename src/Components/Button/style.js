import styled from "styled-components";

export const StyledAnchor = styled.a.withConfig({
    shouldForwardProp: (prop) => !['backcolor', 'textcolor'].includes(prop)
})`
    width: fit-content;
    height: fit-content;
    padding: 0;
    margin: 0;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        cursor: pointer;
        background-color: ${props => props.backcolor};
        color: ${props => props.textcolor};
        box-shadow: 0px 4px 4px #00000025;
    }

    :active{
        cursor: pointer;
        background-color: ${props => props.backcolor};
        color: ${props => props.textcolor};
    }
`;

export const StyledButton = styled.button`
    padding: 0;
    margin: 0;
    width: 300px;
    height: 64px;
    background-color: #ffff;
    border: 2px solid ${props => props.color};
    outline: none;
    border-radius: 50px;

    color: ${props => props.color};
    font-size: 24px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;


`;