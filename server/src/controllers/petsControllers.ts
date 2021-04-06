import {Request, Response} from 'express';
import db from '../database';

class PetsController {

    public async list(req: Request, res: Response) {
        const pets= await db.query('SELECT * FROM pet');
        res.json(pets);

    }
    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const pets = await db.query('SELECT * FROM pet WHERE id = ?', [id]);
        if (pets.length > 0){
            return res.json(pets[0]);
        }
        res.status(404).json({text: "The Pet doen´t exists"});
    }
    
    public async create (req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO pet set ?',[req.body])
        res.json({message: 'Pet saved'});
    }
    public async update (req: Request, res: Response){
        const {id} = req.params;
        await db.query('UPDATE pet set ? WHERE id = ?',[req.body, id])
        res.json({message:'Pet Updated'});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM pet WhERE id =?', [id]);
        res.json({message: 'Pet deleted'});

    }

    

}
const petsController = new PetsController();
export default petsController;