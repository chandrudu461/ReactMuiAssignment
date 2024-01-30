import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import BackButtonIcon from '../../svg/BackButtonIcon'
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useParams } from 'react-router'

const PdfViewerComponent = () => {

    const { url } = useParams()
    const pdfUrl = decodeURIComponent(url)
    console.log(url)
    return (
        <>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-evenly'}>
                <BackButtonIcon />
                <Typography>Filename</Typography>

            </Stack>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl="https://testings-purpose.s3.ap-south-1.amazonaws.com/media/pdfs/TT107.pdf" />;
            </Worker>
        </>
    )
}

export default PdfViewerComponent