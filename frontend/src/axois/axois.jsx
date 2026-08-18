import axios from 'axios';
import toast from "react-hot-toast";

const apiUrl = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const Adminauth = async (token) => {
    console.log('Admin authentication token:', token);
  try {
    const response = await apiUrl.post('/auth', token);   
    console.log('Admin authentication response:', response.data);
    toast.success(response.data.message, {
      duration: 4000,
      position: 'top-right',
    });
    return response.data;
    } catch (error) {
    console.error('Error during admin authentication:', error);
    toast.error('Authentication failed', {
      duration: 4000,
      position: 'top-right',
    });
    throw error;
  } 
}


export const AddProducts = async (productData) => {
  console.log('Adding product with data:', productData);
  try {
    // If productData is FormData, let the browser/axios set Content-Type (do not set it manually)
    const response = productData instanceof FormData
      ? await apiUrl.post('/products', productData)
      : await apiUrl.post('/products', productData);
    toast.success(response.data.message, {
      duration: 4000,
      position: 'top-right',
    });
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    toast.error('Failed to add product', {
      duration: 4000,
      position: 'top-right',
    });
    throw error;
  }
}





// ================= GET ALL PRODUCTS =================
export const GetProducts = async (params = { limit: 2,page:2}) => {
  try {
    const response = await apiUrl.get('/products', { params });
    console.log('Fetched products:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    toast.error(error.response?.data?.message || 'Failed to fetch products');
    throw error;
  }
};


// ================= GET SINGLE PRODUCT =================
export const GetProduct = async (id) => {
  try {
    const response = await apiUrl.get(`/products/${id}`);

    return response.data;

  } catch (error) {
    console.error('Error fetching product:', error);

    toast.error(
      error.response?.data?.message || 'Failed to fetch product'
    );

    throw error;
  }
};


// ================= UPDATE PRODUCT =================
export const UpdateProduct = async (id, productData) => {
  console.log('Updating product:', id, productData);
  try {
    const response = productData instanceof FormData
      ? await apiUrl.put(`/products/${id}`, productData)
      : await apiUrl.put(`/products/${id}`, productData);

    toast.success(response.data.message, {
      duration: 4000,
      position: 'top-right',
    });

    return response.data;

  } catch (error) {
    console.error('Error updating product:', error);

    toast.error(
      error.response?.data?.message || 'Failed to update product',
      {
        duration: 4000,
        position: 'top-right',
      }
    );

    throw error;
  }
};


// ================= DELETE PRODUCT =================
export const DeleteProduct = async (id) => {
  console.log('Deleting product:', id);

  try {
    const response = await apiUrl.delete(
      `/products/${id}`
    );

    toast.success(response.data.message, {
      duration: 4000,
      position: 'top-right',
    });

    return response.data;

  } catch (error) {
    console.error('Error deleting product:', error);

    toast.error(
      error.response?.data?.message || 'Failed to delete product',
      {
        duration: 4000,
        position: 'top-right',
      }
    );

    throw error;
  }
};


// ================= SEARCH PRODUCTS =================
export const SearchProducts = async (search) => {
  try {
    const response = await apiUrl.get(
      `/products/search?search=${encodeURIComponent(search)}`
    );

    return response.data;

  } catch (error) {
    console.error('Error searching products:', error);

    toast.error(
      error.response?.data?.message || 'Failed to search products'
    );

    throw error;
  }
};


// ================= CATEGORIES =================
export const GetCategories = async () => {
  try {
    const response = await apiUrl.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const AddCategory = async (categoryData) => {
  try {
    const response = categoryData instanceof FormData
      ? await apiUrl.post('/categories', categoryData)
      : await apiUrl.post('/categories', categoryData);
    toast.success(response.data.message, {
      duration: 4000,
      position: 'top-right',
    });
    return response.data;
  } catch (error) {
    console.error('Error adding category:', error);
    throw error;
  }
};

export const UpdateCategory = async (id, categoryData) => {
  try {
    const response = categoryData instanceof FormData
      ? await apiUrl.put(`/categories/${id}`, categoryData)
      : await apiUrl.put(`/categories/${id}`, categoryData);
    toast.success(response.data.message, {
      duration: 4000,
      position: 'top-right',
    });
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

export const DeleteCategory = async (id) => {
  try {
    const response = await apiUrl.delete(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};

// ================= SETTINGS =================
export const GetSettings = async () => {
  try {
    const response = await apiUrl.get('/settings');
    return response.data;
  } catch (error) {
    console.error('Error fetching settings:', error);
    throw error;
  }
};

export const UpdateSettings = async (settingsData) => {
  try {
    // settingsData may be FormData when including logo
    const response = settingsData instanceof FormData
      ? await apiUrl.put('/settings', settingsData)
      : await apiUrl.put('/settings', settingsData);
    return response.data;
  } catch (error) {
    console.error('Error updating settings:', error);
    throw error;
  }
};

// ================= ADMIN PROFILE =================
export const GetAdmin = async () => {
  try {
    const response = await apiUrl.get('/admin');
    return response.data;
  } catch (error) {
    console.error('Error fetching admin profile:', error);
    throw error;
  }
};

export const UpdateAdmin = async (adminData) => {
  try {
    const response = await apiUrl.put('/admin', adminData);
    return response.data;
  } catch (error) {
    console.error('Error updating admin profile:', error);
    throw error;
  }
};

export const ChangeAdminPassword = async (payload) => {
  try {
    const response = await apiUrl.put('/admin/password', payload);
    return response.data;
  } catch (error) {
    console.error('Error changing admin password:', error);
    throw error;
  }
};