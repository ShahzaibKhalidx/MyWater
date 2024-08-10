import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const FAQ = () => {
  const Content = {
    "items": [
      {
        "heading": "What is MyWater?",
        "content": "MyWater is an innovative water dispenser system designed to provide clean filtered water conveniently. Our systems are equipped with advanced filtration technology and safety features to ensure the highest quality of water."
      },
      {
        "heading": "Do you deliver water bottles?",
        "content": "No we do not deliver water, We purify the tap water to provide clean and safe drinking water."
      },
      {
        "heading": "What is the difference between MyWater® and other water brands?",
        "content": "MyWater® stands out by using no artificial infused minerals and being completely plastic-free. Our minerals are naturally sourced providing your water with a distinct and unique taste that sets it apart from other brands."
      },
      {
        "heading": "In how many cities do you provide services?",
        "content": "We are currently serving Karachi, Lahore, Islamabad, and Rawalpindi. Our operations are expanding to other major cities across the country. Stay tuned for updates on our social media pages."
      },
      {
        "heading": "How many active users does MyWater® have?",
        "content": "We have approx. 5000+ happy and satisfied users in Pakistan."
      },
      {
        "heading": "What are the monthly charges?",
        "content": "The charges are as under:<br>Neo 02: PKR 4500/ Per Month + Inclusive Tax (Under sink Unit)<br>Terra Ms-02: PKR 5500/ Per Month + Inclusive Tax (Dispenser Unit)"
      },
      {
        "heading": "Does your dispenser have a fridge with it?",
        "content": "Our Terra – MS-02 model can provide cold water but does not include a refrigeration feature."
      },
      {
        "heading": "How can I refer MyWater® to someone?",
        "content": "You can share contact details through our app, via email at support@mywater.pk, or by calling us at 021-11-11-92837. Once we receive the details, our team will reach out to the referee within 24 hours."
      },
      {
        "heading": "Can I get this installed in my office?",
        "content": "Yes, We offer customized units tailored to your specific requirements."
      },
      {
        "heading": "How can I make a water quality complaint?",
        "content": "You can register a complaint through the MyWater App, our Helpline, MyWater WhatsApp, or by emailing us at support@mywater.pk."
      },
      {
        "heading": "What is TDS?",
        "content": "TDS stands for total dissolved solids and represents the total concentration of dissolved substances in water."
      },
      {
        "heading": "Can we run MyWater on a generator or UPS?",
        "content": "Our water purifier system is designed for versatility and reliability. It can operate seamlessly on UPS and generators due to its low power consumption. In the event of a power outage, the cooling and heating functions can be turned off to conserve energy. The compressor requires only 0.7A/300-400W ensuring efficient operation without heavy load."
      },
      {
        "heading": "What is pH level?",
        "content": "The letters pH stands for potential of hydrogen, since pH is effectively a measure of the concentration of hydrogen ions (that is, protons) in a substance."
      },
      {
        "heading": "Do you have industrial solutions?",
        "content": "Depending on the requirement we do provide industrial solutions. We have Solace, Terra MS-03 for industrial and corporate use."
      },
      {
        "heading": "What are the names of your corporate clients?",
        "content": "South City Hospital, Hashmani Hospital, Indus Hospital, IBL Group, Meezan Bank, Multinet Group, Lucky One, Habib Public School, CAS School, Amreli Steels, HRSG, and many more."
      },
      {
        "heading": "Can you show all the filters and processes physically?",
        "content": "Yes, We can give you a 3D visual or if needed we can show you the filtration process inside the unit."
      },
      {
        "heading": "What is the TDS range which your system can cover and convert into pure mineral water?",
        "content": "As per Global bottled drinking water standards, any TDS starting from 30 – 150 is excellent drinking water. We have different ranges of waters such as Alkaline, Zero Sodium Water & Spring. Our system can convert any water having TDS up to 2000 – 2500 to ensure 30-150 TDs (find an image)."
      },
      {
        "heading": "When did you guys launch this system in Pakistan? Because we didn’t hear so much about MyWater?",
        "content": "We started our Research and Product Development in 2016 and it was officially launched in 2020. Currently our service is available in Karachi, Lahore, Islamabad & Rawalpindi. We have also launched the product in UAE."
      },
      {
        "heading": "How to install Mywater mobile application?",
        "content": "Google Play: https://play.google.com/store/apps/details?id=com.MyWater®.customer.app&hl=en<br>Apple Store: https://apps.apple.com/pk/app/mywater-app/id1464485043"
      },
      {
        "heading": "What type of contaminants can potentially show up in my tap water?",
        "content": "The common contaminants which can be found in the tap water are:<br>Bacteria<br>Virus<br>Inorganic contaminants such as presence of significant amounts of calcium or magnesium components which may cause hardness of water."
      },
      {
        "heading": "Why do I need a MyWater® purifier at home for drinking water?",
        "content": "MyWater® purifiers are capable of removing all harmful contaminants in the water and provide you with safe, clean, and reliable drinking water."
      },
      {
        "heading": "How effective is MyWater® in removing all types of contaminants? Including ones that are not identified today but show up tomorrow?",
        "content": "Our filters have the capability of purifying water through an on-going process of filtration which assure you that the water which is drawn from the faucet is safe for drinking."
      },
      {
        "heading": "How do I know the minerals added by the MyWater® purifier in my water is safe?",
        "content": "Our smart sensors are capable of informing the Unit for adding the required amount of minerals in the water."
      },
      {
        "heading": "What is the MyWater® purifier price? Who does the maintenance of the system?",
        "content": "The maintenance cost is added in the monthly MRC which includes timely replacement of filters. Services & maintenance is conducted every 90 days where necessary filters are replaced as per schedule."
      },
      {
        "heading": "What is the warranty of MyWater® purifiers?",
        "content": "Purifiers are maintained by Mywater so there is no need for any warranty."
      },
      {
        "heading": "What does the MyWater® mobile app show?",
        "content": "MyWater® mobile app shows daily readings of your Tap Water TDS, MyWater® TDS, consumption of water on a daily, weekly, and monthly basis."
      },
      {
        "heading": "Can the MyWater® purifier system be used in small offices or commercial spaces?",
        "content": "Yes."
      },
      {
        "heading": "Is Mywater lab tested?",
        "content": "Yes our water is lab tested from leading laboratories of Pakistan and International Market."
      },
      {
        "heading": "Why is the taste of Mywater different from other bottled water?",
        "content": "Bottled water tastes different because it is usually high in TDS and the plastic involvement creates a certain taste which is different from freshly purified water. MyWater provides you with real-time purification with low TDS making it excellent to drink according to WHO standards. You might notice a difference in taste initially but in a day or two your body will adjust to MyWater and you'll start noticing improvements in both water consumption and health."
      },
      {
        "heading": "How can I identify that water quality is compromised?",
        "content": "Through our unique and advanced Alarm System. Our equipment is equipped with sensors which monitor water quality at every stage. Health of all filters are monitored by these sensors. In case if the health of any filter needs attention, an alarm is generated in our monitoring system, our teams will proactively approach you and change filters as required."
      },
      {
        "heading": "Can I buy this equipment?",
        "content": "Yes, If a customer pays the upfront cost of the equipment, the device can be his property. We offer various service packages for our upfront units, including options for 1-year, 3-year, and on-demand plans."
      },
      {
        "heading": "How long do you take for installation?",
        "content": "The installation will be done within 48-72 hours once the pre-survey is done and approved by our Team."
      },
      {
        "heading": "Can I install MyWater by myself or do I need a professional?",
        "content": "While the installation process is designed to be user-friendly, we recommend professional installation to ensure optimal performance and safety."
      },
      {
        "heading": "Can I relocate equipment by myself?",
        "content": "We strongly urge the customers to inform us to relocate the unit by formally informing us through our designated contact points. Our trained technicians will visit your premises and relocate. If any damage occurs to the unit during self-relocation, MyWater® reserves the right to claim for damages to the unit. Charges for relocation (Consumers) is PKR 5000/- + Taxes."
      },
      {
        "heading": "I am unable to login application",
        "content": "Once the installation is completed, we will send a detailed email of your account with all necessary details including your username and password. In case you are unable to login the MyWater® App, you may contact our helpline. Our support team will assist you in resetting your password."
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

      <CallToActionSection />

      <PartnersSection paddingTop />

    </Layouts>
  );
};
export default FAQ;