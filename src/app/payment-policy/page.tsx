import React from 'react'

export default function PaymentPolicy() {
    return (
        // <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg lg:pt-40">
        <div
            className="w-screen mx-auto bg-white shadow-lg rounded-lg 
                    pl-[20px] pt-24 pr-[20px] py-8
                    lg:pt-40 lg:px-24 lg:py-12"
        >
            <h1 className="text-3xl font-bold mb-6">
                Payment Policy
            </h1>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Accepted Payment Methods
                </h2>
                <p className="text-sm">
                    We strive to make your shopping experience smooth
                    and convenient. Our website accepts the following
                    payment methods:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>
                        Credit/Debit Cards (Visa, MasterCard, American
                        Express, etc.)
                    </li>
                    <li>
                        Mobile Banking Services (bKash, Nagad, Rocket,
                        etc.)
                    </li>
                    <li>Direct Bank Transfers</li>
                    <li>PayPal</li>
                    <li>Cash on Delivery (where applicable)</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Payment Gateway Security
                </h2>
                <p className="text-sm">
                    All payments processed through our website are
                    secured by trusted third-party payment gateways.
                    These gateways use industry-standard encryption to
                    ensure your payment information remains safe and
                    secure.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Payment Confirmation
                </h2>
                <p className="text-sm">
                    Upon successful payment, you will receive a
                    confirmation email or SMS with your order details.
                    Please ensure the contact information provided
                    during checkout is accurate to avoid delays.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Refunds and Disputes
                </h2>
                <p className="text-sm">
                    Refunds for eligible returns will be processed
                    back to the original payment method. Refund
                    timelines depend on the payment gateway or
                    financial institution. For disputes, please
                    contact our customer support team at{' '}
                    <span className="font-semibold">
                        [your support email/contact number]
                    </span>
                    .
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Currency and Conversion Fees
                </h2>
                <p className="text-sm">
                    All transactions are processed in Bangladeshi Taka
                    (BDT). For international transactions, currency
                    conversion fees may apply, depending on your bank
                    or card issuer.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Taxes and Duties
                </h2>
                <p className="text-sm">
                    Applicable taxes and duties, as per Bangladeshi
                    law, will be calculated at checkout and displayed
                    clearly before payment.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    PayPal Payments
                </h2>
                <p className="text-sm">
                    For customers using PayPal, please note the
                    following:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>
                        You will be redirected to PayPal’s secure
                        website to complete your payment.
                    </li>
                    <li>
                        PayPal transactions are processed in the
                        currency you select during checkout, and
                        conversion fees may apply if your account
                        currency differs.
                    </li>
                    <li>
                        Refunds for PayPal transactions will be
                        processed directly to your PayPal account.
                    </li>
                    <li>
                        Ensure your PayPal account details are
                        accurate and up to date to avoid payment
                        delays.
                    </li>
                </ul>
            </section>
            <div className="h-[1px] w-[90%] bg-gray-400 mb-6" />
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Privacy Policy for Payment Systems
                </h2>
                <p className="text-sm font-normal">
                    <p className="text-sm font-bold mb-2">
                        Information We Collect
                    </p>
                    When you make a purchase, we collect the following
                    payment-related information:
                </p>

                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>
                        Your name and contact details (email, phone
                        number, and address)
                    </li>
                    <li>
                        Payment method details (e.g., last four digits
                        of your card number, mobile banking number)
                    </li>
                    <li>
                        Transaction details (amount, date, and order
                        information)
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    How We Use Payment Information
                </h2>
                <p className="text-sm">
                    We use your payment information for the following
                    purposes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>
                        To process your orders and complete
                        transactions
                    </li>
                    <li>
                        To verify payment authenticity and prevent
                        fraudulent activities
                    </li>
                    <li>
                        To provide customer support and address
                        inquiries related to payments
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Sharing of Payment Information
                </h2>
                <p className="text-sm">
                    We may share your payment information with:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>
                        Trusted third-party payment gateway providers
                    </li>
                    <li>
                        Banks and financial institutions involved in
                        the transaction
                    </li>
                    <li>
                        Government authorities or law enforcement, if
                        required by law
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Security of Payment Data
                </h2>
                <p className="text-sm">
                    We prioritize the security of your payment data.
                    Our website and payment gateway providers use
                    advanced encryption technologies to protect your
                    information. Payment data is stored securely and
                    is only accessible to authorized personnel.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Your Rights
                </h2>
                <p className="text-sm">You have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>
                        Request access to the payment data we hold
                        about you
                    </li>
                    <li>
                        Request corrections to any inaccurate payment
                        information
                    </li>
                    <li>
                        Request deletion of your payment information,
                        subject to legal and operational obligations
                    </li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Contact Us
                </h2>
                <p className="text-sm">
                    If you have any concerns about our payment or
                    privacy policies, please contact us at: Email:
                    [your email] Phone: [your phone number]
                </p>
            </section>

            <div className="h-[1px] w-[90%] bg-gray-400 mb-6" />

            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">
                    Disclaimer
                </h2>
                <p className="text-sm">
                    This document is provided as a template and does
                    not constitute legal advice. Please consult a
                    legal professional to ensure compliance with
                    Bangladeshi laws and international payment
                    regulations.
                </p>
            </section>
        </div>
    )
}
