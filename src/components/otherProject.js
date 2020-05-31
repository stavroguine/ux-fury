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
                            <AniLink bg="#922E63" cover direction="bottom"  duration={2} to='/projects/tdf'>
                                <Image alt="TDF" filename="Pastille_TDF.png" />
                            </AniLink>
                        </div>
                        <div className="col-sm-12 col-md-3 pl-5">
                            <AniLink bg="#226D84" cover direction="bottom"  duration={2} to='/projects/ffyn'>
                                <Image alt="FFYN" filename="Pastille_FFYN.png" />
                            </AniLink>
                        </div>
                        <div className="col-sm-12 col-md-3 pl-5">
                            <AniLink bg="#2F7B27" cover direction="bottom"  duration={2} to='/projects/daradja'>
                                <Image alt="Daradja" filename="Pastille_Daradja.png" />
                            </AniLink>
                        </div>
                        <div className="col-sm-12 col-md-3 pl-5">
                            <AniLink bg="#922E63" cover direction="bottom"  duration={2} to='/projects/peneloppe'>
                                <Image alt="Peneloppe" filename="Pastille_Peneloppe.png" />
                            </AniLink>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default OtherProject;