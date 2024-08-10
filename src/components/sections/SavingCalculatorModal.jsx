import React, { useState } from 'react';
import { Modal, Button, Form, Dropdown, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

function SavingsCalculatorModal({ show, handleClose }) {
    const [currentCost, setCurrentCost] = useState('');
    const [bottlesPerWeek, setBottlesPerWeek] = useState(0);
    const [systemType, setSystemType] = useState('');
    const [pricePerBottle, setPricePerBottle] = useState(0);
    const [systemMonthlyCost, setSystemMonthlyCost] = useState(0);

    const [results, setResults] = useState({
        monthlyCost: 0,
        annualCost: 0,
        fiveYearsCost: 0,
        annualSavings: 0,
        fiveYearSavings: 0
    });

    // Calculate savings
    const calculateCosts = () => {
        const monthlyCost = parseFloat(pricePerBottle) * parseFloat(bottlesPerWeek) * 4;
        const annualCost = monthlyCost * 12;
        const fiveYearsCost = annualCost * 5;

        const monthlyRentalCost = parseFloat(systemMonthlyCost);
        const annualRentalCost = monthlyRentalCost * 12;
        const fiveYearRentalCost = annualRentalCost * 5;

        const annualSavings = annualCost - annualRentalCost;
        const fiveYearSavings = fiveYearsCost - fiveYearRentalCost;

        setResults({
            monthlyCost,
            annualCost,
            fiveYearsCost,
            annualSavings,
            fiveYearSavings
        });
    };

    // System types and their monthly costs
    const systemCosts = {
        "NEO-2": 4500,
        "TERRA-MS-02":5500,
        "TERRA-MS-03": 7000,
        "SOLACE-02": 25000,
    };

    const handleSystemTypeChange = (newType) => {
        setSystemType(newType);
        const cost = systemCosts[newType] || 0;  // Default to 0 if no type is selected or if it's an invalid type
        setSystemMonthlyCost(cost);
    };
    

    return (
        <Modal show={show} onHide={handleClose} centered size={"lg"} className='modalContainer'>
            <Modal.Header closeButton>
                <Modal.Title>Savings Calculator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="waterCost">
                        <Form.Label>How much are you paying for bottle Water:</Form.Label>
                        <InputGroup>
                            <FormControl as="select" value={pricePerBottle}
                                onChange={e => setPricePerBottle(e.target.value)}>
                                <option value="">Select</option>
                                <option value="330">330 PKR</option>
                                <option value="300">300 PKR</option>
                                <option value="290">290 PKR</option>
                                <option value="280">280 PKR</option>
                            </FormControl>
                        </InputGroup>
                    </Form.Group>
                    <Row>
                        <Col lg={9}>
                            <Form.Group controlId="bottleCount">
                                <Form.Label>How many Bottles of Water are you buying? (Per Week)</Form.Label>
                                <Form.Control as="select" value={bottlesPerWeek} onChange={e => setBottlesPerWeek(e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="8">8</option>
                                    <option value="10">10</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={3} className='align-self-end'>
                            <Button onClick={calculateCosts}>
                                Calculate Cost
                            </Button>
                        </Col>
                    </Row>
                    <div className="results-display">
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Monthly Cost</Form.Label>
                                    <Form.Control readOnly value={`PKR ${results.monthlyCost}`} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Annual Cost</Form.Label>
                                    <Form.Control readOnly value={`PKR ${results.annualCost}`} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Five Years Cost</Form.Label>
                                    <Form.Control readOnly value={`PKR ${results.fiveYearsCost}`} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                    <Form.Group controlId="systemType">
                        <Form.Label>Select MyWater Purification Type</Form.Label>
                        <Form.Control as="select" value={systemType} onChange={e => handleSystemTypeChange(e.target.value)}>
                            <option value="">Select System</option>
                            <option value="NEO-2">NEO-2</option>
                            <option value="TERRA-MS-02">TERRA-MS-02</option>
                            <option value="TERRA-MS-03">TERRA-MS-03</option>
                            <option value="SOLACE-02">SOLACE</option>
                        </Form.Control>
                    </Form.Group>
                    <Row>
                        <Col lg={8}>
                            <Form.Group controlId="systemMonthlyCost">
                                <Form.Label>Monthly Rental Price</Form.Label>
                                <Form.Control type="number" placeholder="Enter monthly rental cost" value={systemMonthlyCost} readOnly />
                            </Form.Group>
                        </Col>
                        <Col lg={4} className='align-self-end'>
                            <Button onClick={calculateCosts}>
                                Calculate Savings
                            </Button>
                        </Col>
                    </Row>
                    <div className="results-display">
                        <Row>
                            <Col><Form.Group>
                                <Form.Label>Annual Saving</Form.Label>
                                <Form.Control readOnly value={`PKR ${results.annualSavings}`} />
                            </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Five Years Saving</Form.Label>
                                    <Form.Control readOnly value={`PKR ${results.fiveYearSavings}`} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SavingsCalculatorModal;
