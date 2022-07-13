import { NextFunction, Request, Response } from 'express';
import { Recept } from '@/interfaces/recept.interface';
import ReceptyService from '@/services/recepty.service';




class ReceptyController {
  public receptyService = new ReceptyService();


  public getRecepty = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllReceptyData: Recept[] = await this.receptyService.findAllRecepts();
      res.status(200).json({ data: findAllReceptyData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
  public getReceptyById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const receptId: string = req.params.id;
      const findOneReceptyData: Recept = await this.receptyService.findReceptById(receptId);
      res.status(200).json({ data: findOneReceptyData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
  public createRecepty = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const receptData: Recept = req.body;
      const createReceptyData: Recept = await this.receptyService.createRecept(receptData);
      res.status(201).json({ data: createReceptyData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
  public updateRecepty = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const receptId: string = req.params.id;
      const receptData: Recept = req.body;
      const updateReceptyData: Recept = await this.receptyService.updateRecept(receptId, receptData);
      res.status(200).json({ data: updateReceptyData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
  public deleteRecepty = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const receptId: string = req.params.id;
      const deleteReceptyData: Recept = await this.receptyService.deleteRecept(receptId);
      res.status(200).json({ data: deleteReceptyData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
export default ReceptyController;