import { NavLink, Outlet } from 'react-router-dom';

const menuItems = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: 'fa-chart-pie' },
  { label: 'Products', path: '/admin/products', icon: 'fa-box' },
  { label: 'Categories', path: '/admin/categories', icon: 'fa-tags' },

];

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col bg-[#0f2245] px-5 py-6 text-white lg:flex">
        <div className="flex items-center gap-3 border-b border-white/10 pb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <i className="fa-solid fa-store text-xl"></i>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Admin</p>
            <h2 className="text-lg font-semibold">OM Kirana Store</h2>
          </div>
        </div>

        <nav className="mt-6 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/10 p-4">
          <p className="text-sm font-semibold">Need a quick update?</p>
          <p className="mt-1 text-sm text-slate-300">Manage products, orders, and customers from one place.</p>
        </div>
      </aside>

      <div className="ml-0 flex min-h-screen flex-col lg:ml-72">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">Control Center</p>
            <h1 className="text-lg font-semibold text-slate-800">Admin Panel</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600">
              <i className="fa-solid fa-bell"></i>
            </button>
            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f2245] text-sm font-semibold text-white">
                AK
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-700">Ahsan Khan</p>
                <p className="text-xs text-slate-500">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
