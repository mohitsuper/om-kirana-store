import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import CategoryCard from "./ProductCategories";
import { useEffect, useState } from 'react';
import { GetCategories } from '../axois/axois';

const ShopCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await GetCategories();
                setCategories(res.data || []);
            } catch (err) {
                console.error('Failed to load categories', err);
            }
        };
        fetch();
    }, []);

    return (
        <section className="py-4 bg-[#fafafa] wow animate__animated animate__fadeInUp">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}

                <div className="flex items-center justify-center gap-4 mb-6 sm:mb-12">
                    <div className="w-16 h-0.5 bg-orange-500"></div>

                    <h2 className="text-xl text-nowrap sm:text-3xl font-bold text-slate-800">
                        Shop By Categories
                    </h2>

                    <div className="w-16 h-0.5 bg-orange-500"></div>
                </div>

                <Splide
                    options={{
                        perPage: 6,
                        gap: "20px",

                        arrows: categories.length > 6,
                        pagination: false,

                        autoplay: categories.length > 6,
                        interval: 2500,

                        breakpoints: {
                            1280: {
                                perPage: 5,
                            },
                            1024: {
                                perPage: 4,
                            },
                            768: {
                                perPage: 3,
                            },
                            640: {
                                perPage: 2,
                            },
                        },
                    }}
                >
                    {categories.map((item) => (
                        <SplideSlide key={item._id || item.id}>
                            <CategoryCard item={{
                                id: item._id || item.id,
                                name: item.categoryName || item.name,
                                slug: item.slug,
                                image: item.imageUrl?.url
                            }} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
};

export default ShopCategories;