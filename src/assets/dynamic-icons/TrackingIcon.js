import React from "react";

const TrackingIcon = ({ fill, size, className }) => (
    <div className={className}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_422_139)">
                <path d="M17 2V4H20C20.552 4 21 4.448 21 5V21C21 21.552 20.552 22 20 22H4C3.448 22 3 21.552 3 21V5C3 4.448 3.448 4 4 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM13 11V13H15V15H12.999L13 17H11L10.999 15H9V13H11V11H13ZM15 4H9V6H15V4Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_422_139">
                    <rect width="24" height="24" fill={fill} />
                </clipPath>
            </defs>
        </svg>
    </div>
);

export default TrackingIcon;
