import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { getSortedServicesData } from "@library/services";
import PartnersSection from "@components/sections/Partners";
import PricingSection from '../components/sections/Pricing';

const Promo = () => {

  return (
    <Layouts header={2}>
      <PageBanner pageTitle={"Promo Offers"} pageDesc={"For a limited time, dive into the Pure experience with two months of service—absolutely free!"} />

	  <PricingSection bg={"bg"} />

      <PartnersSection paddingTop/>
      
    </Layouts>
  );
};
export default Promo;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}