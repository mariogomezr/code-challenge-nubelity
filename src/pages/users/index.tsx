import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DropdownMenu, { DropdownOptionsT } from "../../components/DropdownMenu";
import { PageContainer } from "../home";

const NATIONALITIES = [
  {
    displayText: "Austria",
    value: "au",
  },
  {
    displayText: "Brasil",
    value: "br",
  },
  {
    displayText: "Canada",
    value: "ca",
  },
] as DropdownOptionsT;

const StyledDiv = styled.div`
  border: 2px black solid;
  border-radius: 5px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  margin: 10px;
`;

const UsersPage = () => {
  const navigate = useNavigate();

  const onClick = (nationality: string) => {
    navigate(`/users/${nationality}`);
  };

  return (
    <PageContainer>
      <StyledDiv>
        <StyledH2>Select the nationality you would like to choose</StyledH2>
        <DropdownMenu
          displayText="Available nationalities"
          options={NATIONALITIES}
          onOptionClick={onClick}
        />
      </StyledDiv>
    </PageContainer>
  );
};

export default UsersPage;
