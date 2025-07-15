import { ImCamera } from "react-icons/im";
import CustomInput from "../common/custom-input";
import { useState, type SetStateAction } from "react";
import CustomButton from "../common/custom-button";
import CustomHyperlink from "../common/custom-hyperlink";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value);
  const handlePasswordChange = (e : { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div className="login-form flex flex-col items-center justify-center p-4 mx-auto md:h-screen lg:py-0">
      <div className="logo flex flex-col items-center justify-center mx-auto lg:py-0">
        <a href="/" className="flex text-2xl font-bold items-center">
          <div className="w-15 h-15 rounded-full bg-purple-600 flex items-center justify-center">
            <ImCamera className="text-4xl" color="white" />
          </div>
          <h1 className="text-3xl font-bold text-purple-600 ml-2">PhotoSphere</h1>
        </a>
        <p className="text-gray-500 mx-10 my-4">Connect with friends and the world around you.</p>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl text-purple-600 mb-4">Login to your account</h2>
          <form className="flex flex-col w-full max-w-sm">
            <CustomInput value={email} placeholder="Email or Phone" label="Email or Phone or username" onChange={handleEmailChange} />
            <CustomInput value={password} type="password" placeholder="Password" label="Password" onChange={handlePasswordChange} />
            <CustomButton onClick={handleSubmit} className="mt-4" type="submit" disabled={!email || !password}>
              Submit
            </CustomButton>
          </form>
          <div className="text-center mt-4">
            <CustomHyperlink href="/signup" normalTextBeforeLink="Don't have an account? " >
              Sign Up
            </CustomHyperlink>
            <CustomHyperlink href="/reset-password">
              Forgot Password?
            </CustomHyperlink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;