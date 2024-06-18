import { NextResponse } from 'next/server';
import { query } from '@/app/db/db';
import { getServerSession } from 'next-auth';
import Stripe from 'stripe';
import { url } from 'inspector';
import { authOptions } from '../auth/[...nextauth]/route';

const stripe=new Stripe(process.env.SECRET_KEY);


export async function POST(request) {
    const session=await getServerSession(authOptions);
    console.log(session);
    try {
        
     

     const data = await request.json();
     console.log(data);
     
     const customer=await stripe.customers.create({
        email:session.user.email,
        name:session.user.name,
        address:{
            line1:"123 Main St",
            postal_code:"12345",
            city:"valsad",
            state:"CA",
            country:"US"
        }
    });

    const checkOutSession=await stripe.checkout.sessions.create({
        customer:customer.id,
        payment_method_types:['card'],
        mode:'payment',
        success_url:'http://localhost:3000/success?token'+customer.id,
        cancel_url:'http://localhost:3000/cancel?token'+customer.id,
        line_items:[
            {
                quantity:1,
                price_data:{
                    product_data:{
                        name:data.title,
                    },
                    currency:'inr',
                    unit_amount:data.price*100
                    
                }
            }
        ]
    });


    
     // Example: Process the data (e.g., save to the database)
     // await query('INSERT INTO products (name, price) VALUES (?, ?)', [data.name, data.price]);

     // Return a success response
     return NextResponse.json({ msg: 'Product added successfully', url:checkOutSession.url });

        
    } catch (error) {
        return NextResponse.json({ msg: 'An error occurred', error: error.message }, { status: 500 });
    }
}

