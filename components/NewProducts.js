import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    padding-top: 0px;
`;

const Title = styled.h2`
    font-size: 2rem;
`;

export default function NewProducts({products}){
    return(
        <Center>
        <Title>New Arrivals</Title>
            <ProductsGrid>
            {products?.length > 0 && products.map(product => (
                <ProductBox product = {product}/>
            ))
            }
        </ProductsGrid>
        </Center>
    );
}