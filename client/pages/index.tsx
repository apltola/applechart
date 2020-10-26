import Chart from '../components/Chart';

type Props = {
  data: [];
};

const IndexPage = (props: Props) => {
  return <Chart data={props.data} />;
};

export async function getServerSideProps() {
  const res = await fetch('http://159.65.123.22:3001/api/daily');
  //const res = await fetch('http://localhost:3001/api/daily');
  const data = await res.json();
  return {
    props: { data },
  };
}

export default IndexPage;
