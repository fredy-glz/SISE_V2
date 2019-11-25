import {Router} from 'express';
import {dme} from '../controllers/dmeController';

class dmeRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', dme.getAll);
        this.router.get('/:NUA',dme.getOne);
        this.router.post('/',dme.saveOne);
        this.router.delete('/:NUA',dme.deleteOne);
        this.router.put('/:NUA',dme.updateOne);

    }
}

const DMERoutes = new dmeRoutes();
export default DMERoutes.router;