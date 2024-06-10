import React from 'react';
import Str2BikeSecondCard from './Str2BikeSecondCard';
import bikesixth1 from '../images/bikesixth1.png'
import colorone from '../images/color11.svg'
import colortwo from '../images/color12.svg'
import colorthree from '../images/color 13.svg'
import colorfour1 from '../images/color 14.svg'
import colorfour2 from '../images/color 24.svg'
import bikesixth2 from '../images/bikesixth2.png'

const Str2BikeSecondList = () => {
    const products = [
        {
            title: 'Electric Ace',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [bikesixth1, bikesixth2, bikesixth1, bikesixth2],
            colorImages: [colorone, colortwo, colorthree, colorfour1]
        },
        {
            title: 'Electric Ivy',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [bikesixth2, bikesixth1, bikesixth2, bikesixth1],
            colorImages: [colorone, colortwo, colorthree, colorfour2]
        }
    ];

    return (
        <div className="product-list-str2">
            {products.map((product, index) => (
                <Str2BikeSecondCard
                    key={index}
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                    images={product.images}
                    colorImages={product.colorImages}
                />
            ))}
        </div>
    );
};

export default Str2BikeSecondList;