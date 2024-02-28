import styled from "styled-components";
import { Theme } from "../../../theme/theme";
import { IoIosArrowRoundForward, IoMdTime } from "react-icons/io";
import { IoClose } from "react-icons/io5";
interface StyledComponentProps {
  theme: Theme;
}

export const TextMid = styled.span`
  font-size: 18px;
  color: #667586;
`;
export const TextSmall = styled.span`
  font-size: 16px;
  color: #707e8c;
`;
export const Dialog = styled.div<StyledComponentProps>`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  width: 40%;
  border-radius: 6px;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin: 100px auto;
`;
export const HorizontalFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const VerticalFlex = styled("div")`
  display: flex;
  flex-direction: column;
  width: 46%;
`;
export const AccountInput = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  height: 40px;
  background-color: ${(props) => props.theme.bglv1};
`;
export const AccountTitle = styled.h4`
  margin-bottom: 10px;
`;
export const Avatar = styled.img<{ $size?: string }>`
  height: ${(props) => props.$size || "30px"};
  width: ${(props) => props.$size || "30px"};
  border-radius: 50%;
  margin-right: 10px;
`;
export const ArrowIcon = styled(IoIosArrowRoundForward)`
  position: relative;
  bottom: -30px;
  color: ${(props) => props.theme.textColor};
`;
export const CloseIcon = styled(IoClose)`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bglv2};
  padding: 6px;
`;
// digital area
export const DigitalTitle = styled(HorizontalFlex)`
  margin-top: 30px;
  margin-bottom: 10px;
`;
export const Digital = styled(HorizontalFlex)`
  height: 50px;
  line-height: 50px;
  border: 1px solid #dde2e7;
  border-radius: 6px;
  padding: 0 20px;
`;
export const AtomInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
`;
export const AtomExchange = styled(HorizontalFlex)`
  flex-grow: 1;
  margin-left: 10px;
  border-left: 1px solid #dde2e7;
  padding-left: 20px;
`;
// tags
export const TagsContent = styled(HorizontalFlex)`
  justify-content: end;
  margin-top: 10px;
  margin-bottom: 30px;
`;
export const Tag = styled.div`
  padding: 5px;
  color: #667586;
  margin-left: 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.bglv2};
`;
export const TimeInfo = styled(HorizontalFlex)`
  background-color: ${(props) => props.theme.bglv1};
  line-height: 40px;
  border-radius: 4px;
  justify-content: start;
  padding: 0 10px;
`;
export const TimeIcon = styled(IoMdTime)`
  margin-right: 10px;
`;
export const Button = styled.div`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.primaryColor};
  margin: 20px 0;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
`;
export const CancelButton = styled(TextSmall)`
  text-align: center;
  display: block;
`;
