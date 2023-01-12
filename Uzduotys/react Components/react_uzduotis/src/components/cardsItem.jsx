const CardItem = ({data}) => {
    return (
      <div className="card">
        <img src={data.image} alt="Card" />
        <p>{data.text}</p>
      </div>
    );
  }
export default CardItem;