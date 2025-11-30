import React from 'react';
import Image from 'next/image';
import { List } from 'lucide-react';
import Link from 'next/link';

function ProductItem({ product }) {
    return (
        <Link href={`/products/${product?.id}`} className='block p-1 border border-transparent hover:border-teal-400 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer h-full'>
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-lg">
                <Image
                    src={product?.attributes?.images?.data?.[0]?.attributes?.url || product?.image}
                    alt={product?.attributes?.title || product?.name || "Product Image"}
                    fill
                    className='object-cover hover:scale-105 transition-transform duration-500'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className='flex items-center justify-between p-3 rounded-b-lg bg-gray-50 dark:bg-gray-800'>
                <div className=''>
                    <h2 className='text-[12px] font-medium line-clamp-1 text-gray-900 dark:text-white'>
                        {product?.attributes?.title || product?.name}
                    </h2>
                    <h2 className='text-[10px] text-gray-400 flex gap-1 items-center'>
                        <List className='w-3 h-3' /> {product?.attributes?.category || "Category"}
                    </h2>
                </div>
                <h2 className='text-gray-900 dark:text-white font-bold'>
                    {product?.attributes?.price || product?.price}
                </h2>
            </div>
        </Link>
    );
}

export default ProductItem;