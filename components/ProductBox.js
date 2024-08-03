import styled from "styled-components"
import Button from "./Button";
import CartIcon from "@/icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const WhiteBox = styled(Link)`
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

const Title = styled(Link)`
    font-weight: normal;
    font-size: 0.9rem;
    font-weight: bold;
    max-width: 100%;
    color: inherit;
    text-decoration: none;
`;

const ProductInfoBox  = styled.div`
     margin-top: 10px;
`;

const Price = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;
const PriceRow = styled.div`
    display: flex;
    gap: 2px;
    align-items: center;
    justify-content: space-between;

`;


export default function ProductBox({product}){
    const url = '/product/'+product._id;
    const {addProduct} = useContext(CartContext);

    return(
        <ProductWrapper>
            <WhiteBox href = {url}>
                <img src = {product.images[0]} alt = ""/>
            </WhiteBox>
            <ProductInfoBox>
                <Title href = {url}>{product.title}</Title>
                <PriceRow>
                    <Price>
                        ₹{product.price}
                    </Price>
                    <Button primary outline onClick = {() => addProduct(product._id)}>Add to Cart</Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    )
}