import React from 'react';
import { Input, Password } from '../components/common/fields';

import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Auth from '../api/common/Auth';
import { useState } from 'react';
import AuthContext from '../contex/AuthProvider';
import { useContext } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import  Error from "../components/loginError/Error";
const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required('Please enter password'),
});
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  // const { abc } = useParams();
  const { setAuth } = useContext(AuthContext);
  const [errorText, setErrorText] = useState('');
  // // console.log(abc);
  const onSubmit = async (data) => {
    try {
      const res = await Auth.login(data);
      // console.log(res);
      setAuth(res.data.data.token.access_token);
      localStorage.setItem('kcx', res.data.data.token.refresh_token);
      switch (res.data.data.meta.type) {
        case 'student':
          navigate('student/dashboard');
          break;
        case 'parent':
          navigate('parent/dashboard');
          break;
        case 'teacher':
          navigate('teacher/dashboard');
          break;
        default:
          navigate('admin/dashboard');
      }
    } catch (err) {
      err.response?.status == 422
        ? setErrorText('Invalid Credentials')
        : setErrorText('Server error');
    }
  };
  return (
    <>
      {/* {abc && <Error error={abc} />} */}
      <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center  bg-primary-grey-100 text-primary-grey  text-">
        <div className=" md:flex-row box-border flex flex-col items-center justify-between w-11/12 max-w-5xl">
          <div className="md:mr-3 md:max-w-md inline-flex flex-col justify-center flex-grow max-w-sm -mt-8">
            <Link to="/">
              <img src="/logoHeader.png" width={100} alt="logo"></img>
            </Link>

            <h1 className="text-primary-grey-600 my-12 text-2xl font-semibold text-left">
              Amrit College Of Science And Technology
            </h1>
          </div>
          <div className=" flex-grow max-w-sm">
            <form
              className=" rounded-xl box-border px-5 py-5 mx-auto my-3 bg-white shadow-2xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              {errorText && <span className="text-red-600">{errorText}</span>}
              <Input
                placeholder="username"
                register={register}
                required={true}
                className="mb-4"
                name="username"
                errors={errors}
              />
              <br />
              <Password
                placeholder="Password"
                name="password"
                register={register}
                errorText="Please enter password"
                errors={errors}
                className="mb-4"
                required={true}
              />
              {/* 
              <Checkbox
                label="Remember me:"
                name="remember"
                register={register}
                className="mt-3"
                id="remember_me"
              /> */}
              <br />
              <input
                className=" focus:outline-none primary_btn w-full mb-5"
                type="submit"
                value="Login"
              />
              <Link
                to="forgot-password"
                replace={true}
                className="text-primary-base focus:outline-none focus:ring-2 focus:ring-primary-base block text-center"
              >
                Forgot password?
              </Link>
            </form>
            <div className=" pt-8 text-center">
              <p className=" max-w-md">
                Use the application according to policy rules. Any kinds of
                violations will be subject to sanctions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
