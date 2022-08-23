/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import { presistentClient } from './presistentClient.js';

const { EGY_HOST, VIDSTREAM_HOST } = process.env;

const egyClient = presistentClient({
  baseURL: EGY_HOST,
});

const vidStreamClient = presistentClient({
  baseURL: VIDSTREAM_HOST,
});
