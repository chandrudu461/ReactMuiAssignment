import React, { useState, useEffect } from "react"
import { makeStyles, styled } from "@mui/styles"
import LogoutIcon from "../../assets/svg/LogoutIcon.jsx"
import UserProfileSvg from "../../assets/svg/UserProfileSvg"
import EdwiselyIcon from "../../assets/svg/EdwiselyIcon.jsx"
import DashboardIcon from "../../assets/svg/DashboardIcon.jsx"
import BookIcon from "../../assets/svg/BookIcon.jsx"
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
    ListItemText,
} from "@mui/material"
import { useTheme } from '@mui/styles'
import { useNavigate, useLocation, useParams } from 'react-router';
import { loginActions } from '../../store/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../store/actions/dashboard.actions'

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
        maxWidth: 1536, // Restrict max width of the HOC
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
        width: drawerWidth,
        backgroundColor: theme.palette.grey[100],
        border: "none",
    },
    content: {
        flexGrow: 1,
        maxWidth: 1536, // Restrict max width of the content
        margin: "65px auto 0 auto", // Center align the content
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
        const [profilePicture, setProfilePicture] = useState(null)
        const { dashBoardData, loading, error } = useSelector(
            (state) => state.dashboard
        )
        console.log('param', param);

        console.log('location : ', location.pathname);

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
                                    <UserProfileSvg link={dashBoardData.profile_picture} />
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
                                >
                                    <Stack
                                        direction={"column"}
                                        display={"flex"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                    >
                                        <UserProfileSvg link={dashBoardData.profile_picture} />
                                        <Box>
                                            <Typography>Maharrm Hasanli</Typography>
                                        </Box>
                                        <Box>
                                            <Typography>maga.hesenli@gmail.com</Typography>
                                        </Box>
                                        <Box>
                                            <Button startIcon={<LogoutIcon />} onClick={handleLogout}>
                                                Logout
                                            </Button>
                                        </Box>
                                    </Stack>
                                </Popover>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
                {/* Sidebar */}
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
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
                        <Stack direction="column" gap={1} alignItems={"center"}>
                            <EdwiselyIcon />
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
                        </Stack>
                        <Stack
                            justifyContent="flex-end"
                            alignItems="center"
                            sx={{
                                height: "100%",
                                // border: '2px solid red'
                            }}
                        >
                            <div
                                onClick={handleLogout}
                                style={{ marginTop: "auto", marginBottom: 12 }}
                            >
                                <LogoutIcon />
                            </div>
                        </Stack>
                    </Stack>
                </Drawer>
                <main className={classes.content}>
                    <WrappedComponent {...props} />
                </main>
            </Box>
        )
    }
}

export default withSidebarAndHeader
