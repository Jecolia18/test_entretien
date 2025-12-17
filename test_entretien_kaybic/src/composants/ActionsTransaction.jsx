'use client';

/**
 * Composant gérant les actions possibles sur une transaction
 * @param {number} idTransaction - ID de la transaction
 * @param {boolean} peutAnnuler - Indique si la transaction peut être annulée
 * @param {Function} surVoirDetails - Callback pour voir les détails
 * @param {Function} surAnnuler - Callback pour annuler la transaction
 */
const ActionsTransaction = ({ 
  idTransaction, 
  peutAnnuler, 
  surVoirDetails, 
  surAnnuler 
}) => {

  /**
   * Gère le clic sur le bouton "Voir"
   */
  const gererClicVoir = () => {
    surVoirDetails(idTransaction);
  };

  /**
   * Gère le clic sur le bouton "Annuler"
   */
  const gererClicAnnuler = () => {
    surAnnuler(idTransaction);
  };

  return (
    <div className="conteneur-actions">
      <button 
        className="btn-action btn-voir"
        onClick={gererClicVoir}
        type="button"
      >
        Voir
      </button>
      
      <button 
        className="btn-action btn-annuler"
        onClick={gererClicAnnuler}
        disabled={!peutAnnuler}
        type="button"
        title={!peutAnnuler ? "Cette transaction ne peut pas être annulée" : "Annuler la transaction"}
      >
        ✕ Annuler
      </button>
    </div>
  );
};

export default ActionsTransaction;