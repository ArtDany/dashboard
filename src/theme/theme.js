import { createTheme } from "@mui/material/styles";

export const themeTypography = createTheme({
    typography: {
        fontFamily: `"Poppins", "sans-serif"`,
        title: {
            fontWeight: "600",
            fontSize: "26px",
            lineHeight: "39px"
        },
        greetings: {
            marginLeft: "24px",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "36px"
        },
        table_header: {
            marginLeft: "16px",
            fontWeight: "600",
            fontSize: "22px",
            lineHeight: "33px"
        },
        table_subheader: {
            marginLeft: "16px",
            marginBottom: "24px",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "21px",
            color: "#16C098"
        },
        drawer_list: {
            minWidth: "180px",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "21px",
            color: "#9197B3"
        },
        version: {
            marginLeft: "4px",
            fontWeight: "500",
            fontSize: "10px",
            lineHeight: "15px",
            color: "#838383"
        },
        avatar: {
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "21px",
            color: "#000000"
        },
        avatar_prof: {
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "18px",
            color: "#757575"
        }
    }
});

export const activeButton = {
    width: "80px",
    height: "29px",
    backgroundColor: "#16C09861",
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    border: `1px solid #00B087`,
    borderRadius: "4px",
    color: "#008767",
    padding: `4px, 12px, 4px, 12px`
};

export const inactiveButton = {
    width: "80px",
    height: "29px",
    backgroundColor: "#FFC5C5",
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    border: `1px solid #DF0404`,
    borderRadius: "4px",
    color: "#DF0404",
    padding: `4px, 12px, 4px, 12px`
};
