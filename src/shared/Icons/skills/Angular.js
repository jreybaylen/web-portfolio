import React from 'react'

function Angular (props) {
    const angularElement = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 310334 333334"
            { ...props }
        >
            <path
                fill="#dd0031"
                d="M155167 0L0 55333l23667 205167 131500 72834 131500-72834 23667-205167z"
            ></path>
            <path
                fill="#c3002f"
                d="M155167 0v37000-167 296501l131500-72834 23667-205167z"
            ></path>
            <path
                fill="#fff"
                d="M155167 36833L58167 254333h36167l19500-48667h82333l19500 48667h36167L155167 36833zm28333 138834h-56667l28333-68167 28333 68167z"
            ></path>
        </svg>
    )

    return angularElement
}

export { Angular }
