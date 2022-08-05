import * as React from "react";

function ShareIcon(props) {
    return (
        <svg
            width={props.size || 16}
            height={props.size || 16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12.8236 11.3369C12.2182 11.3369 11.6529 11.5378 11.2493 11.9398L5.47729 8.60324C5.51771 8.40218 5.55812 8.24124 5.55812 8.04026C5.55812 7.8392 5.51771 7.67826 5.47729 7.47728L11.1688 4.18105C11.6127 4.58305 12.1779 4.82411 12.8236 4.82411C14.1555 4.82411 15.2454 3.7386 15.2454 2.41204C15.2454 1.08555 14.1555 0 12.8236 0C11.4917 0 10.4018 1.08555 10.4018 2.41207C10.4018 2.61309 10.442 2.77407 10.4826 2.97505L4.79126 6.27128C4.34722 5.86924 3.78216 5.62822 3.13632 5.62822C1.80439 5.62822 0.754883 6.71373 0.754883 8.0403C0.754883 9.36682 1.84458 10.4524 3.17669 10.4524C3.82254 10.4524 4.3876 10.2113 4.83163 9.80928L10.5634 13.1459C10.5228 13.3065 10.4826 13.4675 10.4826 13.6684C10.4826 14.955 11.5319 16 12.8236 16C14.1153 16 15.1646 14.955 15.1646 13.6684C15.1646 12.3819 14.1153 11.3369 12.8236 11.3369Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default ShareIcon;
