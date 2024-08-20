export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "L'e-mail est un champ obligatoire";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Adresse email invalide";
  }

  //if (!values.phone) {
  //  errors.phone = "Le numéro de téléphone est un champ obligatoire";
  //}

  // Check if checkbox1 is checked before validating companyCode
  if (values.checkbox1) {
    if (!values.companyCode) {
      errors.companyCode = "Le code de l'entreprise est obligatoire";
    }
  } else {
    errors.checkbox1 = "Le code de l'entreprise est requis.";
  }

  if (!values.checkbox1) {
    errors.checkbox1 = "Le code de l’entreprise est obligatoire.";
  }
  if (!values.checkbox3) {
    errors.checkbox3 = "Vous devez accepter les Termes et Conditions.";
  }

  return errors;
}
