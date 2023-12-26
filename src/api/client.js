import axios from 'axios';

const axiosClient = () => {
  const defaultOptions = {
    withCredentials: false,
    baseURL: process.env.REACT_APP_API_URL,
    timeout: process.env.REACT_APP_API_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': "2ewedsdkr2w8uweocsfdij3lklej32o3jo09809238jrlflwkjef"
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  return instance;
};

export default axiosClient();