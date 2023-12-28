import React from "react";

const AdminIcon = ({ fill, size, className }) => (
    <div className={className}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_422_133)">
                <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4ZM12 5C13.018 5 13.985 5.217 14.858 5.608L13.295 7.17C12.882 7.06 12.448 7 12 7C9.239 7 7 9.239 7 12C7 13.38 7.56 14.63 8.464 15.536L7.05 16.95L6.894 16.789C5.72 15.537 5 13.852 5 12C5 8.134 8.134 5 12 5ZM18.392 9.143C18.782 10.015 19 10.983 19 12C19 13.933 18.216 15.683 16.95 16.95L15.536 15.536C16.44 14.63 17 13.38 17 12C17 11.552 16.941 11.118 16.83 10.705L18.392 9.143ZM16.242 6.343L17.657 7.757L13.933 11.483C13.977 11.648 14 11.821 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12C10 10.895 10.895 10 12 10C12.179 10 12.352 10.023 12.517 10.067L16.242 6.343Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_422_133">
                    <rect width="24" height="24" fill={fill} />
                </clipPath>
            </defs>
        </svg>
    </div>

);

export default AdminIcon;