import styled from "styled-components"
import Button from "./Button";
import CartIcon from "@/icons/CartIcon";

const WhiteBox = styled.div`
    background-color: #fff;
    padding: 2%;
    height: 150px;
    text-align: center;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 10px;

    img{
        max-width: 100%;
        max-height: 110px;
    }
`;

const ProductWrapper = styled.div`
     
`;

const Title = styled.h2`
    font-weight: normal;
    font-size: 0.9rem;
    margin: 5px;
    max-width: 100%;
`;

export default function ProductBox({product}){
    return(
        <ProductWrapper>
            <WhiteBox>
                <img src = {product.images[0]} alt = ""/>
            </WhiteBox>
            <Title>{product.title}</Title>
            <Button primary><CartIcon/></Button>
        </ProductWrapper>
    )
}