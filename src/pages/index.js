import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"
import quote from '../images/quote.svg';
import '../styles/home.scss';
import Project from "../components/project";
import wonder_woman from "../images/Wonder_woman.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <main className="home">
          <section id="splashScreen" className="home__splash">
              <div className="container h-100">
                  <div className="row h-100">
                      <div className="col-sm-6">
                          <div className="home__splash--content">
                              <div className="home__splash--title">
                                  <img src={quote} />
                                  <h1 data-aos="fade"
                                      data-aos-easing="linear"
                                      data-aos-duration="1500">La fureur de l'UX</h1>
                                  <img src={quote} />
                              </div>
                              <div className="home__splash--social">
                                  <ul>
                                      <li ><a target="_blank" href="mailto:gaelle.j.molina@gmail.com">Mail</a></li>
                                      <li><a target="_blank" href="https://www.linkedin.com/in/ga%C3%ABlle-molina-63a04b129">Linkedin</a></li>
                                      <li><a target="_blank" href="https://www.instagram.com/gailartdesign/">Instagram</a></li>
                                      <li><a target="_blank" href="https://www.youtube.com/user/GailOnTheMars">Youtube</a></li>
                                  </ul>
                              </div>
                              <AniLink className="button" paintDrip color="yellow"  to='/career'  >
                                  Découvrir mon parcours
                              </AniLink>
                          </div>
                      </div>
                      <div className="col-sm-6  ">
                          <img src={wonder_woman}  className="home__ww"                                   data-aos="fade"
                               data-aos-easing="linear"
                               data-aos-duration="1000"/>
                      </div>
                  </div>
              </div>
          </section>
          <section id="topProjects" className="home__topProjects">
              <div className="container">
                  <div className="row h-100 mt-5">
                      <div className="sol-sm-12">
                          <div className="home__topProjects--title">
                              <h2>Mes projets phares</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row h-100 mt-5">
                      <Project link="/projects/tdf"
                               text="TDF, l'intranet communautaire"
                               alt="Voir la page de TDF"
                               filename="TDF_home.png"/>
                      <Project link="/projects/ffyn"
                               text="FFYN, le pont entre l'investisseur et l'asset manager"
                               alt="Voir la page de Ffyn"
                               filename="ffyn.png"/>
                  </div>
                  <div className="row mt-5 mb-5">
                      <AniLink className="button" cover direction="bottom" duration={2} to='/projects'>
                          Voir tous mes projets
                      </AniLink>
                  </div>
              </div>
          </section>
          <section id="topTools" className="home__topTools">
              <div className="container">
                  <div className="row h-100">
                      <div className="sol-sm-12">
                          <div className="home__topTools--title">
                              <h2>Mes outils de prédilection</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row h-100">
                      <div className="sol-sm-0 col-md-2 pl-0">
                      </div>
                      <div className="sol-sm-12 col-md-3 pl-0">
                          <h3>UX</h3>
                          <ul>
                              <li>Axure</li>
                              <li>Papier & crayon</li>
                              <li>Wireframe.cc</li>
                              <li>Adobe XD</li>
                              <li>Sketch</li>
                          </ul>
                      </div>
                      <div className="sol-sm-12 col-md-3 pl-0">
                          <h3>UI</h3>
                          <ul>
                              <li>Adobe Photoshop</li>
                              <li>Adobe InDesign</li>
                          </ul>
                      </div>
                      <div className="sol-sm-12 col-md-3 pl-0">
                          <h3>Loisirs</h3>
                          <ul>
                              <li>Adobe Premiere</li>
                              <li>Da Vinci Resolve</li>
                              <li>Blender</li>
                              <li>Mixxx</li>
                              <li>FL Studio</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  </Layout>
)

export default IndexPage
