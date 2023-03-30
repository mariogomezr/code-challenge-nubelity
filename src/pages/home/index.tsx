import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import UserCard from "../../components/UserCard";
import { useUserInfo } from "../../hooks/useUserInfo";
import { getDOB, getFullAddress, getFullName } from "../../utils";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomePage = () => {
  const {
    data: { picture, name, dob, email, location, login, phone },
    isLoading,
  } = useUserInfo();

  return (
    <PageContainer>
      {isLoading && <CircularProgress color="secondary" />}
      {!isLoading && (
       <UserCard
       src={picture?.medium}
       name={getFullName(name?.first, name?.last)}
       dob={getDOB(dob?.date)}
       address={getFullAddress(
         location?.street?.name,
         location?.street?.number
       )}
       password={login?.password}
       phone={phone}
       email={email}
     />
      )}
    </PageContainer>
  );
};

export default HomePage;
