import "./Tooltip.scss";

const Tooltip = ({ position }) => {
  return (
    <div className={`tooltip ${position}`}>
      <span>
        <strong>Importez vos données depuis LinkdIn</strong>
      </span>
      <ol>
        <li>
          Rendez-vous sur votre <strong>profil LinkdIn.</strong> Ensuite,
          cliquez sur
          <strong>"Plus"</strong> et
          <strong>"Enregistrer en PDF"</strong> pour télécharger votre profil
          sous forme de fichier PDF.
        </li>
        <li>
          <strong>Téléchargez votre fichier PDF.</strong> Nous nous occupons de
          la suite !
        </li>
      </ol>
    </div>
  );
};

export default Tooltip;
