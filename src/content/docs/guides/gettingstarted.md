---
title: Getting Started
description: A guide to bullshit
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 6

---



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
