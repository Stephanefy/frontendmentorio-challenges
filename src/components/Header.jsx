import { useEffect } from 'react';
import styled from 'styled-components'

function Header({ ipData, setSearchParams, handleSearch, error }) {

  

  const onChange = (e) => {

    console.log(e.target.value)

    let params =  {};
    const reDomain = new RegExp(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/)
    const reIpAdress = new RegExp(/(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/)

    if (reDomain.test(e.target.value)) {
        params = {domain: e.target.value}
    }

    if (reIpAdress.test(e.target.value)) {
        params = {ip: e.target.value}
    }
     setSearchParams(params)
  }


  return (
    <HeaderContainer>
        <HeaderContent>
            <HeaderTitle>IP Address Tracker</HeaderTitle>
            <HeaderForm onSubmit={handleSearch}>
                <HeaderInput 
                type="text" 
                placeholder='Search for any IP address or domain' 
                onChange={onChange}
                />
                <HeaderFormButton></HeaderFormButton>
            </HeaderForm>
        </HeaderContent>
        <AddressDetailsContainer>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <AddressDetailsList>
                <li>
                    <div>
                        <h1>IP Address</h1>
                        <p>{ipData?.ip}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h1>Location</h1>
                        <p>{ipData?.location?.country}{ipData?.location ? ' , ' : ''}{ipData?.location?.region}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h1>TimeZone</h1>
                        <p>{ipData?.location?.timezone}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h1>ISP</h1>
                        <p>{ipData?.isp}</p>
                    </div>
                </li>
            </AddressDetailsList>
        </AddressDetailsContainer> 
    </HeaderContainer>
  )
}



export default Header




const HeaderContainer = styled.header`
    width: 100%;
    height: 300px;
    position: relative ;
    background-color: #282c34;
    background-image: url('../images/pattern-bg.png');
    background-size: cover;

`
const HeaderContent = styled.div`
    width: 100% ;
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center ;
    margin: 0 ;
`


const HeaderTitle = styled.h1`
    color: #fff;
    font-size: 32px;
    margin-bottom: 2em ;
`

const HeaderForm = styled.form`
    width: 30%;
    display: flex;
    
`

const HeaderFormButton = styled.button`
        border: none ;
        display: inline-block ;
        width: 80px ;
        height: 70px ;
        background-color: #000 ;
        color: #fff ;
        border-top-right-radius: 10px ;
        border-bottom-right-radius: 10px ;
        display: grid;
        place-items: center ;
        cursor: pointer ;
        &:after {
        content: '\f054';
        font-family: "Font Awesome 5 Free"; font-weight: 900;
        }
`


const HeaderInput = styled.input`
    width: 100%;
    padding: 2em ;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px ;
`


const AddressDetailsContainer = styled.div`
    width: 70% ;
    height: 200px ;
    position: absolute;
    background-color: #fff ;
    top: 65% ;
    left: 15% ;
    z-index: 1000;
    border-radius: 10px ;
`


const AddressDetailsList = styled.ul`
    width: 90% ;
    display: flex ;
    margin: auto ;

    li {
        flex-basis: 30%;
        height: 100% ;
        list-style-type: none ;
        display: flex ;
        align-items: center ;
        margin-top: 2rem;

        &:before {
            display: inline-block ;
            content: '';
            width: 1px;
            height: 70px;
            background-color: grey ;
            margin-right: 2em ;
            margin-top: 2em ;
        }

        div {

            display: flex ;
            margin-top: 1rem ;
            flex-direction: column ;
            align-items: center ;

            h1 {
                color: #000 ;
                font-size: 1em;
            }
            p {
                width: 100% ;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
`

const ErrorMessage = styled.p`
    width: 100% ;
    text-align: center ;
    display: block ;
    color: red ;
    margin: 0 auto ;
`