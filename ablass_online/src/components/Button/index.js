import styled from "styled-components";

const Button = styled.button`
  ${({ theme }) => `
    padding: 5px;
    margin: 0;
    background-color: ${theme.colors.main};
    border-color: ${theme.colors.main};
    border-radius: 3px;
    color: ${theme.colors.white};

    :hover {
        cursor: pointer;
    }
  `}
`;

export default Button;
