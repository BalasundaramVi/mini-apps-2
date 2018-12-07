import Chart from 'chart.js';

export default function (chartPreference, labels, data, currency) {
  const ctx = document.getElementById('crypto_chart');
  const cryptoChart = new Chart(ctx, {
    type: chartPreference,
    data: {
      labels,
      datasets: [{
        label: currency,
        data,
        backgroundColor: [
          'coral',
        ],
        borderColor: [
          'black',
        ],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}
