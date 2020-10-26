type Series = {
  [key: string]: string | any;
};

export default function (timeSeries: Series, dataKey: string): number[][] {
  const data = [];

  for (const key in timeSeries) {
    if (timeSeries.hasOwnProperty(key)) {
      const element = timeSeries[key];
      const time = new Date(key).getTime();
      const close = parseFloat(element[dataKey]);
      data.push([time, close]);
    }
  }
  data.reverse();

  return data;
}
