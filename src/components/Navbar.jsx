import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Select,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [country, setCountry] = useState('IND');

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer);
    };
    const handleCountryChange = (event) => setCountry(event.target.value);

    const navItems = ['Home', 'About Us', 'Services', 'Careers', 'Contact'];

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: 'rgba(0, 0, 0, 0)',
                    mt: .5,
                    boxShadow: 'none',
                    color: '#fff',
                    zIndex: 10,
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Left Section (Menu Icon for Mobile) */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Center Logo */}

                    <img src="/images/emons.svg" alt="" style={{ width: "100px" }} />

                    {/* Nav Links (Hidden on Mobile) */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, flexGrow: 1, justifyContent: 'center' }}>
                        {navItems.map((item) => (
                            <Typography
                                key={item}
                                sx={{
                                    cursor: 'pointer',
                                    fontWeight: 400,
                                    '&:hover': { color: '#ff5016ff' },
                                    fontSize: "14px"
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>

                    {/* Right Section - Buttons */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>


                        <Select
                            value={country}
                            onChange={handleCountryChange}
                            variant="standard"
                            disableUnderline
                            sx={{
                                color: '#fff',
                                fontSize: '14px',
                                ml: 1,
                                '& .MuiSelect-icon': { color: '#fff' },
                                '&:before, &:after': { border: 'none' },
                                '& .MuiSelect-select': {
                                    paddingRight: '24px',
                                },
                            }}
                        >
                            <MenuItem value="IND">IND</MenuItem>
                            <MenuItem value="UK">UK</MenuItem>
                            <MenuItem value="US">US</MenuItem>
                            <MenuItem value="CHINA">CHINA</MenuItem>
                        </Select>
                        <Button
                            variant="text"
                            sx={{
                                color: '#fff',
                                textTransform: 'none',
                                mr: { xs: 0, md: 2 },
                                display: { xs: 'none', md: 'inline-flex' },
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile Menu */}
            <Drawer
                anchor="top"
                open={openDrawer}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        backgroundColor: '#fff',
                        color: '#000',
                        width: "100%",
                        height: "100vh"
                    },
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
                    <img src="/images/emons.svg" alt="" style={{ width: "100px" }} />

                    <IconButton
                        onClick={handleDrawerToggle}
                        aria-label="close drawer"
                        sx={{
                            textAlign: "right",
                            display: "flex",
                            justifyContent: "end",
                            alignContent: "end",

                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>


                <List>
                    {navItems.map((item) => (
                        <ListItem button key={item} onClick={handleDrawerToggle}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;
