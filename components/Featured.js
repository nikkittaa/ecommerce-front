import styled from "styled-components";
import Center from "./Center";
import PrimaryBtn from "./Button";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "@/icons/CartIcon";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: 0.9rem;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;


const Column = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;
export default function Featured({product}){
    return (
        <Bg>
           <Center>
                <Wrapper>
                    <Column>
                        <div>
                        <Title>{product.title}</Title>
                        <Desc>{product.description}</Desc>
                            <ButtonsWrapper>
                            <ButtonLink href = {'/products/'+product._id} outline = {1} white = {1} size = "l">Read More</ButtonLink>
                            <Button primary = {1} size = "l">
                            <CartIcon/>
                            Add to cart </Button>
                            </ButtonsWrapper>
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