
const HospitalIcon = ({ fill, size, className }) => {

    return (
        <div className={className}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_422_136)">
                    <path d="M8 20V14H16V20H19V4H5V20H8ZM10 20H14V16H10V20ZM21 20H23V22H1V20H3V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V20ZM11 8V6H13V8H15V10H13V12H11V10H9V8H11Z" fill={fill} />
                </g>
                <defs>
                    <clipPath id="clip0_422_136">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>

    )
}


export default HospitalIcon;