import { useState } from "react";
import styled from "styled-components";
import UserIcons from "../UserIcons";

type UserCardT = {
  name?: string;
  src?: string;
  dob?: string;
  address?: string;
  phone?: string;
  password?: string;
  email?: string;
};

type InfoMap = {
  [key: string]: {
    subtext: string;
    name?: string;
  };
};

const CardContainer = styled.div`
  height: 600px;
  width: 500px;
  border: black 2px solid;
  position: relative;
`;

const TopDiv = styled.div`
  background-color: lightgrey;
  border-bottom: 2px grey solid;
  height: 35%;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  border: 1px grey solid;
`;

const ImgContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65%;
`;

const Subtext = styled.p`
  color: lightgrey;
  font-size: 20px;
`;

const Name = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const UserCard = ({
  name,
  src,
  dob,
  address,
  phone,
  password,
  email,
}: UserCardT) => {
  const [hoveredElement, setHoveredElement] = useState("user");

  const onHover = (event: any) => {
    if (hoveredElement !== event.target.id && event.target.id) {
      setHoveredElement(event.target.id);
    }
  };

  const infoMap: InfoMap = {
    user: { subtext: "Hi, My name is", name: name },
    calendar: { subtext: "My birthday is", name: dob },
    mail: { subtext: "My email is", name: email },
    map: { subtext: "My address is", name: address },
    phone: { subtext: "My phone is", name: phone },
    lock: { subtext: "My password is", name: password },
  };

  const info = infoMap[hoveredElement];

  return (
    <CardContainer>
      <TopDiv />
      <MainContainer>
        <ImgContainer>
          <StyledImg src={src} alt={`a picture of the user: ${name}`} />
        </ImgContainer>
        <Subtext>{info?.subtext}</Subtext>
        <Name>{info?.name}</Name>
        <UserIcons onHover={onHover} />
      </MainContainer>
    </CardContainer>
  );
};

export default UserCard;
