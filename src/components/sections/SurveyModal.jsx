import 'survey-core/defaultV2.css'
import { Modal } from 'react-bootstrap';
import MultiStepForm from "./MultiStepForm";
// import emailjs from '@emailjs/browser'


const SurveyModal = ({ show, handleClose }) => {
  // const model = new Model(surveyJson);
  return (
    <Modal show={show} onHide={handleClose} centered size={"lg"}>
      <Modal.Header closeButton>
        <Modal.Title>Book Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MultiStepForm/>
        {/* <Survey model={model} /> */}
      </Modal.Body>
    </Modal>
  );
};

export default SurveyModal;
