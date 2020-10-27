import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import styles from '../styles/Chart.module.css';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

type Props = {
  data: number[][];
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

    series: [
      {
        name: 'AAPL',
        id: 'aapl',
        type: 'line',
        data: props.data,
        tooltip: {
          valueDecimals: 2,
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
      />
    </div>
  );
};

export default Chart;
