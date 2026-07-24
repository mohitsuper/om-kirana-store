import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo,setUserInfo] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await 
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f2245] via-[#16315f] to-[#0f2245] flex items-center justify-center px-4">
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex flex-col items-center bg-[#0f2245] py-8">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">
            <img src="/images/logo/logo-white.png" alt="Logo" className="h-full w-full object-contain" />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-white">OM KIRANA STORE</h2>
          <p className="mt-2 text-orange-300">Admin Panel Login</p>
        </div>

        <div className="p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <div className="relative mt-2">
                <i className="fa-solid fa-envelope absolute left-4 top-4 text-gray-400"></i>
                <input
                  value={userInfo.email}
                  onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})}
                  type="email"
                  placeholder="admin@gmail.com"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <div className="relative mt-2">
                <i className="fa-solid fa-lock absolute left-4 top-4 text-gray-400"></i>
                <input
                  value={userInfo.password}
                  onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="********"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none focus:border-orange-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-gray-500"
                >
                  <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <button type="button" className="font-semibold text-orange-500">
                Forgot Password?
              </button>
            </div>

            <button className="w-full rounded-xl bg-[#ff8a00] py-3 font-semibold text-white duration-300 hover:bg-orange-600">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}