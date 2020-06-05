import React from 'react'

function Node (props) {
    const nodeElement = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 295684 333333"
            { ...props }
        >
            <path
                fill="#689f63"
                d="M185629 236211c-53444 0-64650-24533-64650-45110 0-1957 1577-3516 3538-3516h15776c1743 0 3210 1269 3486 2990 2385 16076 9478 24185 41796 24185 25744 0 36689-5815 36689-19467 0-7857-3118-13697-43110-17611-33449-3302-54117-10670-54117-37423 0-24643 20791-39319 55615-39319 39104 0 58489 13575 60934 42743 92 1009-275 1987-948 2721-672 703-1621 1131-2599 1131h-15866c-1651 0-3088-1162-3424-2752-3822-16908-13056-22320-38157-22320-28098 0-31370 9784-31370 17122 0 8897 3852 11496 41765 16510 37545 4983 55370 12016 55370 38402 0 26600-22198 41856-60904 41856m-37550 96979c-4465 0-8897-1171-12811-3424l-40777-24141c-6090-3406-3118-4611-1110-5305 8121-2843 9769-3486 18436-8407 911-520 2103-336 3036 214l31327 18589c1131 612 2736 612 3785 0l122144-70504c1131-643 1865-1957 1865-3302V96104c0-1406-734-2660-1889-3363L149813 22297c-1131-672-2629-672-3760 0L23981 92741c-1183 672-1935 1987-1935 3332v140948c0 1345 734 2630 1896 3272l33448 19324c18161 9080 29260-1621 29260-12382V108121c0-1987 1559-3516 3546-3516l15471-1c1926 0 3516 1529 3516 3516v139175c0 24215-13208 38126-36170 38126-7063 0-12628 0-28159-7643l-32042-18467C4893 254724 2 246164 2 237022V96074c0-9172 4891-17733 12810-22258L135079 3280c7735-4372 18009-4372 25682 0l122114 70566c7889 4555 12810 13086 12810 22258v140948c0 9142-4922 17672-12810 22258l-122114 70535c-3914 2263-8347 3424-12872 3424m13 64z"
            ></path>
        </svg>
    )

    return nodeElement
}

export { Node }
