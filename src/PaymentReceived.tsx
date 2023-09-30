import "./index.css";

const PaymentReceived: React.FC<{ orderDetails: any }> = ({ orderDetails }) => {
	const { dateOfPurchase, unitAmount, quantity, description, amountPaid } = orderDetails;

	return (
		<div>
			<div className="Container">
				<div className="svg-container">
					<img
						src="/mfs.svg"
						alt="My Icon"
						className="PaymentReceived"
						style={{ filter: "invert(100%)" }}
					/>
				</div>
				<div className="blue-section">
					<div className="squares"></div>
				</div>
			</div>
			<div className="data2">
				<h1 className="pr" style={{ display: "inline-block" }}>
					<img
						src="/check-circle.png"
						alt="Check Circle"
						className="check-circle"
						style={{ marginRight: "10px", verticalAlign: "middle" }}
					/>
					Payment received, thank you.
				</h1>

				<h2 className="od">Order Details</h2>
				<div className="pd">
					<p>Date of Purchase: {dateOfPurchase}</p>
					<p>Unit Amount: {unitAmount} UGX</p>
					<p>Quantity: {quantity}</p>
					<p>Description: {description}</p>
					<p>Amount Paid: {amountPaid} UGX</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentReceived;
