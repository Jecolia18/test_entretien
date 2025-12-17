'use client';
import BadgeStatut from './BadgeStatut';
import ActionsTransaction from './ActionsTransaction';

/**
 * Composant représentant une ligne de transaction dans la liste
 * @param {Object} transaction - Objet contenant les données de la transaction
 * @param {Function} surVoirDetails - Callback pour voir les détails
 * @param {Function} surAnnuler - Callback pour annuler la transaction
 */
const LigneTransaction = ({ transaction, surVoirDetails, surAnnuler }) => {
  const { id, montant, date, statut } = transaction;

  /**
   * Formate le montant avec séparateur de milliers
   * @param {number} montant - Montant à formater
   * @returns {string} - Montant formaté
   */
  const formaterMontant = (montant) => {
    return new Intl.NumberFormat('fr-FR').format(montant);
  };

  /**
   * Formate la date au format français
   * @param {string} date - Date au format YYYY-MM-DD
   * @returns {string} - Date formatée (ex: 12 janvier 2025)
   */
  const formaterDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };

  /**
   * Détermine si la transaction peut être annulée
   * @returns {boolean}
   */
  const peutEtreAnnulee = () => {
    return statut === 'EN_ATTENTE';
  };

  return (
    <div className="ligne-transaction">
      {/* ID - Affichage mobile et desktop */}
      <div className="cellule cellule-id">
        <span className="label-mobile">ID:</span>
        <span className="valeur">#{id}</span>
      </div>

      {/* Montant */}
      <div className="cellule cellule-montant">
        <span className="label-mobile">Montant:</span>
        <span className="valeur montant-valeur">
          {formaterMontant(montant)} <span className="devise">FCFA</span>
        </span>
      </div>

      {/* Date */}
      <div className="cellule cellule-date">
        <span className="label-mobile">Date:</span>
        <span className="valeur">{formaterDate(date)}</span>
      </div>

      {/* Statut */}
      <div className="cellule cellule-statut">
        <span className="label-mobile">Statut:</span>
        <BadgeStatut statut={statut} />
      </div>

      {/* Actions */}
      <div className="cellule cellule-actions">
        <ActionsTransaction
          idTransaction={id}
          peutAnnuler={peutEtreAnnulee()}
          surVoirDetails={surVoirDetails}
          surAnnuler={surAnnuler}
        />
      </div>
    </div>
  );
};

export default LigneTransaction;