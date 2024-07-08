import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';

const FAQComponent = ({ title, items }) => {
  return (
    <section className="onovo-section gap-top-80 gap-bottom-40">
      <div className="container">
        {title && <h2 className="section-title text-center gap-bottom-40">{title}</h2>}
        <Accordion>
          <div className="onovo-faq-items">
            {items.map((item, key) => (
              <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
                <div className="onovo-faq-item onovo-collapse-item">
                  <Accordion.Header>
                    <h5 className="title onovo-collapse-btn">
                      <span>{item.heading}</span>
                      <i className="arrow" />
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="onovo-text">
                      <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    </div>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  );
};

FAQComponent.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  ).isRequired,
};

FAQComponent.defaultProps = {
  title: null,
};

export default FAQComponent;
