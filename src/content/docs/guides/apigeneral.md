---
title: API Overview
description: General questions about Linkly APIs
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 6

---


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
