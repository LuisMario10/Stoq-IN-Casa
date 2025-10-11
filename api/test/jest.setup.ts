import { _APP } from "../src/App";
import supertest from 'supertest';


export const _TEST_APP = supertest(_APP);

