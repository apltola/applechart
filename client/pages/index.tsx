import Chart from '../components/Chart';

type Props = {
  data: object;
};

const IndexPage = (props: Props) => (
  <div>
    <Chart data={props.data} />
  </div>
);

export async function getServerSideProps() {
  //const res = await fetch('http://159.65.123.22:3001/api/query/daily');
  const res = await fetch('http://localhost:3001/api/daily');
  const data = await res.json();
  return {
    props: { data },
  };
}

export default IndexPage;
