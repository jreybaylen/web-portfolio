import React from 'react'

function Vue (props) {
    const vueElement = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 333334 288680"
            { ...props }
        >
            <g fillRule="nonzero">
                <path
                    fill="#4dba87"
                    d="M205160 0l-38493 66667L128174 0H0l166667 288680L333334 0z"
                ></path>
                <path
                    fill="#425466"
                    d="M205160 0l-38493 66667L128174 0H66667l100000 173200L266667 0z"
                ></path>
            </g>
        </svg>
    )

    return vueElement
}

export { Vue }
