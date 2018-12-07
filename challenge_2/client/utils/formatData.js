export default function (rawdata, currency) {
  const labels = Object.keys(rawdata.bpi);
  const data = [];
  labels.forEach((label) => {
    data.push(rawdata.bpi[label]);
  });
  return ({ labels, data });
}