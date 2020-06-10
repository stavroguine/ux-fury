import React from 'react';
import Image from "./image";
import AniLink from "gatsby-plugin-transition-link/AniLink"

function OtherProject() {
    return (
        <section id="otherProject">
            <div className="container h-100">
                <div className="row h-100 ">
                    <div className="col-sm-12 mt-5 ">
                        <h2>Voir mes autres projets</h2>
                    </div>
                </div>
                <div className="row h-100 mt-5">
                        <div className="col-sm-12 col-md-3 ">
                            <div className="other-project">
                                <AniLink bg="#922E63" cover direction="bottom"  duration={2} to='/projects/tdf'>
                                    <span className="span-tdf">TDF</span>
                                    <Image alt="TDF" filename="Pastille_TDF.png" />
                                </AniLink>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 ">
                            <div className="other-project">
                                <AniLink bg="#226D84" cover direction="bottom"  duration={2} to='/projects/ffyn'>
                                    <span className="span-ffyn">FFYN</span>
                                    <Image alt="FFYN" filename="Pastille_FFYN.png" />
                                </AniLink>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 ">
                            <div className="other-project">
                                <AniLink bg="#2F7B27" cover direction="bottom"  duration={2} to='/projects/daradja'>
                                    <span className="span-daradja">Daradja</span>
                                    <Image alt="Daradja" filename="Pastille_Daradja.png" />
                                </AniLink>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 ">
                            <div className="other-project">
                                <AniLink bg="#922E63" cover direction="bottom"  duration={2} to='/projects/peneloppe'>
                                    <span className="span-peneloppe">Peneloppe</span>
                                    <Image alt="Peneloppe" filename="Pastille_Peneloppe.png" />
                                </AniLink>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default OtherProject;