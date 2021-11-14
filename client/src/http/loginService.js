import request from '../util/request';
import { delay } from '../util/delay';

export async function verifyCode() {
  await delay(1000);
  return await request.get(`/api/captcha?rad=${Math.random()}`);
}

export async function loginAdminn(userInfo) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await request.post('/api/admin/login', {
    ...userInfo,
  });
}

export async function updataUserInfo(userInfo) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await request.put('/api/admin/userinfo', {
    ...userInfo,
  });
}

export async function getUserInfo(id) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await request.get(`/api/admin/userInfo?userId=${id}`);
}
