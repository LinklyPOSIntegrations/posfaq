---
title: Cloud
description: Cloud explained
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 6

---

##### What is Linkly Cloud?
Linkly Cloud is a wireless solution that connects a Point of Sale (POS) system to a payment terminal, acting as a bridge to forward API requests and responses. While it offers a streamlined and simple integration, its features are more limited compared to other Linkly solutions. This makes it particularly well-suited for small businesses with lower transaction volumes that require basic transaction processing capabilities. Linkly Cloud provides a cost-effective and efficient solution for businesses that don’t need the extensive functionality of more complex systems, ensuring seamless payment processing with minimal setup and maintenance.

##### How does it work?

- The POS system sends a JSON-formatted request (amount, payment method, merchant details) via HTTPS to Linkly Cloud.
- Linkly Cloud forwards the request to a payment terminal.
- The customer taps, inserts, or swipes their card on the terminal.
- Linkly Cloud securely routes the transaction to the bank for approval.
- The bank verifies funds, checks for fraud, and returns an approval or decline response.
- The POS receives the final transaction response.
- If approved, the POS can finalise the sale and proceed to additional fucntions (printing receipts, refunding)
- If declined, the POS can prompt for another payment.


##### Why should I choose Cloud?
Benefits include:
- Platform-Agnostic: Works across multiple operating systems, including Windows, macOS, Linux, and mobile platforms.
- Ease of Maintenance: CentraliSed updates and management reduce local maintenance efforts.
- Accessibility: Accessible from anywhere with an internet connection.

##### Where do I begin? 

###### Review Cloud API documentaion:
[Cloud API spec](https://www.linkly.com.au/apidoc/REST/)

###### Request Linkly Cloud Sandbox Account: 
Click [here](https://www.linkly.com.au/apidoc/REST/#appendix-f-cloud-account) for instructions. 

###### Get Virtual Pin Pad
Download and install the Linkly Virtual Pin Pad fom [here](https://www.linkly.com.au/apidoc/REST/#appendix-g-virtual-pin-pad)

###### Configuration instructions for Virtual Pin Pad in Cloud:

- Steps to Enable Cloud Mode on VPP
	| Step | Action |
	|------|--------|
	| 1    | Click **FUNC** |
	| 2    | Enter **7410** on the keypad |
	| 3    | Click **OK** |
	| 4    | On **TERMINAL CONFIGURATION**, click **0** on the keypad |
	| 5    | On **CLOUD MODE**, click **1** on the keypad |
	| 6    | Click **OK** |
	| 7    | Click **CANCEL** to go back to the home screen |



- Steps to GET/RESET Cloud Pair Code:
	| Step | Action |
	|------|--------|
	| 1    | Click **FUNC** |
	| 2    | Enter **8880** on the keypad |
	| 3    | Click **OK** |
	| 4    | Click **OK** |


###### Disable Virtual Pin Pad Auto Approve
The VPP features transaction simulations using the cent value of the amount. For example, you can trigger Pin Pad signature prompts by transacting $10.08. 
This feature is controlled by a toggle called Auto Approve and its purpose is to allow all transactions to approve regardless of the cent value in the amount field.

If it’s required to simulate “approved” transactions with different cent values, please enable Auto Approve. 

However, for your accreditation test cases and simulating signature prompts and declines, please ensure Auto Approve is disabled to avoid incorrect results. 

Auto Approve Settings:

| **Auto Approve ENABLE** | **Auto Approve DISABLE** |
|-------------------------|-------------------------|
| FUNC 7410 OK, 1, CLEAR, OK, CANCEL | FUNC 7410 OK, 1, CLEAR, CLEAR, CANCEL to return to the main screen |




##### How does Linkly Cloud work in Sandbox and Production?
Sandbox is used for testing and does not process real transactions. Linkly will provide test API credentials which can be used for Authentication. The POS must use the Sandbox specific API endpoints for testing/offline development.

Production handles live transactions with Production API credentials. The credentials are provided directly to the merchant when they are onboarded through an acquirer.

##### What is the difference between Cloud Sync and Async?
Differences explained here: [Async vs Sync](https://www.linkly.com.au/apidoc/REST/#async-vs-sync-mode)

The Linkly Cloud API offers two integration modes for connecting Point of Sale systems with payment processing services: Synchronous (Sync) Mode and Asynchronous (Async) Mode.

**Synchronous (Sync) Mode:**

Operation: 
- In this mode, the POS sends a transaction request and waits for the operation to complete before receiving a response.

Characteristics:
- The POS remains idle during the transaction process, awaiting the final result.
- Limited feedback is provided during the transaction; the POS typically receives only the final success or failure status.
- Suitable for simpler implementations where immediate feedback is not critical.

![Sync](/images/Sync.jpg)


**Asynchronous (Async) Mode:**

Operation: 
- The POS initiates a transaction and continues with other tasks, receiving updates and the final result through callbacks or notifications.

Characteristics:
- Allows the POS to handle multiple tasks concurrently, improving efficiency.
- Provides real-time feedback and status updates throughout the transaction process, enhancing user experience.
- Requires the POS to manage asynchronous responses and may involve more complex implementation.
- Linkly recommends using the Asynchronous Mode for its enhanced functionality, better user experience, and closer alignment with other Linkly implementations.

![Async](/images/Async.jpg)


##### Which Cloud integration should we choose and why?
Choose based on transaction volume and latency requirements. 
- Async is the preferred integration type as it sends terminal events to the POS in real time providing the merchant more visibility and control over the transaction.

- Sync has limited feature support and does not provide real time transaction processing details to the POS.

  
##### Why do we need Cloud credentails?
They are required for API authentication to pair the pinpad to the POS.
Once paired, the POS can use the **Secret** to get **AuthTokens** for transactions.

      
##### What are POSID and POSVendorID in the AuthToken request?
Unique identifiers for your POS system and vendor. Linkly uses them for tracking and validation.
-  (Provide Link to API doc explaining these properties)
        
      
##### What is the dependency between the Pair Code, Secret, and AuthToken?
The validity of the Secret is tied to the validity of the Pair code. If the Pair code has changed/reset, the POS will need to be re-pair to the pinpad using the Cloud API credentials, along with a new Paircode from the pinpad. The Pairing process will create a new Secret, which must be used to create a new AuthTokens.  The new AuthTokens must be sent in the header for every API request.
      
##### Why do we have to create our own UUIDs?
UUIDs uniquely identify transactions for tracking and error recovery. These are created and stored by the POS to track the transaction end to end.
      
        
##### Does Linkly Provide a Test Harness for Cloud?
Linkly provides a test harness for integration testing. The test harness can replicate scenarios like successful transactions, declined transactions, and error conditions.
The Test Harness can be downloaded from the Linkly Website and it includes:
- Cloud Sandbox account
- The Virtual Pin Pad
- IP Test POS software.

        
##### How do we trigger transaction simulations/errors in Cloud?
Trasanction simulations and error testing is done by setting the cent value of a transaction amount to a specific value. Linkly recognises these values and triggers the corresponding transaction flow/error from the predefined [Response codes](https://www.linkly.com.au/apidoc/REST/#common-response-codes) and [Error Lists](https://www.linkly.com.au/apidoc/REST/#developer-specific-response-codes).

For example: If you configure the amount as $10.50, Linkly will return a “SYSTEM ERROR” response. If you set it to $10.08, it will trigger a Signature Verification flow.

        
##### Is There an SDK for Cloud?
Currently no SDKs are avialable for Cloud. 

##### How Can We Get a Physical Test Device for UAT?
Linkly cannot provide physical test devices. Please request devices from your acquirer.

  
##### List of Sandbox vs Production API Endpoints?
Linkly provides separate endpoints for Sandbox (testing) and Production environments.

-  **[Sandbox](https://www.linkly.com.au/apidoc/REST/#request-uri):** Used for development and testing. Transactions in this environment are simulated.
 

-  **[Production](https://www.linkly.com.au/apidoc/REST/#request-uri):** Used for live transactions.

##### Error Recovery Best Practices:

**Transaction Status**
- The [Transaction Status API method](https://www.linkly.com.au/apidoc/REST/#transaction-status) is typically used in scenarios where confirmation or validation of the last payment is required, such as during error recovery, troubleshooting, or customer queries.


**Exponential Back-off Logic:**
-  Exponential backoff is a technique used to reduce added strain on already overloaded servers, networks, or infrastructure. It refers to the process of increasing the delay between each subsequent request, starting with a short delay and working up to a longer delay if the error condition continues. We request that if you get a response from our servers that may indicate overloading that you employ basic exponential backoff in your recovery attempts.

  -  *Warning*: When using retries Backoff should retry for up to 3 minutes maximum before returning an error to the operator. Please note that if you do not get either an HTTP 200 or a 404 during recovery, you CANNOT know for sure whether the transaction was successful.

  -  *Tip*: The backoff periods should be slightly randomised for better results: eg. start with 1000ms (+/- 500ms), then double it each time (+/- 500ms): eg. 640ms, 1620ms, 2890ms, etc. Backoff can continue until a set maximum number of retries or 3 minutes (total) has passed, whereon the POS may fail, returning control to the operator.

    

##### How Can We Get Linkly Cloud Logs?
Please contact Linkly Support and provide the Cloud ID requesting for logs.