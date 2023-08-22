import express from 'express';
import bodyParser from 'body-parser';

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter
  .route('/')
  .all((_, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get((_, res) => {
    res.send({ message: 'Sending all the leaders' }).end();
  })
  .post((req, res) => {
    res.send({ message: 'Adding the leaders', leader: req.body }).end();
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.send({ message: 'Put operation not supported on /leaders' }).end();
  })
  .delete((req, res) => {
    res.send({ message: 'Deleting leaders selected' }).end();
  });

leaderRouter
  .route('/:leaderId')
  .get((req, res) => {
    const { leaderId } = req.params;
    res.send({ message: 'Sending details of the leader', leaderId }).end();
  })

  .post((req, res) => {
    const { leaderId } = req.params;
    res.statusCode = 403;
    res
      .send({
        message: `Post operation not supported on /leaders/${leaderId}`,
      })
      .end();
  })

  .put((req, res) => {
    const { leaderId } = req.params;
    res.send({ message: 'Updating details of the leader', leaderId }).end();
  })

  .delete((req, res) => {
    const { leaderId } = req.params;
    res.send({ message: 'Deleting leader selected', leaderId }).end();
  });

export default leaderRouter;
