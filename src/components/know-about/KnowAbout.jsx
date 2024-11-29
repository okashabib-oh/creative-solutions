import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem } from "@mui/material";

export default function KnowAbout() {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div className="pt-10">
      <h1 className="text-4xl font-bold text-center mb-12">All You Need To Know About Custom Application Development Services</h1>

      <div className="w-[70%] md:w-[80%] sm:w-[90%] xs:w-[95%] mx-auto mb-4">
        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <div className="bg-[#E3EFFE]">
            <AccordionSummary
              expandIcon={expanded === "panel1" ? <CloseIcon /> : <AddIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="font-bold">
                <Typography variant="p">What mobile app development services do you offer?</Typography>
              </div>
            </AccordionSummary>
          </div>
          <div className="bg-[#CCE3FD]">
            <AccordionDetails>
              <Typography>We offer the following mobile app development services:</Typography>
              <List>
                <ListItem>Custom mobile app design and development</ListItem>
                <ListItem>Native app development for iOS and Android platforms</ListItem>
                <ListItem>Cross-platform app development using frameworks like React Native and Flutter</ListItem>
                <ListItem>UI/UX design and optimization</ListItem>
                <ListItem>App testing, debugging, and quality assurance</ListItem>
                <ListItem>App deployment and maintenance support</ListItem>
              </List>
            </AccordionDetails>
          </div>
        </Accordion>

        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>

          <div className="bg-[#E3EFFE]">
            <AccordionSummary
              expandIcon={expanded === "panel2" ? <CloseIcon /> : <AddIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <div className="font-bold">
                <Typography variant="p">What is the average cost and timeline for developing software?</Typography>
              </div>
            </AccordionSummary>
          </div>

          <div className="bg-[#CCE3FD]">
            <AccordionDetails>
              <Typography>
                The cost and timeline for developing software vary based on factors such as:
              </Typography>
              <List>
                <ListItem>Project complexity and functionality</ListItem>
                <ListItem>Platform compatibility (iOS, Android, or both)</ListItem>
                <ListItem>Design requirements (basic UI/UX vs. custom design)</ListItem>
                <ListItem>Integration with third-party APIs or systems</ListItem>
                <ListItem>Post-launch maintenance and support needs</ListItem>
              </List>
              <Typography>
                Typical costs range from $10,000 to $100,000+, and timelines range from 3 to 15 months.
              </Typography>
            </AccordionDetails>
          </div>
        </Accordion>

        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>

          <div className="bg-[#E3EFFE]">
            <AccordionSummary
              expandIcon={expanded === "panel3" ? <CloseIcon /> : <AddIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <div className="font-bold">
                <Typography variant="p">Do you offer ongoing maintenance and support services?</Typography>
              </div>
            </AccordionSummary>
          </div>

          <div className="bg-[#CCE3FD]">
            <AccordionDetails>
              <Typography>Yes, our maintenance and support services include:</Typography>
              <List>
                <ListItem>Regular app updates and feature enhancements</ListItem>
                <ListItem>Bug fixing and performance optimization</ListItem>
                <ListItem>Security patches and data backup</ListItem>
                <ListItem>User feedback analysis and implementation</ListItem>
                <ListItem>Technical support and troubleshooting</ListItem>
              </List>
            </AccordionDetails>
          </div>
        </Accordion>

        <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>

          <div className="bg-[#E3EFFE]">
            <AccordionSummary
              expandIcon={expanded === "panel4" ? <CloseIcon /> : <AddIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <div className="font-bold">
                <Typography variant="p">Do you develop software for both mobile and web platforms?</Typography>
              </div>
            </AccordionSummary>
          </div>

          <div className="bg-[#CCE3FD]">
            <AccordionDetails>
              <Typography>
                Yes, we specialize in software development for both mobile and web platforms, including:
              </Typography>
              <List>
                <ListItem>Custom web application development</ListItem>
                <ListItem>Mobile app development for iOS and Android platforms</ListItem>
                <ListItem>Progressive web app (PWA) development</ListItem>
                <ListItem>Responsive web design and optimization</ListItem>
                <ListItem>Web-based software solutions for enterprise needs</ListItem>
              </List>
            </AccordionDetails>
          </div>
        </Accordion>

        <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>

          <div className="bg-[#E3EFFE]">
            <AccordionSummary
              expandIcon={expanded === "panel5" ? <CloseIcon /> : <AddIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <div className="font-bold">
                <Typography variant="p">What software development services do you offer?</Typography>
              </div>
            </AccordionSummary>
          </div>

          <div className="bg-[#CCE3FD]">
            <AccordionDetails>
              <Typography>Our software development services include:</Typography>
              <List>
                <ListItem>Custom software design and development</ListItem>
                <ListItem>Enterprise software solutions</ListItem>
                <ListItem>E-commerce platform development</ListItem>
                <ListItem>CRM systems</ListItem>
                <ListItem>IoT software solutions</ListItem>
                <ListItem>Data analytics and business intelligence software</ListItem>
              </List>
            </AccordionDetails>
          </div>
        </Accordion>
      </div>
    </div>
  );
}
