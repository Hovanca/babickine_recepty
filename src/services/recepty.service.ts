//na logicke ukony v ramci databazy
//kontoler uz len spaja to vsetko

import { HttpException } from "@/exceptions/HttpException";
import { Recept } from "@/interface/recept.interface";
import receptModel from "@/models/recepty.model";
import { isEmpty } from "@utils/util";

class ReceptService {
    public recepty = receptModel;

    //CRUD
    public async createRecept(receptData: Recept): Promise<Recept> {
        if (isEmpty(receptData)) {
            throw new HttpException(400, "Recept is empty");
        }

        const createReceptData: Recept = await this.recepty.create(receptData);
        return createReceptData;
    }

    public async findAllRecepts(): Promise<Recept[]> {
        const allRecepts: Recept[] = await this.recepty.find();
        return allRecepts;
    }

    public async findReceptById(receptId: string): Promise<Recept> {
        if (isEmpty(receptId)) throw new HttpException(400, "Recept id is empty");

        const findRecept: Recept = await this.recepty.findById(receptId);
        if (!(findRecept)) throw new HttpException(400, "Recept id is empty");

        return findRecept;
    }


    public async updateRecept(receptId: string, receptData: Recept): Promise<Recept> {
        if (isEmpty(receptData)) throw new HttpException(400, "You're not receptData");
    
        const updateReceptById: Recept = await this.recepty.findByIdAndUpdate(receptId, { receptData });
        if (!updateReceptById) throw new HttpException(409, "You're not recept");
    
        return updateReceptById;
      }
    
      public async deleteRecept(receptId: string): Promise<Recept> {
        const deleteReceptById: Recept = await this.recepty.findByIdAndDelete(receptId);
        if (!deleteReceptById) throw new HttpException(409, "You're not recept");
    
        return deleteReceptById;
      }
}
    
    export default ReceptService;
