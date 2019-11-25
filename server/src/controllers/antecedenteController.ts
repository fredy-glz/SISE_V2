import {Request, Response} from 'express';
import pool from '../database';

class AntController {

   public async getAll (req: Request, res: Response): Promise<void>{
        await pool.query('SELECT * FROM AntHeredofamiliares');
        res.json({message: 'Usuarios Saved '});
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const {NUA} = req.params;
       const alumno = await pool.query('SELECT * FROM AntHeredofamiliares WHERE NUA = ? ',[NUA]);
        if(alumno.length > 0){
            return res.json(alumno[0]);
        }
        res.status(404).json({message: 'Not Found'});
    }

    public async deleteOne (req: Request, res: Response): Promise<void>{
        const {NUA} = req.params;
        await pool.query('DELETE  FROM AntHeredofamiliares WHERE NUA = ?',[NUA]);
        res.json({message: 'Usuario Eliminado'});
    }
    public async saveOne (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO AntHeredofamiliares set ?'[req.body]);
        res.json({message: 'Usuarios Saved '});
    }
    public async updateOne (req: Request, res: Response): Promise<void>{
        const {NUA} = req.params;
        await pool.query('UPDATE AntHeredofamiliares set ? WHERE NUA = ?',[req.body,NUA]);
        res.json({message: 'Usuario Actualizado'});
    }
}


export const ant = new AntController();