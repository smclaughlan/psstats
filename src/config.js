const environment = process.env.NODE_ENV || "development"

export const backEndURL = (environment === "development") ? "http://localhost:8080" : "https://psstatsback.herokuapp.com";
export const imgURL = "https://census.daybreakgames.com";
