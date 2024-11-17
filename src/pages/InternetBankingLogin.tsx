import { useForm } from "react-hook-form";
import { ActivateInternetBanking } from '../types/userType';
import { toast } from "react-toastify";
import { AiFillBackward } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { url } from "../baseUrl";

const InternetBankingLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ActivateInternetBanking>();

  const navigate=useNavigate()

  const onSubmit = async (data: ActivateInternetBanking) => {
    try {
      const response = await fetch(`${url}/api/user/internetBanking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || 'Some error occurred.');
        return;
      }

      toast.success(result.message || 'Internet Banking registration successful.');
      reset(); 

    } catch (error) {
      toast.error('An unexpected error occurred.');
    }
  };

  return (
    <>
    fsjfhvjd
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
   
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-sm text-[#002244] font-bold mb-6 text-center">
          Activate your Internet Banking facilities by using the credentials below
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Account Number Input */}
          <div>
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              {...register("bankAccountNumber", { required: "Account number is required" })}
              className={`w-full p-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.bankAccountNumber ? "border-red-500" : ""
              }`}
              placeholder="Enter your account number"
            />
            {errors.bankAccountNumber && (
              <p className="text-sm text-red-600">{errors.bankAccountNumber.message}</p>
            )}
          </div>

          {/* Security Pin Input */}
          <div>
            <label htmlFor="securityPin" className="block text-sm font-medium text-gray-700">
              Security Pin
            </label>
            <input
              type="password"
              id="securityPin"
              {...register("securityPin", { required: "Security pin is required" })}
              className={`w-full p-2 mt-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.securityPin ? "border-red-500" : ""
              }`}
              placeholder="Enter your Security Pin"
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
              Activate
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default InternetBankingLogin;

