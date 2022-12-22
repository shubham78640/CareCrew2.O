import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Footer from "../../components/Footer/Footer";
import TabsComponent from "../../components/TabComponent/TabsComponent";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ScrollToTop from "react-scroll-to-top";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Item = styled(Box)(({ theme }) => ({
  flexWrap: "wrap",
  display: "flex",
  padding: "10px",
  justifyContent: "center",
  gap: "20px",
}));

const SPAN = styled("span")({
  color: "#000000",
  fontWeight: "900",
});
const Span = styled("span")({
  color: "#72bf44",
  cursor: "pointer",
});

const Section = styled(Box)(({ theme }) => ({
  flexWrap: "wrap",
  display: "flex",
  padding: "10px",
  justifyContent: "flex-start",
  gap: "20px",
}));

function JobsEnglish() {
  return (
    <>
     <ScrollToTop smooth color="#007a47" /> 
      <Grid container>
        <Grid mt="5%" item lg={6} xs={12}>
          <Section>
            <TabsComponent
              labelfortab1="Mission & Vision"
              labelfortab2="Values"
              labelfortab3="Contact Us"
              Contentfortab1={
                <Box>
                  <Box sx={{ lineHeight: "30px" }} mt={2}>
                    {" "}
                    <SPAN>At CARE CREW, </SPAN> we are out on a mission to
                    transform the domestic help sector for the wellbeing of both
                    customers & house helps. We want to integrate the domestic
                    help community into the formal economy & provide them a more
                    secure, sustainable livelihood that also comes with respect
                    & dignity.
                  </Box>
                  <Box sx={{ lineHeight: "30px" }} mt={2}>
                    We provide jobs in housekeeping, cooking, child care, elder
                    care & driving, across all major cities in India. There are
                    two kinds of jobs: either 24 hour live-in jobs, or 8-12 hour
                    live-out jobs.
                  </Box>
                  <Box sx={{ lineHeight: "30px" }} mt={2}>
                    Our vision is to become the most trusted employment provider
                    for the domestic help community. For this purpose, we ensure
                    that we invest in training of our house helps, maintain
                    transparency in the disbursement of their salaries and are
                    empathetic to their grievances.
                  </Box>
                </Box>
              }
              Contentfortab2={
                <Box>
                  <Box mt={2} sx={{ lineHeight: "30px" }}>
                    Our four key values of respect, fairness, wellbeing &
                    inclusive holistic growth are based on the fundamental
                    principle of equality & keeping the interests of both our
                    customers & our Associates at the centre of all our actions.
                  </Box>
                  <Box mt={2} sx={{ lineHeight: "30px" }}>
                    {" "}
                    <SPAN>Respect:</SPAN> We expect both customers & house helps
                    to treat each other humanely, with utmost respect, and value
                    the difference they are making to each other’s lives.
                  </Box>
                  <Box mt={2} sx={{ lineHeight: "30px" }}>
                    {" "}
                    <SPAN>Fairness:</SPAN> Any human relationship evolves over
                    time & has its own fair share of ups & downs. We expect the
                    relationship between customers & house helps to be no
                    different. As someone facilitating this relationship, we
                    truly believe in being fair to both parties at all times.
                  </Box>
                  <Box mt={2} sx={{ lineHeight: "30px" }}>
                    {" "}
                    <SPAN>Wellbeing: </SPAN> We truly want to make the world a
                    better place. Our efforts & services should ultimately lead
                    to a state of wellbeing for our customers, house helps &
                    employees. Happiness & joy are infectious, and we want to
                    spread these as much as possible.
                  </Box>
                  <Box mt={2} sx={{ lineHeight: "30px" }}>
                    {" "}
                    <SPAN>Inclusive Holistic Growth:</SPAN> Change is the only
                    constant. Everybody wants to grow & change for the better.
                    Our efforts are attuned to this philosophy – ensuring our
                    services provide the customers with the right environment to
                    progress in their lives, while we continually train &
                    upskill our house helps for their own personal growth.
                  </Box>
                </Box>
              }
              Contentfortab3={
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
                >
                  <Box mt={2}>
                    <SPAN>Open Hours:</SPAN>
                  </Box>
                  <Box>Mon-Fri: 10am-6pm</Box>
                  <Box>
                    <SPAN>Phone Number:</SPAN> <Span></Span>
                  </Box>
                  <Box>
                    <SPAN>Call us at – </SPAN> <Span>080-6201-2086 </Span>
                  </Box>
                  <a
                    href="https://api.whatsapp.com/send?phone=919643328358"
                    style={{ color: "#72bf44", textDecoration: "none" }}
                    target="_blank"
                  >
                    <Box>
                      <SPAN>WhatsApp us at –</SPAN> <Span>964-332-8358</Span>
                    </Box>
                  </a>
                  <Box>
                    <SPAN>Email Address:</SPAN> <Span>help@carecrew.in</Span>
                  </Box>
                  <Box>
                    <SPAN>Address: </SPAN>{" "}
                    <a
                      style={{ textDecoration: "none", color: "#72bf44" }} target="_blank"
                      href="https://www.google.com/maps/place/Pinch/@28.473333,77.089442,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1f217d84f5a9:0xdb16d79eda45c82a!8m2!3d28.473333!4d77.091636"
                    >
                      A-55/8, DLF Phase 1, Sector 28 – 122002
                    </a>
                  </Box>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <a href="https://www.facebook.com/carecrew.in" 
                    target="_blank">
                      {" "}
                      <FacebookIcon
                        sx={{ fontSize: "30px", color: "#4267B2" }}
                      />
                    </a>
                    <a href="https://www.linkedin.com/showcase/care-crew-in/"
                    target="_blank">
                      {" "}
                      <LinkedInIcon
                        sx={{ fontSize: "30px", color: "#0077B7" }}
                      />
                    </a>
                    <a href="https://www.instagram.com/carecrew.in/"
                    target="_blank">
                      {" "}
                      <InstagramIcon
                        sx={{ fontSize: "30px", color: "#d84315" }}
                      />
                    </a>
                  </Box>
                </Box>
              }
            />
          </Section>
        </Grid>
        <Grid mt="8%" item lg={6} xs={12}>
          <Section>
            <Box
              padding="5%"
              width="100%"
              height="auto"
              sx={{ backgroundColor: "" }}
            >
              <Box
                sx={{ color: "#007a48", fontSize: "30px", fontWeight: "600" }}
              >
                Get a call back
              </Box>

              <TextField
                id="outlined-basic"
                label="Name*"
                variant="outlined"
                color="success"
                sx={{
                  backgroundColor: "",
                  width: "96%",
                  marginTop: "20px",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Phone*"
                variant="outlined"
                color="success"
                sx={{
                  backgroundColor: "",
                  width: "96%",
                  marginTop: "20px",
                }}
              />
              <Box>
                <Box mt={2} sx={{ color: "#007a48" }}>
                  {" "}
                  Select Your Service*
                </Box>
                <Box sx={{}}>
                  <Box mt={2} sx={{ display: "flex", gap: "32px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Checkbox {...label} color="success" />
                        <Box mt={1.1}>Housekeeping</Box>
                      </Box>{" "}
                      <Box sx={{ display: "flex" }}>
                        <Checkbox {...label} color="success" />
                        <Box mt={1.1}>Cooking</Box>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Checkbox {...label} color="success" />
                        <Box mt={1.1}>Child Care</Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Checkbox {...label} color="success" />
                        <Box mt={1.1}> Elder Care</Box>
                      </Box>{" "}
                      <Box sx={{ display: "flex" }}>
                        <Checkbox {...label} color="success" />
                        <Box mt={1.1}>Driver</Box>
                      </Box>{" "}
                      <Box sx={{ display: "flex" }}>
                        <Checkbox {...label} color="success" />
                        <Box mt={1.1}>Other</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <TextField
                mt={3}
                id="outlined-basic"
                label="City*"
                variant="outlined"
                color="success"
                sx={{
                  backgroundColor: "",
                  width: "96%",
                  marginTop: "20px",
                }}
              />

              <Button
                variant="contained"
                color="success"
                sx={{ marginTop: "30px" }}
              >
                Submit Your Inquery
              </Button>
            </Box>
          </Section>
        </Grid>
      </Grid>

      <Grid sx={{ padding: { sm: "5% 8%", xs: "2%" } }} container spacing={2}>
        <Grid item lg={6} xs={12}>
          <Item>
            <AccordionComponent
              Accordion_Heading="What kind of jobs do you provide?"
              Accordion_Content="We provide household jobs such as those in housekeeping, cooking, child care, elder care & driving. There are two kinds of jobs: either 24 hour live-in jobs, or 8-12 hour live-out jobs."
            />
            <AccordionComponent
              Accordion_Heading="Where is CARE CREW based?"
              Accordion_Content="Are the services offered pan-India?We are headquartered at Gurugram, Haryana. We offer services pan-India when it comes to 24 hour live-in helpers. In case of live-out helpers, we have restricted our services to tier-I cities for now: Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Surat, Jaipur, Lucknow, Kochi & Chandigarh."
            />
            <AccordionComponent
              Accordion_Heading="Do I need to pay any commission or charges to CARE CREW?"
              Accordion_Content="No, we do not charge any commission or fee from our Associates. Rather, we invest in your continuous training so that you learn new skills in your area of work & earn better salaries over time."
            />
            <AccordionComponent
              Accordion_Heading="Can I choose to opt out after a trial?"
              Accordion_Content="We offer a trial period of three days so that both the customers & the candidates can get to know each other better & make an informed decision before they decide to commit to the engagement. So, even though it happens rarely, you can opt out after a trial if you feel you are not comfortable working at the customer’s place."
            />
            <AccordionComponent
              Accordion_Heading="Who will pay my monthly salary - the company or the customer?"
              Accordion_Content="Your monthly salary will be paid directly by the customer to you at the end of each month. In case there is any unreasonable delay, you can reach out to your CARE CREW Relationship Officer to help you out."
            />
            <AccordionComponent
              Accordion_Heading="How many leaves will I be allowed in a month?"
              Accordion_Content="The Associate would be entitled to 2 paid leaves per month. The mechanism for availing them is left to the mutual agreement between the customer & the Associate."
            />
          </Item>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Item>
            <AccordionComponent
              Accordion_Heading="How does CARE CREW make money if you do not charge any commission to the candidates?"
              Accordion_Content="Our business model is not based on charging commission to our helps. Instead, we levy a small subscription fee of Rs.999 per month to the customer for our services."
            />
            <AccordionComponent
              Accordion_Heading="Do I need to give a notice period if I want to quit a job where CARE CREW has placed me?"
              Accordion_Content="Yes, we expect you to inform us at least 15 days in advance, in the unfortunate event where you want to quit the job for any reason."
            />
            <AccordionComponent
              Accordion_Heading="How much time would it take you to find me a job?"
              Accordion_Content="Finding a job suitable to you depends on multiple factors like your own skills, experience, location, etc. Once you register with us, we try our best to find a suitable job for you in the earliest possible time."
            />
            <AccordionComponent
              Accordion_Heading="Will I get accommodation & meals if I take up a 24 hour live-in job?"
              Accordion_Content="Yes, in a 24 hour live-in working arrangement, the customer will take care of your accommodation & meals."
            />
            <AccordionComponent
              Accordion_Heading="Do I have to undergo any background check before being placed in a job?"
              Accordion_Content="Yes, CareCrew does a thorough background check for its Associates. You would have to submit to us the required documents at appropriate stages of the deployment process."
            />
          </Item>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default JobsEnglish;
