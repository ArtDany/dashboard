import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ThemeProvider, styled } from "@mui/material/styles";
import { themeTypography, activeButton, inactiveButton } from "../theme/theme";
import InputBase from "@mui/material/InputBase";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: "#B5B7C0",
        fontFamily: `"Poppins", "sans-serif"`,
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "21px"
    },
    [`&.${tableCellClasses.body}`]: {
        color: "#292D32",
        fontFamily: `"Poppins", "sans-serif"`,
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "21px"
    }
}));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "10px",
    backgroundColor: "hsl(230, 100%, 98.8%)",
    width: "226px",
    height: "38px"
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));

function compareStrings(str1, str2) {
    let i = 0;
    while (i < str1.length && i < str2.length) {
        if (str1[i] !== str2[i]) {
            return false;
        }
        i++;
    }
    return true;
}

function createData(name, company, phone, email, country, status) {
    return { name, company, phone, email, country, status };
}

const rows = [
    createData(
        "Jane Cooper",
        "Microsoft",
        "(225) 555-0118",
        "jane@microsoft.com",
        "United States",
        "Active"
    ),
    createData(
        "Floyd Miles",
        "Yahoo",
        "(205) 555-0100",
        "floyd@yahoo.com",
        "Kiribati",
        "Inactive"
    ),
    createData(
        "Ronald Richards",
        "Adobe",
        "(302) 555-0107",
        "ronald@adobe.com",
        "Israel",
        "Inactive"
    ),
    createData(
        "Marvin McKinney",
        "Tesla",
        "(252) 555-0126",
        "marvin@tesla.com",
        "Iran",
        "Active"
    ),
    createData(
        "Jerome Bell",
        "Google",
        "(629) 555-0129",
        "jerome@google.com",
        "Reunion",
        "Active"
    ),
    createData(
        "Kathryn Murphy",
        "Microsoft",
        "(406) 555-0120",
        "kathryn@microsoft.com",
        "Curacao",
        "Active"
    ),
    createData(
        "Jacob Jones",
        "Yahoo",
        "(208) 555-0112",
        "jacob@yahoo.com",
        "Brazil",
        "Active"
    ),
    createData(
        "Kristin Watson",
        "Facebook",
        "(704) 555-0127",
        "kristin@facebook.com",
        "Aland Islands",
        "Inactive"
    )
];

export default function DashTable() {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredData = rows.filter(
        (row) =>
            row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            compareStrings(row.status.toLowerCase(), searchQuery.toLowerCase())
    );

    return (
        <TableContainer
            component={Paper}
            style={{
                marginTop: "51px",
                width: "968px",
                marginLeft: "31px",
                padding: "38px 44px 38px 22px",
                borderRadius: "30px"
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <ThemeProvider theme={themeTypography}>
                    <Typography style={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="table_header">All customers</Typography>
                        <Typography variant="table_subheader">Active Members</Typography>
                    </Typography>
                </ThemeProvider>
                <Search style={{ marginRight: "9px" }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Search>
            </Box>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Customer Name</StyledTableCell>
                        <StyledTableCell align="left">Company</StyledTableCell>
                        <StyledTableCell align="left">Phone Number</StyledTableCell>
                        <StyledTableCell align="left">Email</StyledTableCell>
                        <StyledTableCell align="left">Country</StyledTableCell>
                        <StyledTableCell style={{ paddingRight: "18px" }} align="right">
                            Status
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.map((row) => (
                        <TableRow key={row.name}>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.company}</StyledTableCell>
                            <StyledTableCell align="left">{row.phone}</StyledTableCell>
                            <StyledTableCell align="left">{row.email}</StyledTableCell>
                            <StyledTableCell align="left">{row.country}</StyledTableCell>
                            <StyledTableCell
                                style={{ position: "relative", left: "20px" }}
                            >
                                <button
                                    style={
                                        row.status === "Active"
                                            ? activeButton
                                            : inactiveButton
                                    }
                                >
                                    {row.status}
                                </button>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Stack spacing={2} style={{ width: "100%", display: "flex" }}>
                <Pagination
                    count={40}
                    shape="rounded"
                    align="right"
                    variant="outlined"
                    color="primary"
                    size="small"
                    style={{ alignSelf: "end", marginTop: "30px" }}
                />
            </Stack>
        </TableContainer>
    );
}
