'use client';

import { useState, useEffect } from 'react';
import ListeTransactions from '../composants/ListeTransactions';
import { obtenirTransactions, mettreAJourTransaction } from '../services/transactionsApi';

/**
 * Page principale affichant la liste des transactions
 * Récupère les données depuis l'API MockAPI
 */
const PageTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filtreStatut, setFiltreStatut] = useState('TOUS');
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  /**
   * Récupère les transactions au chargement du composant
   */
  useEffect(() => {
    chargerTransactions();
  }, []);

  /**
   * Charge les transactions depuis l'API
   */
  const chargerTransactions = async () => {
    try {
      setChargement(true);
      setErreur(null);
      const donnees = await obtenirTransactions();
      setTransactions(donnees);
    } catch (err) {
      setErreur('Impossible de charger les transactions. Veuillez réessayer.');
      console.error(err);
    } finally {
      setChargement(false);
    }
  };

  /**
   * Gère l'action "Voir les détails" d'une transaction
   * @param {number} idTransaction - ID de la transaction
   */
  const gererVoirDetails = (idTransaction) => {
    const transaction = transactions.find(t => t.id === idTransaction);
    alert(`Détails de la transaction #${idTransaction}\nMontant: ${transaction.montant} FCFA\nDate: ${transaction.date}\nStatut: ${transaction.statut}`);
  };

  /**
   * Gère l'annulation d'une transaction
   * @param {number} idTransaction - ID de la transaction à annuler
   */
  const gererAnnulation = async (idTransaction) => {
    if (window.confirm('Êtes-vous sûr de vouloir annuler cette transaction ?')) {
      try {
        // Mise à jour via l'API
        await mettreAJourTransaction(idTransaction, { statut: 'ECHEC' });
        
        // Mise à jour locale
        setTransactions(transactions.map(t => 
          t.id === idTransaction 
            ? { ...t, statut: 'ECHEC' }
            : t
        ));
      } catch (err) {
        alert('Erreur lors de l\'annulation de la transaction.');
        console.error(err);
      }
    }
  };

  /**
   * Filtre les transactions selon le statut sélectionné
   * @returns {Array} - Tableau de transactions filtrées
   */
  const obtenirTransactionsFiltrees = () => {
    if (filtreStatut === 'TOUS') {
      return transactions;
    }
    return transactions.filter(t => t.statut === filtreStatut);
  };

  const transactionsFiltrees = obtenirTransactionsFiltrees();

  // Affichage pendant le chargement
  if (chargement) {
    return (
      <div className="page-transactions">
        <div className="conteneur-spinner">
          <div className="spinner"></div>
          <p className="texte-chargement">Chargement des transactions...</p>
        </div>
      </div>
    );
  }

  // Affichage en cas d'erreur
  if (erreur) {
    return (
      <div className="page-transactions">
        <div className="message-erreur">
          <p>❌ {erreur}</p>
          <button 
            onClick={chargerTransactions}
            className="btn-action btn-voir"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-transactions">
      <header className="en-tete-page">
        <h1>Mes Transactions</h1>
        <p className="sous-titre">
          {transactions.length} transaction{transactions.length > 1 ? 's' : ''} au total
        </p>
      </header>

      <div className="barre-filtres">
        <div className="groupe-filtres">
          <label htmlFor="filtre-statut">Filtrer par statut :</label>
          <select 
            id="filtre-statut"
            value={filtreStatut}
            onChange={(e) => setFiltreStatut(e.target.value)}
            className="selecteur-filtre"
          >
            <option value="TOUS">Tous</option>
            <option value="SUCCES">Succès</option>
            <option value="EN_ATTENTE">En attente</option>
            <option value="ECHEC">Échec</option>
          </select>
        </div>
        
        <div className="compteur-resultats">
          {transactionsFiltrees.length} résultat{transactionsFiltrees.length > 1 ? 's' : ''}
        </div>
      </div>

      <ListeTransactions 
        transactions={transactionsFiltrees}
        surVoirDetails={gererVoirDetails}
        surAnnuler={gererAnnulation}
      />

      {transactionsFiltrees.length === 0 && (
        <div className="message-vide">
          <p>Aucune transaction trouvée avec ce filtre.</p>
        </div>
      )}
    </div>
  );
};

export default PageTransactions;