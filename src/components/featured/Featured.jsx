import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
`;

const Item = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 25px;
`;

const Featured = () => {
  return (
    <Container>
      <Item>
        <Img src="https://source.unsplash.com/random/1" />
        <TitleContainer>
          <h1>Dublin</h1>
          <p>123 properties</p>
        </TitleContainer>
      </Item>
      <Item>
        <Img src="https://source.unsplash.com/random/2" />
        <TitleContainer>
          <h1>Dublin</h1>
          <p>123 properties</p>
        </TitleContainer>
      </Item>
      <Item>
        <Img src="https://source.unsplash.com/random/3" />
        <TitleContainer>
          <h1>Dublin</h1>
          <p>123 properties</p>
        </TitleContainer>
      </Item>
    </Container>
  );
};

export default Featured;
