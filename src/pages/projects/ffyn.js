import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/projects/ffyn.scss';
import Tag from "../../components/tag";
import Background from "../../components/background";

const FfynPage = () => (
    <Layout>
        <SEO title="Ffyn" />
        <main className="ffyn">
            <section id="ffynSplash" className="ffyn__splash">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-sm-12 col-md-12 my-auto ">
                            <div className="tdf__splash--content align-middle">
                                <div className="tdf__splash--title ">
                                    <h1>FFYN</h1>
                                </div>
                                <Tag>Web</Tag>
                                <Tag>6 mois</Tag>
                                <Tag>Les investisseurs</Tag>
                                <Tag>Les assets managers</Tag>
                                <Tag>UX/UI Designer</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ffynIntro" className="ffyn__intro">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="sol-sm-12">
                            <div className="ffyn__intro--title">
                                <h2>Le contexte</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row h-100">
                        <div className="sol-sm-12 col-md-4">
                            <h3>Présentation</h3>
                            <p>
                                Les asset managers, ceux qui vendent les fonds, et les investisseurs, ceux qui achètent les fonds, sont souvent en contact. Le moyen le plus simple de communiquer est le mail. Ce moyen trouve vite ses limites.
                            </p>
                        </div>
                        <div className="sol-sm-12 col-md-4">
                            <h3>Le problème</h3>
                            <p>
                                Les informations envoyées par mail sont nombreuses : certaines sont valables, quand d’autres ne sont plus d’actualités. Cependant la messagerie est aussi utilisée quotidiennement par ces deux professions. L’information est noyée parmi la quantité de mail. Il fallait trouver un moyen de séparer les informations quotidiennes et les informations sur les fonds.
                            </p>
                        </div>
                        <div className="sol-sm-12 col-md-4">
                            <h3>La résolution</h3>
                            <p>
                                FFYN répond à cette problématique en lançant un outil qui va permettre de centraliser toutes les informations sur les fonds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ffynSteps" className="ffyn__steps">
                <div className="container">
                    <div className="row h-100">
                        <div className="sol-sm-12">
                            <div className="ffyn__steps--title">
                                <h2>Les fonctionnalités que j'ai développées</h2>
                            </div>
                        </div>
                    </div>
                    <div className="tdf__steps--item">
                        <div className="row h-100">
                            <div className="sol-sm-12">
                                <h3></h3>
                            </div>
                        </div>
                        <div className="row h-100">
                            <div className="sol-sm-12 col-md-6">
                                <h4></h4>
                                <p>

                                </p>
                                <img src="" />
                            </div>
                            <div className="sol-sm-12 col-md-6">
                                <h4></h4>
                                <p>

                                </p>
                                <img src="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Layout>
);

export default FfynPage