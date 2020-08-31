const environment = process.env.NODE_ENV || "development"

export const domain = process.env.REACT_APP_AUTH0_DOMAIN;
export const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
export const backEndURL = (environment === "development") ? "http://localhost:8080" : "https://psstatsback.herokuapp.com";
export const imgURL = "https://census.daybreakgames.com";
