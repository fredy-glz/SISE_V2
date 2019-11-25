import {Router} from 'express';
import {medica} from '../controllers/historiaMController';

class MedicaRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', medica.getAll);
        this.router.get('/:NUA',medica.getOne);
        this.router.post('/',medica.saveOne);
        this.router.delete('/:NUA',medica.deleteOne);
        this.router.put('/:NUA',medica.updateOne);

    }
}

const medicaRoutes = new MedicaRoutes();
export default medicaRoutes.router;