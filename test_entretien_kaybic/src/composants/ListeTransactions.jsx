'use client';
import LigneTransaction from './LigneTransaction';

/**
 * Composant qui affiche la liste complète des transactions
 * @param {Array} transactions - Tableau des transactions à afficher
 * @param {Function} surVoirDetails - Callback appelé lors du clic sur "Voir détails"
 * @param {Function} surAnnuler - Callback appelé lors du clic sur "Annuler"
 */
const ListeTransactions = ({ transactions, surVoirDetails, surAnnuler }) => {
  
  if (!transactions || transactions.length === 0) {
    return null;
  }

  return (
    <div className="conteneur-liste-transactions">
      {/* En-tête du tableau - Desktop uniquement */}
      <div className="en-tete-tableau">
        <div className="colonne-id">ID</div>
        <div className="colonne-montant">Montant</div>
        <div className="colonne-date">Date</div>
        <div className="colonne-statut">Statut</div>
        <div className="colonne-actions">Actions</div>
      </div>

      {/* Liste des transactions */}
      <div className="corps-liste">
        {transactions.map((transaction) => (
          <LigneTransaction
            key={transaction.id}
            transaction={transaction}
            surVoirDetails={surVoirDetails}
            surAnnuler={surAnnuler}
          />
        ))}
      </div>
    </div>
  );
};

export default ListeTransactions;