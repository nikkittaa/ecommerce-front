import styled from "styled-components";
import Center from "./Center";
import PrimaryBtn from "./Button";
import Button from "./Button";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;
export default function Featured(){
    return (
        <Bg>
           <Center>
                <Wrapper>
                    <Column>
                        <div>
                        <Title>Pro anywhere</Title>
                        <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.</Desc>
                            <Button outline white size = "l">Read More</Button>
                            <Button primary size = "l">Add to cart</Button>
                        </div>
                    </Column>
                    <Column>
                        <img src = "https://nikita-next-ecommerce.s3.eu-north-1.amazonaws.com/1722105954227.png" alt = ""/>
                    </Column>
                </Wrapper>
           </Center>
        </Bg>
    );
}