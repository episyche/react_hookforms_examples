import { Fragment } from "react"
import { useForm } from "react-hook-form"


export default  function Signup() {
    const { register, handleSubmit, getValues, reset, formState: { errors }, watch, } = useForm();
     const onFormSubmit  = data => console.log(data);

    return (
        <Fragment>
            <div className="bg-white rounded-xl p-8 w-full max-w-md">
                <div className=" mb-6 ">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit((data) => { onFormSubmit(data)})}>
                    <div>
                        <input
                            id='firstNameId'
                            {...register('first_name', {
                                required: 'First name is required', pattern: {
                                    value: /^[A-Za-z\s]+$/,  // Regular expression to allow only alphabet characters and spaces
                                    message: 'Only alphabet characters are allowed'
                                }
                            })}
                            placeholder='First name'

                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.first_name && <p className='text-[15px] text-red-500 ml-[4px] '>{errors.first_name.message}</p>}
                    </div>
                    <div>
                        <input
                            id='lastNameId'
                            {...register('last_name', {
                                required: 'Last name is required', pattern: {
                                    value: /^[A-Za-z\s]+$/,  // Regular expression to allow only alphabet characters and spaces
                                    message: 'Only alphabet characters are allowed'
                                }
                            })}
                            placeholder='Last name'
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.last_name && <p className='text-[15px] text-red-500 ml-[4px] '>{errors.last_name.message}</p>}
                    </div>
                    <div>
                        <input type="email"
                            id='email'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,  // Improved email regex
                                    message: 'Please enter a valid email address'
                                }
                            })}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    {errors.email && <p className='text-[15px] text-red-500 ml-[4px] '>{errors.email.message}</p>}
                    <div className="relative">

                        <input type="password" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            id='password'
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                                    message: 'Password must be at least 8 characters long, with at least one lowercase letter, one uppercase letter, one number, and one special character.'
                                }
                            })}
                            placeholder="Create your passwords" />
                    </div>
                    {errors.password && <p className='text-[15px] text-red-500 ml-[4px] '>{errors.password.message}</p>}
                    <div className="relative">
                        <input type="password"
                            id='confirm_password'
                            {...register('confirm_password', {
                                required: 'password is required',
                                validate: (match) => {
                                    const password = getValues("password")
                                    return match === password || "Passwords should match"
                                },
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Confirm password" />
                    </div>
                    {errors.confirm_password && <p className='text-[15px] text-red-500 ml-[4px] '>{errors.confirm_password.message}</p>}
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"> Sign up</button>
                </form>
            </div>
    </Fragment>
    )
}