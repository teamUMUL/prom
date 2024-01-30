import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DomainItem } from '../models/DomainItem';
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


const DropdownContainer = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 2;
  border-bottom: 0.8px solid #949494;
`;

const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F3F3F3;
  width: 100%;
  height: 100%;
  color: black;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #e6e6e6;
  }
`;

const DropdownButtonText = styled.span`
  flex-grow: 1; // flex 아이템이 남은 공간을 채우도록 설정
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 10px; // 오른쪽 화살표와의 간격 유지
  text-align: start;
`;

const Arrow = styled.span<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: transform 0.3s ease;
  transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
  transform-origin: center;
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  /* position: absolute; */
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  overflow-y: scroll;
  border-radius: 8px;
  max-height: 300px;
`;

const DropDownItem = styled.a<{ isSelected: boolean }>`
  color: black;
  position: relative;
  z-index: 10;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  width: 100%;
  text-align: center;
  background-color: ${props => props.isSelected ? `#ececec` : `#f9f9f9`};
  border-bottom: 0.5px solid #bababa;
  &:hover {
    background-color: #e2e2e2
  }

`;
type DropDownListProps = {
  items: DomainItem[],
  // selectedDomain: DomainItem | null,
  setSelectedDomain: (domain: DomainItem) => void
}

export default function DomainDropDownSelector({ items, setSelectedDomain }: DropDownListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const selectedDomain = useSelector((state: RootState) => state.domain.selectedDomain);


  useEffect(() => {
    // 외부 클릭을 감지하는 함수
    setSelectedDomain(items[0])

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // 드롭다운 외부를 클릭하면 닫힘
      }
    }

    // 전역 클릭 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <DropdownButtonText>{"발달영역 / " + selectedDomain?.name}</DropdownButtonText>
        <Arrow isOpen={isOpen}>
          <IoIosArrowDown />
        </Arrow>
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {items.map((item, index) => {
          return <DropDownItem isSelected={selectedDomain === item} onClick={() => {
            setSelectedDomain(item);
            setIsOpen(false)
          }}>{item.name}</DropDownItem>
        })}
      </DropdownContent>
    </DropdownContainer>
  );
}

