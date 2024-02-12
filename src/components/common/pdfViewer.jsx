import React, { useState } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { useParams } from 'react-router'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import BackButtonIcon from '../../assets/svg/BackButtonIcon.jsx'
import PdfRotateIcon from '../../assets/svg/PdfRotateIcon.jsx'
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
import { Button } from '@mui/material'
import FullScreenIcon from '../../assets/svg/FullScreenIcon.jsx'

const PdfViewer = () => {
    const { url } = useParams()
    const pdfUrl = decodeURIComponent(url)
    console.log(url)
    const zoomPluginInstance = zoomPlugin()
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance
    const fullScreenPluginInstance = fullScreenPlugin()
    const { EnterFullScreen } = fullScreenPluginInstance
    const pageNavigationPluginInstance = pageNavigationPlugin()
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(15)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <Box padding={"80px 0 0 6vw"}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    sx={{
                        padding: '16px'
                    }}
                >
                    <BackButtonIcon />
                    <Typography sx={{
                        color: '#252525',
                        fontFamily: 'Axiforma',
                        fontSize: '15px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                    }}>File Name</Typography>

                    <Typography sx={{
                        color: '#252525',
                        fontFamily: 'Axiforma',
                        fontSize: '15px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                    }}>{currentPage} / {totalPages}</Typography>

                    <ZoomOutButton />
                    <ZoomPopover />
                    <ZoomInButton />
                    <EnterFullScreen>
                        {(props) => (
                            <FullScreenIcon />
                        )}
                    </EnterFullScreen>
                    <PdfRotateIcon />
                </Stack>
                <Box width={'100%'} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box height={"588px"} width={"420px"} >
                        <Worker
                            workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
                        >
                            <Viewer
                                fileUrl={pdfUrl}
                                plugins={
                                    ([zoomPluginInstance],
                                        [fullScreenPluginInstance],
                                        [pageNavigationPluginInstance])
                                }
                                page={currentPage}
                            />
                        </Worker>
                    </Box>
                </Box>
                <Box className="thumbnails">
                    {/* Generate small instances of pages */}
                    {[...Array(totalPages).keys()].map((pageNumber) => (
                        <div
                            key={pageNumber}
                            className={`thumbnail ${pageNumber === currentPage ? 'active' : ''}`}
                            onClick={() => handlePageChange(pageNumber)}
                        >
                            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                                {/* <Document file={pdfUrl}> */}
                                {/* <Page pageNumber={pageNumber + 1} width={50} /> */}
                                {/* </Document> */}
                            </Worker>
                        </div>
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default PdfViewer