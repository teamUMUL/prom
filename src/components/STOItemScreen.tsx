import styled from "styled-components"
import { STOItem } from "../models/STOItem"
import { LTOItem } from "../models/LTOItem";

const STOWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 12px;
  padding: 4px 25px;
  width: 100%;
  &:hover{
    background-color: #1264A3;
    color: white;
  };
`;

const STOName = styled.span`
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px; // 오른쪽 화살표와의 간격 유지
  width:90%;
`;

const STOStateCircle = styled.div<{ state: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.state) {
      case "진행중":
        return "#40B9FC;"; // 하늘색
      case "준거 도달":
        return "#34C648;" // 연두색
      case "중지":
        return "#e4533a"; // 붉은 색
      default:
        return "#cecece"; // 기본값
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
`;

type STOItemScreenProps = {
  item: STOItem,
  onClickSTO: (sto: STOItem) => void
}

export default function STOItemScreen({ item, onClickSTO }: STOItemScreenProps) {

  return (
    <STOWrapper onClick={() => onClickSTO(item)}>
      <STOStateCircle state={item.state} />
      <STOName>
        {item.name}
      </STOName>
    </STOWrapper>
  )
}