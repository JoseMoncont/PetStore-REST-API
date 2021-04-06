import {Request, Response} from 'express';
import db from '../database';

class UsersController {

    public async list(req: Request, res: Response) {
        const users= await db.query('SELECT * FROM users');
        res.json(users);

    }
    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const users = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        if (users.length > 0){
            return res.json(users[0]);
        }
        res.status(404).json({text: "The User doen´t exists"});
    }
    
    public async create (req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO user set ?',[req.body])
        res.json({message: 'User saved'});
    }
    public async update (req: Request, res: Response){
        const {id} = req.params;
        await db.query('UPDATE user set ? WHERE id = ?',[req.body, id])
        res.json({message:'User Updated'});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM user WhERE id =?', [id]);
        res.json({message: 'User deleted'});

    }

    

}
const userController = new UsersController();
export default userController;