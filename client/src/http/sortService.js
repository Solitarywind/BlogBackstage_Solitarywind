import requst from '../util/request';
import { delay } from '../util/delay';

export async function addSort(data) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await requst.post('/api/sort/addSort', {
    ...data,
  });
}

export async function updateSort(id, data) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await requst.put(`/api/sort/${id}`, {
    ...data,
  });
}

export async function getSort(userId) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await requst.get(`/api/sort/sortList?userId=${userId}`);
}

export async function delSort(id) {
  await delay(500);
  // eslint-disable-next-line no-return-await
  return await requst.delete(`/api/sort/${id}`);
}
