import React, { useState } from 'react';
import { Modal, Button, Form, Dropdown, InputGroup, FormControl } from 'react-bootstrap';

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


    return (
        <Modal show={show} onHide={handleClose} centered size={"lg"}>
            <Modal.Header closeButton>
                <Modal.Title>Water Savings Calculator</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="waterCost">
                        <Form.Label>How much are you paying for bottle Water:</Form.Label>
                        {/* <Form.Control type="number" placeholder="Enter cost per bottle" value={pricePerBottle} onChange={e => setPricePerBottle(e.target.value)} /> */}
                        <InputGroup>
                                <FormControl
                                    as="select"
                                    value={pricePerBottle}
                                    onChange={e => setPricePerBottle(e.target.value)}
                                >
                                    {/* Assuming these are the costs per bottle, modify as necessary */}
                                    <option value="330">330 PKR</option>
                                    <option value="300">300 PKR</option>
                                    <option value="290">290 PKR</option>
                                    <option value="280">280 PKR</option>
                                </FormControl>
                            </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="bottleCount">
                        <Form.Label>How many Bottles of Water are you buying? (Per Week)</Form.Label>
                        <Form.Control as="select" value={bottlesPerWeek} onChange={e => setBottlesPerWeek(e.target.value)}>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={calculateCosts}>
                        Calculate Cost
                    </Button>
                    <div className="results-display">
                        <Form.Group>
                            <Form.Label>Monthly Cost</Form.Label>
                            <Form.Control readOnly value={`PKR ${results.monthlyCost}`} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Annual Cost</Form.Label>
                            <Form.Control readOnly value={`PKR ${results.annualCost}`} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Five Years Cost</Form.Label>
                            <Form.Control readOnly value={`PKR ${results.fiveYearsCost}`} />
                        </Form.Group>
                    </div>

                    <Form.Group controlId="systemType">
                        <Form.Label>Select MyWater Purification Type</Form.Label>
                        <Form.Control as="select" value={systemType} onChange={e => setSystemType(e.target.value)}>
                            <option value="">Select System</option>
                            <option value="NEO-2">NEO-2</option>
                            <option value="TERRA-MS">TERRA-MS</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="systemMonthlyCost">
                        <Form.Label>Monthly Rental Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter monthly rental cost" value={systemMonthlyCost} onChange={e => setSystemMonthlyCost(e.target.value)} />
                    </Form.Group>
                    <Button onClick={calculateCosts}>
                        Calculate Savings
                    </Button>
                    <div className="results-display">
                        <Form.Group>
                            <Form.Label>Annual Saving</Form.Label>
                            <Form.Control readOnly value={`PKR ${results.annualSavings}`} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Five Years Saving</Form.Label>
                            <Form.Control readOnly value={`PKR ${results.fiveYearSavings}`} />
                        </Form.Group>
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
