import jwt from 'jsonwebtoken';
const JWTSecret = String(process.env.JWT_SECRET);
const AccessToken_Expire = String(process.env.JWT_ACCESSTOKEN_EXPIRE);
const RefreshToken_Expire = String(process.env.JWT_REFRESHTOKEN_EXPIRE);

export const generateJWT = (user: object): object => {
  const jwt_accessToken: string = jwt.sign({ user }, JWTSecret, {
    expiresIn: AccessToken_Expire,
  });
  const jwt_refreshToken: string = jwt.sign({ user }, JWTSecret, {
    expiresIn: RefreshToken_Expire,
  });
  return { accessToken: jwt_accessToken, refreshToken: jwt_refreshToken };
};

export const verifyJWT = (token: string): object | null => {
  try {
    const verify_token = jwt.verify(token.replace('Bearer ', ''), JWTSecret);

    if (typeof verify_token === 'object' && verify_token !== null) {
      return verify_token.user;
    }

    return null;
  } catch (error) {
    console.error('Invalid or expired token:', error);
    return null;
  }
};
