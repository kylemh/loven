import { makeResponse, airtableApi, handleError } from './lib/utils';

export function handler({ body }) {
  const { data } = JSON.parse(body);
  const { subscription, client_reference_id: recordId } = data.object;
  console.log('Payment successful Webhook', data);

  return airtableApi
    .patch(recordId, { fields: { subscription } })
    .then(makeResponse)
    .catch(handleError);
}
