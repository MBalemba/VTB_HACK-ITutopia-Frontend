import styled from "styled-components";

export const Cards = styled.div`
  margin-bottom: 50px;
`
export const H = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin-bottom: 30px;
`
export const Sliderblock = styled.div`
  height: 220px;
  margin-bottom: 53px;
`
export const CurrentCardText = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #001656;
  margin-left: 122px;
`

export const CardInfo = styled.div`
  background: rgba(0, 87, 255, 0.05);
  border-radius: 5px;
  padding: 25px 30px;
`

export const TopMenuCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Divider = styled.div`
  width: 800px;
  height: 1px;
  left: 880px;
  top: 869px;
  background: rgba(0, 22, 86, 0.1);
  margin: 25px 0px;
`


export const SpecialOffer = styled.div`

`

export const LeftInfoTopMenu = styled.div`
  display: flex;
  justify-content: space-between;
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */


  color: rgba(0, 22, 86, 0.5);
`


export const Status = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-top: 5px;
  /* identical to box height */


  color: #001A68;

`
export const ButtonsControl = styled.div`
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  width: 120px;
  height: 40px;
  margin-right: 10px;
`

export const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  left: 1640px;
  top: 802px;
  background: #747E9D;
  border-radius: 50%;
  margin-right: 10px;
`

export const Blocker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  left: 1640px;
  top: 802px;
  background: #F64E4E;
  border-radius: 50%;
`

export const BottomMenuCard = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Key = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: rgba(0, 22, 86, 0.5);

`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Dot = styled.div`
  min-width: 5px;
  min-height: 5px;
  margin: 0px 10px;
  background: rgba(0, 26, 104, 0.15);
  border-radius: 50%;
`

export const Value = styled.div`

`

export const ProgressBar = styled.div`
  width: 203px;
  height: 7px;
  background: rgba(0, 17, 68, 0.05);
  border-radius: 5px;
`

export const Loader = styled.div`
  background: #F64E4E;
  border-radius: 5px;
  height: 7px;
  width: ${({percent}) => percent + '%'};
`

export const ChangeThis = styled.div`
  cursor: pointer;
  &:hover{
    color: #0000ee;
  }
`







