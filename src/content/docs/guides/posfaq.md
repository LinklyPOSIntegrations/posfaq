---
title: FAQ
description: A guide to bullshit
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 6

---

## Getting Started

### Who is Linkly?
Linkly is obsessed with creating seamless payment experiences and has been firmly woven into Australian payments for more than 20 years. We are the leader in POS to payment terminal integration, working with all the major banks and the majority of the POS solutions available.



### High level process outline:

- Visit Linkly Website: Access API resources, POS FAQs, and sign up for POS Accreditation.
- Review Documents: Understand the integration and accreditation processes.
- Get test tools and request test accounts: Download **test tools**, **SDKs**, and submit **Cloud Sandbox API credential requests**.
- Validate Installation: Use Linkly's Test POS to ensure the integration is set up correctly.
- Build a POC: Develop a proof of concept using the APIs.
- Build Solution: Develop the full solution with all required elements.
- Write Test Script: Create test cases, including edge cases and disaster recovery methods.
- Validate POS Solution: Fix errors and complete internal testing.
- Linkly Accreditation:
-  Login to the Accreditation portal.
-  Select integration type, review test cases, and submit required data and logs.
-  Linkly team reviews and provides feedback/approval.
- POS Details Listed: Post-accreditation, POS software details are listed on Linkly's website.
- Post-Production Testing: Roll out software to a pilot merchant for testing.
- Go Live: Deploy the solution after successful post-production testing.


### Select Integration Type:

#### OnPrem (TCP/IP or ActiveX):


##### What is Linkly OnPrem?
Linkly OnPrem is a robust middleware solution specifically designed to seamlessly connect a Point of Sale (POS) system to a payment terminal via serial or USB connections. By acting as a bridge between the POS and terminal, it facilitates a secure and efficient payment processing environment. The solution ensures integrated communication between the two systems, enabling real-time transaction handling without interruptions. This integration not only enhances operational efficiency but also bolsters security by ensuring sensitive payment data is transmitted safely across the connection. Linkly OnPrem is ideal for businesses that require an on-premises, reliable, and straightforward payment solution that prioritises both speed and security in transaction processing.


##### How does it work?

- Socket Connection: The POS initiates a connection to the Linkly system by opening a TCP/IP socket, typically to the EFT-Client listening on port 2011. This port can be configured in the system registry if needed.
- Transaction Request: Once the socket is established, the POS sends a transaction request message through this connection.
- Event Handling: The POS monitors the socket for various events, including:
- Display Events: Indicate that the EFTPOS system is displaying information, which can be mirrored on customer-facing displays.
- Print Events: Signal the need to print receipts or other transaction-related documents.
- Final Response: After processing the transaction, the Linkly system sends a final response to the POS, indicating the outcome.
- Socket Closure: Upon receiving the final response, the POS can close the socket, completing the transaction cycle.

##### Why should I choose OnPrem?
Benefits include:
-  Low Latency: Direct communication with local hardware/software ensures faster response times.
-  Offline Capability: Suitable for environments where consistent internet connectivity is unavailable.
-  Established Technology: Widely used and well-documented for Windows systems.
-  Application Support: Intgrate with Value Added Services.
-  Feature support: Supports all of Linkly transaction types and features such as Tipping, Surcharging, MOTO, Preauth/Capture.   
-  SDK: POS can utilise the C# library for a hassle-free integration.



##### Where do I begin? 

###### Review OnPrem API documentaion:
- [TCPIP](https://www.linkly.com.au/apidoc/TCPIP/)
- [ActiveX](https://www.linkly.com.au/apidoc/ActiveX/)


###### Install Test Harness for OnPrem
Install Linkly Software for Offline Development: [Installation instructions](/docs/OnPrem_OfflineDevelopment.pdf)


###### Configuration instructions for Virtual Pin Pad in OnPrem:
- Steps to Enable OnPrem Mode on VPP
	| Step | Action |
	|------|--------|
	| 1    | Click **FUNC** |
	| 2    | Enter **7410** on the keypad |
	| 3    | Click **OK** |
	| 4    | On **TERMINAL CONFIGURATION**, click **0** on the keypad |
	| 5    | On **CLOUD MODE**, click **0** on the keypad |
	| 6    | Click **OK** |
	| 7    | On **CLIENT IP**, enter **127.0.0.1** using the keypad |
	| 8    | Click **OK** |
	| 9    | On **CLIENT PORT**, enter **2012** using the keypad |
	| 10   | Click **OK** |
	| 11   | When asked, **RE-CONNECT TO CLIENT?**, click **OK** |
	| 12   | Click **CANCEL** to return to the home screen |
	| 13   | **VPP is now in OnPrem mode** |


###### Disable Virtual Pin Pad Auto Approve
The VPP features transaction simulations using the cent value of the amount. For example, you can trigger Pin Pad signature prompts by transacting $10.08. 
This feature is controlled by a toggle called Auto Approve and its purpose is to allow all transactions to approve regardless of the cent value in the amount field.

If it’s required to simulate “approved” transactions with different cent values, please enable Auto Approve. 

However, for your accreditation test cases and simulating signature prompts and declines, please ensure Auto Approve is disabled to avoid incorrect results. 

Auto Approve Settings:

| **Auto Approve ENABLE** | **Auto Approve DISABLE** |
|-------------------------|-------------------------|
| FUNC 7410 OK, 1, CLEAR, OK, CANCEL | FUNC 7410 OK, 1, CLEAR, CLEAR, CANCEL to return to the main screen |



##### What are the components of the Linkly Software? 
Linkly EFT-Client
- The Client sofwtare interfaces with the POS Software, Eftpos Terminal and the Eft-Server to communicate trasanction detials.   
Linkly EFT-Server
- The Server software contains the merchant's user credentails in Production and enables communications to the Bank.  
Linkly EMS Client
- Diagnostic tool used to check terminal conectiviy and set up automatic bacckground services, such as auto settlements.  

      
##### Is there a User guide for Linkly Software?
User guide download for Linkly EFT-Client, EFT-Server, and EMS-Client software: [Linkly Software User Guide](/docs/Software_Instructions.pdf)

##### Which OnPrem integration should we choose and why? 
**TCP/IP**:
-  Communicate to the Linkly Client via IP address and Port Number

**ActiveX**:
-  Communicate to Linkly Client using provided ActiveX OCX.  

##### Supported OS types for both OnPrem Solutions?
Windows only.
      

##### How to send an API request to the Linkly Client Software?
Use the [SDK](https://www.linkly.com.au/apidoc/TCPIP/#sdk) or manually format requests as specified in the API documentation.


##### How do we trigger transaction simulations/errors in OnPrem?
Trasanction simulations and error testing is done by setting the cent value of a transaction amount to a specific value. Linkly recognises these values and triggers the corresponding transaction flow/error from the predefined [Response codes](https://www.linkly.com.au/apidoc/TCPIP/#common-response-codes) and [Error Lists](https://www.linkly.com.au/apidoc/TCPIP/#developer-specific-response-codes)

For example:
If you configure the amount as $10.50, Linkly will return a "SYSTEM ERROR" response.
If you set it to $10.08, it will trigger a Signature Verification flow.

##### How can we get a physical test device for UAT?
Linkly does not provide hardware. Please request a test device from your acquirer.

##### Where can I find logs? 
Logs are stored locally.
For OnPrem integrations, the Eftpos logs will be stored in 'C:\\PC_EFT' labelled Eftpos.log, as shown below:

![Log location](/images/LogLocation.jpg)

If the tests/transactions were processed from a particular date in the past, the log files will be available in 'C:\\PC_EFT\\trace'.

##### What all types of logs can we get?
EFT-Client and EFT-Server logs.
      
	  
	  

#### Cloud:

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




#### MPOS

##### What is Linkly MPOS?
Linkly MPOS is a powerful payment solution designed to enable POS applications to run directly on Android-based payment terminals. It allows these applications to seamlessly process transactions by communicating locally with the Linkly Payment App running on the same device. 

##### How does it work?
- The MPOS Application sends an HTTP transaction request (amount, type, etc.) to the Linkly Payment App.
- The Linkly Payment App prompts the customer to pay by tapping, inserting, or swiping their card.
- The Linkly Payment App securely sends payment details to the Payment Processor. The Payment Processor communicates with the customer’s bank to approve or decline the transaction.
- The Payment Processor sends the result (approved or declined) back to the Linkly Payment App. The Linkly Payment App shares the outcome with the MPOS Application.
- The MPOS Application retrieves the receipt (digital or printed) from the Linkly Payment App. The transaction is logged, and any post-payment actions (e.g., loyalty points) are triggered.
- If an error occurs (e.g., card declined or network issue), the Linkly Payment App notifies the MPOS Application to handle it appropriately.


##### Why should I choose MPOS?
The Linkly Android ecosystem empowers third-party developers to build innovative POS applications directly on the terminal.

With our seamless interface, you can design applications that act as the terminal’s front end, while securely delegating payment processing to the Linkly payment app—ensuring a smooth and efficient transaction experience.


    
##### What Are the Requirements to Integrate to Linkly MPOS?
- Expertise in building sociable, high quality Android applications
- Collaboration with an acquirer for application signing in production.
- Compatibility limited to PAX devices supported by the acquirer


##### What Are the Linkly Apps?
Linkly Apps are Android applications that facilitate communication between a POS system and payment terminals. These include:

-  **Linkly payment app**: The main application that is responsible for managing the payment with the bank host.
-  **Linkly Sec app**: App that manages the security protocols between apps.
-  **Launcher App**: Provides a user interface for accessing the POS App and Linkly apps.
-  **Connect App**: App that manages requests between the POS app and Linkly Payment app.
-  **Res App**: Resource app that manages POS app permissions, bank host configuration, and POS App foreground capability.


##### Where do I begin? 

###### Review MPOS API documentaion:
[MPOS API spec](https://www.linkly.com.au/apidoc/LocalREST/)

######  Get the Linkly Apps:
- Initiate Contact: Email posintegration@linkly.com.au introducing yourself, and if applicable, the merchant and acquirer you are supporting.
- Terminal Setup: Include the serial number of any development terminals you have so we can remotely load our Offline software suite on Paysuite. Note that Linkly only supports terminals in the Paysuite container.

###### How do we Get an Android Device for Testing and Accreditation?
- If you do not have an Android device, please let us know by contacting posintegration@linkly.com.au 

###### Get the Test Harness for MPOS?
Linkly provides the TestMPOS app which runs on the Android terminal for demoing purposes. This wil be provided along with the rest of the Linkly Apps in offline demo mode. 


##### How to make our MPOS app appear as the main display?
To make your MPOS app the front-end application, Linkly will need to whitelist the MPOS application in the Res App.
The Res App whitelisting can only be done after your MPOS app is accredited with Linkly.



##### Do We Need to Use Linkly's Launcher App?
The Linkly Launcher is mandatory as it manages the permissions and interactions between all Linkly apps and the POS app.


##### List of Supported Hardware

At this stage, we only support the following terminals to ensure the shortest go-to-market turnaround time:  

| Device Type | Android Version |
|------------|----------------|
| PAX A920   | 7              |
| PAX A920pro | 8, 10         |
| PAX A77    | 8              |
| PAX A910S  | 10             |

**Note:** A77 terminals do not have an integrated printer. The MPOS integrator must manage external printers or over-the-air receipts.

  
##### Do we need credentials for MPOS in Offline Development and Production?
No, credentials are not required for MPOS integrations.


##### What Are the Available Error Recovery Methods and Best Practices?

**Transaction Status**
- The [Transaction Status](https://www.linkly.com.au/apidoc/LocalREST/#transaction-status) API method is used in scenarios where confirmation or validation of the last payment is required, such as during error recovery, troubleshooting, or customer queries.


##### Can We Access the Device Hardware? Are There APIs We Can Use?
APIs to device hardware are managed and provided by the device manufacturer. You will need to contact the device manufacturer to request APIs. Linkly cannot provide these.

  

##### How to Access the Device Settings
To access the device settings, you will need to enter the password: **pax9876@@**.

Note that the password is case sensitive.

    

##### Does the Accreditation Cover Any Tests/Processes Between the POS App and the Device Hardware?
No. The POS Vendor must test and ensure all logic added to control hardware elements are working as per their expectations. Any issues encountered will need to be raised directly with the device manufacturer.

    

##### How do we get a Res App?
The POS integrations team will provide the Res App post accrdaition.




### What is Linkly POS accreditation?
- Linkly POS accreditation is the process of certifying that your POS system complies with Linkly's integration standards. Accreditation ensures your system can securely and reliably process payments through Linkly's platform, including handling error scenarios and specific features.


### How do we get accredited?

To get accredited:
- Register with Linkly for [Accreditation](https://linkly.com.au/resources-support/vendor-accreditation/).
- Implement the required integration based on Linkly's API documentation.
- Submit logs, error-handling scenarios, and passing all mandatory test cases.
- Address any issues raised during testing, and resubmit if necessary.

### Why should we get accredited?

Accreditation is a requirement for all POS Systems that wish to use a Linkly Integrated device. The accreditation process for new POS software validates that the core payments functionality has been implemented correctly with appropriate error handling. This is to ensure all merchants have a good experience with the Linkly Integrated products.



### How long does an accreditation take?

Once submitted, accreditation typically takes 5-10 business days, depending on the complexity of the integration and how quickly any issues identified during testing are resolved.




### Can I integrate with all Linkly solutions?

You can integrate with multiple Linkly solutions (OnPrem, Cloud, MPOS) depending on your use case. Each solution has separate APIs and will require accreditation. A single POS Software can implement all of Linkly's supported interfaces; however, only one can be used at any given time.


### Does Linkly support Value Added Applications (VAS)?
Linkly supports a range of VAS solutions to provide additional value to our customers. The specific VAS that may be used depends on the integration type used and can be found in the relevant API specs.


### Will Linkly provide us with a physical test device, test cards, and test accounts?

Linkly provides a Virtual Pinpad to emulate all behavior from the various production devices. As the POS only communicates with the EFT-Client or REST Gateway, there is no need for a physical test device. Should UAT/PVT be required with a test device, the POS Vendor will need to contact the appropriate acquirer and request.


### Does Linkly assist with Production Pilots/Dedicated pilot support?
No, Linkly does not support Pilots.



 

## API: General

### Are all features supported in all different integration types?



  | **Features**            | **ActiveX** | **TCPIP** | **Cloud (Async)** | **Cloud (Sync)** | **MPOS** |
  |--------------------------|-------------|-----------|--------------------|------------------|----------|
  | **Core Payments**        | Y           | Y         | Y                  | Y                | Y        |
  | **Cashout**              | Y           | Y         | Y                  | Y                | Y        |
  | **Tipping**              | Y           | Y         | Y                  | Y                | Y        |
  | **Surcharging**          | Y           | Y         | Y                  | Y                | Y        |
  | **VAS**                  | Y           | Y         | N                  | N                | Y        |
  | **PLB**                  | Y           | Y         | N                  | N                | N        |
  | **FnB**                  | Y           | Y         | N                  | N                | N        |
  | **Partial/Split Payments**| Y           | Y         | Y                  | Y                | N        |
  | **MOTO**                 | Y           | Y         | Y                  | N                | N        |
  | **Settlement**           | Y           | Y         | Y                  | Y                | Y        |
  | **Reprint Receipts**     | Y           | Y         | Y                  | Y                | Y        |
  | **Get Last Transactions**| Y           | Y         | Y                  | Y                | Y        |



### Which of the integration types are platform-dependent?

**OnPrem (ActiveX and TCPIP)**
Pros:
- Low Latency: Direct communication with local hardware/software ensures faster response times.
- Offline Capability: Suitable for environments where consistent internet connectivity is unavailable.
- Established Technology: Widely used and well-documented for Windows systems.

Cons:
- Platform Dependency: Restricted to Windows environments, limiting flexibility for businesses using other operating systems.


**Cloud**
Pros:
- Platform-Agnostic: Works across multiple operating systems, including Windows, macOS, Linux, and mobile platforms.
- Ease of Maintenance: Centralized updates and management reduce local maintenance efforts.
- Accessibility: Accessible from anywhere with an internet connection.

Cons:
- Internet Dependency: Requires stable internet connectivity for optimal performance.
- Latency Risks: May experience delays in processing transactions due to network issues.


**MPOS**
Pros:
- Mobile-Friendly: Ideal for businesses requiring mobility.
- Lightweight Deployment: Easy to set up on compatible Android devices.
- Cost-Effective: Reduces the need for heavy hardware investments.

Cons:
- Device Dependency: Relies on specific hardware, which may not align with all business needs.

 


### Are cross-platform integrations possible? Provide examples, solutions?
Yes, cross-platform integrations are possible. For example:

A **Cloud POS** can communicate with **OnPrem software** for offline redundancy. The POS may need to build logic to communicate between the Cloud POS and the Linkly Software. The POS can communicate with the Linkly Client either by:

Sending a TCPIP string directly:
-  The POS software must be able to open a socket to the Linkly Client software installed on the POS computer.
-  The POS must convert its JSON request object into a TCPIP string, ensuring that all fields are mapped correctly. The message format is explained in the TCPIP API Specification. (Provide URL)
-  Once a socket is established:
-  The POS can push a transaction request to the Linkly Client and listen for any incoming messages.
-  The Linkly software will send terminal events to the POS, which should be displayed to the merchant.
-  Once the transaction is finalised:
	-  The Linkly Client will send a final transaction response, which the POS must acknowledge and then close the socket.
	-  The POS can then proceed with receipting and finalizing the sale.


Utilizing Linkly's OnPrem C# SDK:
- The POS software must invoke methods in the SDK installed locally on the POS computer.
- This requires the POS vendor to build a handler to pass transaction details from the POS to the SDK.
- The SDK will manage the transaction with the Linkly software and send terminal events back to the POS.
- Once the transaction is finalised:
	- The Linkly Client will send a final transaction response, which the POS can use to update the transaction record.
	- The POS can then proceed with receipting and finalizing the sale.

 

### Do we need test credentials?
 - Test Credentials are only required for cloud integrations. These can be requested through POSIntegrations@linkly.com.au.

 


### Are there any SDKs we can use with our preferred integration type?

SDKs are available for OnPrem integrations to simplify development and sensure compliance. We currently provide 2 versions:
-  [C# SDK](https://github.com/LinklyCo/EFTClient.IPInterface.CSharp) - Ideal for Windows and Cloud based POS integrations.
-  [JAVA SDK](https://github.com/LinklyCo/EFTClient.IPInterface.Java) - Ideal for Windows, Cloud and Android (via Android Runtime) based POS integrations.



### Why should we use the SDK?

The SDK provides a simple module to be integrated with for the POS, this abstracts the complexity away from the POS Software and allows for a simple supportable solution that will be familiar to any user of the Linkly integrated software.


### What error management and recovery options are available?
Linkly provides comprehensive error management and recovery options across its different integration types, ensuring seamless operation and customer satisfaction during unexpected scenarios. Please refer to the integration types avaialble within the FAQ for more detials. 



**Linkly OnPrem**

- **Get Last Transaction (For OnPrem)**
  The **Get Last Transaction** feature allows the Point of Sale (POS) system to retrieve details of the most recent transaction processed by the terminal. This functionality is essential for scenarios such as error recovery, troubleshooting, or addressing customer queries. By enabling quick access to transaction details, it minimizes disruption and supports efficient resolution.

- **Use Cases**: 
	- Confirming the status of the last transaction after a system error.  
	- Validating transaction outcomes during customer disputes.  


**Socket Management**
Effective TCP/IP socket management ensures smooth communication between the POS system and Linkly Client Software. Proper handling of sockets is critical for maintaining reliable data exchange during transactions.

**Socket Establishment**:  
- A socket connection is initiated between the POS and the Linkly Client Software.  
- This connection enables bidirectional communication for sending commands (e.g., transaction requests) and receiving responses.

**Data Transmission**:  
- Real-time data packets are securely exchanged over the socket, ensuring seamless payment processing.

**Socket Closure**:  
- After completing a transaction or communication, the socket is closed to free up system resources and maintain performance.



**Linkly Cloud and MPOS**

- The **Transaction Status** API provides functionality similar to the **Get Last Transaction** method in OnPrem solutions. It allows the POS to retrieve the status of the most recent transaction, making it an essential tool for error recovery and transaction validation.

- **Use Cases**:  
	- Verifying the outcome of the last transaction after a system issue.  
	- Resolving customer concerns about transaction completion.  



**Exponential Backoff Logic**
  -  To manage potential server overloads, Linkly recommends implementing **exponential backoff logic** during recovery attempts. This technique reduces strain on infrastructure by gradually increasing the delay between retries when errors persist.

  - **Implementation Guidelines**:  
	- Start with a short delay (e.g., 1000ms ± 500ms).  
	- Double the delay with slight randomization for subsequent retries (e.g., 640ms, 1620ms, 2890ms).  
	- Continue retries for up to 3 minutes or a maximum retry count.

  -  **Important Considerations**:  
	- If neither an HTTP 200 nor a 404 response is received during recovery, the transaction outcome cannot be confirmed.  
	- Avoid retrying indefinitely to prevent unnecessary delays or system strain.

  -  **Outcome**:  
	- This approach balances system performance with effective error recovery, reducing customer and merchant inconvenience.



### Common Merchant Use Case Scenarios and Best Practices

**Power Failure Scenario**
-  **Situation**:  During a transaction, the cardholder completes the payment, but the POS system shuts down unexpectedly.  

-  **Expected POS Behavior**:  The POS should record the order as incomplete in its database, ensuring traceability.  
Upon reboot, the merchant should use the **Transaction Status API** to retrieve the status of the last transaction.  

-  **Steps for Recovery**:  Perform a **Transaction Status API call** to determine if the transaction was approved, declined, or incomplete.  
Take appropriate action: reprocess the payment if necessary or mark the transaction as completed.  

-  **Outcome**: This prevents double-charging the customer and ensures all transactions are resolved accurately.



**Customer Disputes Scenario**
-  **Situation**: A cardholder disputes a transaction, claiming they were double-charged or charged erroneously.  

-  **Expected POS Features**:  
	- Maintain a detailed transaction database, including approved transactions and declined transactions. 
	- Provide search functionality for transactions using:  
	- Masked card details.  
	- Transaction date and time.  
	- Amount or reference number.  

-  **Steps for Resolution**:  
	- Use the **Transaction Status API** to retrieve transaction details based on the cardholder's information.  
	- Verify whether a double charge occurred or if the customer was not charged.  

-  **Outcome**:  
	- These features enable merchants to promptly and accurately resolve disputes, fostering trust and maintaining customer satisfaction.



## Integration and Accreditation support

### Who do we contact for support during POS integration?
Contact Linkly's POS integrations team via <POSIntegrations@Linkly.com.au>.

 

### What information is required for support?

- POS name
- Company name
- Key contact details
- Integration type (OnPrem / Cloud / MPOS)
- POS hardware OS
- Details about the request/error, including screenshots, API requests and responses.
- Itemised list of events to reproduce the error. 
- Attach logs if applicable.

 
### How to Get Accredited?

- When you are ready to accredit, you will need to sign up to access our [Accreditation Portal](https://www.linkly.com.au/resources-support/vendor-accreditation) and complete the form, online. 

- Kindly review the test cases for your chosen integration type and complete all test cases and submit the following under Actual Result:

  -  TxnRef used for the transaction.
  -  Date and Time of the transaction. 
  -  EFTPOS.log file (For OnPrem integrations)-  Click here <Info on Log files> for more details on log files. 
  -  Full API request and response. (For Cloud and MPOS integrations)
  -  Screenshots of the POS application and receipts, if applicable. 

### What Test Case Category Do I Choose for My Integration?
Please select "OnPrem and Cloud API v1" for both OnPrem and Cloud integrations. For MPOS integration, choose "MPOS".

### Explain the test cases? 



### How Long Does Accreditation Take?
After submitting the accreditation script, the accreditation process typically takes **5-10 business days**, depending on the complexity of the integration and the completeness of the submission.




### Which Integration Types Require Log File Submission and How Do I Submit Them?
Log file submission is required for Linkly OnPrem. Logs are submitted via Linkly's portal or email as specified during accreditation.

 

### Some of the Mandatory Test Cases Do Not Apply to Us, Can We Skip Them?
If a test case is not relevant to your integration, you can request an exemption from Linkly during the accreditation process. The POS vendor will need to provide a disclaimer against the test case.

 

### The Power Failure and Get Last Transaction Test Cases Do Not Apply to our integration, Can We Skip Them?
**No**. These are mandatory for all POS integration types and cannot be skipped.

 

### Can We Edit/Update the Current Submission?
If the details on your current submission are incorrect or need to be changed, you will need to delete the submission and re-submit a new accreditation script.

 
### What If We Want to Accredit for Additional Features in Future?
If the POS software is already accredited for Core Payments (Purchases, Refunds, and Error Recovery) and you want to add new features such as Surcharging, Tipping, Cash Out, etc., please submit a new accrdaition script to accredit for those additional features. You will not need to redo the Core payments test cases. 

 

### What Happens Post Accreditation?
- You receive an accreditation certificate.
- You can proceed to production deployment.

 

### When Can We Start Rolling Out Our Software to Our Customers?
You can start rolling out your software once accreditation and Production Validation Testing is complete.
