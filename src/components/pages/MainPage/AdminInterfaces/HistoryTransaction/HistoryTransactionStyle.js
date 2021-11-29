import styled from "styled-components";


export const ContainerHistory = styled.div`
  width: 1600px;
  margin: 0 auto;
  padding-top: 102px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Ph = styled.div`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`


export const Block = styled.div`
  width: 860px;
  margin-bottom: 30px;
`

export const Data = styled.div`
  margin-bottom: 5px;
`

export const TransactionItems = styled.div`
`

export const TrItem = styled.div`
  padding: 15px;
  width: 860px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IcoDown = () => {
    return <div>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_64_389)">
                <circle cx="12.9976" cy="12" r="12" fill="white"/>
                <path
                    d="M24.9976 12C24.9976 8.8174 23.7333 5.76516 21.4828 3.51472C19.2324 1.26428 16.1802 0 12.9976 0C9.81496 0 6.76271 1.26428 4.51228 3.51472C2.26184 5.76516 0.997559 8.8174 0.997559 12C0.997559 15.1826 2.26184 18.2348 4.51228 20.4853C6.76271 22.7357 9.81496 24 12.9976 24C16.1802 24 19.2324 22.7357 21.4828 20.4853C23.7333 18.2348 24.9976 15.1826 24.9976 12ZM16.1416 7.7955C16.2107 7.72387 16.2935 7.66673 16.385 7.62742C16.4765 7.58812 16.5749 7.56743 16.6745 7.56656C16.7741 7.5657 16.8729 7.58467 16.965 7.62238C17.0572 7.66009 17.1409 7.71578 17.2114 7.7862C17.2818 7.85662 17.3375 7.94036 17.3752 8.03253C17.4129 8.12471 17.4319 8.22347 17.431 8.32305C17.4301 8.42264 17.4094 8.52105 17.3701 8.61255C17.3308 8.70406 17.2737 8.78681 17.2021 8.856L11.0581 15H15.2101C15.409 15 15.5997 15.079 15.7404 15.2197C15.881 15.3603 15.9601 15.5511 15.9601 15.75C15.9601 15.9489 15.881 16.1397 15.7404 16.2803C15.5997 16.421 15.409 16.5 15.2101 16.5H9.24756C9.04865 16.5 8.85788 16.421 8.71723 16.2803C8.57658 16.1397 8.49756 15.9489 8.49756 15.75V9.7875C8.49756 9.58859 8.57658 9.39782 8.71723 9.25717C8.85788 9.11652 9.04865 9.0375 9.24756 9.0375C9.44647 9.0375 9.63724 9.11652 9.77789 9.25717C9.91854 9.39782 9.99756 9.58859 9.99756 9.7875V13.9395L16.1416 7.7955Z"
                    fill="#3E3E3E"/>
            </g>
            <defs>
                <clipPath id="clip0_64_389">
                    <rect width="24" height="24" fill="white" transform="translate(0.997559)"/>
                </clipPath>
            </defs>
        </svg>
    </div>
}

export const IcoStyle = styled.div`
  margin-right: 10px;
`

export const IcoUp = () => {
    return <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_70_441)">
            <circle cx="12.9976" cy="12" r="12" transform="rotate(-180 12.9976 12)" fill="white"/>
            <path
                d="M0.997559 12C0.997559 15.1826 2.26184 18.2348 4.51228 20.4853C6.76271 22.7357 9.81496 24 12.9976 24C16.1802 24 19.2324 22.7357 21.4828 20.4853C23.7333 18.2348 24.9976 15.1826 24.9976 12C24.9976 8.8174 23.7333 5.76515 21.4828 3.51472C19.2324 1.26428 16.1802 0 12.9976 0C9.81496 0 6.76271 1.26428 4.51228 3.51472C2.26184 5.76515 0.997559 8.8174 0.997559 12ZM9.85356 16.2045C9.78437 16.2761 9.70161 16.3333 9.61011 16.3726C9.51861 16.4119 9.42019 16.4326 9.32061 16.4334C9.22102 16.4343 9.12227 16.4153 9.03009 16.3776C8.93792 16.3399 8.85418 16.2842 8.78376 16.2138C8.71334 16.1434 8.65765 16.0596 8.61994 15.9675C8.58223 15.8753 8.56326 15.7765 8.56412 15.6769C8.56499 15.5774 8.58568 15.4789 8.62498 15.3874C8.66429 15.2959 8.72143 15.2132 8.79306 15.144L14.9371 9H10.7851C10.5861 9 10.3954 8.92098 10.2547 8.78033C10.1141 8.63968 10.0351 8.44891 10.0351 8.25C10.0351 8.05109 10.1141 7.86032 10.2547 7.71967C10.3954 7.57902 10.5861 7.5 10.7851 7.5H16.7476C16.9465 7.5 17.1372 7.57902 17.2779 7.71967C17.4185 7.86032 17.4976 8.05109 17.4976 8.25V14.2125C17.4976 14.4114 17.4185 14.6022 17.2779 14.7428C17.1372 14.8835 16.9465 14.9625 16.7476 14.9625C16.5486 14.9625 16.3579 14.8835 16.2172 14.7428C16.0766 14.6022 15.9976 14.4114 15.9976 14.2125V10.0605L9.85356 16.2045Z"
                fill="#32C665"/>
        </g>
        <defs>
            <clipPath id="clip0_70_441">
                <rect width="24" height="24" fill="white" transform="translate(24.9976 24) rotate(-180)"/>
            </clipPath>
        </defs>
    </svg>

}

export const TransactionFIRM = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Picture = styled.div`
  margin-right: 10px;
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Name = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #000000;
`

export const Time = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.3);
`

export const Person = styled.div`
    display: flex;
  justify-content: space-between;
`

export const IcoPerson = styled.div`
    margin-right: 10px;
`

export const Fio = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #001144;
`

export const Departament = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
`

export const Category = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #002DB2;
`

export const Card = styled.div`
  width: 80px;
  height: 24px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(0, 45, 178, 0.05);
  border-radius: 5px;
`

export const CardIco = styled.img`
    margin-right: 5px;
`


export const CardNumber = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #001A68;
`


export const Price = styled.div`
`

export const PriceValue = styled.div`
`

export const Currency = styled.div`
`

export const Divider = styled.div`
  width: 860px;
  height: 1px;
  margin-top: 4px;
  margin-bottom: 5px;
  background: rgba(0, 17, 68, 0.1);
`

