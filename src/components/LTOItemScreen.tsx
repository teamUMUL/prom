import styled from "styled-components"
import { LTOItem } from "../models/LTOItem"
import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import STOItemScreen from "./STOItemScreen";
import { darken } from "polished";
import { useDispatch } from "react-redux";
import { setSelectedLTO } from "../reducers/ltoReducer";
import { STOItem } from "../models/STOItem";
import { setSelectedSTO } from "../reducers/stoReducer";

const LTOItemWrapper = styled.div<{ state: string }>`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;
  background-color: ${props => {
    switch (props.state) {
      case "진행중":
        return "#C0E9EF"; // 하늘색
      case "완료":
        return "#CCEFC0"; // 연두색
      case "중지":
        return "#EFC0C0"; // 붉은 색
      default:
        return "#cecece"; // 기본값
    }
  }};
  &:hover{
    background-color: ${props => {
    const baseColor = (() => {
      switch (props.state) {
        case "진행중":
          return "#C0E9EF"; // 하늘색
        case "완료":
          return "#CCEFC0"; // 연두색
        case "중지":
          return "#EFC0C0"; // 붉은 색
        default:
          return "#cecece"; // 기본값
      }
    })();
    return darken(0.1, baseColor)
  }}
  }
`;

const LTONameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const LTOName = styled.span`
  text-align: start;
  user-select: none;
`;

const Arrow = styled.span<{ isOpen: boolean }>`
  display: inline-block;
  margin-right: 20px;
  transition: transform 0.3s ease;
  transform: rotate(${props => props.isOpen ? '90deg' : '0deg'});
`;

type LTOItemProps = {
  ltoItem: LTOItem,
}

export default function LTOItemScreen({ ltoItem }: LTOItemProps) {
  const [isOpen, setIsOpen] = useState(true);

  const dispatch = useDispatch();

  const handleSelectLTO = () => {
    dispatch(setSelectedLTO(ltoItem))
    dispatch(setSelectedSTO(null))
  };

  const handleSelectSTO = (sto: STOItem) => {
    dispatch(setSelectedSTO(sto))
  };

  return (
    <LTOItemWrapper state={ltoItem.state}>
      <LTONameWrapper onClick={() => { setIsOpen(!isOpen); handleSelectLTO() }}>
        <Arrow isOpen={isOpen}>
          <MdPlayArrow />
        </Arrow>
        <LTOName>
          {ltoItem.name}
        </LTOName>
      </LTONameWrapper>
      {isOpen ? ltoItem.stoList?.map((sto) => { return <STOItemScreen item={sto} onClickSTO={(sto) => { handleSelectLTO(); handleSelectSTO(sto); }} /> }) : null}
    </LTOItemWrapper>
  )
}

