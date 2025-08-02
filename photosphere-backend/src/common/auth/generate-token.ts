import { sign } from 'jsonwebtoken';

export function generateToken(userId: string) {
  return sign({ userId }, process.env.JWT_SECRET_KEY!, {
    expiresIn: '1d'
  });
};

