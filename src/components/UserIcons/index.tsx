import styled, { keyframes } from "styled-components";
import {
  FiUser,
  FiMail,
  FiCalendar,
  FiMap,
  FiPhone,
  FiLock,
} from "react-icons/fi";
import { IconType } from "react-icons";

const animateDown = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const animateUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    cursor: pointer;

    & > svg:first-child {
      animation: ${animateUp} 0.5s forwards;
    }

    & > svg:last-child {
      animation: ${animateDown} 0.5s forwards;
    }
  }

  & > svg:last-child {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 10px 0;
`;

type IconProps = {
  onMouseOver: any;
  id: string;
};

const HoverIcon = ({
  Icon,
  color,
  ...props
}: {
  Icon: IconType;
  color: string;
}) => {
  return (
    <IconWrapper>
      <Icon size={24} {...props} />
      <Icon size={24} color={color} {...props} />
    </IconWrapper>
  );
};

const UserIcon = (props: IconProps) => (
  <HoverIcon Icon={FiUser} color="#0077FF" {...props} />
);
const MailIcon = (props: IconProps) => (
  <HoverIcon Icon={FiMail} color="#0077FF" {...props} />
);
const CalendarIcon = (props: IconProps) => (
  <HoverIcon Icon={FiCalendar} color="#0077FF" {...props} />
);
const MapIcon = (props: IconProps) => (
  <HoverIcon Icon={FiMap} color="#0077FF" {...props} />
);
const PhoneIcon = (props: IconProps) => (
  <HoverIcon Icon={FiPhone} color="#0077FF" {...props} />
);
const LockIcon = (props: IconProps) => (
  <HoverIcon Icon={FiLock} color="#0077FF" {...props} />
);

type UserIconsT = {
  onHover: any;
};

const UserIcons = ({ onHover }: UserIconsT) => {
  return (
    <IconContainer>
      <UserIcon onMouseOver={onHover} id="user" />
      <MailIcon onMouseOver={onHover} id="mail" />
      <CalendarIcon onMouseOver={onHover} id="calendar" />
      <MapIcon onMouseOver={onHover} id="map" />
      <PhoneIcon onMouseOver={onHover} id="phone" />
      <LockIcon onMouseOver={onHover} id="lock" />
    </IconContainer>
  );
};

export default UserIcons;
