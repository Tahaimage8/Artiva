import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category =async () => {

    const res = await fetch('https://artiva-ai.vercel.app/category.json')
    const categories = await res.json();
    console.log(categories)
    return (
        <div className='mb-5 space-x-3'>
            {categories.map(Category=> <Link href={`?category=${Category.name.toLowerCase()}`} key={Category.id}><Button variant='outline' size='sm' >{Category.name}</Button></Link>)}
        </div>
    );
};

export default Category;