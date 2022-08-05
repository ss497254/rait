import React from "react";

export function CircleCheckIcon() {
    return (
        <div>
            <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
            </svg>
        </div>
    );
}
