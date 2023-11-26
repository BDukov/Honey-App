import './About.css';

export default function About() {

    return(
        <div className="about-us" id="about">

        <div className="container">
            <div className="section-title">
                <p>Help us to Achieve our Goal</p>
                <h2>About Our Company</h2>
            </div>
            <div className="about-row">
                <div className="col-md-7">
                    <div className="abut-detail fs-6">

                        <p className="mb-3">Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien,
                            eget tempor justo. Aenean porttitor nibh metus, Cras faucibus tellus eleifend, fermentum
                            purus in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida
                            sollicitudin egestas metus posuere et . Fusce egestas volutpat metus, in sodales sem
                            bibendum porta. Nunc hendrerit nunc sit </p>
                        <p className="mb-3"> Amet tellus posuere, at malesuada sem gravida. Integer maximus ultricies augue,
                            at dapibus elit bibendum consequat. Cras faucibus tellus eleifend, fermentum purus in,
                            dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida vestibulum,
                            urna justo posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin sem. Duis tempus
                        </p>
                        <p className="mb-4">Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien,
                            eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et .
                            Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit Cras
                            faucibus tellus eleifend, fermentum purus in, dapibus sapien. Praesent nec ornare risus.
                            Etiam iaculis, ligula vel gravida </p>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src="/assets/images/h2.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
}