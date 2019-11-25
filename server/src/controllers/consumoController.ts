import {Request, Response} from 'express';
import pool from '../database';

class ConsumoController {

   public async getAll (req: Request, res: Response): Promise<void>{
       var user = await pool.query('SELECT * FROM Consumo');
        res.json(user);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {NUA} = req.params;
       const alumno = await pool.query('SELECT * FROM Consumo WHERE NUA = ? ',[NUA]);
        if(alumno.length > 0){
            return res.json(alumno[0]);
        }
        res.status(404).json({message: 'Not Found'});
    }

    public async deleteOne (req: Request, res: Response): Promise<void>{
        const {NUA} = req.params;
        await pool.query('DELETE  FROM Consumo WHERE NUA = ?',[NUA]);
        res.json({message: 'Usuario Eliminado'});
    }
    public async saveOne (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO Consumo set ?'[req.body]);
        res.json({message: 'Usuarios Saved '});
    }
    public async updateOne (req: Request, res: Response): Promise<void>{
        const {NUA} = req.params;
        await pool.query('UPDATE Consumo set ? WHERE NUA = ?',[req.body,NUA]);
        res.json({message: 'Usuario Actualizado'});
    }
}


export const consumo = new ConsumoController();