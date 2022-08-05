import * as React from "react";

function OutlineLike(props) {
    return (
        <svg
            width={props.size || 16}
            height={props.size || 16}
            fill="currentColor"
            viewBox="0 0 512 572"
            strokeWidth="50px"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M80,186H20c-11.046,0-20,8.954-20,20v250c0,11.046,8.954,20,20,20h60c11.046,0,20-8.954,20-20V206   C100,194.954,91.046,186,80,186z" />
                <path d="M337.137,186c-15.4,0-25.247-16.411-18-30l36.434-68.313C368.057,64.275,351.092,36,324.559,36h0   c-9.322,0-18.261,3.703-24.853,10.294L183.431,162.569C168.429,177.572,160,197.92,160,219.137V396c0,44.183,35.817,80,80,80   h165.644c27.304,0,51.165-18.435,58.057-44.855l46.577-178.544c1.143-4.383,1.722-8.894,1.722-13.423v0   C512,209.809,488.191,186,458.822,186H337.137z" />
            </g>
        </svg>
    );
}

export default OutlineLike;
