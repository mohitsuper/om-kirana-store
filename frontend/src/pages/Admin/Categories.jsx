import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';

const defaultCategories = [
  { id: 1, name: 'Oil', description: 'Cooking and edible oils', slug: 'oil' },
  { id: 2, name: 'Beverages', description: 'Soft drinks and drinks', slug: 'beverages' },
  { id: 3, name: 'Cleaning', description: 'Laundry and cleaning products', slug: 'cleaning' },
  { id: 4, name: 'Incense', description: 'Agarbatti and aromatic products', slug: 'incense' },
];

const emptyForm = {
  name: '',
  description: '',
  slug: '',
};

function CategoryList({ categories, onView, onEdit, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [categories.length]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-2">
        {paginatedCategories.map((category) => (
          <div key={category.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">{category.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{category.description}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">/{category.slug}</p>
              </div>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">Active</span>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => onView(category.id)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">View</button>
              <button onClick={() => onEdit(category.id)} className="rounded-lg bg-[#0f2245] px-3 py-2 text-sm text-white hover:bg-[#16315f]">Edit</button>
              <button onClick={() => onDelete(category.id)} className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <p className="text-sm text-slate-500">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, categories.length)} of {categories.length} categories
          </p>
          <div className="flex items-center gap-2">
            <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 disabled:cursor-not-allowed disabled:opacity-50">Previous</button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button key={page} onClick={() => setCurrentPage(page)} className={`rounded-lg px-3 py-2 text-sm ${currentPage === page ? 'bg-[#0f2245] text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{page}</button>
            ))}
            <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 disabled:cursor-not-allowed disabled:opacity-50">Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

function CategoryView({ categories }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = categories.find((item) => item.id === Number(id));

  if (!category) {
    return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">Category not found.</div>;
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Category Details</p>
          <h3 className="text-2xl font-semibold text-slate-800">{category.name}</h3>
        </div>
        <button onClick={() => navigate('/admin/categories')} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Back to list</button>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Slug</p>
          <p className="mt-2 text-lg font-semibold text-slate-800">/{category.slug}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Description</p>
          <p className="mt-2 text-base text-slate-600">{category.description}</p>
        </div>
      </div>
    </div>
  );
}

function CategoryForm({ categories, onSave, onCancel }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      const existing = categories.find((item) => item.id === Number(id));
      if (existing) {
        setForm({ ...existing });
      } else {
        navigate('/admin/categories');
      }
    } else {
      setForm(emptyForm);
    }
  }, [categories, id, isEdit, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      ...form,
      id: isEdit ? Number(form.id) : Date.now(),
      slug: form.slug || form.name.toLowerCase().replace(/\s+/g, '-'),
    };
    onSave(payload);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">{isEdit ? 'Update Category' : 'Create Category'}</p>
          <h3 className="text-2xl font-semibold text-slate-800">{isEdit ? 'Edit category details' : 'Add a new category'}</h3>
        </div>
        <button onClick={onCancel} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Category Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Slug</label>
          <input name="slug" value={form.slug} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="4" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2 flex justify-end gap-3">
          <button type="button" onClick={onCancel} className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</button>
          <button type="submit" className="rounded-xl bg-[#ff8a00] px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">{isEdit ? 'Update Category' : 'Save Category'}</button>
        </div>
      </form>
    </div>
  );
}

export default function AdminCategories() {
  const [categories, setCategories] = useState(defaultCategories);
  const navigate = useNavigate();

  const handleSave = (category) => {
    setCategories((prev) => {
      const exists = prev.some((item) => item.id === category.id);
      if (exists) {
        return prev.map((item) => (item.id === category.id ? category : item));
      }
      return [category, ...prev];
    });
    navigate('/admin/categories');
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm('Delete this category?');
    if (!confirmed) return;
    setCategories((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Catalog</p>
            <h2 className="text-2xl font-semibold text-slate-800">Categories</h2>
            <p className="mt-2 text-sm text-slate-500">Create, update, view, and remove product categories.</p>
          </div>
          <Link to="/admin/categories/add" className="rounded-xl bg-[#0f2245] px-4 py-2 text-sm font-semibold text-white hover:bg-[#16315f]">+ Add Category</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link to="/admin/categories" className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">All Categories</Link>
          <Link to="/admin/categories/add" className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">Add Category</Link>
        </div>
      </div>

      <Routes>
        <Route index element={<CategoryList categories={categories} onView={(id) => navigate(`/admin/categories/view/${id}`)} onEdit={(id) => navigate(`/admin/categories/edit/${id}`)} onDelete={handleDelete} />} />
        <Route path="add" element={<CategoryForm categories={categories} onSave={handleSave} onCancel={() => navigate('/admin/categories')} />} />
        <Route path="edit/:id" element={<CategoryForm categories={categories} onSave={handleSave} onCancel={() => navigate('/admin/categories')} />} />
        <Route path="view/:id" element={<CategoryView categories={categories} />} />
      </Routes>
    </div>
  );
}
