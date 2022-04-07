import { styled } from "@mui/material/styles";

export const Form = styled('form')`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing(2)};
`;