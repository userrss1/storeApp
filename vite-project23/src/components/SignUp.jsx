import React from 'react'
import { json, Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const SignUp = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    let result = await fetch("http://localhost:4001/user/signup", {
      method: "POST",
      body: JSON.stringify({
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    result = await result.json()
    console.log(result.user)
    if (result)
    {
      toast.success(result.message);
      localStorage.setItem("Users",JSON.stringify(result.user))
    }
    else {
       toast.error(result.message);
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[600px]">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                className="w-80 px-3 py-1 rounded-md border"
                type="text"
                placeholder="Enter your name"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                className="w-80 px-3 py-1 rounded-md border"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                className="w-80 px-3 py-1 rounded-md border"
                type="text"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-6 flex justify-around">
              <button className="bg-pink-500 px-3 py-1 rounded-md text-white">
                SignUp
              </button>
              <p className="text-xl">
                Have Account{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp