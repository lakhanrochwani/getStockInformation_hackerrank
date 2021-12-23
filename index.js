// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = '<h1>Stock Information</h1>';

async function getStockInformation(date) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
  let findStocks = () =>
    new Promise((resolve, reject) => {
      https.get(
        `https://jsonmock.hackerrank.com/api/stocks?date=${date}`,
        (response) => {
          response.on('data', (d) => {
            const data = d.toString();
            resolve(data);
          });
        }
      );
    });
  let result = await findStocks();
  let data = JSON.parse(result).data[0];
  if (data === undefined) {
    return {};
  }
  return data;
}

getStockInformation('5-January-2000');
