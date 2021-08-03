import styled from 'styled-components';
import { getImage } from '../api';

const Column = styled.div`
  padding: 0 10px;
  margin-bottom: 30px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 17px;
  padding-bottom: 9px;
  border-bottom: 1px solid #939393;
`;

const Span = styled.span`
  :not(:last-child) {
    margin-right: 30px;
  }
  img {
    height: 40px;
  }
`;

const FlexBox = styled.div`
  min-height: 100px;
  margin: 0 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  background-color: rgba(131, 131, 131, 0.3);
  border-radius: 5px;
  box-shadow: 1px 1px 6px #2d2d2d63;
`;

//logo_path

const Info = ({ production_companies, production_countries }) => {
  return (
    <>
      <Column>
        <Title>Production Companies</Title>
        <FlexBox>
          {production_companies?.map((pc) =>
            pc.logo_path === null ? (
              <Span key={pc.id}>{pc.name}</Span>
            ) : (
              <Span key={pc.id}>
                <img alt={pc.name} src={getImage(pc.logo_path)} title={pc.name} />
              </Span>
            ),
          )}
        </FlexBox>
      </Column>
      <Column>
        <Title>Production Countries</Title>
        <FlexBox>
          {production_countries?.map((pc) => (
            <Span key={pc.id}>{pc.name}</Span>
          ))}
        </FlexBox>
      </Column>
    </>
  );
};

export default Info;
