import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import DashTable from "../table/DashTable";
import { ThemeProvider } from "@mui/material/styles";
import { themeTypography } from "../theme/theme";
import { ReactComponent as Title } from "../icons/title.svg";
import { ReactComponent as DashboardIcon } from "../icons/dashboard.svg";
import { ReactComponent as ProductIcon } from "../icons/product.svg";
import { ReactComponent as CustomersIcon } from "../icons/customers.svg";
import { ReactComponent as IncomeIcon } from "../icons/income.svg";
import { ReactComponent as PromoteIcon } from "../icons/promote.svg";
import { ReactComponent as HelpIcon } from "../icons/help.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as DashboardIconFill } from "../icons/filled/dashboardFill.svg";
import { ReactComponent as ProductIconFill } from "../icons/filled/productFill.svg";
import { ReactComponent as CustomersIconFill } from "../icons/filled/customersFill.svg";
import { ReactComponent as IncomeIconFill } from "../icons/filled/incomeFill.svg";
import { ReactComponent as PromoteIconFill } from "../icons/filled/promoteFill.svg";
import { ReactComponent as HelpIconFill } from "../icons/filled/helpFill.svg";
import { ReactComponent as ChevronIconFill } from "../icons/filled/chevronFill.svg";
import avatar from "../icons/avatar.jpg";

const drawerWidth = 306;

function DashDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const defStyle = (item, index) => {
        return (
            selectedButton === index ||
            (selectedButton === null && item.name === "Customers")
        );
    };

    const drawerList = [
        {
            name: "Dashboard",
            icon: <DashboardIcon />,
            filledicon: <DashboardIconFill />,
            chevron: false
        },
        {
            name: "Product",
            icon: <ProductIcon />,
            filledicon: <ProductIconFill />,
            chevron: true
        },
        {
            name: "Customers",
            icon: <CustomersIcon />,
            filledicon: <CustomersIconFill />,
            chevron: true
        },
        {
            name: "Income",
            icon: <IncomeIcon />,
            filledicon: <IncomeIconFill />,
            chevron: true
        },
        {
            name: "Promote",
            icon: <PromoteIcon />,
            filledicon: <PromoteIconFill />,
            chevron: true
        },
        { name: "Help", icon: <HelpIcon />, filledicon: <HelpIconFill />, chevron: true }
    ];

    const handleClick = (index) => {
        setSelectedButton(index);
    };

    const drawer = (
        <ThemeProvider theme={themeTypography}>
            <Typography
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "36px 61px 45px 28px"
                }}
            >
                <Title style={{ marginRight: "12px" }} />
                <Typography variant="title">
                    Dashboard<Typography variant="version">v1.0</Typography>
                </Typography>
            </Typography>
            <List>
                {drawerList.map((item, index) => {
                    return (
                        <ListItem key={item.name} sx={{ padding: "0px 28px 0 28px" }}>
                            <ListItemButton
                                sx={{
                                    height: "46px",
                                    borderRadius: "8px",
                                    padding: "13px",
                                    backgroundColor: defStyle(item, index)
                                        ? "#5932EA"
                                        : "transparent",
                                    ":hover": {
                                        backgroundColor: "#5932EA" // Change the background color on hover
                                    }
                                }}
                                onClick={() => handleClick(index)}
                            >
                                <ListItemIcon sx={{ minWidth: "36px" }}>
                                    {selectedButton === index ||
                                    (selectedButton === null && item.name === "Customers")
                                        ? item.filledicon
                                        : item.icon}
                                </ListItemIcon>
                                <Typography
                                    variant="drawer_list"
                                    sx={{
                                        color: defStyle(item, index)
                                            ? "#FFFFFF"
                                            : "#9197B3"
                                    }}
                                >
                                    {item.name}
                                </Typography>
                                {item.chevron && (
                                    <ListItemIcon sx={{ minWidth: "16px" }}>
                                        {defStyle(item, index) ? (
                                            <ChevronIconFill />
                                        ) : (
                                            <ChevronIcon />
                                        )}
                                    </ListItemIcon>
                                )}
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <Box sx={{ mt: 13, ml: 4, display: "flex", flexDirection: "row" }}>
                <img
                    style={{ width: "42px", height: "42px" }}
                    src={avatar}
                    alt="avatar"
                ></img>
                <Box sx={{ ml: 2, display: "flex", flexDirection: "column" }}>
                    <Typography variant="avatar">Evano</Typography>
                    <Typography variant="avatar_prof">Project Manager</Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                    mr: 0,
                    paddingRight: 0,
                    marginLeft: "2px",
                    alignItems: "baseline",
                    display: { sm: "none" }
                }}
            >
                <MenuIcon />
            </IconButton>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <ThemeProvider theme={themeTypography}>
                    <Typography variant="greetings" align="left">
                        Hello Evano 👋🏼,
                    </Typography>
                </ThemeProvider>
                <DashTable />
            </Box>
        </Box>
    );
}

export default DashDrawer;
