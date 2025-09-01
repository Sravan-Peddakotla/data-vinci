import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductDetails from './ProductDetails'
import '../App.css'
const Hero = () => {
    const [selected, setSelected] = useState('one-time');
    return (
        <div className='hero'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="heroimg">
                            <img src='./hero-img.png' alt="hero-img" className='ms-auto text-center d-flex justify-content-center' />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h1 className="hero-heading">Manuka Honey</h1>
                            <h1>UMF <sup>tm</sup> 24+</h1>
                            <h1>MGO 1122+</h1>
                            <span className='padding-right'>The Optmiser</span>
                            <img src="rating.png" alt="rating" />
                            <span> 82 Reviews</span>
                            <p className="hero-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor magna mi, sed vestibulum diam interdum at. Ut lobortis ante fermentum iaculis venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque at lorem id nisi rhoncus consectetur. Donec dictum facilisis libero ut tempus. Sed arcu dui, interdum eget venenatis quis, tempor eleifend enim. Donec gravida sem sit amet felis pulvinar gravida. Nullam tincidunt vulputate urna eget tempor. Cras porttitor consectetur volutpat. Vivamus semper urna et massa suscipit</p>
                            <Row>
                                <Col sm={2} >
                                    <img src="cert1.png" alt="cert" />
                                </Col>
                                <Col sm={2} >
                                    <img src="certi2.png" alt="cert" />
                                </Col>
                                <Col sm={2} >
                                    <img src="cert3.png" alt="cert" />
                                </Col>
                                <Col sm={2} >
                                    <img src="cert4.png" alt="cert" />
                                </Col>
                                <Col sm={2} >
                                    <img src="certi5.png" alt="cert" />
                                </Col>
                                <Col sm={2} >
                                    <img src="certi6.png" alt="cert" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col lg={6}>
                                <img src="item1.png" alt="product" />
                            </Col>
                            <Col lg={6}>
                                <img src="item2.png" alt="product" />
                            </Col>
                        </Row>
                        <img src="product3.png" alt="product" width='100%' />
                    </Col>
                    <Col lg={6} >
                        <p>SIZE (Select One)</p>
                        <p>Varient: 125g | 4.4oz</p>
                        <Row>
                            <Col lg={3}>
                                <img src="img1.png" alt="img" />
                            </Col>
                            <Col lg={3}>
                                <img src="img2.png" alt="img" />
                            </Col>
                            <Col lg={3}>
                                <img src="img3.png" alt="img" />
                            </Col>
                            <Col lg={3}>
                                <img src="img4.png" alt="img" />
                            </Col>
                            <Col lg={3}>
                                <img src="img5.png" alt="img" />
                            </Col>
                            <Col lg={3}>
                                <img src="img6.png" alt="img" />
                            </Col>
                            <Col lg={3}>
                                <img src="img7.png" alt="img" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} >
                        <Row>
                            <Col lg={6}>
                                <img src="hand.png" alt="juice" width="100%" />
                            </Col>
                            <Col lg={6}>
                                <img src="juice.png" alt="juice" width="100%" />
                            </Col>
                            <Col lg={6}>
                                <img src="lemon.png" alt="juice" width="100%" />
                            </Col>
                            <Col lg={6}>
                                <img src="honey.png" alt="juice" width="100%" />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <p>Payment Options (Select one)</p>
                        <div className="purchase-options">
                            <div
                                className={`option ${selected === "one-time" ? "active" : ""}`}
                                onClick={() => setSelected("one-time")}
                            >
                                <div className="label">One-time purchase</div>
                                <div className="price">$55.88 USD</div>
                            </div>

                            <div
                                className={`option ${selected === "subscribe" ? "active" : ""}`}
                                onClick={() => setSelected("subscribe")}
                            >
                                <div className="label">Subscribe & save 20%</div>
                                <div className="price">$44.70 USD</div>
                            </div>

                            <div className="subscription-info">
                                ⟳ What is a Subscription?
                            </div>
                        </div>
                        <ProductDetails />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero