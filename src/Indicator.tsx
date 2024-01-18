
import styled from "styled-components";


interface IndicatorProps {
    totalSteps: number;
    currentStep: number;
    onDotClick: (index: number) => void;
  }


const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  display: flex;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50rem;
  background-color: grey;
  margin: 0 5px;
`;

const ActiveDot = styled.div`
  width: 24px;
  height: 12px;
  border-radius: 50rem;
  background-color: black;
  margin: 0 5px;
`;


const StyledButton = styled.button`
  border: none;  
  background: none;  
  padding: 0;  
`;

function Indicator({ totalSteps, currentStep, onDotClick }: IndicatorProps) {
  return (
    <IndicatorContainer>
      {[...Array(totalSteps)].map((_, index) => (
        <StyledButton key={index} onClick={() => onDotClick(index)}>
          {index === currentStep ? <ActiveDot /> : <Dot />}
        </StyledButton>
      ))}
    </IndicatorContainer>
  );
}


export default Indicator;

