import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import AccordionComponent from "../MuiComponents/AccordionComponent";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Item = styled(Box)(({ theme }) => ({
    flexWrap: "wrap",
    display: "flex",
    padding: "10px",
    justifyContent: "center",
    gap: "20px",
}));

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
            <Grid container>
                <Grid item lg={6} xs={12}>
                    <Section>hii</Section>
                </Grid>
                <Grid item lg={6} xs={12}>
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
                                <Box mt={2} sx={{ color: "#007a48" }}> Select Your Service*</Box>
                                <Box sx={{  }}>
                                    <Box mt={2} sx={{display:"flex",gap:"32px"}}>
                                        <Box sx={{display:"flex", flexDirection:"column", gap:"12px"}}>
                                        <Box sx={{ display: "flex" }}>
                                            <Checkbox {...label} color="success"/>
                                            <Box mt={1.1}>Housekeeping</Box>
                                        </Box>{" "}
                                        <Box sx={{ display: "flex" }}>
                                            <Checkbox {...label} color="success" />
                                            <Box  mt={1.1}>Cooking</Box>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Checkbox {...label} color="success" />
                                            <Box  mt={1.1}>Child Care</Box>
                                        </Box>
                                        </Box>
                                        <Box sx={{display:"flex", flexDirection:"column",gap:"12px"}}>
                                            <Box sx={{ display: "flex", }}>
                                                <Checkbox {...label}  color="success"/>
                                                <Box  mt={1.1}> Elder Care</Box>
                                            </Box>{" "}
                                            <Box sx={{ display: "flex" }}>
                                                <Checkbox {...label} color="success" />
                                                <Box  mt={1.1}>Driver</Box>
                                            </Box>{" "}
                                            <Box sx={{ display: "flex" }}>
                                                <Checkbox {...label} color="success" />
                                                <Box  mt={1.1}>Other</Box>
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

                            <Button  variant="contained" color="success" sx={{ marginTop:"30px"}}>
                                Submit Your Inquery
                            </Button>
                        </Box>
                    </Section>
                </Grid>
            </Grid>

            <Grid container>
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
        </>
    );
}

export default JobsEnglish;
