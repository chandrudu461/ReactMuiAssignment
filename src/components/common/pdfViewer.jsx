import React, { useState } from 'react'
import { Stack, Box } from '@mui/material'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { useParams } from 'react-router'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import BackButtonIcon from '../../svg/BackButtonIcon.jsx'
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

const PdfViewer = () => {
    const { url } = useParams()
    const pdfUrl = decodeURIComponent(url)
    console.log(url)
    const zoomPluginInstance = zoomPlugin()
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance
    const fullScreenPluginInstance = fullScreenPlugin()
    const { EnterFullScreen } = fullScreenPluginInstance
    const pageNavigationPluginInstance = pageNavigationPlugin()

    return (
        <>
            <Box padding={"80px 0 0 6vw"}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                >
                    <BackButtonIcon />
                    <ZoomOutButton />
                    <ZoomPopover />
                    <ZoomInButton />
                    <EnterFullScreen>
                        {(props) => (
                            <button
                                style={{
                                    backgroundColor: '#357edd',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: '#ffffff',
                                    cursor: 'pointer',
                                    padding: '8px',
                                }}
                                onClick={props.onClick}
                            >
                                Enter fullscreen
                            </button>
                        )}
                    </EnterFullScreen>
                </Stack>
                <Box height={'100%'}>
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
                        />
                    </Worker>
                </Box>
            </Box>
        </>
    )
}

export default PdfViewer