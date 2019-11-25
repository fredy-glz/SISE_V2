import {Router} from 'express';
import {habito} from '../controllers/habitoController';

class HabitoRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', habito.getAll);
        this.router.get('/:NUA',habito.getOne);
        this.router.post('/',habito.saveOne);
        this.router.delete('/:NUA',habito.deleteOne);
        this.router.put('/:NUA',habito.updateOne);

    }
}

const habitoRoutes = new HabitoRoutes();
export default habitoRoutes.router;