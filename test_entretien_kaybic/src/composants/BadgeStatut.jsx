'use client';

/**
 * Composant Badge pour afficher le statut d'une transaction
 * @param {string} statut - Le statut de la transaction (SUCCES, EN_ATTENTE, ECHEC)
 */
const BadgeStatut = ({ statut }) => {
  
  /**
   * Retourne la classe CSS appropriée selon le statut
   * @returns {string}
   */
  const obtenirClasseStatut = () => {
    switch (statut) {
      case 'SUCCES':
        return 'badge-statut badge-succes';
      case 'EN_ATTENTE':
        return 'badge-statut badge-attente';
      case 'ECHEC':
        return 'badge-statut badge-echec';
      default:
        return 'badge-statut';
    }
  };

  /**
   * Retourne le texte à afficher selon le statut
   * @returns {string}
   */
  const obtenirTexteStatut = () => {
    switch (statut) {
      case 'SUCCES':
        return '✓ Succès';
      case 'EN_ATTENTE':
        return 'En attente';
      case 'ECHEC':
        return '✗ Échec';
      default:
        return statut;
    }
  };

  return (
    <span className={obtenirClasseStatut()}>
      {obtenirTexteStatut()}
    </span>
  );
};

export default BadgeStatut;