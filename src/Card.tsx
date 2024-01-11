
interface Props {
  // anado interface Props para definir tipo de props  con TypeScript
  title: string;
  description: string;
  bgColor: string;
  image: string;
 
}


function Card(props: Props) {
  const cardColor = {
    backgroundColor: props.bgColor,
  };
  return (
    <>
     <div style={cardColor}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.image} />
        </div>
    </>
  );
}

export default Card;
