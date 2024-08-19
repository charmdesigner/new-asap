import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./RegisterFormValidationRules";
import { Link } from "react-router-dom";
import Checked from "../../assets/images/checked.png";
import Warning from "../../assets/images/warning.png";
import Info from "../../assets/images/info.svg";
import Instruction from "../../assets/images/linkedin-pdf-instruction.png";
import Cross from "../../assets/images/cross.png";
import axios from "axios";
import "./Register.scss";

const Register = () => {
  const [modalState, setModalState] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [modalImage, setModalImage] = useState(Checked);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleSubmitForm = async () => {
    setIsLoading(true); // Start loading indicator

    const formData = new FormData();
    formData.append('firstName', values.firstname);
    formData.append('lastName', values.name);
    formData.append('phone', values.phone);
    formData.append('email', values.email);
    formData.append('companyCode', values.companyCode);
    formData.append('pdfFile', file);
    formData.append('receiveUpdates', isChecked);

    try {
      const response = await axios.post(
        "https://europe-west9-heroic-purpose-420510.cloudfunctions.net/submit_linkedin_pdf",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        setModalMessage("Détails soumis avec succès");
        setSubmitSuccess(true);
        setModalImage(Checked);
      }
    } catch (error) {
      let errorMessage =
        "Une erreur s'est produite lors de la soumission du formulaire. Veuillez réessayer.";
      if (error.response && error.response.status === 400) {
        errorMessage =
          error.response.data.message ||
          "Échec de la soumission, veuillez réessayer plus tard.";
        setModalImage(Warning);
      } else if (error.response.status === 500) {
        errorMessage =
          "Erreur interne du serveur. Veuillez réessayer plus tard.";
        setModalImage(Warning);
        // You can handle other status codes here if needed
      }
      setModalMessage(errorMessage);
    } finally {
      setIsLoading(false); // End loading indicator
      setSubmitSuccess(true);
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        window.location.href = "/demo-asap"; // Redirect to the demo page
      }, 2500);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      errors({ linkedinPDF: "LinkedIn PDF est un champ obligatoire" });
    }
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    validate,
    handleSubmitForm
  );

  const receiveUpdateCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleCheckboxChange = (e) => {
    handleChange(e);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleClose = () => {
    setModalState(false);
    console.log('closed');
  };

  return (
    <>
      {!submitSuccess && (
        <div className="section is-fullheight">
          <div className="container">
            <div className="row">
              <div className="col">
                  <h1 className="title">Déposer un CV</h1>
                  <p>
                  Ce questionnaire à pour objectif de récolter quelques informations pour nous permettre de créer ton CV
                  </p>
                  <button className="close-icon" onClick={handleClose}>
                    <img src={Cross} alt="" />
                  </button>
                <div className="box">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="field-group">
                      <div className="field">
                        <div className="control">
                          <label>Nom</label>
                          <input
                            className={`input ${errors.name && "is-danger"}`}
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name || ""}
                            placeholder="Insérez le nom"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <label>Prenom</label>
                          <input
                            className={`input ${
                              errors.firstname && "is-danger"
                            }`}
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            value={values.firstname || ""}
                            required
                            placeholder="Insérez le prenom"
                          />
                        </div>
                        {errors.firstname && (
                          <p className="help is-danger">{errors.firstname}</p>
                        )}
                      </div>
                    </div>
                    <div className="field-group">
                      <div className="field">
                        <div className="control">
                          <label>Téléphone</label>
                          <input
                            className={`input ${errors.phone && "is-danger"}`}
                            type="tel"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone || ""}
                            placeholder="Insérez le téléphone"
                          />
                        </div>
                        {errors.phone && (
                          <p className="help is-danger">{errors.phone}</p>
                        )}
                      </div>
                      <div className="field">
                        <div className="control">
                          <label>Email</label>
                          <input
                            autoComplete="on"
                            className={`input ${errors.email && "is-danger"}`}
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email || ""}
                            required
                            placeholder="Insérez le email"
                          />
                          {errors.email && (
                            <p className="help is-danger">{errors.email}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="field checkbox-wrap">
                      <div className="control">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="checkbox1"
                          checked={values.checkbox1 || false}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox1">Code de la société</label>
                      </div>
                      {errors.checkbox1 && (
                        <p className="help is-danger">{errors.checkbox1}</p>
                      )}
                    </div>
                    <div className="field-group">
                      <div className="field">
                        <div className="control">
                          <label>Code de la société</label>
                          <input
                            className={`input ${
                              errors.companyCode && "is-danger"
                            }`}
                            type="text"
                            name="companyCode"
                            disabled={!values.checkbox1}
                            onChange={handleChange}
                            value={values.companyCode || ""}
                            placeholder="Insérez le code"
                          />
                        </div>
                        {errors.companyCode && (
                          <p className="help is-danger">{errors.companyCode}</p>
                        )}
                      </div>
                      <div className="field">
                        <div className="control">
                          <label>Nom de la société</label>
                          <input
                            className="input"
                            type="text"
                            disabled={!values.checkbox1}
                            name="companyName"
                            value={values.companyName || ""}
                            readOnly
                            placeholder="Insérez nom"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="field file-upload">
                      <div className="control" style={{ display:'flex',alignItems:'center',flexWrap:'wrap' }}>
                      Télécharger le fichier PDF 
                      <img src={Info} alt="info" onClick={toggleInstructions} style={{ marginLeft: '10px', cursor: 'pointer' }} />
                      <label htmlFor="linkedinPDF">
                        {file ? file.name : ''}
                      </label>
                      
                      <input
                        id="linkedinPDF"
                        name="linkedinPDF"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                        style={{marginTop:'15px',display:'none'}}
                      />
                      
                      </div>
                      {errors.linkedinPDF && (
                        <p className="help is-danger">{errors.linkedinPDF}</p>
                      )}
                    </div>
                    
                    {showInstructions && (
                      <div className="info">
                        <p>Importez vos données depuis LinkedIn</p>
                        <ol>
                          <li>Rendez-vous sur votre profil LinkedIn.</li>
                          <li>Ensuite, cliquez sur "Plus" et "Enregistrer en PDF" pour télécharger votre profil sous forme de fichier PDF.</li>
                          <li>Téléchargez votre fichier PDF. Nous nous occupons de la suite!</li>
                        </ol>
                        <img src={Instruction} alt="Instructions" style={{ width: '100%', borderRadius: '5px' }} />
                      </div>
                    )}

                  
                    
                    <div className="field checkbox-wrap">
                      <div className="control">
                        <input
                          type="checkbox"
                          id="checkbox2"
                          name="checkbox2"
                          checked={isChecked}
                          onChange={receiveUpdateCheckbox}
                        />
                        <label htmlFor="checkbox2">
                        Je ne souhaite pas recevoir d'actualités sur le produit
                        </label>
                      </div>
                    </div>
                    <div className="field checkbox-wrap">
                      <div className="control">
                        <input
                          type="checkbox"
                          id="checkbox3"
                          name="checkbox3"
                          onChange={handleCheckboxChange}
                          required
                        />
                        <label htmlFor="checkbox3">
                        J'accepte les conditions générales d'ASAP-CV ainsi que la politique de protection des données 
                        </label>
                      </div>
                      {errors.checkbox3 && (
                        <p className="help is-danger">{errors.checkbox3}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="button is-block is-info is-fullwidth"
                    >
                      {isLoading
                        ? "Envoi en cours..."
                        : "Envoyer le formulaire"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className={`submitmodal ${isModalOpen ? "is-active" : ""}`}>
          <div className="modal-background" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <div className="box">
              <img src={modalImage} alt="" />
              <p>{modalMessage}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
