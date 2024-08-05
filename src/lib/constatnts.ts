const BASE_URI = "http://localhost:3001/api";
const ACCESS_TOKEN_EXP = 24 * 60 * 60; //  1 day
const REFRESH_TOKEN_EXP = 30 * 86400; // 30 days
const SITE_SHORT_NAME = "EB";
const SITE_NAME = "Event Blend";
const DEFAULT_POSTER =
  "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export {
  ACCESS_TOKEN_EXP,
  BASE_URI,
  REFRESH_TOKEN_EXP,
  SITE_NAME,
  DEFAULT_POSTER,
};
