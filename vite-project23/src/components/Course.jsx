import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cards from './Cards';

const Course = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        let data = await fetch("http://localhost:4001/book")
        data = await data.json()
        console.log(data)
        setBook(data)
      } catch (error) {
         console.log(error)
          }
    }
    getData()
  },[])
  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4 ">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="md:text-4xl text-2xl ">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus
          accusamus accusantium sed architecto odio, nisi expedita quas quidem
          nesciunt debitis dolore non aspernatur praesentium assumenda sint
          quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut.
          Nobis quisquam reiciendis sunt quis sed magnam consequatur!
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 px-4 py-2 rounded-md text-white hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {book.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Course