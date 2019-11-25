import {Router} from 'express';
import {divi} from '../controllers/divisionController';

class DivisionRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', divi.getAll);
        this.router.get('/:NUA',divi.getOne);
        this.router.post('/',divi.saveOne);
        this.router.delete('/:NUA',divi.deleteOne);
        this.router.put('/:NUA',divi.updateOne);

    }
}

const diviRoutes = new DivisionRoutes();
export default diviRoutes.router;