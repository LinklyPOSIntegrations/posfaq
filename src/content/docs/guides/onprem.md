
---
title: OnPrem (TCP/IP or ActiveX)
description: OnPrem explained
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 6

---


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
      