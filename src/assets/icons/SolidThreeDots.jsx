import * as React from "react";

function SvgSolidFullscreen(props) {
    return (
        <svg
            width={props.size || 16}
            height={props.size || 16}
            viewBox="0 0 60 60"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M8,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,22,8,22z" />
                <path d="M52,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S56.411,22,52,22z" />
                <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z" />
            </g>
        </svg>
    );
}

export default SvgSolidFullscreen;
