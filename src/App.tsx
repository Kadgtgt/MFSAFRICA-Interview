import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PaymentReceived from "./PaymentReceived";

// import the SVG file
// import MyIcon from "../public/mfs.svg";

function App() {
	const [quantity, setQuantity] = useState<number>(0);
	const unitAmount: number = 85000;
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [orderDetails, setOrderDetails] = useState<any | null>(null);
	const threshold = 20; // Threshold value

	// Calculate the total amount based on the quantity and unit amount
	const totalAmount: number = unitAmount * quantity;
	// setIsGreater(quantity > 20);

	const handleQuantityChange = (value: number) => {
		// Make sure the value is within the range (1 to 100 in this example)
		if (value >= 1 && value <= 100) {
			setQuantity(value);
			// Check if the value is greater than 20
			if (value > 20) {
				setErrorMessage(
					"This user is unable to receive this amount. Contact them for further assistance."
				);
			} else {
				// Clear the error message if the value is within the valid range (1 to 20)
				setErrorMessage(null);
			}
		} else {
			// Set the error message if the value is outside the desired range
			setErrorMessage("Invalid quantity. Please enter a valid quantity.");
		}
	};

	const handleProceedToPay = () => {
		// Prepare order details
		const order = {
			dateOfPurchase: new Date().toLocaleDateString(),
			unitAmount: unitAmount,
			quantity: quantity,
			description:
				"Career workshop '23-Unlocking your networking potential masterclass, workshop and conference event",
			amountPaid: totalAmount,
		};

		// Set the order details in state
		setOrderDetails(order);
	};

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/payment-received"
						element={<PaymentReceived orderDetails={orderDetails} />}
					/>
					<Route
						path="/"
						element={
							<div>
								<div className="container">
									<div className="svg-container">
										<img
											src="/mfs.svg"
											alt="My Icon"
											style={{ filter: "invert(100%)" }}
											// className="top-left-image"
										/>
									</div>
									<div className="blue-section">
										{/* Add content or elements for the blue-colored section here */}
										<div className="squares"></div>
									</div>
								</div>
								<h1 className="centered-h1">Payment link</h1>
								<h3 className="centered-h3">Link details</h3>
								<h2 className="centered-h2">BYOB WORKSHOP</h2>
								<p className="my-p">
									"Career workshop '23-Unlocking your networking potential
									masterclass, workshop and conference event..
								</p>

								<div className="right-details">
									<div className="quantity-input-container">
										<label htmlFor="quantity" className="quantity-label">
											Quantity:
										</label>
										<div className="quantity-input-group">
											<input
												type="number"
												id="quantity"
												value={quantity}
												onChange={(e) =>
													handleQuantityChange(Number(e.target.value))
												}
												className="quantity-input"
											/>
										</div>
									</div>
								</div>

								<div className="unit-amount">
									<div className="left-details">
										<p>Unit Amount {unitAmount} UGX</p>
									</div>
								</div>
								<div>
									<p className="amount-label">Total Amount: {totalAmount} UGX</p>
								</div>
								{errorMessage && <div className="error">{errorMessage}</div>}
								<Link to={quantity <= threshold ? "/payment-received" : "#"}>
									<button
										onClick={handleProceedToPay}
										disabled={quantity > threshold}
									>
										Proceed to Pay
									</button>
								</Link>
							</div>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
