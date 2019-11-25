import {Request, Response} from 'express';
import pool from '../database';

class ContactoController {

   public async getAll (req: Request, res: Response): Promise<void>{
        var user = await pool.query('SELECT * FROM ContactoEmergencia');
        res.json(user);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {NUA} = req.params;
       const alumno = await pool.query('SELECT * FROM ContactoEmergencia');
        if(alumno.length > 0){
            return res.json(alumno[0]);
        }
        res.status(404).json({message: 'Not Found'});
    }

    public async deleteOne (req: Request, res: Response): Promise<void>{
        const {NUA} = req.params;
        await pool.query('DELETE  FROM ContactoEmergencia WHERE NUA = ?',[NUA]);
        res.json({message: 'Usuario Eliminado'});
    }
    public async saveOne (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO ContactoEmergencia set ?'[req.body]);
        res.json({message: 'Usuario saved'});
    }
    public async updateOne (req: Request, res: Response): Promise<void>{
        const {NUA} = req.params;
        await pool.query('UPDATE ContactoEmergencia set ? WHERE NUA = ?',[req.body,NUA]);
        res.json({message: 'Usuario Actualizado'});
    }
}


export const contacto = new ContactoController();