import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import '../../styles/projects/tdf.scss';
import Tag from "../../components/tag";
import Background from "../../components/background";
import Image from "../../components/image";
import OtherProject from "../../components/otherProject";
import Context from "../../components/context";

const TdfPage = () => (
    <Layout>
        <SEO title="Tdf" />
        <main className="tdf">
            <section id="tdfSplash" className="tdf__splash">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-12 col-md-12 my-auto ">
                            <div className="tdf__splash--content align-middle">
                                <div className="tdf__splash--title ">
                                    <h1>TDF, l'intranet communautaire</h1>
                                </div>
                                <Tag>Web</Tag>
                                <Tag>3 mois</Tag>
                                <Tag>Les salariés de TDF</Tag>
                                <Tag>UX/UI Designer</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tdfIntro" className="tdf__intro">
                <Context
                    presentation="TDF, opérateur d’infrastructure et entreprise de télécom, voulait refondre leur site intranet, en incluant des technologies plus poussées."
                    problem="Leur ancien intranet n’était plus d’actualité au niveau du design. S’ajoutait à cela des informations qui n’étaient plus fiables et toujours visibles sur leur intranet. Ce qui pouvait fréner, voir complexifier les tâches des employés. Les employés ne trouvaient pas non plus leur place dans ce flot d’information, et demander un espace plus communautaire."
                    resolution="Notre solution a été de refondre leur intranet sur un Sharepoint, en incluant les solutions Office 365, pour construire un intranet perrein et un espace plus communautaire avec Yammer."
                />
            </section>
            <section id="tdfSteps" className="tdf__steps">
                <div className="container">
                    <div className="row h-100">
                        <div className="sol-sm-12">
                            <div className="tdf__steps--title">
                                <h2>Les étapes du projet</h2>
                            </div>
                        </div>
                    </div>
                    <div className="tdf__steps--item">
                        <div className="row h-100">
                            <div className="sol-sm-12 col-md-4 my-auto">
                                <h3>1. La phase de recherche</h3>
                                <p>
                                    Nous avons commencé à entrer dans une
                                    phase de recherche, en parcourant leur intranet
                                    et en faisant un audit.
                                    Ensuite, pour avoir plus de proximité avec les
                                    futurs utilisateurs, nous avons dirigé des ateliers
                                    de co-conception.
                                    Chacun des ateliers avait un objectif précis.
                                </p>
                            </div>
                            <div className="sol-sm-12 col-md-8">
                                <Image alt="Experience map 1" filename="2-TDF - Expérience Map - FHD.png" />
                                <Image alt="Experience map 2" filename="3-TDF - Fiche Personna - FHD.png" />
                            </div>
                        </div>
                    </div>
                    <div className="tdf__steps--item">
                        <div className="row h-100 ">
                            <div className="col-sm-12 col-md-4">
                                <Image alt="TDF Accueil" filename="4-TDF - Screen HomePage - FHD.png" />
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <Image alt="Les engagements TDF" filename="TDF - Screen Les engagements TDF.png" />
                            </div>
                            <div className="col-sm-12 col-md-4 my-auto">
                                <h3>2. La phase idéation</h3>
                                <p>
                                    Une fois  les ateliers de co-conception faits, avec les verbatims et les restitutions, nous sommes passés à la phase d’idéation. Nous avons construit l’arborescence, que nous avons revu ensemble avec  le client. Nous avons défini des parcours utilisateurs.
                                    <br />
                                    Les outils utilisés: Powerpoint, Excel.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tdf__steps--item">
                        <div className="row h-100">
                            <div className="col-sm-12 col-md-4 my-auto">
                                <h3>3. La phase de production</h3>
                                <p>
                                    Une fois l’arborescence validé, nous sommes passés au zoning des différentes pages, puis nous avons construit les wireframes, les mocks-up, pour les finaliser sur le Sharepoint du client.
                                    <br />
                                    Les outils utilisés: Wireframing à la main, Adobe XD.
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-8 my-auto">
                                <Image alt="Les engagements TDF" filename="5-TDF - Mockup Page d'accueil - FHD.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tdfRecap" className="tdf__recap">
                <Background>
                    <div className="col-sm-12 col-md-12">
                        <div className="tdf__recap--speech ">
                            <h2>Ce que j'ai appris</h2>
                            <p>
                                J'ai appris à mener une partie de projet, à mieux cibler les expériences
                                utilisateurs. Cela m'a permis de mener une démarche plus profonde dans
                                l'expérience et d'évoluer en terme de design.
                            </p>
                        </div>
                    </div>
                </Background>
            </section>
            <OtherProject/>
        </main>
    </Layout>
);

export default TdfPage
