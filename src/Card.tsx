
interface Props {
  // anado interface Props para definir tipo de props  con TypeScript
  title: string;
  description: string;
  bgColor: string;
  image: string;
  nextStep: () => void;
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
      <div>
      <button onClick={props.nextStep}>Next</button>  
      </div>
      
    </>
  );
}

export default Card;
