import React, { useState, useEffect } from "react"
import { makeStyles, styled } from "@mui/styles"
import LogoutIcon from "../../assets/svg/LogoutIcon.jsx"
import UserProfileSvg from "../../assets/svg/UserProfileSvg"
import EdwiselyIcon from "../../assets/svg/EdwiselyIcon.jsx"
import DashboardIcon from "../../assets/svg/DashboardIcon.jsx"
import BookIcon from "../../assets/svg/BookIcon.jsx"
import { Link } from "react-router-dom"

import {
    Drawer,
    AppBar,
    Toolbar,
    Typography,
    Stack,
    Box, Popover,
    IconButton,
    Button,
    List,
    ListItem,
    ListItemText
} from "@mui/material"
import { useTheme } from '@mui/styles'
import { useNavigate, useLocation, useParams } from 'react-router';
import { loginActions } from '../../store/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../store/actions/dashboard.actions'
import EditProfileIcon from "../../assets/svg/EditProfileIcon.jsx"

const drawerWidth = 80

const MyIconButton = styled(IconButton)(
    ({ theme, currentLocation, page }) => ({
        width: "40px",
        height: "40px",
        borderRadius: '8px !important',
        padding: '0px !important',
        backgroundColor:
            currentLocation === "/dashboard" && page === "dashboard"
                ? theme.palette.info[300] :
                currentLocation !== "/dashboard" && page === "course" ?
                    theme.palette.info[300]
                    : "transparent",

        "&:hover": {
            backgroundColor:
                currentLocation === "/dashboard" && page === "dashboard"
                    ? theme.palette.info[300] :
                    currentLocation !== "/dashboard" && page === "course" ?
                        theme.palette.info[300]
                        : "transparent",
        },
    })
)

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        maxWidth: 1536,
        margin: "0px",
    },
    appBar: {
        maxWidth: 1536,
        zIndex: theme.zIndex.drawer,
        backgroundColor: '#fff',
        border: "none",
        boxShadow: "none",
        paddingLeft: "80px",
        left: 0,
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        backgroundColor: theme.palette.grey[100],
        border: "none",
    },
    content: {
        flexGrow: 1,
        maxWidth: 1536,
        margin: "65px auto 0 auto",
    },
}))

function withSidebarAndHeader(WrappedComponent) {
    return function WithSidebarAndHeader(props) {
        const classes = useStyles()
        const theme = useTheme()
        const location = useLocation()
        const param = useParams()
        const dispatch = useDispatch()
        const [anchorEl, setAnchorEl] = useState(null)
        const navigate = useNavigate()
        const { dashBoardData, loading, error } = useSelector(
            (state) => state.dashboard
        )

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget)
        }

        const handleClose = () => {
            setAnchorEl(null)
        }
        const handleLogout = () => {
            dispatch(loginActions.logout())
            localStorage.removeItem("login")
            navigate("/")
        }
        const open = Boolean(anchorEl)
        const id = open ? "simple-popover" : undefined

        const handleDashboardIconClick = () => {
            navigate("/dashboard")
        }

        useEffect(() => {
            dispatch(fetchDashboardData())
        }, [dispatch])

        console.log(location.pathname)

        return (
            <Box className={classes.root} >
                {/* Header*/}
                <AppBar position="fixed" className={classes.appBar}
                    sx={{
                        backgroundColor: theme.palette.primary[0],
                        boxShadow: 'none',
                        // height: '80px'
                    }}>
                    <Toolbar>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ width: "100%" }}
                        >
                            <Typography
                                variant="headerText"
                                sx={{
                                    color: theme.palette.grey[900],
                                }}
                            >
                                Good morning, Maharram 👋
                            </Typography>
                            <Stack>
                                <Box
                                    onClick={handleClick}
                                    sx={{
                                        cursor: "pointer",
                                        "&:hover": {
                                            cursor: "pointer",
                                        },
                                    }}
                                >
                                    <UserProfileSvg link={dashBoardData.profile_picture} customRadius={'24px'} />
                                </Box>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    getContentAnchorEl={null}
                                >
                                    <Stack
                                        direction={"column"}
                                        display={"flex"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        height="170px"
                                        width="215px"
                                        // padding={"10px 15px 10px 15px"}
                                        sx={{
                                            backgroundColor: theme.palette.grey[100]
                                        }}
                                    >
                                        <UserProfileSvg link={dashBoardData.profile_picture} editIcon={<EditProfileIcon />} customRadius={'24px'} />
                                        <Box marginTop={'7px'}>
                                            <Typography variant="popOverDisplayName" >
                                                {dashBoardData.name}
                                            </Typography>
                                        </Box>
                                        <Box marginTop={'3px'}>
                                            <Typography variant="popOverEmailName">
                                                {dashBoardData.email}
                                            </Typography>
                                        </Box>
                                        <Stack width={195} height={45} borderRadius={'10px'} direction={'row'} justifyContent={'center'} alignItems={'center'} onClick={handleLogout} sx={{
                                            marginTop: '5px',
                                            padding: '5px',
                                            transition: 'background-color 0.3s', // Add transition for smooth color change
                                            '&:hover': {
                                                cursor: 'pointer',
                                                backgroundColor: theme.palette.grey[100],
                                            },
                                        }}
                                            backgroundColor={theme.palette.primary[0]}
                                        >
                                            <LogoutIcon />
                                            <Typography onClick={handleLogout} variant="logoutButton" color={theme.palette.grey[800]} sx={{
                                                marginLeft: '9px'
                                            }}>
                                                Logout
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Popover>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar >
                {/* Sidebar */}
                < Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }
                    }
                    anchor="left"
                >
                    <Stack
                        spacing={"24px"}
                        direction="column"
                        justifyContent={"space-between"}
                        alignItems="center"
                        style={{
                            background: "#F4F6F8",
                            height: "100%",
                        }}
                    >
                        <Stack direction="column" gap={2} alignItems={"center"}>
                            <EdwiselyIcon />
                            <Box width={'40px'} height={'40px'} backgroundColor={
                                location.pathname === '/dashboard' ? theme.palette.primary[200] : 'transparent'}
                                sx={{
                                    borderRadius: '8px'
                                }}>
                                <Link to='/dashboard'>
                                    <MyIconButton
                                        currentLocation={location.pathname}
                                        page={'dashboard'}

                                    >
                                        <DashboardIcon
                                            fontColor={
                                                location.pathname === `/dashboard`
                                                    ? theme.palette.info[700]
                                                    : theme.palette.grey[500]
                                            }
                                        />
                                    </MyIconButton>
                                </Link>
                            </Box>
                            <Box width={'40px'} height={'40px'} backgroundColor={
                                location.pathname === '/dashboard' ? 'transparent' : theme.palette.primary[200]}
                                sx={{
                                    borderRadius: '8px'
                                }}>
                                <MyIconButton
                                    currentLocation={location.pathname}
                                    page={'course'}
                                    disabled={location.pathname === `/course/${param?.courseId}`}
                                >
                                    <BookIcon
                                        fontColor={
                                            location.pathname === `/course/${param?.courseId}`
                                                ? theme.palette.info[700]
                                                : theme.palette.grey[500]
                                        }
                                    />
                                </MyIconButton>
                            </Box>
                        </Stack>
                        <Stack
                            justifyContent="flex-end"
                            alignItems="center"
                            sx={{
                                height: "100%",
                                cursor: 'pointer'
                            }}

                        >
                            <Box
                                onClick={handleLogout}
                                style={{ marginTop: "auto", marginBottom: 12, }}
                            >
                                <LogoutIcon />
                            </Box>
                        </Stack>
                    </Stack>
                </Drawer >
                <main className={classes.content}>
                    <WrappedComponent {...props} />
                </main>
            </Box >
        )
    }
}

export default withSidebarAndHeader
