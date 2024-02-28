import React from "react";
import styled from "styled-components";
import { Theme } from "../theme/theme";
import logo from "../assets/react.svg";
import { IoIosArrowRoundForward, IoMdTime } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import avatar3 from "../assets/img/avatar3.jpg";
interface StyledComponentProps {
  theme: Theme;
}
const TextMid = styled.span`
  font-size: 18px;
  color: #667586;
`;
const TextSmall = styled.span`
  font-size: 16px;
  color: #707e8c;
`;
const Dialog = styled.div<StyledComponentProps>`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  width: 40%;
  border-radius: 6px;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin: 100px auto;
`;
const HorizontalFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const VerticalFlex = styled("div")`
  display: flex;
  flex-direction: column;
  width: 46%;
`;
const AccountInput = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  height: 40px;
  background-color: ${(props) => props.theme.bglv1};
`;
const AccountTitle = styled.h4`
  margin-bottom: 10px;
`;
const Avatar = styled.img<{ $size?: string }>`
  height: ${(props) => props.$size || "30px"};
  width: ${(props) => props.$size || "30px"};
  border-radius: 50%;
  margin-right: 10px;
`;
const ArrowIcon = styled(IoIosArrowRoundForward)`
  position: relative;
  bottom: -30px;
  color: ${(props) => props.theme.textColor};
`;
const CloseIcon = styled(IoClose)`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bglv2};
  padding: 6px;
`;
// digital area
const DigitalTitle = styled(HorizontalFlex)`
  margin-top: 30px;
  margin-bottom: 10px;
`;
const Digital = styled(HorizontalFlex)`
  height: 50px;
  line-height: 50px;
  border: 1px solid #dde2e7;
  border-radius: 6px;
  padding: 0 20px;
`;
const AtomInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
`;
const AtomExchange = styled(HorizontalFlex)`
  flex-grow: 1;
  margin-left: 10px;
  border-left: 1px solid #dde2e7;
  padding-left: 20px;
`;
// tags
const TagsContent = styled(HorizontalFlex)`
  justify-content: end;
  margin-top: 10px;
  margin-bottom: 30px;
`;
const Tag = styled.div`
  padding: 5px;
  color: #667586;
  margin-left: 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.bglv2};
`;
const TimeInfo = styled(HorizontalFlex)`
  background-color: ${(props) => props.theme.bglv1};
  line-height: 40px;
  border-radius: 4px;
  justify-content: start;
  padding: 0 10px;
`;
const TimeIcon = styled(IoMdTime)`
  margin-right: 10px;
`;
const Button = styled.div`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.primaryColor};
  margin: 20px 0;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
`;
const CancelButton = styled(TextSmall)`
  text-align: center;
  display: block;
`;
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
