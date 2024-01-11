import 'bootstrap-icons/font/bootstrap-icons.css';

enum Icon {
  arrowRightFill = 'arrow-right-circle-fill.svg',
  arrowRight = 'arrow-right-circle-fill.svg',
  arrowLeft = 'arrow-right-circle-fill.svg',

} 

interface Props {
  // anado interface Props para definir tipo de props  con TypeScript
  title: string;
  description: string;
  bgColor: Color;
  image: Image;
  nextStep: () => void;
}

enum Color { // anado enum Color para definir tipo de atributo bgColor con TypeScript
  Green = "#138D75",
  Gray = "#CCD1D1",
  Yellow = "#F4D03F",
}

enum Image { // anado enum Image para definir tipo de atributo image con TypeScript
  TimeManagementImage = "time.svg",
  ProgrammingImage = "programming.svg",
  MeditationImage = "meditation.svg",
}

function Card(props: Props) {
  const imageContainerStyle = {
    backgroundColor: props.bgColor,
    padding: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  };
  const cardStyle = {
    borderRadius: '20px', // redondeo de los bordes 
  };
  const iconPath = Icon.arrowRightFill;

  const iconStyle ={
    width: 50,
    height: 50,
    
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="card col-md-2 mt-5" style={cardStyle}>
        <div style={imageContainerStyle}>
          <img className="card-img-top mt-5 mb-5" src={props.image} alt="Card Image" />
        </div>
        <div className="card-body justify-content-center" style={{ padding: '20px' }}>
          <h4 className="card-title fs-5">{props.title}</h4>
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-end">
          <button className="btn btn-primary-outline" onClick={props.nextStep}>
            <span></span> 
            <img src={iconPath} alt="Arrow Right Icon" style={iconStyle} />
          </button>
          </div>
          {/*//Ejercicio 2(anadir esta linea de codigo)*/}
        </div>
      </div>
    </div>
  );
}

export default Card;
