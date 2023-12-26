
const PoblationalIcon = ({ fill, size, className }) => {

    return (
        <div className={className}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_422_145)">
                    <path d="M11 2C15.068 2 18.426 5.036 18.934 8.965L21.184 12.504C21.332 12.737 21.302 13.084 20.959 13.232L19 14.07V17C19 18.105 18.105 19 17 19H15.001L15 22H6V18.306C6 17.126 5.564 16.009 4.756 15.001C3.657 13.631 3 11.892 3 10C3 5.582 6.582 2 11 2ZM11 4C7.686 4 5 6.686 5 10C5 11.385 5.468 12.693 6.316 13.75C7.41 15.114 8 16.667 8 18.306V20H13L13.002 17H17V12.752L18.55 12.088L17.007 9.663L16.95 9.221C16.566 6.251 14.024 4 11 4ZM10.47 7.763L11 8.293L11.53 7.763C12.214 7.079 13.322 7.079 14.005 7.763C14.689 8.446 14.689 9.554 14.005 10.237L11 13.243L7.995 10.237C7.311 9.554 7.311 8.446 7.995 7.763C8.678 7.079 9.786 7.079 10.47 7.763Z" fill={fill} />
                </g>
                <defs>
                    <clipPath id="clip0_422_145">
                        <rect width="24" height="24" fill={fill} />
                    </clipPath>
                </defs>
            </svg>
        </div>

    )
}


export default PoblationalIcon;
