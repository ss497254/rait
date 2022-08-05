import * as React from "react";

function SvgSolidCaretRight(props: any) {
    return (
        <svg
            width={props.size || 16}
            height={props.size || 16}
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
            ></path>
        </svg>
    );
}

export default SvgSolidCaretRight;
