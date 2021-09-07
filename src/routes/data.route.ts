import { Router } from 'express';
import handler from '../controllers/data.controller';

const route = Router();

route.get('/weekly', handler.GetWeeklyData);
route.get('/interval', handler.GetIntervalData);
route.get('/latest', handler.GetLatestData);

export default route;
