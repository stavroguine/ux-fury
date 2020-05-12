import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/projects/tdf.scss';
import Tag from "../../components/tag";
import Background from "../../components/background";

const TdfPage = () => (
    <Layout>
        <SEO title="Tdf" />
        <main className="tdf">
            <section id="tdfSplash" className="tdf__splash">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-12 col-md-9 my-auto ">
                            <div className="tdf__splash--content align-middle">
                                <div className="tdf__splash--title">
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
                <div className="container h-100">
                <div className="row h-100">
                    <div className="sol-sm-12">
                        <div className="tdf__intro--title">
                            <h2>Le contexte</h2>
                        </div>
                    </div>
                </div>
                <div className="row h-100">
                    <div className="sol-sm-12 col-md-4">
                        <h3>Présentation</h3>
                        <p>

                        </p>

                    </div>
                    <div className="sol-sm-12 col-md-4">
                        <h3>Le problème</h3>
                        <p>

                        </p>

                    </div>
                    <div className="sol-sm-12 col-md-4">
                        <h3>La résolution</h3>
                        <p>

                        </p>

                    </div>
                </div>
            </div>
            </section>
        </main>
    </Layout>
);

export default TdfPage
