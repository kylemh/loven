import { makeResponse, airtableApi, handleError } from './lib/utils';

export function handler({ body }) {
  const data = JSON.parse(body);
  console.log('Add customer request.', data);

  return airtableApi
    .post('', { fields: data })
    .then(makeResponse)
    .catch(handleError);
}
