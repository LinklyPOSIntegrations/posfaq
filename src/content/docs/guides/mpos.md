---
title: MPOS
description: MPOS explained
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 6

---

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

