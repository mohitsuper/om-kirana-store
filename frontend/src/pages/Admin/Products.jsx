import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import initialProducts from '../../data/product';
import { AddProducts, GetProducts, UpdateProduct, DeleteProduct, GetCategories } from '../../axois/axois';

const emptyForm = {
  productName: '',
  category: '',
  price: '',
  weight: '',
  minimumOrder: '',
  description: '',
  badge: 'Bulk',
  imageUrl: '',
  imageFile: null,
};

function ProductList({ products, onView, onEdit, onDelete, deletingId, page, setPage, totalPages }) {
  const paginatedProducts = products || [];
  const startIndex = ((page || 1) - 1) * 10; // for display only

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-2">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex gap-4">
              <img src={product.image || product.imageUrl?.url} alt={product.name || product.productName} className="h-24 w-24 rounded-2xl object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{product.productName}</h3>
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
                    <button onClick={() => onView(product._id)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
                      View
                    </button>
                    <button onClick={() => onEdit(product._id)} className="rounded-lg bg-[#0f2245] px-3 py-2 text-sm text-white hover:bg-[#16315f]">
                      Edit
                    </button>
                    <button onClick={() => onDelete(product._id || product.id)} disabled={deletingId === (product._id || product.id)} className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50">
                      {deletingId === (product._id || product.id) ? 'Deleting...' : 'Delete'}
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
          <p className="text-sm text-slate-500">Showing page {page} of {totalPages}</p>
          <div className="flex items-center gap-2">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 disabled:cursor-not-allowed disabled:opacity-50">Previous</button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((p) => (
              <button key={p} onClick={() => setPage(p)} className={`rounded-lg px-3 py-2 text-sm ${page === p ? 'bg-[#0f2245] text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{p}</button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 disabled:cursor-not-allowed disabled:opacity-50">Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductView({ products }) {
  const { id } = useParams(); 
  const product = products.find((item) => item._id === id);
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
        <img src={product.image || product.imageUrl?.url} alt={product.name || product.productName} className="h-80 w-full rounded-3xl object-cover" />
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

function ProductForm({ products, onSave, onCancel, categories }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (id) {
      const existing = products.find((item) => item._id === id);
      if (existing) {
          setForm({
            productName: existing.productName || '',
            category: existing.category || '',
            price: existing.price || '',
            weight: existing.weight || '',
            minimumOrder: existing.minimumOrder || '',
            description: existing.description || '',
            badge: existing.badge || 'Bulk',
            imageUrl: existing.imageUrl?.url || '',
            imageFile: null
          });
      } else {
        navigate('/admin/products');
      }
    } else {
      setForm(emptyForm);
    }
  }, [id, products, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'imageUrl') {
      const file = event.target.files && event.target.files[0];
      setForm((prev) => ({ ...prev, imageFile: file }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      console.log('Form data before submission:', form);
      const formData = new FormData();
      formData.append('productName', form.productName);
      formData.append('category', form.category);
      formData.append('price', form.price);
      formData.append('weight', form.weight);
      formData.append('minimumOrder', form.minimumOrder);
      formData.append('badge', form.badge);
      formData.append('description', form.description);
      if (form.imageFile) {
        // send file field as `imageUrl` to match backend expectation
        formData.append('imageUrl', form.imageFile);
      }

      for (const [key, value] of formData.entries()) {
  console.log(key, value);
}

      if (id) {
        await UpdateProduct(id, formData);
      } else {
        await AddProducts(formData);
      }

      navigate('/admin/products');
    } catch (err) {
      console.error('Submit error', err);
    }
    finally {
      setIsSubmitting(false);
    }

  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">{id ? 'Update Product' : 'Add Product'}</p>
          <h3 className="text-2xl font-semibold text-slate-800">{id ? 'Edit product details' : 'Create a new product'}</h3>
        </div>
        <button onClick={onCancel} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Product Name</label>
          <input name="productName" value={form.productName} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Category</label>
          <select name="category" value={form.category} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400">
            <option value="">Select category</option>
            {Array.isArray(categories) && categories.slice(0, 10).map((c) => (
              <option key={c._id || c.id} value={c.categoryName || c.name}>{c.categoryName || c.name}</option>
            ))}
          </select>
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
          <input name="minimumOrder" value={form.minimumOrder} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Badge</label>
          <input name="badge" value={form.badge} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Image</label>
          <input name="imageUrl" type="file" accept="image/*" onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
          {form.imageFile && (
            <p className="mt-2 text-sm text-slate-500">Selected: {form.imageFile.name}</p>
          )}
          {!form.imageFile && form.imageUrl && (
            <p className="mt-2 text-sm text-slate-500">Current image URL: {form.imageUrl}</p>
          )}
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="4" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2 flex justify-end gap-3">
          <button type="button" onClick={onCancel} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
            Cancel
          </button>
          <button type="submit" disabled={isSubmitting} className="rounded-xl bg-[#ff8a00] px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-50">
            {isSubmitting ? (id ? 'Updating...' : 'Saving...') : (id ? 'Update Product' : 'Save Product')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);
  const totalPages = Math.max(1, Math.ceil(total / limit));
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await GetProducts({ page, limit });
        console.log('fetch product', response);
        setProducts(response.data || []);
        setTotal(response.total || 0);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [page]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await GetCategories();
        setCategories(res.data || []);
      } catch (err) {
        console.error('Failed to load categories', err);
      }
    };

    fetchCats();
  }, []);
  const navigate = useNavigate();

  // const handleSave = (product) => {
  //   setProducts((prev) => {
  //     const exists = prev.some((item) => item.id === product.id);
  //     if (exists) {
  //       return prev.map((item) => (item.id === product.id ? product : item));
  //     }
  //     return [product, ...prev];
  //   });
  //   navigate('/admin/products');
  // };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Delete this product?');
    if (!confirmed) return;
    try {
      setDeletingId(id);
      await DeleteProduct(id);
      setProducts((prev) => prev.filter((product) => (product._id || product.id) !== id));
    } catch (err) {
      console.error('Delete error', err);
      alert('Failed to delete product');
    } finally {
      setDeletingId(null);
    }
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
        <Route index element={<ProductList products={products} onView={(id) => navigate(`/admin/products/view/${id}`)} onEdit={(id) => navigate(`/admin/products/edit/${id}`)} onDelete={handleDelete} deletingId={deletingId} page={page} setPage={setPage} totalPages={totalPages} />} />
        <Route path="add" element={<ProductForm products={products} categories={categories} onCancel={() => navigate('/admin/products')} />} />
        <Route path="edit/:id" element={<ProductForm products={products} categories={categories} onCancel={() => navigate('/admin/products')} />} />
        <Route path="view/:id" element={<ProductView products={products} />} />
      </Routes>
    </div>
  );
}
