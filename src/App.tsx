import { useState } from "react";
import Card from "./Card";


interface Data {
  title: string;
  description: string;
  bgColor: string;
  image: string;
}

function App() {
  const [tutorialData] = useState<Data[]>([
    {
      title: "Dedicass muchas horas",
      description:
        "Un minimo 30 horas a la semana. Si no es suficiente, tendras que dedicar mas horas. Al princio parece imposible, pero notaras una mejora rapidamente.",
      bgColor: '#138D75',
      image: 'time.svg',
    },
    {
      title: "Programa proyectos propios",
      description:
        "Mas vale 10 horas trabajando en proyectos propios que 10 horas mirando tutoriales. La motivacion y la implicacion en el proyecto ayudara a accelerar tu aprendizaje.",
      bgColor: '#CCD1D1',
      image: 'programming.svg',
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bien y desconnectar es vital. De esta manera reduciras el estres y ansiedad. Mejoraras tu concentracion y consolidaras tu aprendizaje.",
      bgColor: '#F4D03F',
      image: 'meditation.svg',
    },
  ]);

  const [step, setStep] = useState(0);

  function nextStep(): void {
    setStep((prev) => prev + 1);
  }

  const currentCardData = tutorialData[step];

  return (
    <div>
      <Card
        title={currentCardData.title}
        description={currentCardData.description}
        bgColor={currentCardData.bgColor}
        image={currentCardData.image}
        nextStep={nextStep}
      />
    </div>
  );
}

export default App;
