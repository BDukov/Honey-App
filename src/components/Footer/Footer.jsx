import './Footer.css';

export default function Footer() {

    return(
        <>
            <div className="footer">
        <div className="container">
            <div className="info">

                <article className="about-footer">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit libero pellentesque
                        libero interdum, id mattis felis dictum. Praesent eget lacus tempor justo efficitur malesuada.
                        Cras ut suscipit nisi.</p>
                </article>

                <article>
                    <h3>Contacts</h3>
                    <ul>
                        <li><a href="#">Phone: 0883000000</a></li>
                        <li><a href="#">Addres: Haskovo</a></li>
                        <li><a href="#">email: bee-sweet@yahoo.com</a></li>
                    </ul>
                </article>

                <article>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </article>

                <article>
                    <h3> Partners</h3>
                    <ul>
                        <li><a href="#">Bee Farm Sweet Life</a></li>
                        <li><a href="#">Honey House</a></li>
                        <li><a href="#">We Love Honey</a></li>
                    </ul>
                </article>
            </div>
        </div>
        <p className="line"></p>
        <div className="container">
            <div className="rights">
                <p>Copyright 2023</p>
            </div>
        </div>
    </div>
        </>
    )
}