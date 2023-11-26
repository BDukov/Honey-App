import './Testimonial.css';

export default function Testimonial() {

    return(
        <div id="testimonial" className="testimonial">
        <div className="container">
            <div className="section-title">
                <h2 className="fw-bolder">Testimonial</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.
                </p>
            </div>
            <div className="row-people">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="serv-cove">
                        <div className="prf row mb-3">
                            <div className="col-3">
                                <img className="rounded-pill" src="/assets/images/testimonial/member-01.jpg" alt=""/>
                            </div>
                            <div className="col-9 align-self-center">
                                <h6 className="mb-0 fw-bolder">Vinoth Parkash</h6>
                                <span>CEO Fabric Nation</span>
                            </div>
                        </div>
                        <div className="det text-center">
                            <p className="fs-7 fst-italic">Sed lectus ante, pharetra in lacus sed, efficitur luctus elit.
                                Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis ut
                                arcu tristique luctus. Curabitur </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="serv-cove">
                        <div className="prf row mb-3">
                            <div className="col-3">
                                <img className="rounded-pill" src="/assets/images/testimonial/member-03.jpg" alt=""/>
                            </div>
                            <div className="col-9 align-self-center">
                                <h6 className="mb-0 fw-bolder">Jackson Daniel</h6>
                                <span>CEO Notitech</span>
                            </div>
                        </div>
                        <div className="det text-center">
                            <p className="fs-7 fst-italic">Sed lectus ante, pharetra in lacus sed, efficitur luctus elit.
                                Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis ut
                                arcu tristique luctus. Curabitur </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="serv-cove">
                        <div className="prf row mb-3">
                            <div className="col-3">
                                <img className="rounded-pill" src="/assets/images/testimonial/member-02.jpg" alt=""/>
                            </div>
                            <div className="col-9 align-self-center">
                                <h6 className="mb-0 fw-bolder">Praveen Thaney</h6>
                                <span>Admin Vintech</span>
                            </div>
                        </div>
                        <div className="det text-center">
                            <p className="fs-7 fst-italic">Sed lectus ante, pharetra in lacus sed, efficitur luctus elit.
                                Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis ut
                                arcu tristique luctus. Curabitur </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}