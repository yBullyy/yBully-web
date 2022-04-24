import React from "react";

const featuresList = [
    {
        title: 'Low Latency (Fast)',
        desc: 'Scroll through your twitter feed and get your tweets labelled within milliseconds.',
        faIconName: 'fas fa-rocket',
    },
    {
        title: 'Responsive',
        desc: 'Less Effort With Responsive Web Design and Mobile-friendliness.',
        faIconName: 'fas fa-desktop',
    },
    {
        title: 'Accurate',
        desc: 'Multiple efficient/accurate models with highest accuracy of 95.26 %.',
        faIconName: 'fas fa-bullseye',
    },
    {
        title: 'Constantly Learning',
        desc: 'Model keeps on learning and updating itself based on new tweets reported by user.',
        faIconName: 'fas fa-chart-line',
    }
];

const Features = () => {
    return (
        <section id="explore" className="bg-light section" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title pb-2">
                            <h4 className="title mb-1">Key Features</h4>
                            {/* <p className="para-desc text-muted mb-0">Start working with <span className="text-primary fw-bold"></span> that can provide everything you need to generate awareness, drive traffic, connect.</p> */}
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    {
                        featuresList.map((feature, i) => (
                            <div className="col-lg-3 col-md-6 mt-4 pt-2" key={i}>
                                <div className="card border-0 features feature-clean course-feature p-4 overflow-hidden shadow">
                                    <div className="icons text-primary text-center">
                                        <i className={feature.faIconName + " d-block rounded mb-0"}></i>
                                    </div>
                                    <div className="card-body p-0 mt-4">                                            
                                        <a href="/" className="title h5 text-dark">{feature.title}</a>
                                        <p className="text-muted mt-2">{feature.desc}</p>
                                        <a href="/" className="text-primary read-more">Read More <i className="uil uil-angle-right-b"></i></a>
                                        <i className={feature.faIconName + " text-primary full-img"}></i>
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

export default Features;