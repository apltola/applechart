import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import mockData from '../mock';
import styles from '../styles/Chart.module.css';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

type Props = {
  data: [];
};

const Chart = (props: Props) => {
  console.log('data.length -> ', props.data.length);
  const options: Highcharts.Options = {
    title: {
      text: 'Apple Inc. (AAPL)',
      style: {
        fontSize: '22px',
        fontWeight: 'bold',
        fontFamily: 'Avenir, Roboto, sans-serif',
      },
    },

    //rgba(124, 181, 236, 0.4);
    //rgba(133, 199, 222, 0.4);

    colorAxis: [
      {
        gridLineColor: '#000',
        gridLineWidth: 2,
        lineColor: 'red',
      },
    ],

    series: [
      {
        name: 'AAPL',
        type: 'area',
        //data: props.data,
        data: mockData,
        tooltip: {
          valueDecimals: 2,
        },
        fillOpacity: 0.4,
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, 'rgba(124, 181, 236, 1)'],
            [1, 'rgba(124, 181, 236, 0)'],
          ],
        },
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
        /* containerProps={{ style: { margin: '30px' } }} */
      />
    </div>
  );
};

export default Chart;
