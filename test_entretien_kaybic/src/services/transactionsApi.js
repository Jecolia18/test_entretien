/**
 * Service API pour gérer les transactions
 * Utilise MockAPI pour simuler un backend REST
 */

const API_BASE_URL = 'https://6942af7069b12460f3126625.mockapi.io';

/**
 * Récupère toutes les transactions
 * @returns {Promise<Array>} Liste des transactions
 */
export const obtenirTransactions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions`);
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (erreur) {
    console.error('Erreur lors de la récupération des transactions:', erreur);
    throw erreur;
  }
};

/**
 * Récupère une transaction par son ID
 * @param {number} id - ID de la transaction
 * @returns {Promise<Object>} Détails de la transaction
 */
export const obtenirTransactionParId = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions/${id}`);
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (erreur) {
    console.error(`Erreur lors de la récupération de la transaction ${id}:`, erreur);
    throw erreur;
  }
};

/**
 * Met à jour une transaction (pour annulation par exemple)
 * @param {number} id - ID de la transaction
 * @param {Object} donnees - Données à mettre à jour
 * @returns {Promise<Object>} Transaction mise à jour
 */
export const mettreAJourTransaction = async (id, donnees) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donnees),
    });
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (erreur) {
    console.error(`Erreur lors de la mise à jour de la transaction ${id}:`, erreur);
    throw erreur;
  }
};

/**
 * Crée une nouvelle transaction
 * @param {Object} transaction - Données de la transaction
 * @returns {Promise<Object>} Transaction créée
 */
export const creerTransaction = async (transaction) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (erreur) {
    console.error('Erreur lors de la création de la transaction:', erreur);
    throw erreur;
  }
};

/**
 * Supprime une transaction
 * @param {number} id - ID de la transaction à supprimer
 * @returns {Promise<Object>} Confirmation de suppression
 */
export const supprimerTransaction = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (erreur) {
    console.error(`Erreur lors de la suppression de la transaction ${id}:`, erreur);
    throw erreur;
  }
};