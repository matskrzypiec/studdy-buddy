import UsersList from "./components/organisms/UsersList/UsersList";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";


const Wrapper = styled.div`
    background: ${({theme: {colors}}) => colors.lightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
                <UsersList />
            </Wrapper>
        </ThemeProvider>
    )
}

export default App
