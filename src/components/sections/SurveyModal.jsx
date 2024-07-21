import { Model } from "survey-core";
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.css'
import { Modal } from 'react-bootstrap';
import { surveyJson } from '@data/sections/surveyConfig';
// import emailjs from '@emailjs/browser'


const SurveyModal = ({ show, handleClose }) => {
  const model = new Model(surveyJson);
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        {/* <Modal.Title>Survey</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <Survey model={model} />
      </Modal.Body>
    </Modal>
  );
};

export default SurveyModal;
