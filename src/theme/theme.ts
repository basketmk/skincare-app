import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        fontFamily: `"Noto Sans JP", system-ui, sans-serif`,

        h1: {fontSize: "32px", fontWeight: 700},
        h2: {fontSize: "28px", fontWeight: 700},
        h3: {fontSize: "24px", fontWeight: 600},
        h4: {fontSize: "20px", fontWeight: 600},
        h5: {fontSize: "16px", fontWeight: 600},
        h6: {fontSize: "14px", fontWeight: 600},

        body1: {fontSize: "16px"},
        body2: {fontSize: "12px"},
    },

    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    fontSize: "16px"
                }
            }
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: "14px"
                }
            }
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "16px",
                    textTransform: "none"
                }
            }
        }
    }

})