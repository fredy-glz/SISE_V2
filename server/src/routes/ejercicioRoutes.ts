import {Router} from 'express';
import {ejercicio} from '../controllers/ejercicioController';

class EjercicioRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', ejercicio.getAll);
        this.router.get('/:NUA',ejercicio.getOne);
        this.router.post('/',ejercicio.saveOne);
        this.router.delete('/:NUA',ejercicio.deleteOne);
        this.router.put('/:NUA',ejercicio.updateOne);

    }
}

const ejercicioRoutes = new EjercicioRoutes();
export default ejercicioRoutes.router;