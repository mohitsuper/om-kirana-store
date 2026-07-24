import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import initialProducts from '../../data/product';

const emptyForm = {
  name: '',
  category: '',
  price: '',
  weight: '',
  minOrder: '',
  description: '',
  badge: 'Bulk',
  image: '/images/products/1.png',
};

function ProductList({ products, onView, onEdit, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [products.length]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-2">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex gap-4">
              <img src={product.image} alt={product.name} className="h-24 w-24 rounded-2xl object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{product.name}</h3>
                    <p className="text-sm text-slate-500">{product.category}</p>
                  </div>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                    {product.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-base font-semibold text-[#0f2245]">Rs {product.price}</p>
                  <div className="flex gap-2">
                    <button onClick={() => onView(product.id)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
                      View
                    </button>
                    <button onClick={() => onEdit(product.id)} className="rounded-lg bg-[#0f2245] px-3 py-2 text-sm text-white hover:bg-[#16315f]">
                      Edit
                    </button>
                    <button onClick={() => onDelete(product.id)} className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <p className="text-sm text-slate-500">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, products.length)} of {products.length} products
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`rounded-lg px-3 py-2 text-sm ${currentPage === page ? 'bg-[#0f2245] text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductView({ products }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  if (!product) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">Product not found.</div>;
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Product Details</p>
          <h3 className="text-2xl font-semibold text-slate-800">{product.name}</h3>
        </div>
        <button onClick={() => navigate('/admin/products')} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
          Back to list
        </button>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <img src={product.image} alt={product.name} className="h-80 w-full rounded-3xl object-cover" />
        <div className="space-y-4 text-sm text-slate-600">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Category</p>
            <p className="mt-1 text-base font-semibold text-slate-800">{product.category}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Price</p>
            <p className="mt-1 text-base font-semibold text-slate-800">Rs {product.price}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Weight</p>
            <p className="mt-1 text-base font-semibold text-slate-800">{product.weight}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Minimum Order</p>
            <p className="mt-1 text-base font-semibold text-slate-800">{product.minOrder}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Description</p>
            <p className="mt-1 leading-6">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductForm({ products, onSave, onCancel }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      const existing = products.find((item) => item.id === Number(id));
      if (existing) {
        setForm({ ...existing });
      } else {
        navigate('/admin/products');
      }
    } else {
      setForm(emptyForm);
    }
  }, [id, products, isEdit, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      ...form,
      id: isEdit ? Number(form.id) : Date.now(),
      price: Number(form.price),
    };
    onSave(payload);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">{isEdit ? 'Update Product' : 'Add Product'}</p>
          <h3 className="text-2xl font-semibold text-slate-800">{isEdit ? 'Edit product details' : 'Create a new product'}</h3>
        </div>
        <button onClick={onCancel} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Product Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Category</label>
          <input name="category" value={form.category} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Price</label>
          <input name="price" type="number" value={form.price} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Weight</label>
          <input name="weight" value={form.weight} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Minimum Order</label>
          <input name="minOrder" value={form.minOrder} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Badge</label>
          <input name="badge" value={form.badge} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Image URL</label>
          <input name="image" value={form.image} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="4" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2 flex justify-end gap-3">
          <button type="button" onClick={onCancel} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
            Cancel
          </button>
          <button type="submit" className="rounded-xl bg-[#ff8a00] px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">
            {isEdit ? 'Update Product' : 'Save Product'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function AdminProducts() {
  const [products, setProducts] = useState(initialProducts);
  const navigate = useNavigate();

  const handleSave = (product) => {
    setProducts((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) => (item.id === product.id ? product : item));
      }
      return [product, ...prev];
    });
    navigate('/admin/products');
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm('Delete this product?');
    if (!confirmed) return;
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Inventory</p>
            <h2 className="text-2xl font-semibold text-slate-800">Products</h2>
            <p className="mt-2 text-sm text-slate-500">Add, update, view, and remove products from the store.</p>
          </div>
          <Link to="/admin/products/add" className="rounded-xl bg-[#0f2245] px-4 py-2 text-sm font-semibold text-white hover:bg-[#16315f]">
            + Add Product
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/admin/products" className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
            All Products
          </Link>
          <Link to="/admin/products/add" className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
            Add Product
          </Link>
        </div>
      </div>

      <Routes>
        <Route index element={<ProductList products={products} onView={(id) => navigate(`/admin/products/view/${id}`)} onEdit={(id) => navigate(`/admin/products/edit/${id}`)} onDelete={handleDelete} />} />
        <Route path="add" element={<ProductForm products={products} onSave={handleSave} onCancel={() => navigate('/admin/products')} />} />
        <Route path="edit/:id" element={<ProductForm products={products} onSave={handleSave} onCancel={() => navigate('/admin/products')} />} />
        <Route path="view/:id" element={<ProductView products={products} />} />
      </Routes>
    </div>
  );
}
