import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User, IUser } from '../models/User';
import mongoose, { Types } from 'mongoose';

interface CustomJwtPayload extends JwtPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: IUser & { _id: Types.ObjectId };
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Not authorized, no token' });
      return;
    }

    const token = authHeader.split(' ')[1];
    const secret: jwt.Secret = process.env.JWT_SECRET || 'your-jwt-secret-key';

    // Verify token
    const decoded = jwt.verify(token, secret, { algorithms: ['HS256'] }) as CustomJwtPayload;

    // Get user from token
    const userId = new Types.ObjectId(decoded.id);
    const user = await User.findById(userId).select('-password') as (IUser & { _id: Types.ObjectId }) | null;
    
    if (!user) {
      res.status(401).json({ message: 'Not authorized, user not found' });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

export const admin = (req: Request, res: Response, next: NextFunction): void => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as admin' });
  }
}; 