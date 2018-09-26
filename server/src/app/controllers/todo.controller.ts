import { Router, Request, Response } from 'express';
import { TodoModel, ITodoModel } from '../models/todo.schema';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    TodoModel.find()
        .then((todos: ITodoModel[]) => {
            res.json(todos);
        })
        .catch(error => {
            res.sendStatus(400);
        });
});

router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    TodoModel.findById(id)
        .then((todo: ITodoModel) => {
            if (todo) {
                res.json(todo);
            }
            else {
                res.sendStatus(404);
            }
        })
        .catch(error => {
            res.sendStatus(400);
        });
});

router.post('/', (req: Request, res: Response) => {
    TodoModel.create(req.body).then(todo => {
        res.json(todo);
    }).catch(error => {
        console.error(error);
        res.sendStatus(400);
    });
});

router.delete('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    TodoModel.remove({ _id: id }).then(todo => {
        res.json(todo);
    }).catch(error => {
        console.error(error);
        res.sendStatus(400);
    });
});

router.put('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    TodoModel.updateOne({ _id: id }, req.body).then(todo => {
        res.json(todo);
    }).catch(error => {
        console.error(error);
        res.sendStatus(400);
    });
});

export const TodoController: Router = router;
