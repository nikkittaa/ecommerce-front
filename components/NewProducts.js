import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";


const Title = styled.h2`
    font-size: 2rem;
`;

export default function NewProducts({products}){
    return(
        <Center>
        <Title>New Arrivals</Title>
            <ProductsGrid products = {products}/>
        </Center>
    );
}