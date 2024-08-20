import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Frame from "../assets/images/frame.svg";
import Frame1 from "../assets/images/frame-1.svg";
import Frame2 from "../assets/images/frame-2.svg";
import Square from "../assets/images/square.svg";
import Icon1 from "../assets/images/icon-1.svg";
import Icon2 from "../assets/images/icon-2.svg";
import Icon3 from "../assets/images/icon-3.svg";
import Icon4 from "../assets/images/icon-4.svg";
import Icon5 from "../assets/images/icon-5.svg";
import Icon6 from "../assets/images/icon-6.svg";
import Icon7 from "../assets/images/icon-7.svg";
import Icon8 from "../assets/images/icon-8.svg";
import Icon9 from "../assets/images/icon-9.svg";
import Icon10 from "../assets/images/icon-10.svg";
import Icon11 from "../assets/images/icon-11.svg";
import Icon12 from "../assets/images/icon-12.svg";
import Icon13 from "../assets/images/icon-13.svg";
import Icon14 from "../assets/images/icon-14.svg";
import Icon15 from "../assets/images/icon-15.svg";
import Icon16 from "../assets/images/icon-16.svg";
import EmailButton from "../components/EmailButton/EmailButton";
import "../assets/css/styles.scss";

const Home = ()=>{
    return(
        <>
          <Header />
          <main>
            <section className="banner-sec">
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <h1>
                        Facilitez le quotidien de{" "}
                        <span> votre ESN ou société de conseil</span> avec l’I.A
                        </h1>
                        <p>Le logiciel de génération de CV adapté à votre société </p>
                        <div className="btn-group">
                        <EmailButton
                            buttonText="Demander une Démo"
                            email="info@asap-cv.com"
                            subject="Request for Demo"
                            body="Hello ASAP-CV, Je suis *** et je souhaiterais une démo de ton outil. Pourrais-tu me recontacter?"
                        />
                        <button className="sec-btn">Essayer gratuitement</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img-wrap">
                        <img src={Frame} alt="Frame" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="info-sec">
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <div className="img-wrap">
                        <img src={Frame1} alt="frame-1" />
                        </div>
                    </div>
                    <div className="col">
                        <h2>Qui sommes-nous?</h2>
                        <p>
                        Nous sommes une jeune entreprise innovante du web qui produit des
                        outils en mode SaaS à l’usage des professionnels du recrutements,
                        des entreprises au service du numérique (ESN) et aux cabinets de
                        conseil
                        </p>
                        <div className="box">
                        <img src={Square} alt="square" />
                        <h6>Le module de consolidation de CV</h6>
                        <p>
                            Permettra à vos équipes d’acquérir en moins de 2 minutes le CV
                            d’un candidat reformaté selon le template de votre société
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="mission-sec">
                <div className="container">
                    <div className="title">
                        <h2>Notre mission</h2>
                    </div>
                <div className="row">
                    <div className="col">
                        <div className="icon">
                            <img src={Icon1} alt="icon-1" />
                        </div>
                        <h6>Augmentation de la productivité</h6>
                        <div className="wrap">
                            <div className="cnt">
                               <h6>Demander une démo</h6>
                                <p>
                                    Produisez dès maintenant vos CV plus facilement avec ASAP-CV{" "}
                                </p>
                            </div>
                            <button type="button">Essayer gratuitement</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon">
                            <img src={Icon2} alt="icon-2" />
                        </div>
                        <h6>Gain de temps & meilleure allocation des ressources</h6>
                        <div className="wrap">
                            <div className="cnt">
                                <h6>Demander une démo</h6>
                                <p>Produisez dès maintenant vos CV plus facilement avec ASAP-CV{" "}</p>
                            </div>
                            <button type="button">Essayer gratuitement</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon3} alt="icon-3" />
                        </div>
                        <h6>Meilleure réactivité pour proposer un profil</h6>
                        <div className="wrap">
                        <div className="cnt">
                            <h6>Demander une démo</h6>
                            <p>
                                Produisez dès maintenant vos CV plus facilement avec ASAP-CV{" "}
                            </p>
                        </div>
                        <button type="button">Essayer gratuitement</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon4} alt="icon-4" />
                        </div>
                        <h6>Réduction des coûts</h6>
                        <div className="wrap">
                        <div className="cnt">
                            <h6>Demander une démo</h6>
                            <p>
                                Produisez dès maintenant vos CV plus facilement avec ASAP-CV{" "}
                            </p>
                        </div>
                        <button type="button">Essayer gratuitement</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon5} alt="icon-5" />
                        </div>
                        <h6>
                        Optimisez les chances de vos candidats d’être reçus en entretiens
                        </h6>
                        <div className="wrap">
                        <div className="cnt">
                            <h6>Demander une démo</h6>
                            <p>
                                Produisez dès maintenant vos CV plus facilement avec ASAP-CV
                            </p>
                        </div>
                        <button type="button">Essayer gratuitement</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon6} alt="icon-6" />
                        </div>
                        <h6>Innovation & image de marque</h6>
                        <div className="wrap">
                        <div className="cnt">
                            <h6>Demander une démo</h6>
                            <p>
                                Produisez dès maintenant vos CV plus facilement avec ASAP-CV
                            </p>
                        </div>
                        <button type="button">Essayer gratuitement</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon7} alt="icon-7" />
                        </div>
                        <h6>Réduction des erreurs humaines</h6>
                        <div className="wrap">
                        <div className="cnt">
                            <h6>Demander une démo</h6>
                            <p>
                                Produisez dès maintenant vos CV plus facilement avec ASAP-CV
                            </p>
                        </div>
                        <button type="button">Essayer gratuitement</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon7} alt="icon-7" />
                        </div>
                        <h6>Demander une démo</h6>
                        <div className="wrap">
                        <div className="cnt">
                            <h6>Demander une démo</h6>
                            <p>
                                Produisez dès maintenant vos CV plus facilement avec ASAP-CV
                            </p>
                        </div>
                        <button type="button">Essayer gratuitement</button>
                        </div>
                    </div>
              </div>
          </div>
            </section>
            <section className="process-sec">
                <div className="container">
                    <div className="title">
                    <h2>Comment ça marche?</h2>
                    </div>
                    <div className="row">
                    <div className="col">
                        <div className="icon">
                        <img src={Icon8} alt="icon-8" />
                        </div>
                        <h5>Etape 1</h5>
                        <h6>Analyse du template CV de votre société </h6>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon9} alt="icon-9" />
                        </div>
                        <h5>Etape 2</h5>
                        <h6>Paramétrage de la solution </h6>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon10} alt="icon-10" />
                        </div>
                        <h5>Etape 3</h5>
                        <h6>Identification du candidat sur un jobboard</h6>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon11} alt="icon-11" />
                        </div>
                        <h5>Etape 4</h5>
                        <h6>Entretien avec un chargé de recrutement</h6>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon12} alt="icon-12" />
                        </div>
                        <h5>Etape 5</h5>
                        <h6>Envoi d'un email pour finaliser la candidature </h6>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon13} alt="icon-13" />
                        </div>
                        <h5>Etape 6</h5>
                        <h6>Le candidat va remplir le formulaire sur la plateforme </h6>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon14} alt="icon-14" />
                        </div>
                        <h5>Etape 7</h5>
                        <h6>Réception du CV</h6>
                    </div>
                    <div className="col">
                        <div className="icon">
                        <img src={Icon15} alt="icon-15" />
                        </div>
                        <h5>Etape 8</h5>
                        <h6>Vous pouvez transmettre la candidature à votre client</h6>
                    </div>
                    </div>
                </div>
            </section>
            <section className="feature-sec">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Comment booster vos CV ?</h2>
                            <p>
                            Conçue pour optimiser la rédaction de curriculum vitae, notre
                            Intelligence Artificiel a été spécialement élaborée pour créer,
                            compléter, corriger et améliorer la description du parcours
                            professionnel de votre candidat.
                            </p>
                            <p>
                            ASAP-CV, vous assure ainsi un CV de haute qualité sublimant le
                            potentiel de votre candidat.
                            </p>
                            <h6>Nos 3 fonctionnalités</h6>
                            <ul className="list">
                            <li>
                                Amélioration des descriptions existantes{" "}
                                <img src={Square} alt="square" />
                            </li>
                            <li>
                                Complétion des descriptions manquantes{" "}
                                <img src={Square} alt="square" />
                            </li>
                            <li>
                                Adaptation du CV à l'appel d'offre
                                <span className="badge">Coming soon</span>
                            </li>
                            </ul>
                </div>
               
                <div className="col">
                <img src={Frame2} alt="frame-2" />
                </div>
                </div>
            </div>
            </section>
            <section className="formula-sec">
            <div className="container">
                <div className="title">
                <h2>Nos formules</h2>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="wrap">
                            <div className="icon">
                                <img src={Icon16} alt="icon-16" />
                            </div>
                        <h5>Starter</h5>
                        <div className="desc">
                            Pour les jeunes sociétés, souhaitant les modules de bases pour
                            bien commencer
                        </div>
                        <p>20 CV/mois</p>
                        <p>Refonte du template CV tous les 12 mois</p>
                        </div>
                        <div className="offer">1 semaine offerte</div>
                    </div>
                    <div className="col">
                        <div className="wrap">
                        <div className="icon">
                            <img src={Icon16} alt="icon-16" />
                        </div>
                        <h5>Pro</h5>
                        <div className="desc">
                            Pour les sociétés souhaitant plus de fonctionnalités avancées et
                            davantage de ressources
                        </div>
                        <p>80 CV/mois</p>
                        <p>Refonte du template CV tous les 6 mois</p>
                        <p>Module I.A</p>
                        </div>
                        <div className="offer">1 s emaine offerte</div>
                    </div>
                    <div className="col">
                        <div className="wrap">
                            <div className="icon"></div>
                            <h5>Elite</h5>
                            <div className="desc">
                            Pour les sociétés souhaitant des outils haut de gamme et une assistance prioritaire
                            </div>
                            <p>150 CV/mois</p>
                            <p>Refonte du template CV tous les mois</p>
                            <p>Module I.A</p>
                            <p>File prioritaire</p>
                            <p>Reporting mensuel</p>
                        </div>
                        <div className="offer">
                            1 semaine offerte
                        </div>
                    </div>
                    <div className="col">
                        <div className="wrap">
                            <div className="icon"></div>
                            <h5>Ultimate</h5>
                            <div className="desc">
                                Le paquet tout-en-un, avec tout ce dont vous avez besoin
                            </div>
                            <p>200 CV/mois</p>
                            <p>Refonte du template CV tous les 12 mois</p>
                            <p>Module I.A</p>
                            <p>File prioritaire</p>
                            <p>Intégration des données dans le CRM</p>
                        </div>
                        <div className="offer">
                            <span className="badge">Coming soon</span>1 semaine offerte
                        </div>
                    </div>
                </div>
                </div>
            </section>
          </main>
          <Footer/>
        </>
    );
};
export default Home;