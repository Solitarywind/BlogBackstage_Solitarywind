import request from '../util/request';
import { delay } from '../util/delay';

export async function verifyCode() {
  await delay(1000);
  const resp = await request.get(`/api/captcha?rad=${Math.random()}`);
  return resp;
}
