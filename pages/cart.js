import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";


const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 40px;
    margin-top: 40px;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;

const Empty = styled.div`
    padding: 30px;
    display : flex;
    flex-direction: column;
    gap: 20px;
`;

const ProductInfoCell = styled.td`
   padding: 10px 0;
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

const ProductImageBox = styled.div`
    max-width: 160px;
    max-width: 160px;
    padding: 10px;
    border: 1px solid rgba(0, 0,0, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-context: center;
    margin-right: 20px;
    img{
        max-width: 140px;
        max-height: 140px;
    }
`;

export default function CartPage(){
    const {cartProducts} = useContext(CartContext); 
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.post('/api/cart', {ids : cartProducts}).then(response => {
            setProducts(response.data);
        })
    }, [cartProducts]);
    return(
        <>
            <Header/>
            <Center>
            <ColumnsWrapper>
                <Box>
                <h2>Cart</h2>
                    {!cartProducts?.length  && (
                        <Empty>
                        <div>Your cart is empty : {'('} </div>
                        <ButtonLink primary href = {'/'}>Shop now!</ButtonLink>
                        </Empty>
                    )}
                    {products?.length > 0 && (
                        <Table>
                            <thead>
                                <tr>
                                    <th>Products</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            {products.map(product => (
                                <tr>
                                    <ProductInfoCell>
                                        <ProductImageBox><img src = {product.images[0]} alt = ""/></ProductImageBox>
                                        <div>{product.title}</div>
                                    </ProductInfoCell> 
                                    <td> {cartProducts.filter(id => id ===
                                        product._id).length}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    )}
                </Box>
                {!!cartProducts?.length && (
                    <Box>
                    <h2>Order Information</h2>
                    <input required type = "text" placeholder = "Name"/>
                    <input required type = "number" placeholder = "Phone Number"/>
                    <input required type = "text" placeholder = "Address 1"/>
                    <inout required type = "text" placeholder = "Adress 2"/>
                    <Button block primary>Continue to payment</Button>
                </Box>
                )}
            </ColumnsWrapper>
            </Center>
        </>
    );
}