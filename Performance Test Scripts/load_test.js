import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = 'CG-rRuZbUsmQjycRvmDX4F8UH6u';

export let options = {
  vus: 100,
  duration: '1m',
};

export default function () {
  let res = http.get(`${BASE_URL}/simple/price?ids=ethereum&vs_currencies=usd&x_cg_demo_api_key=${API_KEY}`);

  check(res, {
    'Status code is 200': (r) => r.status === 200,
    'Response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
