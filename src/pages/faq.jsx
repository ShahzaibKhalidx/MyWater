import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const FAQ = () => {
  const Content = {
    "items": [
      {
        "heading": "What is MyWater®?",
        "content": "Water can be an essential source of minerals for the human body. Water consists of over 70% of our body composition, so it is only important to make sure that the water we drink is as pure as nature intended it to be. MyWater® solves problems efficiently by using proprietary Adaptive Micro-Cyclic Processing (AM-CP®) which uses NSF® certified Reverse Osmosis (RO) purification techniques using high quality components from Dow® and LG® to ensure all contaminants are removed from tap water. Furthermore, MyWater® uses proprietary sensor technology in the system to give a greater visibility to the user of the water they are consuming. This gives you control of your drinking water."
      },
      {
        "heading": "Do you deliver water bottles?",
        "content": "No, we do not deliver water. We purify the tap water to provide clean and safe drinking water."
      },
      {
        "heading": "What is the difference between MyWater® and other water brands?",
        "content": "MyWater® does not use any artificial infused minerals and is plastic free. Our minerals are naturally sourced which gives your water unique taste from other branded water brands"
      },
      {
        "heading": "In how many cities do you provide services?",
        "content": "Currently, we are operating in Karachi, Lahore, Islamabad, Rawalpindi & SIalkot. We are expanding our operations in other major cities in the country. These updates will be updated on our Social Media pages"
      },
      {
        "heading": "What are the monthly charges?",
        "content": "The charges are as under: <br> 1.	Neo: PKR 3500/ PM- + Inclusive Tax (Under sink Unit) <br> 2.	Terra: PKR 4500/-PM +Inclusive Tax (Dispenser Unit)",
      },
      {
        "heading": "Does your dispenser have a fridge with it?",
        "content": "Our Terra – MS-02 has the ability to provide cold water but it does not have the refrigeration facility",
      },
      {
        "heading": "What are the payment options?",
        "content": "We have different payment options for customer’s ease. Payments can be made by following options: <br>1.	Kuickpay <br>2.	Cheques (Payable to MyWater®.pk) <br>3.	Bank Transfer <br>4.	Cash Collections <br>5.	Online Payment Through Master/Visa",
      },
      {
        "heading": "What is the power consumption of your equipment?",
        "content": "",
      },
      {
        "heading": "Does your dispenser have hot and cold options?",
        "content": "",
      },
      {
        "heading": "What if I don’t pay my bills?",
        "content": "",
      },
      {
        "heading": "Is equipment my property?",
        "content": "",
      },
      {
        "heading": "How long do you take for installation?",
        "content": "",
      },
      {
        "heading": "Can I pay my bills in advance?",
        "content": "",
      },
      {
        "heading": "How can I refer MyWater® to someone?",
        "content": "",
      },
      {
        "heading": "Can I get this installed in my office?",
        "content": "",
      },
      {
        "heading": "How can I make a water quality complaint?",
        "content": "",
      },
      {
        "heading": "How can I make dispenser related complaints?",
        "content": "",
      },
      {
        "heading": "Can I relocate equipment by myself?",
        "content": "",
      },
      {
        "heading": "Can I install equipment by myself?",
        "content": "",
      },
      {
        "heading": "What is TDS?",
        "content": "",
      },
      {
        "heading": "What is pH level?",
        "content": "",
      },
      {
        "heading": "How to install Mywater mobile application?",
        "content": "",
      },
      {
        "heading": "I am unable to login application",
        "content": "",
      },
      {
        "heading": "What type of contaminants can potentially show up in my tap water?",
        "content": "",
      },
      {
        "heading": "Why do I need a MyWater® purifier at home for drinking water?",
        "content": "",
      },
      {
        "heading": "How effective is MyWater® in removing all types of contaminants? Including ones that are not identified today but show up tomorrow?",
        "content": "",
      },
      {
        "heading": "What is the difference between MyWater® water and bottled water?",
        "content": "",
      }
    ]
  }

  return (
    <Layouts header={2}>
      <PageBanner pageTitle={"FAQ's"} pageDesc={"Solving your problems is an everyday."} />
      
      {/* Onovo Faq */}
			<section className="onovo-section gap-top-140 gap-bottom-140">
				<div className="container">

          {/* Faq items */}
          <Accordion>
          <div className="onovo-faq-items">
            {Content.items.map((item, key) => (
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
                  <div dangerouslySetInnerHTML={{__html : item.content}} />
                </div>
              </Accordion.Body>
            </div>
            </Accordion.Item>
            ))}
          </div>
          </Accordion>

        </div>
			</section>

      <CallToActionSection />

      <PartnersSection paddingTop />

    </Layouts>
  );
};
export default FAQ;