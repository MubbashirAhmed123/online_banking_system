
import { useState } from "react";
import { AiFillBackward } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type ActivateType = {
    bankAccountNumber: string;
    securityPin: string

}


const ActivateInternetBanking = () => {
    const [transferDetails, setTransferDetails] = useState<ActivateType>({
        bankAccountNumber: '',
        securityPin: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const navigate=useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTransferDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { bankAccountNumber, securityPin } = transferDetails;


        const token = localStorage.getItem('token');

        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/user/internetBanking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ bankAccountNumber, securityPin }),
            });

            const result = await res.json();
            if (res.ok) {
                toast.success('Transfer successful: ' + result.message);
                setTransferDetails({ bankAccountNumber: '', securityPin: '' });
            } else {
                toast.error(result.message);
            }
        } catch (err) {
            toast.error('An error occurred');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
             <h1 className='fixed top-20 left-5 flex items-center gap-2 cursor-pointer' onClick={()=>navigate(-1)}> <AiFillBackward/> back</h1>
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-[#002244] mb-4">Activate Internet Banking</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="bankAccountNumber" className="block text-sm font-medium text-gray-700">
                            Account Number
                        </label>
                        <input
                            type="text"
                            name="bankAccountNumber"
                            id="bankAccountNumber"
                            value={transferDetails.bankAccountNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                            min="0"
                        />
                    </div>



                    <div>
                        <label htmlFor="securityPin" className="block text-sm font-medium text-gray-700">
                            Security PIN
                        </label>
                        <input
                            type="password"
                            name="securityPin"
                            id="securityPin"
                            value={transferDetails.securityPin}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex items-center justify-center px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition ${loading ? 'cursor-not-allowed opacity-75' : ''
                                }`}
                        >
                            {loading ? (
                                <FaSpinner className="animate-spin mr-2" />
                            ) : (
                                'Activate'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default ActivateInternetBanking;