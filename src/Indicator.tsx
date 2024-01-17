
import styled from "styled-components";

interface IndicatorProps {
    totalSteps: number;
    currentStep: number;
  }


const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50rem;
  background-color: grey;
  margin: 0 5px;
`;

const ActiveDot = styled(Dot)`
  width: 24px;
  height: 12px;
  border-radius: 50rem;
  background-color: black;
  margin: 0 5px;
`;


function Indicator({ totalSteps, currentStep }: IndicatorProps) {
  return (
    <IndicatorContainer>
      {Array.from({ length: totalSteps }).map((_, index) =>
        index === currentStep ? <ActiveDot key={index} /> : <Dot key={index} />
      )}
    </IndicatorContainer>
  );
}

export default Indicator;