type Props = {
  data: object;
};

const IndexPage = (props: Props) => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <div>server status: {props.data}</div>
  </div>
);

export async function getServerSideProps() {
  const res = await fetch('http://159.65.123.22:3001/status');
  const data = await res.text();
  return {
    props: { data },
  };
}

export default IndexPage;
