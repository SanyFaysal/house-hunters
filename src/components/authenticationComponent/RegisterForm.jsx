import { Link } from "react-router-dom";


const RegisterForm = () => {
    return (
        <>
              <div className=" grid grid-cols-3 gap-5">
            <div>
            <label htmlFor="">Full Name</label><br />
            <input type="text" required placeholder="Enter your full name" className="border px-3 py-2 w-full rounded-lg"/> 
            </div>
            <div >
            <label htmlFor="">Role</label><br />
            <select name="" id=""required  className="border px-3 py-2 w-full rounded-lg">
                <option value="houseOwner">House Owner</option>
                <option value="houseRenter">House Renter</option>
            </select>
            </div>
            <div >
            <label htmlFor="">Phone Number</label><br />
            <input type="text"required placeholder="Enter your phone number"  className="border px-3 py-2 w-full rounded-lg"/> 
            </div>
            <div >
            <label htmlFor="">Email</label><br />
            <input required type="text" placeholder="Enter your email" className="border px-3 py-2 w-full rounded-lg"/> 
            </div>
            <div >
            <label htmlFor="">Password</label><br />
            <input required type="text" placeholder="*********"  className="border px-3 py-2 w-full rounded-lg"/> 
            </div>
            <div>
                <br />
                <input type="submit" value="Register " className="px-3 py-2 bg-green-200 hover:bg-green-500 hover:text-white  text-green-500 font-semibold w-full rounded-lg my-auto"/>
            </div>
            </div>
             <div className="mt-10">
        <p className="text-center ">ALready have an account? <Link to='/login'><span className="text-green-500">Login to your account </span></Link></p>
      </div>
      </>
    );
};

export default RegisterForm;