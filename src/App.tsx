import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateNewAccount from './pages/CreateNewAccount';
import LoginUser from './pages/LoginUser';
import ProtectedRoute from './components/ProtectedRoute';
import SeeBalance from './pages/SeeBalance';
import InternetBankingDashboard from './components/InternetBankingDashboard';
import TransferAmount from './pages/TransferAmount';
import DepositeAmount from './pages/DepositeAmount';
import ActivateInternetBanking from './pages/ActivateInternetBanking';
import Transactions from './components/Transactions';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import ChangePin from './pages/ChangePin';
import About from './pages/About';
import Contact from './pages/Contact';
import { url } from './baseUrl';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${url}/auth`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                });

                if (response.ok) {
                    setIsAuthenticated(true);
                } else {
                    localStorage.removeItem("token");
                }
            } catch (error) {
                console.error("Authentication error:", error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [isAuthenticated]); 

    if (loading) return <div>Loading...</div>;

    return (
        <>
        <ToastContainer position='top-center'/>
        <Navbar/>

            <Routes>
                <Route path='/login' element={<LoginUser  setIsAuthenticated={setIsAuthenticated}/>} />
                <Route path='/' element={<Home />} />
                <Route path='create_account' element={<CreateNewAccount/>}/>
                <Route path="/internet-banking/*" element={<ProtectedRoute isAuthenticated={isAuthenticated} loading={loading} />}>
                    <Route path="" element={<InternetBankingDashboard />} /> 
                    <Route path='activate' element={<ActivateInternetBanking/>} />
                    <Route path="seebalance" element={<SeeBalance />} />
                    <Route path='transfer' element={<TransferAmount/>}/>
                    <Route path='deposit' element={<DepositeAmount/>}/>
                    <Route path='transactions' element={<Transactions/>}/>
                    <Route path='change_pin' element={<ChangePin/>}/>
                </Route>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>


            </Routes>
        </>
    );
};

export default App;
