import styled from "styled-components"

function ButtonStyled() {
    const StyledButton = styled.button`
        background-color: black;
        font-size: 32px;
        color: white;
    `

    return (
        <StyledButton>Login</StyledButton>
    )
}

export default ButtonStyled