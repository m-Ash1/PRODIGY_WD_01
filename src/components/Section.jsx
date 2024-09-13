import styled from "styled-components";

const StyledSection = styled.section`
  padding: 20px 0 0 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  text-transform: uppercase;
`;

export const Section = ({ name, id }) => {
  return <StyledSection id={id}> {name}</StyledSection>;
};
