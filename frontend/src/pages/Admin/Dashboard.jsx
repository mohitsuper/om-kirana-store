const stats = [
  { label: 'Total Sales', value: 'Rs 1.24L', note: '+12% this month', icon: 'fa-chart-line' },
  { label: 'Orders', value: '184', note: '+8 new today', icon: 'fa-cart-shopping' },
  { label: 'Products', value: '320', note: '24 low stock', icon: 'fa-box' },
  { label: 'Customers', value: '1,280', note: '+15 this week', icon: 'fa-users' },
];

const recentOrders = [
  { id: '#1024', customer: 'Ali Raza', amount: 'Rs 1,250', status: 'Delivered' },
  { id: '#1025', customer: 'Sara Khan', amount: 'Rs 875', status: 'Processing' },
  { id: '#1026', customer: 'Nadeem', amount: 'Rs 2,140', status: 'Pending' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Overview</p>
          <h2 className="text-2xl font-semibold text-slate-800">Dashboard</h2>
          <p className="mt-1 text-sm text-slate-500">A quick look at sales, orders, and store health.</p>
        </div>
        <button className="rounded-xl bg-[#0f2245] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#16315f]">
          + Add New Product
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-800">{item.value}</h3>
            <p className="mt-1 text-sm text-emerald-600">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Recent Orders</h3>
              <p className="text-sm text-slate-500">Latest activity from your store.</p>
            </div>
            <button className="text-sm font-semibold text-orange-500">View All</button>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <div>
                  <p className="font-semibold text-slate-800">{order.id}</p>
                  <p className="text-sm text-slate-500">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">{order.amount}</p>
                  <p className="text-sm text-slate-500">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800">Quick Actions</h3>
          <div className="mt-4 space-y-3">
            <button className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700">
              <span>Manage Inventory</span>
              <i className="fa-solid fa-arrow-right text-orange-500"></i>
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700">
              <span>Check Reviews</span>
              <i className="fa-solid fa-arrow-right text-orange-500"></i>
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700">
              <span>Update Offers</span>
              <i className="fa-solid fa-arrow-right text-orange-500"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
