import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res){
    if(req.method !== 'POST'){
        res.json('invalid request');
        return;
    }

    const {name, phone, 
        email, street,
         city, postal, country, products} = req.body;

    await mongooseConnect();
    
    const productsIds = products.split(',');
    const uniqueIds = [...new Set(productsIds)];
    const productsInfos = await Product.find({_id: uniqueIds});
    
    let line_items = [];
    for(const productId of uniqueIds){
        const info = productsInfos.find(p => p._id.toString() === productId);
        const quantity = productsIds.filter(id => id === productId)?.length || 0;
        if(quantity > 0){
            line_items.push({
                quantity,
                price_data : {
                    currency: 'INR',
                    product_data: {name : info.title},
                    unit_amount: quantity*info.price,
                },
            });
            
        }
        
    }
    res.json({line_items});
}