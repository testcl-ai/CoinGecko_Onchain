import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = 'CG-rRuZbUsmQjycRvmDX4F8UH6u';

export let options = {
  stages: [
    { duration: '1m', target: 10 },
    { duration: '2m', target: 100 },
    { duration: '2m', target: 500 },
    { duration: '1m', target: 0 },
  ],
};

export default function () {
  let res = http.get(`${BASE_URL}/coins/markets?vs_currency=usd&x_cg_demo_api_key=${API_KEY}`);

  check(res, {
    'Status is 200': (r) => r.status === 200,
    'Response time < 1000ms': (r) => r.timings.duration < 1000,
  });

  sleep(1);
}
