import React from "react"
import {ThemeProvider} from "@mui/material";
import {theme} from "../config/theme";
import {StoreProvider} from "../providers/store";
import {BrowserRouter} from "react-router-dom";

export const Wrapper: React.PropsWithChildren<any> = ({children}) => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <StoreProvider>
                    {children}
                </StoreProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}
export default Wrapper;
