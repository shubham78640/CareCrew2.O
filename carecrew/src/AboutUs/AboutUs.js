import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import imageAboutUs1 from "../Images/1-3.png";
import imageAboutus2 from "../Images/2-3.png";
import nitinImage from "../Images/10.png";
import linkdinImage from "../Images/linkdin.png";
import CheckIcon from "@mui/icons-material/Check";

const Item = styled(Box)(({ theme }) => ({
  flexWrap: "wrap",
  display: "flex",
  padding: "10px",
  justifyContent: "center",
}));
function AboutUs() {
  return (
    <>
      <Box padding="5% 10%">
        <Grid container spacing={1}>
          <Grid lg={6} xs={12}>
            <Item sx={{ justifyContent: "flex-end" }}>
              <img width="100%" src={imageAboutUs1} />
            </Item>
          </Grid>
          <Grid lg={6} xs={12}>
            <Item>
              <Box sx={{ lineHeight: "28px" }}>
                <Box
                  mt={3}
                  sx={{ fontSize: "18px", color: "#72BF44", fontWeight: "400" }}
                >
                  Our Mission
                </Box>
                <Box
                  mt={2}
                  sx={{ fontSize: "32px", color: "#007a48", fontWeight: "900" }}
                >
                  Why do we exist?
                </Box>
                <Box mt={3} sx={{ fontSize: "17px", color: "#2c3b47" }}>
                  At CARE CREW, we are out on a mission to transform the
                  domestic help sector for the well-being of both customers &
                  house helps.
                </Box>
                <Box mt={3} sx={{ fontSize: "17px", color: "#2c3b47" }}>
                  Not only do we want to simplify the daily routines of our
                  customers by bringing about greater comfort & convenience to
                  them at their homes, we also want to integrate the domestic
                  help community into the formal economy & provide them a more
                  secure, sustainable livelihood that also comes with respect &
                  dignity.
                </Box>
                <Box mt={3} sx={{ fontSize: "17px", color: "#2c3b47" }}>
                  We are building an ecosystem of house helps who are well adept
                  at performing not just fundamental household chores like
                  cleaning and cooking, but even services like child care,
                  elderly care, driving, gardening and more.
                </Box>
                <Box mt={3} sx={{ fontSize: "17px", color: "#2c3b47" }}>
                  With continual on-the-job online training, based on content
                  designed by seasoned hospitality executives with a lineage of
                  5-star hotels, we aim to have a pool of productive & efficient
                  house helps, committed to bringing a carefree experience to
                  customers’ homes.
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box padding="5% 10%">
        <Grid container spacing={1}>
          <Grid lg={6} xs={12}>
            <Item>
              <Box sx={{ lineHeight: "28px" }}>
                <Box
                  mt={3}
                  sx={{ fontSize: "18px", color: "#72BF44", fontWeight: "400" }}
                >
                  Our Vision
                </Box>
                <Box
                  mt={2}
                  sx={{ fontSize: "32px", color: "#007a48", fontWeight: "900" }}
                >
                  What do we aim to be?
                </Box>
                <Box mt={3} sx={{ fontSize: "17px", color: "#2c3b47" }}>
                  With CARE CREW, we want to become the most trusted source of
                  reliable house helps for customers. At the same time, we also
                  want to be seen as the most trusted employment provider by the
                  domestic help community.
                </Box>
                <Box mt={3} sx={{ fontSize: "17px", color: "#2c3b47" }}>
                  Offering a trial before you formally sign up, ensuring
                  continuity of service in the event of an exit of the house
                  help, and having nominal monthly charges as against the
                  industry practice of exorbitant upfront commissions, are just
                  some of the things we do to build trust with our customers.
                </Box>
                <Box mt={3} sx={{ fontSize: "17px", color: "#2c3b47" }}>
                  Similarly, providing on-the-job online training to our house
                  helps, maintaining transparency in the disbursement of their
                  salaries and being empathetic to their grievances, all go a
                  long way in ensuring that we are seen as an employment
                  provider of choice among the community.
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid lg={6} xs={12}>
            <Item>
              <img width="100%" src={imageAboutus2} />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box padding="5% 15%" sx={{ backgroundColor: "#E9E6E6" }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid xs={12} lg={12}>
            <Item>
              <Box>
                <Box ml={4} sx={{ fontSize: "18px", color: "#72bf44" }}>
                  Our Values
                </Box>
                <Box
                  mt={3}
                  ml={4}
                  sx={{ fontSize: "34px", fontWeight: "900", color: "#007a48" }}
                >
                  What do we believe in?
                </Box>
                <Box
                  ml={4}
                  mt={3}
                  sx={{ lineHeight: "23px", fontSize: "15px" }}
                >
                  Our four key values of respect, fairness, wellbeing &
                  inclusive holistic growth are based on the fundamental
                  principle of equality & keeping the interests of both our
                  customers & our Associates (house helps) at the centre of all
                  our actions.
                </Box>
                <Box mt={2} sx={{ display: "flex" }}>
                  {" "}
                  <Box sx={{ color: "#72bf44" }}>
                    <CheckIcon />
                  </Box>{" "}
                  <Box ml={1} sx={{ color: "", fontWeight: "900" }}>
                    Respect:
                  </Box>
                </Box>
                <Box
                  mt={1}
                  ml={4}
                  sx={{ lineHeight: "23px", fontSize: "15px" }}
                >
                  As much as our house helps would be trained to treat our
                  customers with the utmost respect, we also expect the
                  customers to reciprocate in the same manner and truly value
                  the difference that their helps make to their homes.
                </Box>
                <Box mt={3} sx={{ display: "flex" }}>
                  <Box sx={{ color: "#72bf44" }}>
                    <CheckIcon />
                  </Box>{" "}
                  <Box ml={1} sx={{ fontWeight: "900" }}>
                    Fairness:
                  </Box>
                </Box>
                <Box
                  mt={1}
                  ml={4}
                  sx={{ lineHeight: "23px", fontSize: "15px" }}
                >
                  Any human relationship evolves over time & has its own fair
                  share of ups & downs. We expect the relationship between
                  customers & house helps to be no different. As someone
                  facilitating this relationship, we truly believe in being fair
                  to both parties at all times. For us, customer is not the
                  king. Fairness is.
                </Box>

                <Box mt={3} sx={{ display: "flex" }}>
                  {" "}
                  <Box sx={{ color: "#72bf44" }}>
                    <CheckIcon />
                  </Box>{" "}
                  <Box ml={1} sx={{ fontWeight: "900" }}>
                    Well-being:
                  </Box>
                </Box>
                <Box
                  mt={1}
                  ml={4}
                  sx={{ lineHeight: "23px", fontSize: "15px" }}
                >
                  We truly want to make the world a better place. Our efforts &
                  services should ultimately lead to a state of well-being for
                  our customers, house helps & employees. Happiness & joy are
                  infectious, and we want to spread these as much as possible.
                </Box>
                <Box mt={3} sx={{ display: "flex" }}>
                  <Box sx={{ color: "#72bf44" }}>
                    <CheckIcon />
                  </Box>
                  <Box ml={1} sx={{ fontWeight: "900" }}>
                    Inclusive Holistic Growth:
                  </Box>
                </Box>
                <Box
                  mt={1}
                  ml={4}
                  sx={{ lineHeight: "23px", fontSize: "15px" }}
                >
                  Change is the only constant. Everybody wants to grow & change
                  for the better. Our efforts are attuned to this philosophy -
                  ensuring our services provide the customers with the right
                  environment to progress in their lives, while we continually
                  train & upskill our house helps for their own personal growth.
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box padding="4% 8%">
        <Grid container spacing={0}>
          <Grid xs={12} lg={4}>
            <Item>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ color: "#72BF44", fontSize: "18px" }}> The Team</Box>
                <Box
                  mt={2}
                  mb={5}
                  sx={{ color: "#007a48", fontSize: "36px", fontWeight: "900" }}
                >
                  Who are we?
                </Box>
                <img width="100%" src={nitinImage} />
              </Box>
            </Item>
          </Grid>
          <Grid xs={12} lg={8}>
            <Item>
              <Box padding={4} mt="13%">
                <Box
                  mt={1}
                  sx={{ color: "#007a48", fontSize: "22px", fontWeight: "900" }}
                >
                  Nitin Mohan Srivastava
                </Box>
                <Box
                  mt={1}
                  sx={{ color: "#72BF44", fontSize: "18px", fontWeight: "900" }}
                >
                  Founder & CEO
                </Box>
                <Box
                  mt={1}
                  sx={{
                    color: "#2c3b47",
                    lineHeight: "29px",
                    fontSize: "17px",
                  }}
                >
                  An entrepreneur out to transform the domestic help ecosystem,
                  Nitin comes with a rewarding experience in start-ups, having
                  played instrumental roles in helping scale organizations like
                  Chaayos & Stanza Living. He had also worked with large brands
                  like Idea and Vodafone in his previous roles.
                </Box>
                <Box mt={2}>
                  <img width="20px" src={linkdinImage} />
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AboutUs;
