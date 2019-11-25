import {Router} from 'express';
import {examen} from '../controllers/examenController';

class ExamenRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', examen.getAll);
        this.router.get('/:NUA',examen.getOne);
        this.router.post('/',examen.saveOne);
        this.router.delete('/:NUA',examen.deleteOne);
        this.router.put('/:NUA',examen.updateOne);

    }
}

const examenRoutes = new ExamenRoutes();
export default examenRoutes.router;