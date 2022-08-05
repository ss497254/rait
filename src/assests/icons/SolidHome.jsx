import * as React from "react";

function SvgSolidHome(props) {
    return (
        <svg
            width={props.size || 16}
            height={props.size || 16}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            {...props}
        >
            <g clipPath="url(#sm-solid-home_svg__clip0)">
                <path d="M15.2 6.08c-.08-.08-.08-.16-.16-.24L9.36.48C8.96.16 8.48 0 8 0c-.4 0-.88.16-1.28.48L1.04 5.76c-.08.08-.16.16-.16.24-.08.16-.08.24-.08.4v8.16c0 .88.8 1.44 1.84 1.44h2.72c.96 0 1.84-.56 1.84-1.52v-.88c-.08-.4.32-.8.8-.8.48 0 .88.4.88.88v.88c0 .96.8 1.52 1.84 1.52h2.72c.96 0 1.84-.56 1.84-1.52V6.4c0-.08 0-.24-.08-.32z" />
            </g>
            <defs>
                <clipPath id="sm-solid-home_svg__clip0">
                    <path d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default SvgSolidHome;
