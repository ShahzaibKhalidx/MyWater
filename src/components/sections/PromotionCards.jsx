import React from 'react';
import Link from 'next/link';

const PromotionCards = () => {
    return (
        <div className="promo-container">
            <div className="card">
                <div className="card-content">
                    <h2>TERRA</h2>
                    <p>ADVANCED.<br />ALL IN ONE.<br />SMART.</p>
                    <p>Suitable for any home or office with a sleek design.</p>
                    <Link className="onovo-btn onovo-hover-btn" href="/products/terra-02" passHref>
                        <i className="arrow"><span /></i><span>Know More</span>
                    </Link>
                </div>
                <img src="/images/products/promo-test.png" alt="Neo Product" className="product-image" />
            </div>
            <div className="card">
                <img src="/images/products/promo-test2.png" alt="Terra Product" className="product-image" />
                <div className="card-content">
                    <h2>NEO</h2>
                    <p>COMPACT.<br />VERSATILE.<br />SMART.</p>
                    <p>Suitable for any small kitchen or can be used with an existing dispenser.</p>
                    <Link className="onovo-btn onovo-hover-btn" href="/products/neo-02" passHref>
                        <i className="arrow"><span /></i><span>Know More</span>
                    </Link>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h2>LIMITED EDITION</h2>
                    <p>ADVANCED.<br />ALL IN ONE.<br />SMART.</p>
                    <p>Perfect for homes and small offices.</p>
                    <Link className="onovo-btn onovo-hover-btn" href="/products/limited-edition" passHref>
                        <i className="arrow"><span /></i><span>Know More</span>
                    </Link>
                </div>
                <img src="/images/products/promo-test3.png" alt="Limited Product" className="product-image" />
            </div>
            <div className="card">
                <img src="/images/products/promo-test4.png" alt="Solace Product" className="product-image" />
                <div className="card-content">
                    <h2>SOLACE</h2>
                    <p>UNIVERSAL.<br />VERSATILE.<br />SMART.</p>
                    <p>Perfect for corporate and institutes.</p>
                    <Link className="onovo-btn onovo-hover-btn" href="/products/solace-02" passHref>
                        <i className="arrow"><span /></i><span>Know More</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PromotionCards;