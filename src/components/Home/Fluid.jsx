import './Fluid.css';

export default function Fluid() {
    return (
        <div className='container'>
        <div className="fluid-products">
            <div className="section-title-row">
                <h2>Why Choos our Honey</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor ipsum
                    dolor sit amet, consectetuer adipiscing elit consectetuer adipiscing elit. Aenean commodo.</p>
            </div>
            <div className="products-row">
                <div className="col">
                    <div className="cover-text-center">
                        <img className="w-125" src="/assets/images/icon/honeycomb.png" alt=""/>
                        <h2 className="text-decoration">Organic Honey</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed
                            suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                    </div>
                </div>
                <div className="col">
                    <div className="cover-text-center">
                        <img className="w-125" src="/assets/images/icon/bee.png" alt=""/>
                        <h2 className="text-decoration">Queen Bee Honey</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed
                            suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                    </div>
                </div>
                <div className="col">
                    <div className="cover-text-center">
                        <img className="w-125" src="/assets/images/icon/honey.png" alt=""/>
                        <h2 className="text-decoration">Hygienic Packing </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed
                            suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                    </div>
                </div>
                <div className="col">
                    <div className="cover-text-center">
                        <img className="w-125" src="/assets/images/icon/fast.png" alt=""/>
                        <h2 className="text-decoration">Fast Delivery </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed
                            suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}