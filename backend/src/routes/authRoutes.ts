import { Router, RequestHandler } from 'express';
import { register, login, getProfile } from '../controllers/authController';
import { protect } from '../middleware/auth';

const router = Router();

// Type the route handlers
const registerHandler: RequestHandler = async (req, res, next) => {
  try {
    await register(req, res);
  } catch (error) {
    next(error);
  }
};

const loginHandler: RequestHandler = async (req, res, next) => {
  try {
    await login(req, res);
  } catch (error) {
    next(error);
  }
};

const profileHandler: RequestHandler = async (req, res, next) => {
  try {
    await getProfile(req, res);
  } catch (error) {
    next(error);
  }
};

// Public routes
router.post('/register', registerHandler);
router.post('/login', loginHandler);

// Protected routes
router.get('/profile', protect, profileHandler);

export default router; 