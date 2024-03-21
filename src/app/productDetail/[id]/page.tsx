// 'use client'
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from '@/utils/constant';
import ProductView from '../../components/ProductView';

export async function generateStaticParams() {
    const posts = await fetch(GET_ALL_PRODUCTS + '1').then((res) => res.json())
    return posts?.products.map((post) => ({
        id: post.id.toString(),
    }));
}

export default function ProductDetails({ params }: { params: { id: string } }) {

    const id = params.id;
    return (
        <>
        {
            params && 
            <ProductView /> 
        }
        </>
    );
}