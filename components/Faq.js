import React from "react";
import Link from "next/link";
import Styles from "../styles/Faq.module.css";

const Faq = () => {
  return (
    <div className={Styles.container}>
      <Heading mb={4}>Frequestly Asked Questions</Heading>
      <p className={Styles.faqText}>
        Here you will find our most frequently asked questions
      </p>
      <p className={Styles.faqText}>
        For any questions not answered here please feel free to{" "}
        <Link href="/Contact">Contact Us.</Link>
      </p>

      <Accordion allowToggle maxW="1200px" mx="auto" mt="60px">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" py={2}>
                When will I get my offer?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Within 24 hours of your enquiry, use the whats app value for a super
            fast valuation!
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" py={2}>
                Can you settle my finance?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, subject to you providing a full settlement letter. We can help
            with this also!
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" py={2}>
                What if I owe more than my bike is worth?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Just pay us the difference. Call us on +44 7770 444569 for a
            detailed explanation
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" py={2}>
                What documents do I need?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            V5c Logbook, Service History, Keys, ID, Proof of Bank Details
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" py={2}>
                What happens to my private plate?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            You can either relinquish the plate or retail it, we can discuss
            this with you once you have agreed a price!
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
