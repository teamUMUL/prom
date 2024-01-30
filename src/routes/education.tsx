import styled from "styled-components"
import { DomainData } from "../components/DomainData";
import DomainDropDownSelector from "../components/DomainDropDownSelector";
import { useEffect, useState } from "react";
import { LTOItem } from "../models/LTOItem";
import { STOItem } from "../models/STOItem";
import { DomainItem } from "../models/DomainItem";
import { LTOData } from "../components/LTOData";
import { STOData } from "../components/STOData";
import LoadingScreen from "../components/LoadingScreen";
import LTOItemScreen from "../components/LTOItemScreen";
import { darken } from "polished";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDomain } from "../reducers/domainReducer";
import { RootState } from "../store/store";



const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
`;

const Selector = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 95vh;
  background: #F3F3F3;
  border-right: 0.8px solid #949494;
`;

const DomainSelector = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0px -1px 0px 0px rgba(29, 28, 29, 0.30) inset;
  border-bottom: 0.8px solid #949494;
`;

const LTOWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  overflow-y: scroll;
`;

const LTOList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;

`;

const LTOAddButton = styled.button`
  display: flex;
  user-select: none;
  font-size: 15px;
  height: 5vh;
  margin: 5px 10px;
  border-radius: 10px;
  border: 1px solid #CECECE;  
  background: #FFF;
  text-align: center;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: ${darken(0.1, "#ffffff")}
  };
  cursor: pointer;
`;

const SelectedLTOAndSTOWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectedLTO = styled.div`
  width: 80vw;
  height: 50px;
  border-bottom: 0.8px solid #949494;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SelectedLTOName = styled.span`
  width: 70%;
  font-size: 18px;
  margin-left: 16px;
  text-align: start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SelectedLTOButtonsWrapper = styled.div`
  

`;

const SelectedSTO = styled.div`
  width: 80vw;
  height: 60px;
  border-bottom: 0.8px solid #949494;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SelectedSTOStateCircle = styled.div<{ state: string }>`
  width: 18px;
  height: 18px;
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



const SelectedSTOInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-left: 16px;
`;

const SelectedSTONameAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  justify-content: center;
  align-items: start;
`;

const SelectedSTONameAndDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: start;
  width: 100%;
  height: 50%;
  gap: 10px;
`;

const SelectedSTOSuccessDate = styled.span`
  color: var(--grayscale-gray, #616061);
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px; /* 113.333% */
`;

const SelectedSTOName = styled.span`
  color: var(--grayscale-black, #1D1C1D);
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 146.667% */
  text-align: start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 16px;
  max-width:74%;
`;

const SelectedSTODescription = styled.span`
  width: 100%;
  height: 50%;
  color: var(--grayscale-black, #1D1C1D);
  /* Body/.Body | Regular */
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 146.667% */
  text-align: start;
  margin-left: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SelectedSTOButtonsWrapper = styled.div`
  
`;

export default function Education() {

  const [domainList, setDomainList] = useState<DomainItem[]>([])
  const [ltoList, setLTOList] = useState<LTOItem[]>([])
  const [stoList, setSTOList] = useState<STOItem[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // const selectedDomain = useSelector((state: RootState) => state.domain.selectedDomain);

  const selectedLTO = useSelector((state: RootState) => state.lto.selectedLTO);
  const selectedSTO = useSelector((state: RootState) => state.sto.selectedSTO);

  const handleSelectDomain = (domain: DomainItem) => {
    dispatch(setSelectedDomain(domain));
  };

  useEffect(() => {
    setDomainList(DomainData);
    setLTOList(LTOData);
    setSTOList(STOData);
    console.log("finsish")
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }


  return (

    <Wrapper>
      <Selector>
        <DomainSelector>
          <DomainDropDownSelector items={domainList} setSelectedDomain={(domain) => { handleSelectDomain(domain) }} />
        </DomainSelector>
        <LTOWrapper>
          <LTOList>
            {ltoList.map((lto) => {
              return <LTOItemScreen ltoItem={lto}></LTOItemScreen>
            })}
          </LTOList>
        </LTOWrapper>
        <LTOAddButton onClick={e => { }}> LTO 추가 </LTOAddButton>
      </Selector>

      <SelectedLTOAndSTOWrapper>
        <SelectedLTO>
          <SelectedLTOName>{selectedLTO?.name}</SelectedLTOName>
          <SelectedLTOButtonsWrapper></SelectedLTOButtonsWrapper>
        </SelectedLTO>

        <SelectedSTO>
          <SelectedSTOInfoWrapper>
            <SelectedSTOStateCircle state={selectedSTO?.state ? selectedSTO?.state : ""} />
            <SelectedSTONameAndDescription>
              <SelectedSTONameAndDateWrapper>
                <SelectedSTOName>{selectedSTO?.name}</SelectedSTOName>
                <SelectedSTOSuccessDate>{selectedSTO?.successDate}</SelectedSTOSuccessDate>
              </SelectedSTONameAndDateWrapper>
              <SelectedSTODescription>{selectedSTO?.description}</SelectedSTODescription>
            </SelectedSTONameAndDescription>
          </SelectedSTOInfoWrapper>

          <SelectedSTOButtonsWrapper>

          </SelectedSTOButtonsWrapper>
        </SelectedSTO>

      </SelectedLTOAndSTOWrapper>

    </Wrapper>
  )
}