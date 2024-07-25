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
        "content": "Currently, we are operating in Karachi, Lahore, Islamabad, Rawalpindi & Sialkot. We are expanding our operations in other major cities in the country. These updates will be updated on our Social Media pages"
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
        "content": "Compressor 0.7A/300 -400W heater",
      },
      {
        "heading": "Does your dispenser have hot and cold options?",
        "content": "Yes! Our unit Terra – MS-02 has the capability to provide both hot and cold water",
      },
      {
        "heading": "What if I don’t pay my bills?",
        "content": "We encourage our customers to fulfil the payments on a timely basis to enjoy seamless services, however if the payment is defaulted for more than a month, MyWater® reserves the right to discontinue the services. Our billing cycle is 1st-1st and due date is 5th of every month. We provide Post paid service",
      },
      {
        "heading": "Is equipment my property?",
        "content": "If the unit is purchased on upfront payment, the unit is the customer's property. The services against which the unit is availed by paying regular MRC, MyWater® owns the unit",
      },
      {
        "heading": "How long do you take for installation?",
        "content": "The installation will be done within 48-72 hours once the pre-survey is done and approved by our Team",
      },
      {
        "heading": "Can I pay my bills in advance?",
        "content": "Yes. We have an offer for advance payments",
      },
      {
        "heading": "How can I refer MyWater® to someone?",
        "content": "The contact details can be shared via App, e-mail address (support@MyWater.pk) or call us at our 021-11-11-92837. Once the details are shared, our Team will contact the referee within 24 hours",
      },
      {
        "heading": "Can I get this installed in my office?",
        "content": "Yes, we offer customized units as per the requirement",
      },
      {
        "heading": "How can I make a water quality complaint?",
        "content": "The complaint can be registered through Mywater App, Helpline, Mywater WhatsApp or email at support@myWater.pk",
      },
      {
        "heading": "How can I make dispenser related complaints?",
        "content": "The complaint can be registered through Mywater App, Helpline, Mywater WhatsApp or email at support@myWater.pk",
      },
      {
        "heading": "Can I relocate equipment by myself?",
        "content": "We strongly urge the customers to inform us to relocate the unit by formally informing us through our designated contact points. Our trained technicians will visit your premises and relocate. If any damage occurs to the unit during self-relocation, MyWater® reserves the right to claim for damages to the unit. Charges for relocation (Consumers) is PKR 5000/- + Tax",
      },
      {
        "heading": "Can I install equipment by myself?",
        "content": "The installation will be done by the MyWater® Technical Team only.",
      },
      {
        "heading": "What is TDS?",
        "content": "TDS (Total Dissolved Solids) TDS stands for total dissolved solids, and represents the total concentration of dissolved substances in water",
      },
      {
        "heading": "What is pH level?",
        "content": "The letters pH stands for potential of hydrogen, since pH is effectively a measure of the concentration of hydrogen ions (that is, protons) in a substance",
      },
      {
        "heading": "How to install Mywater mobile application?",
        "content": "Google Play: <br><a>https://play.google.com/store/apps/details?id=com.MyWater®.customer.app&hl=en</a> <br>Apple Store <br><a>https://apps.apple.com/pk/app/mywater-app/id1464485043</a>",
      },
      {
        "heading": "I am unable to login application",
        "content": "Once the installation is completed, please note the following steps: <br> ●	Open App – Go to the option of “I already have an account”.<br>●	Then – “Recover my password”. Enter your registered mobile number in the format of +923xxxxxxxxxx<br>●	System generated password will be sent via SMS to registered mobile number. <br>●	Go to – I already have an account” – Enter your registered cell number in the format of +923xxxxxxxxxx<br>●	Enter the 4-digit PIN Code<br>App will be logged in",
      },
      {
        "heading": "What type of contaminants can potentially show up in my tap water?",
        "content": "The common contaminants which can be found in the tap water are:<br>●	Bacteria<br>●	Virus<br>●	Inorganic contaminants such as presence of significant amounts of calcium or magnesium components which may cause hardness of water",
      },
      {
        "heading": "Why do I need a MyWater® purifier at home for drinking water?",
        "content": "MyWater® purifiers are capable of removing all harmful contaminants in the water and provide you with safe, clean and reliable drinking water",
      },
      {
        "heading": "How effective is MyWater® in removing all types of contaminants? Including ones that are not identified today but show up tomorrow?",
        "content": "Our filters have the capability of purifying water through an on-going process of filtration which assure you that the water which is drawn from the faucet is safe for drinking",
      },
      {
        "heading": "What is the difference between MyWater® water and bottled water?",
        "content": "Bottled water may contain infused minerals and presence of microplastics. MyWater® is free from infused minerals and is free from micro plastics",
      },
      {
        "heading": "How do I know the minerals added by the MyWater® purifier in my water is safe?",
        "content": "Our smart sensors are capable of informing the Unit for adding the required amount of minerals in the water"
      },
      {
        "heading": "What is the MyWater® purifier price? Who does the maintenance of the system?",
        "content": "The maintenance cost is added in the monthly MRC which includes timely replacement of filters. Services & maintenance is conducted every 90 days where necessary filters are replaced as per schedule. "
      },
      {
        "heading": "Is there a filter cost beyond the monthly full-service flat fee cost for a customer?",
        "content": "There is no additional cost of filters."
      },
      {
        "heading": "What is the warranty of MyWater® purifiers?",
        "content": "Purifiers are maintained by Mywater so there is no need for any warranty."
      },
      {
        "heading": "What does the MyWater® mobile app show?",
        "content": "MyWater® mobile app shows daily readings of your Tap Water TDS, MyWater® TDS, and consumption of water on a daily, weekly, and monthly basis."
      },
      {
        "heading": "Can the MyWater® purifier system be used in small offices or commercial spaces?",
        "content": "Yes."
      },
      {
        "heading": "How can I identify that water quality is compromised?",
        "content": "Through our unique and advanced Alarm System. Our equipment is equipped with sensors which monitor water quality at every stage. Health of all filters is monitored by these sensors. In case the health of any filter needs attention, an alarm is generated in our monitoring system. Our teams will proactively approach you and change filters as required."
      },
      {
        "heading": "What is the turnaround time to resolve a complaint?",
        "content": "All critical complaints are resolved within 6 hours; however, non-critical complaints are resolved within 24 hours. Service requests and accessory required turn around time is 72 hours."
      },
      {
        "heading": "Can I buy this equipment?",
        "content": "If a customer pays the upfront cost of the equipment, the device can be his property with PKR 1500/- per month maintenance charges."
      },
      {
        "heading": "What is the TDS level of MyWater®?",
        "content": "TDS depends on the source water TDS. It may vary from 20 to 250. We try to provide the best purified water with low TDS."
      },
      {
        "heading": "How many active users does MyWater® have?",
        "content": "We have approx. 5000+ happily and satisfied users in Pakistan."
      },
      {
        "heading": "Do you have industrial solutions?",
        "content": "Depending on the requirement, we do provide industrial solutions. We have Solace Terra MS-03 for industrial and corporate use."
      },
      {
        "heading": "What are the names of your corporate clients?",
        "content": "South City Hospital<br>Hashmani Hospital<br>Indus Hospital<br>IBL Group<br>Meezan Bank<br>Multinet Group<br>Lucky One<br>Habib Public School<br>CAS School<br>Amreli Steels<br>HRSG<br>And many more."
      },
      {
        "heading": "Can you show all the filters and processes physically?",
        "content": "Yes, we can give you a 3D visual or if needed, we can show you the filtration process inside the unit."
      },
      {
        "heading": "What is the TDS range which your system can cover and convert into pure mineral water?",
        "content": "Up to 3000. As per Global Bottled drinking water standards, any TDS starting from 30 – 150 is excellent drinking water. We have different ranges of waters such as Alkaline, Zero Sodium Water, & Spring. Our system can convert any water having TDS up to 3000 to ensure 30-150 TDS."
      },
      {
        "heading": "When did you guys launch this system in Pakistan? Because we didn’t hear so much about MyWater?",
        "content": "We started our Research and Product Development in 2016 and it was officially launched in 2020. Currently, our service is available in Karachi, Lahore, Islamabad, Rawalpindi, & Sialkot. We have also launched the product in UAE."
      },
      {
        "heading": "Can we run MyWater on a generator or UPS?",
        "content": "Yes, the water purifier system in our units can run on UPS & generators because it is not a heavy load. In case of power failure, cooling and heater can be turned off. The compressor takes 0.7A/300-400W."
      },
      {
        "heading": "Can this current water flow increase?",
        "content": "Our dispenser has better water flow than an ordinary dispenser and having a sufficient storage capacity of 6.5ltr it refills constantly, such as 20 seconds per liter for MS-02."
      },
      {
        "heading": "Why is your TDS level less than 100 because as per WHO minimum 100 TDS water is drinkable?",
        "content": "As per WHO standard, any water having TDS below 300 mg/ltr is excellent for drinking. We ensure that our TDS stays below 100 to give you the best quality of water, similar to other premium International bottled water brands. TDS is a measure of taste rather than water quality as per WHO."
      },
      {
        "heading": "What is the wastage water ratio?",
        "content": "Rejection depends on the water source but we have a rejection ratio of 25% - 40%."
      },
      {
        "heading": "Can drain water return into your dispenser tank via the same pipe?",
        "content": "No, this cannot happen because each outflow is equipped with a flow restrictor and a safety valve preventing any possibility of backflow."
      },
      {
        "heading": "Can we use rejection water for any other purpose?",
        "content": "Yes, you can use it for any domestic purpose."
      },
      {
        "heading": "Minimum and maximum pH value of MyWater?",
        "content": "The minimum is 7 and the maximum is 10. For Alkaline, pH is 10. For Spring Water, it is 8-9. Regular is 7-8.5."
      },
      {
        "heading": "Can you share a Pre-installation report of the source of water and after installation mywater reports so we can compare the value of the component to how effective your water is?",
        "content": "Since the source of water in Pakistan is unregulated and unchlorinated even line water, our system is designed to take out any types of contaminants in your tap water that may be present any different day. This includes contaminants such as:<br>Heavy Metals like Arsenic, Lead, Mercury, or Iron<br>Bacteria like Protozoa, E-Coli, Cysts, Coliforms, etc.<br>Viruses<br>Inorganic substances like Fluoride, Salts, Halides."
      },
      {
        "heading": "How much time do you take to resolve a complaint?",
        "content": "We have a service model where our team and technicians work and act proactively. That means our teams visit and resolve issues even before they occur. With the help of smart sensors, we monitor each and every piece of equipment. Other than this, it takes 4 hours for us to resolve all critical complaints."
      },
      {
        "heading": "Is Mywater lab tested?",
        "content": "Yes, our water is lab tested from leading laboratories in Pakistan and the International Market."
      },
      {
        "heading": "Why is the taste of Mywater different from other bottled water?",
        "content": "Bottled water tastes different because it is usually high in TDS and also with plastic involvement, it creates a certain taste which is different from freshly purified water. Mywater provides you real-time purification with low TDS, which is excellent to drink as per WHO standards. You might feel a difference in taste but in a day or two, your body gets immune to Mywater and you will also start noticing improvement in consumption of water and improvement in health."
      },
      {
        "heading": "How to switch on the MyWater dispenser?",
        "content": "Turn on the main power plug and check lights on the dispenser."
      },
      {
        "heading": "How to control Hot and Cold water taps?",
        "content": "Switch on the hot and cold buttons on the backside of the dispenser."
      },
      {
        "heading": "How to clean the water tray?",
        "content": "Simply lift/pull the tray slowly, pour water out and place the tray back in its place."
      },
      {
        "heading": "How many liters can be stored in a dispenser?",
        "content": "A total of 7.5 liters are stored in the tank: 3.5L cold, 1.5L hot, 2.5L storage."
      },
      {
        "heading": "How much electricity does the dispenser take?",
        "content": "Like any other dispenser, Mywater devices use the same electricity consumption. Compressor 0.7A/300-400W Heater."
      },
      {
        "heading": "In case of electricity load shedding will my dispenser still work?",
        "content": "In case of no power supply at your location, you can use the water stored in the dispenser: 3.5L cold, 1.5L hot, 2.5L storage."
      },
      {
        "heading": "Can we use this equipment on generators or UPS?",
        "content": "Yes."
      },
      {
        "heading": "What is the difference between Terra and Neo?",
        "content": "Terra is a dispenser without a bottle which has a hot and cold water option along with 7.5 liters of water storage capacity. Neo has a capacity of 3.5 liters and is an under-the-sink device that only offers room temperature water."
      },
      {
        "heading": "Is there a fridge available in the dispenser?",
        "content": "No. All that extra space below is home to our unique 8-step purification system."
      },
      {
        "heading": "How can I make a complaint?",
        "content": "You can make a complaint using our mobile application, calling our helpline 11-11-92837, or you can even email us at support@mywater.pk."
      },
      {
        "heading": "What is the warranty of the equipment?",
        "content": "The device remains under full company maintenance. Any damage from negligence or tampering is not covered."
      },
      {
        "heading": "What is the cost of filters?",
        "content": "Typically, our devices do not require regular filter changes, but if required, this cost is borne by the company."
      },
      {
        "heading": "What if the taste of water is changed?",
        "content": "We can guide you through the flushing process or send over our trusted technicians to do the job. To do this yourself, switch off the device, press the cold and hot water taps to drain all the water in the device. Once fully drained, then turn the switch on."
      },
      {
        "heading": "Can I move or relocate the dispenser myself?",
        "content": "No. Our devices are set with great precision of piping, so only our technicians can relocate them for you."
      },
      {
        "heading": "How can I install the MyWater app?",
        "content": "Our registered customers can download the MyWater app from Playstore/Apple App Store free of cost."
      },
      {
        "heading": "What is my user ID?",
        "content": "Your unique user ID will be provided to you upon sign-up."
      },
      {
        "heading": "How can I log in to the application?",
        "content": "Enter your credentials to log in and monitor the water quality of your dispenser."
      },
      {
        "heading": "How can I retrieve my password for the app?",
        "content": "You can click on “Forget my password” for retrieval. Or you can contact us at 11-11-92837."
      },
      {
        "heading": "What options can be monitored via the MyWater app?",
        "content": "You can monitor your daily, weekly, or monthly water consumption along with the particle filter, RO filter, carbon filter, mineral filter, and UV LED status. You will also be able to check the TDS of MyWater."
      },
      {
        "heading": "How can I identify water quality?",
        "content": "Through our mobile app, you can easily check the water quality."
      },
      {
        "heading": "Can I log a complaint using a mobile application?",
        "content": "Yes, you can by clicking the Contact Us option."
      },
      {
        "heading": "What if data is not updating in the application?",
        "content": "Please call us at 11-11-92837."
      },
      {
        "heading": "What is the size of the application in MBs?",
        "content": "5.3 MBs."
      },
      {
        "heading": "Our app makes you smarter with your water. Our unique features promote a healthier and smarter lifestyle experience.",
        "content": "Real-time status of filters<br>Service History<br>Billing<br>Quality Scan<br>The amount of glasses drank by the user<br>The number of bottles saved."
      },
      {
        "heading": "What are the service taxes?",
        "content": "For Sindh: 13%<br>For Punjab: 16%"
      },
      {
        "heading": "How does your system kill bacteria?",
        "content": "We have a medical-grade nanoceramic material embedded with silver and titanium oxide ions to kill and deactivate all types of tertiary biological and cyst contaminants. In simple words, we have antibacterial and UV disinfection filters in our system which ensure that water is 100% bacteria-free."
      },
      {
        "heading": "Do you have colors available for Terra MS-02?",
        "content": "We have a charcoal black with a white framed body available at the moment."
      },
      {
        "heading": "Why did the taste of water in my unit change?",
        "content": "Change in water taste occurs due to a change in your source water or if the consumption of water is lesser. Flushing a couple of liters will resolve the issue."
      },
      {
        "heading": "Why is water being drained every time I use it?",
        "content": "Our system filters your source water and provides you hygienic, pure, and fresh water so remaining dirty water is drained."
      },
      {
        "heading": "Can I use this drain water for any other purpose?",
        "content": "Yes, of course, you can use it for any domestic purpose."
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