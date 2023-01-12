import CardItem from "./cardsItem";

const Cards = (props) => {
  return (
    <>      
        {
          props.data.map((item, index) => {
            return (
              <CardItem
                data={item}
                key={index}
              />
            )
          })
        }    
    </>
  );
}

export default Cards;