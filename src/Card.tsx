import 'bootstrap-icons/font/bootstrap-icons.css';

interface Props {
  // anado interface Props para definir tipo de props  con TypeScript
  title: string;
  description: string;
  bgColor: string;
  image: string;
  nextStep: () => void;
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

  //icons
  const iconPath = 'arrow-right-circle-fill.svg';
  const dot1 = 'dot.svg';
  const dot2 = 'dot2.svg';
  const selected = 'hand-index-thumb-fill.svg';

  const iconNextStyle = {
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
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img src={selected} alt="hand" />
              <img src={dot1} alt="dot1" />
              <img src={dot2} alt="dot2" />
            </div>
            <button className="btn btn-primary-outline" onClick={props.nextStep}>
              <span></span>
              <img src={iconPath} alt="Arrow Right Icon" style={iconNextStyle} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;

