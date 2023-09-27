import React, { useEffect } from "react";

const PaymentReceived: React.FC<{ orderDetails: any }> = ({ orderDetails }) => {
	useEffect(() => {
		// Check if orderDetails is available and display the alert
		if (orderDetails) {
			// alert("Payment received, thank you.");
		}
	}, [orderDetails]);

	// Rest of your component code
	const { dateOfPurchase, unitAmount, quantity, description, amountPaid } = orderDetails;

	return (
		<div className="PaymentReceived">
			<h1>Payment received, thank you.</h1>
			<h2>Order Details</h2>
			<div>
				<p>Date of Purchase: {dateOfPurchase}</p>
				<p>Unit Amount: {unitAmount} UGX</p>
				<p>Quantity: {quantity}</p>
				<p>Description: {description}</p>
				<p>Amount Paid: {amountPaid} UGX</p>
			</div>
		</div>
	);
};

export default PaymentReceived;
