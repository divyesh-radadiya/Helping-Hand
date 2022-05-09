/* eslint-disable no-undef */
// export const base = "http://192.168.56.101:8081";
const ipadd = process.env.REACT_APP_BASE_API ?? "localhost";
export const base = "http://" + ipadd + ":8081";
