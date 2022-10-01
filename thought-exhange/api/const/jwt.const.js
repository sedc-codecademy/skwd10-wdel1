import jwt from "jsonwebtoken";

export const createAccessToken = userId => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "40m",
  });
};

export const verifyAcessToken = token => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

export const createRefreshToken = userId => {
  return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyRefreshToken = token => {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
};
