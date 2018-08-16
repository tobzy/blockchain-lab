import React from 'react';

const Team = (props) => {
    return (
        <section>
            <section id="section-team">

                <div className="bnd"></div>

                <div className="wrapper-caroussel-pp">
                    <h2>OUR<br/>TEAM</h2>
                    <div className="container-caroussel-pp">
                        <div className="el-pp pp-leonard"
                             style={{
                                 backgroundImage: "url(/AgenceMeV4/img/pages/people1.jpg)"
                             }}
                        ></div>
                        <div className="el-pp pp-barthelemy"
                             style={{
                                 backgroundImage: "url(/AgenceMeV4/img/pages/people1.jpg)"
                             }}></div>
                    </div>
                </div>

                <div className="container-text">
                    <a href="us/digital-agency-san-francisco" className="delay btn"><p className="anim-btnHover-1">MORE
                        ABOUT US</p>
                    </a>
                    <p>We’re a small team that will work closely with you. No intermediaries.</p>
                    <div className="container-caroussel-name">
                        <div className="el-name" data-pp="pp-leonard">
                            <div className="prg"></div>
                            <p className="name">LEONARD CHALVET</p>
                            <p className="job">Co-founder and CTO</p>
                        </div>
                        <div className="el-name" data-pp="pp-barthelemy">
                            <div className="prg"></div>
                            <p className="name">BARTHELEMY CHALVET</p>
                            <p className="job">Co-founder and Creative Director</p>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default Team