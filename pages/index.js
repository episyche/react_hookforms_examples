
import { Fragment } from "react";
import { useForm } from "react-hook-form";




export default  function LoginIn() {
  const { register, handleSubmit, reset, getValues, formState: { errors }, watch, } = useForm();

  const onFormSubmit = data => console.log(data);

  return (
    <Fragment>
      <div className="bg-white rounded-xl p-8 w-full max-w-md">
        <div className=" mb-6 ">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Log In</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit((data) => { onFormSubmit(data) })}>
          <div>
            <input type="email"
              {...register('email', {
                required: 'Email is required',
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email" />
          </div>
          {errors.email && <p className='text-[15px] text-red-500 ml-[4px] '>{errors.email.message}</p>}
          <div className="relative">
            <input type="password"
              {...register('password', {
                required: 'Password is required',
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password" />
          </div>
          {errors.password && <p className='text-[15px] text-red-500 ml-[4px] '>{errors.password.message}</p>}
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"> Sign in</button>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?&nbsp;
            <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer">Sign up</span>
          </p>
        </form>
      </div>
    </Fragment>
  )
}


