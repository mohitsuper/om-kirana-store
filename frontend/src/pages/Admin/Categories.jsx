import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { GetCategories, AddCategory, UpdateCategory, DeleteCategory } from '../../axois/axois';

const defaultCategories = [
  { id: 1, name: 'Oil', description: 'Cooking and edible oils', slug: 'oil' },
  { id: 2, name: 'Beverages', description: 'Soft drinks and drinks', slug: 'beverages' },
  { id: 3, name: 'Cleaning', description: 'Laundry and cleaning products', slug: 'cleaning' },
  { id: 4, name: 'Incense', description: 'Agarbatti and aromatic products', slug: 'incense' },
];

const emptyForm = {
  categoryName: '',
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
          <div key={category._id || category.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-4">
                {category.imageUrl?.url && <img src={category.imageUrl.url} alt={category.categoryName || category.name} className="h-16 w-16 rounded object-cover" />}
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{category.categoryName || category.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{category.description}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">/{category.slug}</p>
                </div>
              </div>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">Active</span>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => onView(category._id)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">View</button>
              <button onClick={() => onEdit(category._id)} className="rounded-lg bg-[#0f2245] px-3 py-2 text-sm text-white hover:bg-[#16315f]">Edit</button>
              <button onClick={() => onDelete(category._id)} className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50">Delete</button>
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
  const category = categories.find((item) => item._id === id);

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
        <div className="rounded-2xl bg-slate-50 p-5 flex items-center gap-4">
          {category.imageUrl?.url && <img src={category.imageUrl.url} alt={category.categoryName || category.name} className="h-28 w-28 object-cover rounded" />}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Slug</p>
            <p className="mt-2 text-lg font-semibold text-slate-800">/{category.slug}</p>
          </div>
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
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const isEdit = Boolean(id);
  useEffect(() => {
    if (isEdit) {
      const existing = categories.find((item) => item._id === id);
      if (existing) {
        setForm({ ...existing });
        setPreview(existing.imageUrl?.url || '');
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

  const handleFile = (e) => {
    const f = e.target.files && e.target.files[0];
    setFile(f);
    if (f) setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isEdit){
      const existing = categories.find((item) => item._id === id);
      if (!existing) {
        alert('Category not found');
        return;
      }
      else{
        // build payload
        if (file) {
          const fd = new FormData();
          fd.append('categoryName', form.categoryName);
          fd.append('slug', form.slug);
          fd.append('description', form.description);
          fd.append('image', file);
          UpdateCategory(id, fd).then((res) => {
            onSave && onSave(res.data);
            navigate('/admin/categories');
          }).catch((err) => { console.error(err); alert('Failed to update category'); });
        } else {
          UpdateCategory(id, form).then((res) => {
            onSave && onSave(res.data);
            navigate('/admin/categories');
          }).catch((err) => { console.error(err); alert('Failed to update category'); });
        }
      }
    } 
    else{
      if (file) {
        const fd = new FormData();
        fd.append('categoryName', form.categoryName);
        fd.append('slug', form.slug);
        fd.append('description', form.description);
        fd.append('image', file);
        AddCategory(fd).then((res) => {
          onSave && onSave(res.data);
          navigate('/admin/categories');
        }).catch((err) => { console.error(err); alert('Failed to create category'); });
      } else {
        AddCategory(form).then((res) => {
          onSave && onSave(res.data);
          navigate('/admin/categories');
        }).catch((err) => { console.error(err); alert('Failed to create category'); });
      }
    }
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
          <input name="categoryName" value={form.categoryName} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Slug</label>
          <input name="slug" value={form.slug} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="4" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Image</label>
          <div className="mt-2 flex items-center gap-4">
            {preview && <img src={preview} alt="preview" className="h-20 w-20 object-cover rounded" />}
            <input type="file" accept="image/*" onChange={handleFile} />
          </div>
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
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await GetCategories();
        setCategories(res.data || []);
      } catch (err) {
        console.error('Failed to load categories', err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const handleSave = async (category) => {
    try {
      if (category.id && Number(category.id)) {
        // update - backend expects Mongo _id; here we assume id might be string _id
        const id = category.id;
        const res = await UpdateCategory(id, {
          categoryName: category.name,
          slug: category.slug,
          description: category.description
        });
        setCategories((prev) => prev.map((c) => (c._id === res.data._id ? res.data : c)));
      } else {
        const res = await AddCategory({
          categoryName: category.name,
          slug: category.slug,
          description: category.description
        });
        setCategories((prev) => [res.data, ...prev]);
      }
      navigate('/admin/categories');
    } catch (err) {
      console.error('Save category failed', err);
      alert('Failed to save category');
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Delete this category?');
    if (!confirmed) return;
    try {
      setDeletingId(id);
      await DeleteCategory(id);
      setCategories((prev) => prev.filter((c) => c._id !== id && c.id !== id));
    } catch (err) {
      console.error('Delete category failed', err);
      alert('Failed to delete category');
    } finally {
      setDeletingId(null);
    }
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
