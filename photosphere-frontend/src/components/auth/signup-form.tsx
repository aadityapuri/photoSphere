import { ImCamera } from "react-icons/im";
import CustomButton from "../common/custom-button";
import CustomInput from "../common/custom-input";
import { useState } from "react";
import CustomHyperlink from "../common/custom-hyperlink";

function SignUpForm(){
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleFullNameChange = (e: { target: { value: string; }; }) => setFullName(e.target.value);
  const handleEmailChange = (e: { target: { value: string; }; }) => setEmail(e.target.value);
  const handleUsernameChange = (e : { target: {value: string; }; }) => setEmail(e.target.value);
  const handlePasswordChange = (e: { target: { value: string; }; }) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e: { target: { value: string; }; }) => setConfirmPassword(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };
  return (
    <div className="login-form flex flex-col items-center justify-center p-4 mx-auto md:h-screen lg:py-0">
      <div className="logo flex flex-col items-center justify-center mx-auto lg:py-0">
        <a href="/" className="flex text-2xl font-bold items-center">
          <div className="p-3 rounded-full bg-purple-600 mb-2 flex flex-col items-center justify-center">
            <ImCamera className="text-4xl" color="white" />
          </div>
          <h1 className="text-3xl font-bold text-purple-600">PhotoSphere</h1>
        </a>
        <p className="text-gray-500 mx-10 my-4">Connect with friends and the world around you.</p>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl text-purple-600 mb-4">Create a new account</h2>
          <form className="flex flex-col w-full max-w-sm">
            <CustomInput placeholder="Full Name" label="Full Name" onChange={handleFullNameChange} />
            <CustomInput placeholder="Email or Phone" label="Email or Phone" onChange={handleEmailChange} />
            <CustomInput type="text" placeholder="Username" label="Username" onChange={handleUsernameChange} />
            <CustomInput type="password" placeholder="Password" label="Password" onChange={handlePasswordChange} />
            <CustomInput type="password" placeholder="Confirm Password" label="Confirm Password" onChange={handleConfirmPasswordChange} />
            <CustomButton className="mt-4" type="submit" onClick={handleSubmit} disabled={!fullName || !email || !password || !confirmPassword || password !== confirmPassword}>
              Sign Up
            </CustomButton>
          </form>
          <div className="text-center mt-4">
            <CustomHyperlink href="/login" normalTextBeforeLink="Have an account? ">
              Login
            </CustomHyperlink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpForm;