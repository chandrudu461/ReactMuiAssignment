import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { Grid, Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
import { useParams } from 'react-router'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import BackButtonIcon from '../../assets/svg/BackButtonIcon.jsx'
import PdfRotateIcon from '../../assets/svg/PdfRotateIcon.jsx'
import FullScreenIcon from '../../assets/svg/FullScreenIcon.jsx'
import ZoomOutIcon from "../../assets/svg/ZoomOutIcon.jsx";
import ZoomInIcon from "../../assets/svg/ZoomInIcon.jsx";
import {
    pageNavigationPlugin,
    DownArrowIcon,
    NextIcon,
    PreviousIcon,
    UpArrowIcon,
} from '@react-pdf-viewer/page-navigation'
import { useTheme } from '@mui/material'
import { createStore, PluginFunctions, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { useNavigate } from "react-router";
// import { FullScreen } from '@react-pdf-viewer/full-screen';

const options = {
    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
};

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const { url } = useParams()
    const pdfUrl = decodeURIComponent(url)
    console.log(url)
    const zoomPluginInstance = zoomPlugin()
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance
    const pageNavigationPluginInstance = pageNavigationPlugin()
    const theme = useTheme();
    const store = React.useMemo(() => createStore(), []);
    const [scale, setScale] = useState(1);
    const [currentZoomLevel, setCurrentZoomLevel] = useState(100)
    const fileName = localStorage.getItem("pdfFileName");
    const navigate = useNavigate()
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [rotation, setRotation] = useState(0);


    const customZoomPluginInstance = {
        zoomTo: (newScale) => {
            setScale(newScale);
        },
    };

    function roundToDecimal(number, decimalPlaces) {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(number * factor) / factor;
    }

    const zoomOut = () => {
        let zoomLevel = currentZoomLevel;
        zoomLevel -= 5;
        const newScale = roundToDecimal(zoomLevel / 100, 2); // Assuming 2 decimal places
        customZoomPluginInstance.zoomTo(newScale);
        setCurrentZoomLevel(currentZoomLevel - 5);
    };

    const zoomIn = () => {
        let zoomLevel = currentZoomLevel;
        zoomLevel += 5; // Change subtraction to addition here
        const newScale = roundToDecimal(zoomLevel / 100, 2); // Assuming 2 decimal places
        customZoomPluginInstance.zoomTo(newScale);
        setCurrentZoomLevel(currentZoomLevel + 5);
    };

    const handleNextPage = () => {
        setPageNumber((pageNumber) => pageNumber + 1);
    };

    const handlePrevPage = () => {
        setPageNumber((pageNumber) => pageNumber - 1);
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleSelectPage = (i) => {
        setPageNumber(i);
        // localStorage.setItem("selectedPage", i);
    };

    let pageCount = 1;
    const handleFullScreenToggle = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    const handleRotate = () => {
        setRotation(rotation + 90);
    };



    return (
        <Box>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'flex-start'}
                width={"100%"}
                position={'fixed'}
                zIndex={1000}
                spacing={"250px"}
                sx={{
                    padding: '16px',
                    boxShadow: `10px 10px 32px 0px rgba(22, 22, 22, 0.04)`,
                    backgroundColor: theme.palette.primary[0],
                }}
            >
                <Stack direction={'row'} spacing={4}>
                    <Box
                        sx={{
                            cursor: 'pointer'
                        }}
                        onClick={
                            () => {
                                navigate(-1);
                            }
                        }
                    >
                        <BackButtonIcon />
                    </Box>
                    <Typography variant="body5" sx={{
                        color: '#252525',
                    }}>{fileName}</Typography>
                </Stack>

                <Stack direction={'row'} spacing={4} alignItems={'center'} justifyContent={'center'}>
                    <Stack direction={'row'} spacing={1}>
                        <Box width={'24px'} height={'24px'} sx={{
                            backgroundColor: '#F4F6F8',
                            marginLeft: '24px'
                        }}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}>
                            <Typography variant="pageNumber" sx={{
                                color: '#252525'
                            }}>{pageNumber}</Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}>
                            <Typography variant="pageNumber" sx={{
                                color: '#252525'
                            }}
                            >/</Typography>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}>
                            <Typography variant="pageNumber" sx={{
                                color: '#252525'
                            }}>{numPages}</Typography>
                        </Box>
                    </Stack>

                    <Box style={{ borderLeft: '1px solid #BDBDC7', height: '20px' }}></Box>

                    <Stack direction={"row"} spacing={2}>
                        <Box onClick={zoomOut} sx={{
                            cursor: 'pointer'
                        }}>
                            <ZoomOutIcon />
                        </Box>
                        <Box height={'24px'} padding={'8px 7px 8px 7px'} display={'flex'}
                            justifyContent={'center'} alignItems={'center'}>
                            <Typography variant="courseChip">
                                {currentZoomLevel}
                            </Typography>
                        </Box>
                        <Box onClick={zoomIn} sx={{
                            cursor: 'pointer'
                        }}>
                            <ZoomInIcon />
                        </Box>
                    </Stack>

                    <Box style={{ borderLeft: '1px solid #BDBDC7', height: '20px' }}></Box>

                    <Box onClick={handleFullScreenToggle} style={{ cursor: 'pointer' }}>
                        <FullScreenIcon />
                    </Box>

                    <Box onClick={handleRotate} style={{ cursor: 'pointer' }}>
                        <PdfRotateIcon />
                    </Box>
                </Stack>
            </Stack >
            <Box width={'100%'} height={'100%'} display={'flex'} alignItems={'center'}>
                <Box sx={{
                    boxShadow: `1px 2px 12px 0px rgba(0, 0, 0, 0.15)`,
                    width: '415.511px',
                    marginTop: '87px',
                    height: '588px', marginLeft: '516px', // Default marginLeft for screens larger than 1366px
                    transform: `rotate(${rotation}deg)`,
                    transition: 'transform 0.5s ease-in-out',
                    '@media (max-width: 1500px) and (min-width: 900px)': {
                        marginLeft: 'calc(50vw - 207.755px)' // Responsive marginLeft for screens between 900px and 1500px
                    }
                }}>
                    <Document
                        options={options}
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page scale={scale}
                            plugins={[customZoomPluginInstance]}
                            width={415.511}
                            height={588}
                            pageNumber={pageNumber}
                            rotate={rotation} />
                    </Document>
                </Box>
                <Box style={{ width: "30px", height: "40px" }}>
                    <Document
                        options={options}
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Box
                            className="p-4"
                            style={{
                                right: 31,
                                top: '169px',
                                position: "absolute",
                                overflowY: "scroll",
                                height: "100vh",
                            }}
                        >
                            {[...Array(numPages).keys()].map((i) => (
                                <>
                                    <Box
                                        key={i + 1}
                                        style={{
                                            border:
                                                i + 1 === pageNumber ? "4px solid #9EBDFA" : "none",
                                            marginBottom: '5px'
                                        }}
                                    >
                                        <Page
                                            onClick={() => handleSelectPage(i + 1)}
                                            pageNumber={i + 1}
                                            renderAnnotationLayer={false}
                                            renderTextLayer={false}
                                            width={115}
                                            height={157}
                                        />
                                    </Box>
                                    <Box display={'flex'} justifyContent={'center'} alignContent={'center'} styles={{
                                        marginBottom: '8px'
                                    }}>
                                        <Typography variant="subtitle2" >{pageCount++}</Typography>
                                    </Box>
                                </>
                            ))}
                        </Box>
                    </Document>
                </Box>
            </Box>
            {/* {isFullScreen && (
                <FullScreen target={document.body} onClose={() => setIsFullScreen(false)} />
            )} */}
        </Box>
    );
};

export default PdfViewer;
