import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
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

const QuantityLabel = styled.span`
    padding: 0 3px;
`;

export default function CartPage(){
    const {cartProducts, addProduct, removeProduct, clearCart} = useContext(CartContext); 
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [streetAddress, setStreet] = useState('');
    const [postalCode, setPostal] = useState('');
    const [country, setCountry] = useState('');
    const [isSuccess,setIsSuccess] = useState(false);

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', {ids:cartProducts})
              .then(response => {
                setProducts(response.data);
              })
          } else {
            setProducts([]);
          }
    }, [cartProducts]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
          }
          if (window?.location.href.includes('success')) {
            setIsSuccess(true);
            clearCart();
          }
    });

    function moreOfThisProduct(id){
        addProduct(id);
    }

    function lessOfThisProduct(id){
        removeProduct(id);
    }

    async function  goToPayment(){
        const response = await axios.post('/api/checkout/' ,{
            name, email, city, streetAddress, postalCode, country,
            cartProducts,
        });

        if(response.data.url){
            window.location = response.data.url;
        }
    }

    let total = 0;
    for(const productId of cartProducts){
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price;
    }

   
    if(isSuccess){
            return(
                <>
                    <Header/>
                    <Center>
                        <ColumnsWrapper>
                            <Box>
                            <h1>Thanks for your order!</h1>
                            <p>We'll email you the details regarding your order!</p>
                            <ButtonLink primary href = {'/'}>Shop More!</ButtonLink>
                            </Box>
                        </ColumnsWrapper>
                    </Center>
                </>
            )
    }
    
    
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
                                    <td>
                                    <Button size = "s" onClick = {() => lessOfThisProduct(product._id)}>-</Button>
                                    <QuantityLabel>{cartProducts.filter(id => id ===
                                        product._id).length}</QuantityLabel>
                                     <Button size = "s" onClick = {() => moreOfThisProduct(product._id)}>+</Button>   
                                    </td>
                                    <td>₹ {cartProducts.filter(id => id ===
                                        product._id).length *product.price}<br/>
                                        Unit Price : {product.price}
                                        </td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td><strong>Total: </strong> ₹{total}</td>
                            </tr>
                            </tbody>
                        </Table>
                    )}
                </Box>
                {!!cartProducts?.length && (
                    <Box>
                    <h2>Order Information</h2>
                   
                        <Input required type = "text" 
                            placeholder = "Name" 
                            value = {name} 
                            name = "name"
                            onChange ={ev => setName(ev.target.value)}/>
                        <Input required type = "text" 
                            placeholder = "Phone Number"   
                            value = {phone} 
                            name = "phone"
                            onChange ={ev => setPhone(ev.target.value)}/>
                        <Input required type = "email" 
                            placeholder = "Email" 
                            value = {email} 
                            name = "email"
                            onChange ={ev => setEmail(ev.target.value)}/>
                        <Input required type = "text" 
                            placeholder = "Street Address" 
                            value = {streetAddress} 
                            name = "street"
                            onChange ={ev => setStreet(ev.target.value)}/>
                        <Input required type = "text" 
                            placeholder = "City" 
                            value = {city} 
                            name = "city"
                            onChange ={ev => setCity(ev.target.value)}/>
                        <Input required type = "text" 
                            placeholder = "Postal Code" 
                            value = {postalCode}
                            name = "postal" 
                            onChange ={ev => setPostal(ev.target.value)}/>
                        <Input required type = "text" 
                            placeholder = "Country" 
                            value = {country} 
                            name = "country"
                            onChange ={ev => setCountry(ev.target.value)}/>
                        <input type = 'hidden' 
                            name = 'products'
                            value = {cartProducts.join(',')}/>
                        <Button type = "submit" block primary 
                            onClick = {goToPayment}>Continue to payment</Button>
                   
                </Box>
                )}
            </ColumnsWrapper>
            </Center>
        </>
    );
}