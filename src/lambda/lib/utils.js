import axios from 'axios';

const API_KEY = process.env.AIRTABLE_API_KEY;
const BASE = process.env.AIRTABLE_BASE;
const TABLE = process.env.AIRTABLE_TABLE;

const baseURL = `https://api.airtable.com/v0/${BASE}/${TABLE}/`;
const headers = { Authorization: `Bearer ${API_KEY}` };
export const airtableApi = axios.create({ baseURL, headers });

export function handleError({ response }) {
  console.error(response.data, response.status);
  return makeResponse(response, { statusCode: response.status });
}

export function makeResponse(response, { statusCode = 200 } = {}) {
  console.log('Response', response.data);
  return {
    statusCode,
    body: JSON.stringify(response.data),
  };
}
