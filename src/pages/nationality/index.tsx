import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import UserCard from "../../components/UserCard";
import { useNationalityUsers } from "../../hooks/useNationalityUsers";
import { getDOB, getFullAddress, getFullName } from "../../utils";
import uuid from "react-uuid";

const NationalityContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  padding: 50px;
`;

const NationalityPage = () => {
  const { nationality } = useParams();

  const { data, isLoading } = useNationalityUsers(nationality);

  return (
    <NationalityContainer>
      {isLoading && <CircularProgress color="secondary" />}
      {!isLoading &&
        data.map(({ picture, dob, login, location, phone, email, name }) => (
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
            key={uuid()}
          />
        ))}
    </NationalityContainer>
  );
};

export default NationalityPage;
