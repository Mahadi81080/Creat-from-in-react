import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isChecked){
      return;
    }
    setIsSubmit(true);
  };
  return (
    <div className="bg-purple-700 h-screen w-full flex justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white w-2/5 p-5 rounded shadow-lg"
      >
        <h1 className="text-4xl mb-6 text-purple-500 text-center">
          Singup From
        </h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold text-lg">Name</span>
          </div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold text-lg">Email</span>
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold text-lg">Password</span>
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <div className="flex items-center gap-3 my-4">
          <input type="checkbox" onChange={(e)=>setIsChecked(e.target.checked)}/>
          <h3 className="font-semibold text-lg">Do you want singup</h3>
        </div>
        <div className="flex justify-end my-5">
          <button className="bg-purple-700 p-4 rounded-xl text-white">
            Sing Up
          </button>
        </div>
      </form>

      {isSubmit && (
        <div className="fixed top-0 flex justify-center items-center h-screen w-full bg-purple-500">
          <div className="w-1/2 h-1/2 rounded bg-purple-300 text-center">
            <h1 className="text-3xl text-purple-500 mb-6">You have submitted the form successfully</h1>
            <p className="text-xl mb-3">Name : {name}</p>
            <p className="text-xl mb-3">Email : {email}</p>
            <p className="text-xl mb-3">Password : {password}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
