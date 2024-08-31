import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../public/list.json"
import Slider from "react-slick";
import Cards from './Cards';

const Freebook = () => {
   const [book, setBook] = useState([]);
   useEffect(() => {
     const getData = async () => {
       try {
         let data = await fetch("http://localhost:4001/book");
         data = await data.json();
         console.log(data);
         const value = data.filter((item) => item.category === "Free");
         setBook(value);
       } catch (error) {
         console.log(error);
       }
     };
     getData();
   }, []);
  
  console.log(book)
   var settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 3,
     initialSlide: 0,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };
  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4">
      <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
        non suscipit, iure neque earum?
      </p>
      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
           ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook