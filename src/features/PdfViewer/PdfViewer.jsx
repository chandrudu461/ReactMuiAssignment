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
    fullScreenPlugin,
    RenderEnterFullScreenProps,
} from '@react-pdf-viewer/full-screen'
import {
    pageNavigationPlugin,
    DownArrowIcon,
    NextIcon,
    PreviousIcon,
    UpArrowIcon,
} from '@react-pdf-viewer/page-navigation'
import { useTheme } from '@mui/material'

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
    const fullScreenPluginInstance = fullScreenPlugin()
    const { EnterFullScreen } = fullScreenPluginInstance
    const pageNavigationPluginInstance = pageNavigationPlugin()
    const theme = useTheme();
    const [zoomLevel, setZoomLevel] = useState(100);

    // useEffect(() => {
    //     const storedPage = localStorage.getItem("selectedPage");
    //     if (storedPage) {
    //         setPageNumber(parseInt(storedPage, 10));
    //     }
    // }, []);

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
        localStorage.setItem("selectedPage", i);
    };

    const StyledPage = styled(Page)({
        border: "3px solid #ff0000",
        width: "40px",
        marginBottom: "5px",
    });

    let pageCount = 1;

    return (
        <>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                sx={{
                    padding: '16px',
                    boxShadow: `10px 10px 32px 0px rgba(22, 22, 22, 0.04)`,
                    backgroundColor: theme.palette.primary[0],
                    marginBottom: '21px'
                }}
            >
                <BackButtonIcon />
                <Typography variant="body5" sx={{
                    color: '#252525',
                }}>File Name</Typography>

                <Stack direction={'row'} spacing={1}>
                    <Box width={'24px'} height={'24px'} sx={{
                        backgroundColor: '#F4F6F8'
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

                <ZoomOutIcon />
                <ZoomInIcon />

                <EnterFullScreen>
                    {(props) => (
                        <FullScreenIcon />
                    )}
                </EnterFullScreen>
                <PdfRotateIcon />
            </Stack>
            <Grid container spacing={3}>
                <Grid item md={6} xs={12} marginLeft={'32%'}>
                    <Box sx={{
                        boxShadow: `1px 2px 12px 0px rgba(0, 0, 0, 0.15)`
                    }}>
                        <Document
                            options={options}
                            file={pdfUrl}
                            onLoadSuccess={onDocumentLoadSuccess}

                        >
                            <Page width={415.511} height={588} pageNumber={pageNumber} />
                        </Document>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12} className="mb-3">
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
                                    top: 170,
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
                </Grid>
            </Grid >
        </>

    );
};

export default PdfViewer;
