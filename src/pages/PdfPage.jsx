import React from 'react'
import PdfViewer from '../features/PdfViewer/components/PdfViewer'
import withSidebarAndHeader from '../components/HOC/withSideBarAndHeader'

const PdfPage = () => {
    return (
        <PdfViewer />
    )
}

export default withSidebarAndHeader(PdfPage)