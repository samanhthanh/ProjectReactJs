import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{
          "background-image":
            "url(https://i.imgur.com/Hip5s6W.png)"
        }}
      >
        <form onSubmit={handleSubmit(onSubmitHandler)} className="flex items-center justify-center min-h-screen text-gray-600 body-font" >
          <div className="w-96 bg-gray-100 rounded-lg p-8 flex flex-col text-center">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
            <br />
            <div className="relative mb-2">
              <label style={{color:'red'}}>Enter Email1 :</label>
              <input {...register("email")} 
              placeholder="email..." 
              type="email" required 
              className="m-1"/>
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <label>Enter Password :</label>
              <input
                {...register("password")}
                placeholder="password..."
                type="password"
                required
               className="m-1"
              />
            </div>

            <p>{errors.password?.message}</p>
            <br />

            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;