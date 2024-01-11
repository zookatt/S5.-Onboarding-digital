import { useState } from "react";
import Card from "./Card";

enum Image {
  TimeManagementImage = "time.svg",
  ProgrammingImage = "programming.svg",
  MeditationImage = "meditation.svg",
}
enum Color {
  Green = "#138D75",
  Gray = "#CCD1D1",
  Yellow = "#F4D03F",
}

interface Data {
  title: string;
  description: string;
  bgColor: Color;
  image: Image;
}

function App() {
  const [tutorialData] = useState<Data[]>([
    {
      title: "Dedicass muchas horas",
      description:
        "Un minimo 30 horas a la semana. Si no es suficiente, tendras que dedicar mas horas. Al princio parece imposible, pero notaras una mejora rapidamente.",
      bgColor: Color.Green,
      image: Image.TimeManagementImage,
    },
    {
      title: "Programa proyectos propios",
      description:
        "Mas vale 10 horas trabajando en proyectos propios que 10 horas mirando tutoriales. La motivacion y la implicacion en el proyecto ayudara a accelerar tu aprendizaje.",
      bgColor: Color.Gray,
      image: Image.ProgrammingImage,
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bien y desconnectar es vital. De esta manera reduciras el estres y ansiedad. Mejoraras tu concentracion y consolidaras tu aprendizaje.",
      bgColor: Color.Yellow,
      image: Image.MeditationImage,
    },
  ]);

  const [step, setStep] = useState(0);

  function nextStep(): void {
    //Ejercicio 2(pegar esta funcion)
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
        nextStep={nextStep} //Ejercicio 2(anadir esta linea de codigo)
      />
    </div>
  );
}

export default App;
