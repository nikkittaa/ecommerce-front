import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
    background-color: #222;
`;

const Logo = styled(Link) `
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 10px;
    }
`;

const NavLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
    font-size: 1rem;

    @media (max-width: 768px){
            font-size: 0.8rem;
        }
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 15px;

    @media (max-width: 768px){
        gap: 10px;
    }
`;
export default function Header(){
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href = {'/'}>SwiftShop</Logo>
                    <StyledNav>
                        <NavLink href = {'/'}>Home</NavLink>
                        <NavLink href = {'/products'}>All Products</NavLink>
                        <NavLink href = {'/categories'}>Categories</NavLink>
                        <NavLink href = {'/account'}>Account</NavLink>
                        <NavLink href = {'/cart'}>Cart (0)</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>       
        </StyledHeader>
    )
}