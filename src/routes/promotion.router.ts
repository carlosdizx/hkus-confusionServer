import express from 'express';
import bodyParser from 'body-parser';

const promotionRouter = express.Router();
promotionRouter.use(bodyParser.json());

promotionRouter
  .route('/')
  .all((_, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get((_, res) => {
    res.send({ message: 'Sending all the promotions' }).end();
  })
  .post((req, res) => {
    res.send({ message: 'Adding the promotions', promotion: req.body }).end();
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.send({ message: 'Put operation not supported on /promotions' }).end();
  })
  .delete((req, res) => {
    res.send({ message: 'Deleting promotions selected' }).end();
  });

promotionRouter
  .route('/:promotionId')
  .get((req, res) => {
    const { promotionId } = req.params;
    res
      .send({ message: 'Sending details of the promotion', promotionId })
      .end();
  })

  .post((req, res) => {
    const { promotionId } = req.params;
    res.statusCode = 403;
    res
      .send({
        message: `Post operation not supported on /promotions/${promotionId}`,
      })
      .end();
  })

  .put((req, res) => {
    const { promotionId } = req.params;
    res
      .send({ message: 'Updating details of the promotion', promotionId })
      .end();
  })

  .delete((req, res) => {
    const { promotionId } = req.params;
    res.send({ message: 'Deleting promotion selected', promotionId }).end();
  });

export default promotionRouter;
