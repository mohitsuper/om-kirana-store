import { useEffect, useState, useContext } from 'react';
import { GetSettings, UpdateSettings, GetAdmin, UpdateAdmin, ChangeAdminPassword } from '../../axois/axois';
import SettingsContext from '../../context/SettingsContext';

export default function AdminProfile() {
  const [settings, setSettings] = useState(null);
  const [form, setForm] = useState({});
  const [logoFile, setLogoFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [adminForm, setAdminForm] = useState({ email: '' });
  const [passwordForm, setPasswordForm] = useState({ oldPassword: '', newPassword: '', confirm: '' });
  const { refreshSettings } = useContext(SettingsContext);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await GetSettings();
        setSettings(res.data);
        setForm({
          siteName: res.data.siteName || '',
          adminName: res.data.adminName || '',
          email: res.data.email || '',
          phone: res.data.phone || '',
          whatsapp: res.data.whatsapp || '',
          instagram: res.data.instagram || '',
          facebook: res.data.facebook || '',
          themeColor: res.data.themeColor || '#ff8a00',
          metaTitle: res.data.metaTitle || '',
          metaDescription: res.data.metaDescription || '',
          metaKeywords: res.data.metaKeywords || ''
        });
        // load admin profile
        try {
          const a = await GetAdmin();
          setAdmin(a.data);
          setAdminForm({ email: a.data.email || '' });
        } catch (err) {
          console.error('Failed to load admin profile', err);
        }
      } catch (err) {
        console.error('Failed to load settings', err);
      }
    };
    fetch();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminForm((p) => ({ ...p, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((p) => ({ ...p, [name]: value }));
  };

  const handleLogo = (e) => {
    const f = e.target.files && e.target.files[0];
    setLogoFile(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);
      const formData = new FormData();
      formData.append('siteName', form.siteName);
      formData.append('adminName', form.adminName);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('whatsapp', form.whatsapp);
      formData.append('instagram', form.instagram);
      formData.append('facebook', form.facebook);
      formData.append('themeColor', form.themeColor);
      formData.append('metaTitle', form.metaTitle);
      formData.append('metaDescription', form.metaDescription);
      formData.append('metaKeywords', form.metaKeywords);
      if (logoFile) formData.append('logo', logoFile);

      const res = await UpdateSettings(formData);
      setSettings(res.data);
      // refresh global settings so header/footer update across app
      try { if (refreshSettings) await refreshSettings(); } catch (err) {}
      alert('Settings saved');
    } catch (err) {
      console.error('Save settings failed', err);
      alert('Failed to save settings');
    } finally {
      setIsSaving(false);
    }
  };

  if (!settings) return <div>Loading...</div>;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm max-w-3xl">
      <h3 className="text-2xl font-semibold mb-4">Admin Profile & Site Settings</h3>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <label className="text-sm">Site Name</label>
        <input name="siteName" value={form.siteName} onChange={handleChange} className="p-2 border rounded" />

        <label className="text-sm">Admin Name</label>
        <input name="adminName" value={form.adminName} onChange={handleChange} className="p-2 border rounded" />

        <label className="text-sm">Email</label>
        <input name="email" value={form.email} onChange={handleChange} className="p-2 border rounded" />

        <label className="text-sm">Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} className="p-2 border rounded" />

        <label className="text-sm">WhatsApp</label>
        <input name="whatsapp" value={form.whatsapp} onChange={handleChange} className="p-2 border rounded" />

        <label className="text-sm">Instagram</label>
        <input name="instagram" value={form.instagram} onChange={handleChange} className="p-2 border rounded" />

        <label className="text-sm">Facebook</label>
        <input name="facebook" value={form.facebook} onChange={handleChange} className="p-2 border rounded" />

        <label className="text-sm">Theme Color</label>
        <input name="themeColor" type="color" value={form.themeColor} onChange={handleChange} className="p-1 rounded" />

        <label className="text-sm">Meta Title</label>
        <input name="metaTitle" value={form.metaTitle} onChange={handleChange} className="p-2 border rounded" />

        <label className="text-sm">Meta Description</label>
        <textarea name="metaDescription" value={form.metaDescription} onChange={handleChange} className="p-2 border rounded" />

        <label className="text-sm">Meta Keywords (comma separated)</label>
        <input name="metaKeywords" value={form.metaKeywords} onChange={handleChange} className="p-2 border rounded" />

        <label className="text-sm">Logo</label>
        <div className="flex items-center gap-4">
          {settings.logo?.url && <img src={settings.logo.url} alt="logo" className="h-16 w-16 object-cover rounded" />}
          <input type="file" accept="image/*" onChange={handleLogo} />
        </div>

        <div className="flex gap-3 justify-end">
          <button type="submit" disabled={isSaving} className="rounded-xl bg-[#0f2245] px-4 py-2 text-white">{isSaving ? 'Saving...' : 'Save Settings'}</button>
        </div>
      </form>
      {/* Admin Credentials */}
      <div className="mt-6 border-t pt-6">
        <h4 className="text-lg font-medium mb-3">Admin Credentials</h4>
        <div className="grid gap-3">
          <label className="text-sm">Admin Email</label>
          <input name="email" value={adminForm.email} onChange={handleAdminChange} className="p-2 border rounded" />
          <div className="flex gap-3 justify-end">
            <button
              onClick={async () => {
                try {
                  await UpdateAdmin(adminForm);
                  alert('Admin updated');
                } catch (err) {
                  console.error(err);
                  alert('Failed to update admin');
                }
              }}
              className="rounded-xl bg-gray-800 px-4 py-2 text-white"
            >
              Update Admin
            </button>
          </div>

          <h5 className="mt-4 font-medium">Change Password</h5>
          <input type="password" name="oldPassword" placeholder="Old password" value={passwordForm.oldPassword} onChange={handlePasswordChange} className="p-2 border rounded" />
          <input type="password" name="newPassword" placeholder="New password" value={passwordForm.newPassword} onChange={handlePasswordChange} className="p-2 border rounded" />
          <input type="password" name="confirm" placeholder="Confirm new password" value={passwordForm.confirm} onChange={handlePasswordChange} className="p-2 border rounded" />
          <div className="flex gap-3 justify-end">
            <button
              onClick={async () => {
                if (passwordForm.newPassword !== passwordForm.confirm) return alert('Passwords do not match');
                try {
                  await ChangeAdminPassword({ oldPassword: passwordForm.oldPassword, newPassword: passwordForm.newPassword });
                  alert('Password changed');
                  setPasswordForm({ oldPassword: '', newPassword: '', confirm: '' });
                } catch (err) {
                  console.error(err);
                  alert(err.response?.data?.message || 'Failed to change password');
                }
              }}
              className="rounded-xl bg-red-600 px-4 py-2 text-white"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
