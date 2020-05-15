import React from 'react'

function Mouse (props) {
    const mouseElement = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 512 512"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            { ...props }
        >
            <path d="M256 0C156.595 0 75.726 82.14 75.726 183.099v145.807C75.726 429.865 156.595 512 256 512c99.399 0 180.274-81.886 180.274-182.534V183.099C436.274 82.14 355.399 0 256 0zm146.366 329.466c0 81.954-65.656 148.627-146.366 148.627-80.705 0-146.366-66.927-146.366-149.192V183.099c0-82.265 65.661-149.192 146.366-149.192 80.711 0 146.366 66.927 146.366 149.192v146.367z"></path>
            <path d="M256 140.15c-9.364 0-16.954 7.59-16.954 16.954v59.338c0 9.364 7.59 16.954 16.954 16.954s16.954-7.59 16.954-16.954v-59.338c0-9.364-7.59-16.954-16.954-16.954z"></path>
        </svg>
    )

    return mouseElement
}

export { Mouse }
