import React from 'react';

const team = [
    {
        name: 'Shubh Shah',
        imagePath: 'images/team/shubh.jpg',
        github: 'https://github.com/shahshubh',
        insta: 'https://www.instagram.com/shah_shubh_/',
        linkedin: 'https://www.linkedin.com/in/shahshubh/',
    },
    {
        name: 'Nilay Sheth',
        imagePath: 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png',
        github: 'https://github.com/nilay1221',
        insta: '',
        linkedin: '',
        // twitter: ''
    },
    {
        name: 'Nishit Shah',
        imagePath: 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png',
        github: 'https://github.com/nishit767',
        insta: '',
        linkedin: '',
        // twitter: ''
    },
    {
        name: 'Chintan Modi',
        imagePath: 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png',
        github: 'https://github.com/cmodi009',
        insta: '',
        linkedin: '',
        // twitter: ''
    }
]

const Team = () => {

    return (
        <section id="team" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title">Our Team</h4>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}

                <div className="row">

                    {
                        team.map((p, i) => (
                            <div className="col-lg-3 col-md-6 mt-4 pt-2" key={i}>
                                <div className="card team text-center border-0">
                                    <div className="position-relative">
                                        <img src={p.imagePath} className="img-fluid avatar avatar-ex-large rounded-circle shadow" alt="" />
                                        <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                            {
                                                p.github != null ?
                                                    <li className="list-inline-item"><a href={p.github} className="rounded" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                                                    : null
                                            }
                                            {
                                                p.insta != null ?
                                                    <li className="list-inline-item"><a href={p.insta} className="rounded" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                                    : null
                                            }
                                            {
                                                p.twitter != null ? 
                                                    <li className="list-inline-item"><a href={p.twitter} className="rounded" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li> 
                                                    : null
                                            }
                                            {
                                                p.linkedin != null ?
                                                    <li className="list-inline-item"><a href={p.linkedin} className="rounded" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                                    : null
                                            }
                                        </ul>
                                    </div>
                                    <div className="card-body py-3 px-0 content">
                                        <h5 className="mb-0"><a href="/" className="name text-dark">{p.name}</a></h5>
                                        {/* <small className="designation text-muted">C.E.O</small> */}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
}

export default Team;