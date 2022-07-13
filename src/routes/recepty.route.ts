import { Router } from 'express';
import ReceptyController from '@/controllers/recepty.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';

class AuthRoute implements Routes {
  public path = '/recepty';
  public router = Router();
  public receptyController = new ReceptyController();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get('/', this.receptyController.getRecepty);
    this.router.get('/:id', this.receptyController.getReceptyById);
    this.router.post('/', authMiddleware, this.receptyController.createRecepty);
    this.router.put('/:id', authMiddleware, this.receptyController.updateRecepty);
    this.router.delete('/:id', authMiddleware, this.receptyController.deleteRecepty);
  }
}
export default AuthRoute;