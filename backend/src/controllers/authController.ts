import { Request, Response } from 'express';
import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import { User, IUser } from '../models/User';
import mongoose, { Types } from 'mongoose';

// Generate JWT Token
const generateToken = (id: Types.ObjectId): string => {
  const secret: Secret = process.env.JWT_SECRET || 'your-jwt-secret-key';
  const options: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256'
  };
  const payload = { id: id.toString() };
  return jwt.sign(payload, secret, options);
};

interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

interface LoginBody {
  email: string;
  password: string;
}

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req: Request<{}, {}, RegisterBody>, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password
    }) as IUser & { _id: Types.ObjectId };

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token
    });
  } catch (error: any) {
    console.error('Register error:', error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request<{}, {}, LoginBody>, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Check for user
    const user = await User.findOne({ email }) as (IUser & { _id: Types.ObjectId }) | null;
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    // Generate token
    const token = generateToken(user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token
    });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/profile
// @access  Private
export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user?._id) {
      res.status(401).json({ message: 'Not authorized' });
      return;
    }

    const user = await User.findById(req.user._id).select('-password') as (IUser & { _id: Types.ObjectId }) | null;
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error: any) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: error.message });
  }
}; 