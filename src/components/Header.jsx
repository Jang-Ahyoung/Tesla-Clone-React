import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const handleScroll = () => {
        burgerStatus && setBurgerStatus(!burgerStatus);
    }
    return (
        <Container>
            <a href="#ModelS">
                <img src="/images/logo.svg" alt="logo"></img>
            </a>
            <Menu>
                <a href="#ModelS" onClick={handleScroll}>model s</a>
                <a href="#Model3" onClick={handleScroll}>model 3</a>
                <a href="#ModelX" onClick={handleScroll}>model x</a>
                <a href="#ModelY" onClick={handleScroll}>model y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(!burgerStatus)}></CustomMenu>
            </RightMenu>
            <BugerMenu show={burgerStatus}>
                <CloseWrapper><CustomClose onClick={() => setBurgerStatus(!burgerStatus)}></CustomClose></CloseWrapper>
                <li><a href="#ModelS" onClick={handleScroll}>model s</a></li>
                <li><a href="#Model3" onClick={handleScroll}>model 3</a></li>
                <li><a href="#ModelX" onClick={handleScroll}>model x</a></li>
                <li><a href="#ModelY" onClick={handleScroll}>model y</a></li>
                <li><a href="#">Existiong Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Roadaster</a></li>
            </BugerMenu>
        </Container>
    )
}

export default Header;
const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 25px;
    width:100%;
    z-index:100;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding: 0 10px;
        flex-wrap:nowrap;
        cursor:pointer;
    }
    @media(max-width:798px){
        display:none;
    }
`
const RightMenu = styled.div`
    display:flex;
    align-itmes:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:10px;
        flex-wrap:nowrap;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`
const BugerMenu = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.25s;
    li{
        padding:15px 0;
        // border-bottom:1px solid rgba(0,0,0, .2);
    }
    a{
        font-weight:600;
        cursor:pointer;
    }
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`
const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`
