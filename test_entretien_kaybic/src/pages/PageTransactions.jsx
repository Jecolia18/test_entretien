'use client';
import { useState } from 'react';
import ListeTransactions from '../composants/ListeTransactions';
import { transactions as transactionsInitiales } from '../donnees/transactionsMock';

/**
 * Page principale affichant la liste des transactions
 * Gère l'état et les actions sur les transactions
 */
const PageTransactions = () => {
  const [transactions, setTransactions] = useState(transactionsInitiales);
  const [filtreStatut, setFiltreStatut] = useState('TOUS');

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
  const gererAnnulation = (idTransaction) => {
    if (window.confirm('Êtes-vous sûr de vouloir annuler cette transaction ?')) {
      setTransactions(transactions.map(t => 
        t.id === idTransaction 
          ? { ...t, statut: 'ECHEC' }
          : t
      ));
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