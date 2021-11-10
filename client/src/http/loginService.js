import request from '../util/request';
import { delay } from '../util/delay';

export async function verifyCode() {
  await delay(1000);
  const resp = await request.get(`/api/captcha?rad=${Math.random()}`);
  return resp;
}

export async function loginAdminn(userInfo) {
  await delay(500);
  return await request.post('/api/admin/login', {
    ...userInfo,
  });
}

export async function updataUserInfo(id, userInfo) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await request.put(`/api/admin/userinfo?userId=${id}`, {
    ...userInfo,
  });
}
