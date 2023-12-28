import React from "react";

const HealthCareIcon = ({ fill }) => (
  <svg
    width="25"
    height="40"
    viewBox="0 0 25 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clip-rule="evenodd"
      d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H11C11.2652 0 11.5196 0.105357 11.7071 0.292893C11.8946 0.48043 12 0.734784 12 1V5C12 5.26522 11.8946 5.51957 11.7071 5.70711C11.5196 5.89464 11.2652 6 11 6H10V7.273C10.2926 7.37644 10.5459 7.56808 10.725 7.82151C10.9041 8.07494 11.0002 8.37767 11 8.688V20.999C10.2425 21.5682 9.56915 22.2415 9 22.999V20.985L4.015 16H3V17.157L8.933 23.09C8.52392 23.6469 8.17371 24.2448 7.888 24.874L3 19.985V22.157L7.32 26.477C7.10838 27.2962 7.00087 28.1389 7 28.985L3 24.985V27.157L7.305 31.462C7.83443 33.5425 9.01912 35.3976 10.684 36.753C10.272 37.8489 9.48854 38.7656 8.47019 39.3433C7.45184 39.921 6.2631 40.1232 5.11101 39.9147C3.95892 39.7061 2.9165 39.1 2.1653 38.202C1.41409 37.3039 1.00172 36.1708 1 35V8.687C1.00004 8.37685 1.09623 8.07433 1.27532 7.8211C1.4544 7.56787 1.70758 7.37638 2 7.273V6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5V1ZM9 9.102C8.70742 8.99856 8.45413 8.80692 8.27503 8.55349C8.09593 8.30006 7.99984 7.99733 8 7.687V6H4V7.688C3.99996 7.99816 3.90377 8.30067 3.72468 8.5539C3.5456 8.80713 3.29242 8.99862 3 9.102V14H9V9.102ZM9 18.157L6.844 16H8.014L9 16.985V18.157ZM8.041 37.198L3 32.157V29.985L8.875 35.86C8.72131 36.3724 8.43336 36.8344 8.041 37.198ZM6.015 38L3 34.985V35C3 35.7957 3.31607 36.5587 3.87868 37.1213C4.44129 37.6839 5.20435 38 6 38H6.015ZM2 4V2H10V4H2Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clip-rule="evenodd"
      d="M18 23C18.2652 23 18.5196 22.8946 18.7071 22.7071C18.8946 22.5196 19 22.2652 19 22C19 21.7348 18.8946 21.4804 18.7071 21.2929C18.5196 21.1054 18.2652 21 18 21H16C15.7348 21 15.4804 21.1054 15.2929 21.2929C15.1054 21.4804 15 21.7348 15 22C15 22.2652 15.1054 22.5196 15.2929 22.7071C15.4804 22.8946 15.7348 23 16 23V24.1C15.362 24.23 14.767 24.48 14.243 24.828L13.414 24C13.5962 23.8114 13.697 23.5588 13.6947 23.2966C13.6924 23.0344 13.5872 22.7836 13.4018 22.5982C13.2164 22.4128 12.9656 22.3076 12.7034 22.3053C12.4412 22.303 12.1886 22.4038 12 22.586L11.302 23.284L11.292 23.293L11.283 23.303L10.586 24C10.4038 24.1886 10.303 24.4412 10.3053 24.7034C10.3076 24.9656 10.4128 25.2164 10.5982 25.4018C10.7836 25.5872 11.0344 25.6924 11.2966 25.6947C11.5588 25.697 11.8114 25.5962 12 25.414L12.828 26.243C12.4745 26.7764 12.2274 27.3729 12.1 28H11C11 27.7348 10.8946 27.4804 10.7071 27.2929C10.5196 27.1054 10.2652 27 10 27C9.73478 27 9.48043 27.1054 9.29289 27.2929C9.10536 27.4804 9 27.7348 9 28V30C9 30.2652 9.10536 30.5196 9.29289 30.7071C9.48043 30.8946 9.73478 31 10 31C10.2652 31 10.5196 30.8946 10.7071 30.7071C10.8946 30.5196 11 30.2652 11 30H12.1C12.23 30.638 12.48 31.233 12.828 31.757L12 32.586C11.9078 32.4905 11.7974 32.4143 11.6754 32.3619C11.5534 32.3095 11.4222 32.2819 11.2894 32.2808C11.1566 32.2796 11.0249 32.3049 10.902 32.3552C10.7791 32.4055 10.6675 32.4797 10.5736 32.5736C10.4797 32.6675 10.4055 32.7792 10.3552 32.902C10.3049 33.0249 10.2796 33.1566 10.2808 33.2894C10.2819 33.4222 10.3095 33.5534 10.3619 33.6754C10.4143 33.7974 10.4905 33.9078 10.586 34L12 35.414C12.1886 35.5962 12.4412 35.697 12.7034 35.6947C12.9656 35.6924 13.2164 35.5872 13.4018 35.4018C13.5872 35.2164 13.6924 34.9656 13.6947 34.7034C13.697 34.4412 13.5962 34.1886 13.414 34L14.243 33.172C14.7764 33.5255 15.3729 33.7727 16 33.9V35C15.7348 35 15.4804 35.1054 15.2929 35.2929C15.1054 35.4804 15 35.7348 15 36C15 36.2652 15.1054 36.5196 15.2929 36.7071C15.4804 36.8946 15.7348 37 16 37H18C18.2652 37 18.5196 36.8946 18.7071 36.7071C18.8946 36.5196 19 36.2652 19 36C19 35.7348 18.8946 35.4804 18.7071 35.2929C18.5196 35.1054 18.2652 35 18 35V33.9C18.6271 33.7727 19.2236 33.5255 19.757 33.172L20.586 34C20.4038 34.1886 20.303 34.4412 20.3053 34.7034C20.3076 34.9656 20.4128 35.2164 20.5982 35.4018C20.7836 35.5872 21.0344 35.6924 21.2966 35.6947C21.5588 35.697 21.8114 35.5962 22 35.414L23.414 34C23.5962 33.8114 23.697 33.5588 23.6947 33.2966C23.6924 33.0344 23.5872 32.7836 23.4018 32.5982C23.2164 32.4128 22.9656 32.3076 22.7034 32.3053C22.4412 32.303 22.1886 32.4038 22 32.586L21.172 31.757C21.5255 31.2236 21.7727 30.6271 21.9 30H23C23 30.2652 23.1054 30.5196 23.2929 30.7071C23.4804 30.8946 23.7348 31 24 31C24.2652 31 24.5196 30.8946 24.7071 30.7071C24.8946 30.5196 25 30.2652 25 30V28C25 27.7348 24.8946 27.4804 24.7071 27.2929C24.5196 27.1054 24.2652 27 24 27C23.7348 27 23.4804 27.1054 23.2929 27.2929C23.1054 27.4804 23 27.7348 23 28H21.9C21.7727 27.3729 21.5255 26.7764 21.172 26.243L22 25.414C22.0922 25.5095 22.2026 25.5857 22.3246 25.6381C22.4466 25.6905 22.5778 25.7181 22.7106 25.7192C22.8434 25.7204 22.9751 25.6951 23.098 25.6448C23.2208 25.5945 23.3325 25.5203 23.4264 25.4264C23.5203 25.3325 23.5945 25.2208 23.6448 25.098C23.6951 24.9751 23.7204 24.8434 23.7192 24.7106C23.7181 24.5778 23.6905 24.4466 23.6381 24.3246C23.5857 24.2026 23.5095 24.0922 23.414 24L22 22.586C21.8114 22.4038 21.5588 22.303 21.2966 22.3053C21.0344 22.3076 20.7836 22.4128 20.5982 22.5982C20.4128 22.7836 20.3076 23.0344 20.3053 23.2966C20.303 23.5588 20.4038 23.8114 20.586 24L19.757 24.828C19.2236 24.4745 18.6271 24.2274 18 24.1V23ZM17 26C16.2044 26 15.4413 26.3161 14.8787 26.8787C14.3161 27.4413 14 28.2044 14 29C14 29.7956 14.3161 30.5587 14.8787 31.1213C15.4413 31.6839 16.2044 32 17 32C17.7956 32 18.5587 31.6839 19.1213 31.1213C19.6839 30.5587 20 29.7956 20 29C20 28.2044 19.6839 27.4413 19.1213 26.8787C18.5587 26.3161 17.7956 26 17 26Z"
      fill={fill}
    />
  </svg>
);

export default HealthCareIcon;