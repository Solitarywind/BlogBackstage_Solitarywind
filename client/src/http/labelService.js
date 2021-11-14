import requst from '../util/request';
import { delay } from '../util/delay';

export async function addLabel(data) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await requst.post('/api/label/addLabel', {
    ...data,
  });
}

export async function getLabel(userId) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await requst.get(`/api/label/labeList?userId=${userId}`);
}

export async function deLabel(id) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await requst.delete(`/api/label/${id}`);
}
