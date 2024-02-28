import React from "react";
import logo from "../../assets/react.svg";
import { MdEdit } from "react-icons/md";
import avatar3 from "../../assets/img/avatar3.jpg";
import {
  AccountInput,
  AccountTitle,
  ArrowIcon,
  AtomExchange,
  AtomInput,
  Avatar,
  Button,
  CancelButton,
  CloseIcon,
  Dialog,
  Digital,
  DigitalTitle,
  HorizontalFlex,
  Tag,
  TagsContent,
  TextMid,
  TextSmall,
  TimeIcon,
  TimeInfo,
  VerticalFlex,
} from "./styles/dialog";

const AccountCont = ({
  name,
  edit = false,
}: {
  name: string;
  edit?: boolean;
}) => {
  return (
    <VerticalFlex>
      <AccountTitle>From Cosmos Hub</AccountTitle>
      <AccountInput>
        <HorizontalFlex>
          <Avatar src={logo} />
          <TextSmall>{name}</TextSmall>
        </HorizontalFlex>
        {edit ? <MdEdit /> : ""}
      </AccountInput>
    </VerticalFlex>
  );
};

const Deposit: React.FC = () => {
  return (
    <Dialog>
      <HorizontalFlex>
        <h3>Deposit ATOM</h3>
        <CloseIcon />
      </HorizontalFlex>
      <HorizontalFlex>
        <AccountCont name="atom1-xxxx" />
        <ArrowIcon />
        <AccountCont name="atom2-xxxx" edit />
      </HorizontalFlex>
      <DigitalTitle>
        <TextMid>Select amount</TextMid>
        <div>
          <TextSmall>Available</TextSmall>
          <TextMid> 2 ATOM</TextMid>
        </div>
      </DigitalTitle>
      <Digital>
        <Avatar src={avatar3} $size="40px" />
        <AtomExchange>
          <AtomInput type="text" value={2} />
          <div>
            ATOM
            <TextSmall> ≈ $1,013</TextSmall>
          </div>
        </AtomExchange>
      </Digital>
      <TagsContent>
        <Tag>Max</Tag>
        <Tag>1/2</Tag>
        <Tag>1/3</Tag>
      </TagsContent>
      <TimeInfo>
        <TimeIcon />
        Estimated time: 20 seconds
      </TimeInfo>
      <Button>Transfer</Button>
      <CancelButton>Cancel</CancelButton>
    </Dialog>
  );
};

export default Deposit;
