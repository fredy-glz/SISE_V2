import {Router} from 'express';
import {historia} from '../controllers/historiaMNController';

class HistoriaRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', historia.getAll);
        this.router.get('/:NUA',historia.getOne);
        this.router.post('/',historia.saveOne);
        this.router.delete('/:NUA',historia.deleteOne);
        this.router.put('/:NUA',historia.updateOne);

    }
}

const historiaRoutes = new HistoriaRoutes();
export default historiaRoutes.router;