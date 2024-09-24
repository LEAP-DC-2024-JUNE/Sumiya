function Logo({ theme }) {
  console.log(theme);
  if (theme == "light")
    return (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 8V10"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 26V28"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.9299 10.93L12.3399 12.34"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.6599 23.66L25.0699 25.07"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 18H10"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26 18H28"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.3399 23.66L10.9299 25.07"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.0699 10.93L23.6599 12.34"
          stroke="#4B5563"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  else {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1C8.80653 2.19347 8.13604 3.81217 8.13604 5.5C8.13604 7.18783 8.80653 8.80653 10 10C11.1935 11.1935 12.8122 11.864 14.5 11.864C16.1878 11.864 17.8065 11.1935 19 10C19 11.78 18.4722 13.5201 17.4832 15.0001C16.4943 16.4802 15.0887 17.6337 13.4442 18.3149C11.7996 18.9961 9.99002 19.1743 8.24419 18.8271C6.49836 18.4798 4.89472 17.6226 3.63604 16.364C2.37737 15.1053 1.5202 13.5016 1.17294 11.7558C0.82567 10.01 1.0039 8.20038 1.68509 6.55585C2.36628 4.91131 3.51983 3.50571 4.99987 2.51677C6.47991 1.52784 8.21997 1 10 1Z"
          stroke="#D1D5DB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
export default Logo;
