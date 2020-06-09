import React from 'react'

import { ImageViewer, ImageViewerContent, ImageControl, ImageLarge } from './styles'

function Modal (props) {
    const { imageSrc, onReset: handleResetImage } = props

    if (!imageSrc) {
        return null
    }

    const modalElement = (
        <ImageViewer>
            <ImageViewerContent>
                <ImageControl onClick={ handleResetImage }>&times;</ImageControl>
                <ImageLarge src={ imageSrc } />
            </ImageViewerContent>
        </ImageViewer>
    )

    return modalElement
}

export { Modal }