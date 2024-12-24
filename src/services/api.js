const API_BASE_URL = 'https://skyvendamz.up.railway.app/admin';

export async function fetchUsers(page = 1, perPage = 10) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/usuarios/?page=${page}&per_page=${perPage}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data.usuarios || [];
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function fetchUnreviewedUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/usuarios/nao_verificados/`);
    if (!response.ok) {
      throw new Error('Failed to fetch unreviewed users');
    }
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error('Error fetching unreviewed users:', error);
    throw error;
  }
}

export async function reviewUser(userId, approved) {
  try {
    const response = await fetch(`${API_BASE_URL}/usuarios/${userId}/verificar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        verificado: approved,
        motivo: approved ? 'Approved' : 'Rejected'
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to review user');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error reviewing user:', error);
    throw error;
  }
}

export async function fetchUserTransactions(userId, page = 1, pageSize = 10) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${userId}/transacoes?page=${page}&page_size=${pageSize}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
}