import React from 'react'
import PdfViewer from '../features/PdfViewer/PdfViewer'
import withSidebarAndHeader from '../components/HOC/withSideBarAndHeader'

const PdfPage = () => {
    return (
        <PdfViewer />
    )
}

export default withSidebarAndHeader(PdfPage)