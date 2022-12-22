
import Swiper from "react-id-swiper";
import Card from "./Card";
import {products} from '../../data/index';

type productType={
    src:string;
    alt:string;
    name:string;
    price:string;
    colors:string[];
}

const SwiperSection = () => {
    const swiperParams = {
        slidesPerView: 2,
        spaceBetween: 12,      
         navigation: {
            nextEl: ".swiper-button-next",
        },
    };

    return (
        <div className='product-detail__slider'>
            <Swiper
                {...swiperParams}
                renderNextButton={() => (
                    <button className='swiper-button-next'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            width={16}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M8.25 4.5l7.5 7.5-7.5 7.5'
                            />
                        </svg>
                    </button>
                )}
            >
                {products.map((product: productType, index: number) => (
                    <div key={index}>
                        <Card product={product} />
                    </div>
                ))}
            </Swiper>
        </div>
    );
};
export default SwiperSection;
