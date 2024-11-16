import { useForm } from "react-hook-form";
import { LoginFormData } from '../types/userType';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface LoginUserProps {
  setIsAuthenticated: (authenticated: boolean) => void;
}
const LoginUser: React.FC<LoginUserProps> = ({ setIsAuthenticated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginFormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
        const response = await fetch('http://localhost:5000/api/user/userLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            alert(result.message || 'Some error occurred.');
            return;
        }

        if (result.token) {
            localStorage.setItem('token', result.token);
            setIsAuthenticated(true); 
            toast.success(result.message || 'Login successful!');
            reset();
            navigate('/internet-banking', { replace: true }); 
        } else {
            toast.error('Login failed.');
            localStorage.removeItem('token');
        }

    } catch (error) {
        toast.error('An unexpected error occurred.');
    }
}



  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-sm text-[#5072A7] font-bold mb-6 text-center">
          Login to your account to use Internet Banking Facilities.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full p-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
              Security Pin
            </label>
            <input
              type="password"
              id="pin"
              {...register("securityPin", { required: "Security pin is required" })}
              className={`w-full p-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.securityPin ? "border-red-500" : ""
              }`}
              placeholder="Enter your Security pin"
            />
            {errors.securityPin && (
              <p className="text-sm text-red-600">{errors.securityPin.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
          <p>don't have an account ? please <Link to='/create_account' className="text-blue-600 font-semibold">create new account</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
