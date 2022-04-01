
const devBaseURL = "http://localhost:4000";
const proBaseURL = "";

export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000