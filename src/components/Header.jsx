import { useEffect } from 'react';
import styled from 'styled-components';
import bgImage from '../assets/pattern-bg.png';

function Header({ ipData, setSearchParams, handleSearch, error, inputRef, adBlockDetected }) {

  

  const onChange = (e) => {


    let params =  {};
    const reDomain = new RegExp(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/)
    const reIpAdress = new RegExp(/(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/)


    if (reDomain.test(e.target.value) === true) {
        params = {domain: e.target.value}
        setSearchParams(params)

    }

    if (reIpAdress.test(e.target.value) === true) {


        params = {ip: e.target.value}
        setSearchParams(params)
    }
  }


  return (
    <HeaderContainer>
        <HeaderContent>
            <HeaderTitle>IP Address Tracker</HeaderTitle>
            {
                !adBlockDetected && (
                    <HeaderForm onSubmit={handleSearch}>
                        <HeaderInput 
                        ref={inputRef}
                        type="text" 
                        placeholder='Search for any IP address or domain' 
                        onChange={onChange}
                        />
                        <HeaderFormButton></HeaderFormButton>
                    </HeaderForm>
                )
            }

        </HeaderContent>
        {
            !adBlockDetected && (
                <AddressDetailsContainer>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <AddressDetailsList>
                <li>
                    <div>
                        <h2>IP Address</h2>
                        <p>{ipData?.ip}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Location</h2>
                        <p>{ipData?.location?.country}{ipData?.location ? ' , ' : ''}{ipData?.location?.region}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Timezone</h2>
                        <p>{ipData?.location?.timezone && 'UTC '} {ipData?.location?.timezone}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>ISP</h2>
                        <p>{ipData?.isp}</p>
                    </div>
                </li>
            </AddressDetailsList>
        </AddressDetailsContainer> 
            )
        }

    </HeaderContainer>
  )
}







const HeaderContainer = styled.header`
    width: 100%;
    height: 300px;
    position: relative ;
    background-color: #282c34;
    background-image: url(${bgImage});
    background-size: cover;

`
const HeaderContent = styled.div`
    width: 100% ;
    height: auto ;
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center ;
    margin: 0 ;
`


const HeaderTitle = styled.h1`
    margin-top: 1em;
    margin-bottom: .8em ;
    color: #fff;
    font-size: 32px;
`

const HeaderForm = styled.form`
    width: 90% ;
    display: flex;

    @media (min-width: 768px) {
    width: 33%;
  }
    
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
    padding: 0 2em ;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px ;
    font-size: 18px;
    &::placeholder {
        font-size: 18px ;
    }
`


const AddressDetailsContainer = styled.div`
    width: 90% ;
    height: 400px ;
    position: absolute;
    background-color: #fff ;
    top: 65% ;
    left: 5% ;
    z-index: 1000;
    border-radius: 10px ;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 40px 0px;
    @media (min-width: 768px) {
        width: 70% ;
        left: 15%;
        height: 200px ;
    }
`


const AddressDetailsList = styled.ul`
    width: 100% ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    padding: 0 ;
    li {
        list-style-type: none ;
        text-align: center ;


        div {
            h2 {
                font-size: 10px;
                color: hsl(0, 0%, 59%);
                text-transform: capitalize;

            }
            p {
                font-size: 22px;
                font-weight: 700;
            }

        }
    }


    @media (min-width: 768px) {
    
    flex-direction: row ;
    width: 90% ;
    margin: auto ;
    
    
    li {
        flex-basis: 30%;
        height: 100% ;
        list-style-type: none ;
        display: flex ;
        align-items: center ;
        margin-top: 2rem;
        text-align: none ;

        &:first-child { 
            p {
                text-align: left;
            }
        }
        
        &:nth-child(n+2) {
            &:before {
                display: inline-block ;
                content: '';
                width: 1px;
                height: 70px;
                background-color: hsl(0, 0%, 59%);
                margin-right: 2em ;
                margin-top: 2em ;
            }
    
        }

        div {

            display: flex ;
            margin-top: 1rem ;
            flex-direction: column ;
            align-items: start ;

            h2 {
                text-align: left ;
                font-size: 1em;
            }
            p {
                width: 100% ;
                font-size: 24px;
                font-weight: bold;
            }
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

export default Header
