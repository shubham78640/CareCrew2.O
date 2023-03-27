import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Process from "../../components/Process/Process";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import { Box, Button, styled } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import Pricing from "../../components/Price/Pricing";
import { multiStepContext } from "../../Context/FormContext";

function WorkProcess() {
  const { closeForm, setCloseForm } = useContext(multiStepContext);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box
        sx={{}}
        onClick={() => {
          setCloseForm(false);
        }}
      >
        <Box sx={{ padding: { sm: "12% 8%", xs: "24% 2%" } }}>
          <Box
            sx={{
              fontSize: "42px",
              color: "#007a47",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "3%",
            }}
          >
            How does it work?
          </Box>
          <Process
            Process_Icons={
              <CallIcon
                sx={{
                  color: "white",
                  fontSize: "38px",
                  "&:hover": {
                    color: "rgba(0,122,72)",
                  },
                }}
              />
            }
            Process_Heading="Enquire"
            Process_Content={
              <Box>
                Submit your inquiry on the website, WhatsApp us on{" "}
                <a
                  target="blank"
                  href="https://api.whatsapp.com/send?phone=919643328358"
                  style={{
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "#72BF44",
                  }}
                >
                  {" "}
                  96433 28358
                </a>
                , or email us at{" "}
                <span style={{ fontWeight: 600, cursor: "pointer" }}>
                  {" "}
                  help@carecrew.in
                </span>
                , and we will call you back
              </Box>
            }
          />

          <Process
            Process_Icons={
              <SavedSearchIcon
                sx={{
                  color: "white",
                  fontSize: "38px",
                  "&:hover": {
                    color: "rgba(0,122,72)",
                  },
                }}
              />
            }
            Process_Heading="Interview & Trial"
            Process_Content="Take an interview and a 3-day on-the-job paid trial of the candidate to assure yourself that you have the right person for your home."
          />
          <Process
            Process_Icons={
              <CleaningServicesIcon
                sx={{
                  color: "white",
                  fontSize: "38px",
                  "&:hover": {
                    color: "rgba(0,122,72)",
                  },
                }}
              />
            }
            Process_Heading="Hire & Train"
            Process_Content="Sign the contract digitally & commit yourself to a hassle-free service. Get your Associate trained by our trainers post deployment"
          />
          <Process
            Process_Icons={
              <HandshakeIcon
                sx={{
                  color: "white",
                  fontSize: "38px",
                  "&:hover": {
                    color: "rgba(0,122,72)",
                  },
                }}
              />
            }
            Process_Heading="Replacement"
            Process_Content="Get unlimited replacements for up to a period 6 months from the first deployment"
          />
          <Process
            Process_Icons={
              <SocialDistanceIcon
                sx={{
                  color: "white",
                  fontSize: "38px",
                  "&:hover": {
                    color: "rgba(0,122,72)",
                  },
                }}
              />
            }
            Process_Heading="Engage"
            Process_Content="Engage with our Relationship Officer for any grievances/ training/ replacement requests"
          />
        </Box>
        <Box
          mt={-10}
          mb={6}
          sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          <Box
            sx={{
              fontSize: "40px",
              fontWeight: "600",
              textAlign: "center",
              color: "#007a47",
            }}
          >
            {" "}
            Pricing
          </Box>
          <Box
            width="65%"
            sx={{
              display: "flex",
              gap: { sm: "6%", xs: "30%" },
              flexDirection: { sm: "row", xs: "column" },
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              padding: { sm: "2% 3%", xs: "10%" },
            }}
          >
            <Box>
              <Pricing
                pricing_Heading="Registration Fee"
             pricing_Content="Rs.999+GST | While submitting your enquiry. 
             The full amount shall be adjusted in the final sourcing fee during deployment.
             "
              />
            </Box>
            <Box sx={{marginTop:{sm:"0px", xs:"10%"}}}> 
              <Pricing
                pricing_Heading="One-time Signing fee"
                pricing_Content="One time fee equivalent to your Associate’s one month salary applicable on signing the contract to deploy a preferred Help after trial."
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            color: "#007a47",
            marginLeft: { sm: "22%", xs: "6%" },
            fontSize: "15px",
            marginTop: { sm: "0%", xs: "-15%"},
            marginBottom: { sm: "2%",xs:"15%"}
          }}
        >
          GST of 18% will be applicable on the above charges.
        </Box>
        <Box>
          <Box
            m="5% 2%"
            sx={{
              fontSize: "40px",
              fontWeight: "600",
              textAlign: "center",
              color: "#007a47",
            }}
          >
            FAQ{" "}
          </Box>
          <Box
            mb={4}
            m="5%"
            sx={{
              display: "flex",
              flexDirection: { sm: "row", xs: "column", gap: "20px" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                flexBasis: "100%",
              }}
            >
              <AccordionComponent
                Expend_Value={expanded === "panel1"}
                newchnage={handleChange("panel1")}
                Accordion_Heading="Do I need to pay any upfront charges before hiring somebody from CARE CREW?"
                Accordion_Content="We charge a nominal registration fee of Rs. 999+GST while submitting the enquiry which shall be adjusted fully in our service charge while deployment. Once we find a candidate for you, you can take a 3 day trial. Post the trial, you pay us the Associate’s one month salary + 18% GST upfront to sign a contract with us and get your Associate deployed."
              />
              <AccordionComponent
                Expend_Value={expanded === "panel2"}
                newchnage={handleChange("panel2")}
                Accordion_Heading="When does the service fee have to be paid?"
                Accordion_Content="The service fee needs to be paid after the trial and before deployment."
              />
              <AccordionComponent
                Expend_Value={expanded === "panel3"}
                newchnage={handleChange("panel3")}
                Accordion_Heading="Do you have any refund policy?"
                Accordion_Content="In any case where you choose to discontinue our services, we shall provide you with a refund on a pro rata basis from the refundable component of the service fee. You need to inform us 7 days in advance of when you wish to discontinue our services. "
              />
              <AccordionComponent
                Expend_Value={expanded === "panel6"}
                newchnage={handleChange("panel6")}
                Accordion_Heading="How many candidates does one get to interview before finalising one?"
                Accordion_Content="Once we get an inquiry, we do our own homework in bringing to you candidates that closely match your stated requirements. With customer satisfaction being a top priority for us, we haven’t placed any restriction on the number of candidates that you can interview for the first candidate being deployed. However, post deployment whenever you raise a replacement request we share a maximum of three profiles for interviewing per replacement request placed.Whenever you raise a replacement request, we shall take up to 5 days to share a candidate’s profile. If you are not happy with the candidate shared, we shall source further profiles up to a maximum of 3 profiles. We will need up to 5 days to share any new profile. "
              />
              <AccordionComponent
                Expend_Value={expanded === "panel4"}
                newchnage={handleChange("panel4")}
                Accordion_Heading="Can one opt for a trial?"
                Accordion_Content="Yes, we offer a maximum trial period of three days, where you can see & evaluate the work of the Associate & can then decide if you wish to commit to our services. You will need to pay the candidate on a per day basis during the trial period."
              />
              <AccordionComponent
                Expend_Value={expanded === "panel5"}
                newchnage={handleChange("panel5")}
                Accordion_Heading="How do you train my Associate?"
                Accordion_Content="We have our own training centres - cloud kitchen for culinary, daycare for childcare and home-like office space setup for housekeeping training and designated trainers to train the Associates. You can send your Associate for training after deployment at any point. The cost of conveyance shall be borne by you and there shall be no deductions in the salary of the Associate from your end for those days."
              />

              <AccordionComponent
                Expend_Value={expanded === "panel7"}
                newchnage={handleChange("panel7")}
                Accordion_Heading="Do you offer replacements if the help quits?"
                Accordion_Content="Yes, we do. While we wish for everything to be frictionless & train our Associates continually in a manner that they serve you professionally, we do offer replacements for up to a period of 6 months should such situations arise. Whenever you raise a replacement request, we shall take up to 5 days to share a candidate’s profile. If you are not happy with the candidate shared, we shall source further profiles up to a maximum of 3 profiles. We will need up to 5 days to share any new profile."
              />

               <AccordionComponent
                Expend_Value={expanded === "panel15"}
                newchnage={handleChange("panel15")}
                Accordion_Heading="What do I get in the registration fee that I am paying?"
                Accordion_Content="We will share up to 3 profiles with you matching your requirement. The first profile shall be shared with you within the first 24-72 hours. Once you find your right Associate, this amount shall be adjusted in our service fee. In case we fail to provide you with a profile within the first 72 hours, you shall get the entire registration fee refunded. "
              /> 
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                flexBasis: "100%",
              }}
            >
              <AccordionComponent
                Expend_Value={expanded === "panel8"}
                newchnage={handleChange("panel8")}
                Accordion_Heading="What happens if I don’t get the right candidate within the 3 profiles you shared?"
                Accordion_Content="We assess and verify skills of our Associates before sharing them with you and choose the best fit for your requirement. However, as every household has their own set of patterns and preferences, the Associate might require some assistance from you as well in this process of becoming the perfect match for you. In case you don’t find the right match for your home even after our 3 shortlisted profiles, you can ask us to get your chosen Associate trained as per your requirements or opt to discontinue our services."
              />
              <AccordionComponent
                Expend_Value={expanded === "panel9"}
                newchnage={handleChange("panel9")}
                Accordion_Heading="Can I claim for a refund in case I am not satisfied with the profiles shared as a replacement?"
                Accordion_Content="We assess our Associates on their skills and work experience before sharing them with you and try to source the perfect match for your requirement. In case you want to train or groom your Associate on any specific aspect which is essential to match your preferred style of working, you can ask us to assist in training your Associate. We have designated trainers who shall help to upskill your chosen Associate. If you are still not satisfied with the Associate’s skill level and want to discontinue our services, you can claim for a refund. In that case we shall refund the refundable component of the service fee on a pro rata basis. "
              />
              <AccordionComponent
                Expend_Value={expanded === "panel10"}
                newchnage={handleChange("panel10")}
                Accordion_Heading="Who do I pay monthly salaries to?"
                Accordion_Content="You can directly pay your Associate’s salary to him/her at the end of every month."
              />
              <AccordionComponent
                Expend_Value={expanded === "panel11"}
                newchnage={handleChange("panel11")}
                Accordion_Heading="How many leaves do I need to give to the house help every month?"
                Accordion_Content="The number of paid leaves & the mechanism for availing them is left to the mutual agreement between the customer & the Associate. However, the Associate would be entitled to a minimum of 2 paid leaves per month."
              />
              <AccordionComponent
                Expend_Value={expanded === "panel12"}
                newchnage={handleChange("panel12")}
                Accordion_Heading="Do I need to provide accommodation & meals to the house helps?"
                Accordion_Content="In a 24 hour live-in working arrangement, you would need to provide for the accommodation & meals of the Associate. In an 8-12 hour working arrangement, you would only need to provide for the meals applicable during the working hours."
              />
              <AccordionComponent
                Expend_Value={expanded === "panel13"}
                newchnage={handleChange("panel13")}
                Accordion_Heading="Where is CARE CREW based? Are the services offered pan-India?"
                Accordion_Content="We are headquartered at Gurugram, Haryana and offer services primarily in Delhi NCR. This includes the areas of Delhi, Gurugram, Noida, Faridabad, Ghaziabad & Greater Noida."
              />
              <AccordionComponent
                Expend_Value={expanded === "panel14"}
                newchnage={handleChange("panel14")}
                Accordion_Heading="Are the house helps deployed by CARE CREW verified?"
                Accordion_Content="Yes, CARE CREW does a background check for its Associates based on the documents submitted by them. This includes verification of their identity such as Aadhaar, their address & criminal court records."
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default WorkProcess;
