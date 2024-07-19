import { Survey } from 'survey-react-ui';
import 'survey-core/modern.min.css';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import {surveyJson} from '@data/sections/surveyConfig';


const SurveyModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        {/* <Modal.Title>Survey</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <Survey json={surveyJson} />
      </Modal.Body>
    </Modal>
  );
};

export default SurveyModal;
