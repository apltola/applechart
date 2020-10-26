type Props = {
  data: object;
};

const Chart = (props: Props) => {
  const renderData = () => {
    if (!props.data) {
      return 'nulli';
    }
    console.log(props.data);
    return 'jeejee data';
  };

  return (
    <div>
      <h1>chart</h1>
      <div>{renderData()}</div>
    </div>
  );
};

export default Chart;
