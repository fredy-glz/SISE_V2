import {Router} from 'express';
import {proedu} from '../controllers/proeducontroller';

class ProeduRoutes{

    public router: Router = Router();
    constructor() {

        this.config();

    }

    config(): void{

        this.router.get('/', proedu.getAll);
        this.router.get('/:NUA',proedu.getOne);
        this.router.post('/',proedu.saveOne);
        this.router.delete('/:NUA',proedu.deleteOne);
        this.router.put('/:NUA',proedu.updateOne);

    }
}

const proeduRoutes = new ProeduRoutes();
export default proeduRoutes.router;