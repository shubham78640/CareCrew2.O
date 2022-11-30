import React from "react";
import AccordionComponent from "../MuiComponents/AccordionComponent";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
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

function JobsHindi() {
  return (
    <>
      <Grid container>
        <Grid item lg={6} xs={12}>
          <Section>box use krna hai</Section>
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
                क्या आप नौकरी ढूंढ रहे हैं?
              </Box>
              <Box
                mt={2}
                sx={{ color: "#007a48", fontSize: "20px", fontWeight: "600" }}
              >
                हमसे जुड़ने के लिए नीचे दिए गए फॉर्म को भरें।
              </Box>

              <TextField
                id="outlined-basic"
                label="नाम*"
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
                label="मोबाइल नंबर*"
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
                  आप इनमें से कौन-कौन से काम कर सकते हैं?*
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
                        <Box mt={1.1}>घर की सफाई</Box>
                      </Box>{" "}
                      <Box sx={{ display: "flex" }}>
                        <Checkbox {...label} color="success" />
                        <Box mt={1.1}> खाना बनाना</Box>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Checkbox {...label} color="success" />
                        <Box mt={1.1}>बच्चों की देखभाल</Box>
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
                        <Box mt={1.1}> बड़ों की देखभाल</Box>
                      </Box>{" "}
                      <Box sx={{ display: "flex" }}>
                        <Checkbox {...label} color="success" />
                        <Box mt={1.1}> गाड़ी चलाना</Box>
                      </Box>{" "}
                      <Box sx={{ display: "flex" }}>
                        <Checkbox {...label} color="success" />
                        <Box mt={1.1}> अन्य</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <TextField
                mt={3}
                id="outlined-basic"
                label="शहर*"
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
                फार्म जमा करें
              </Button>
            </Box>
          </Section>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item lg={6} xs={12}>
          <Item>
            <AccordionComponent
              Accordion_Heading="आप किस प्रकार की नौकरियां देते हैं?"
              Accordion_Content="हम घर की सफाई (हाउसकीपिंग), खाना बनाना (कुकिंग), बच्चों की देखभाल (चाइल्ड केयर), बड़ों की देखभाल (एल्डर केयर) और गाड़ी चलाना (ड्राइविंग) में नौकरियां देते हैं। हमारे पास दो तरह की नौकरियां हैं: 24 घंटे जहां आप ग्राहक के घर में ही रहेंगे, या 8-12 घंटे की नौकरी जहां आप काम के लिए रोज ग्राहक के घर जाएंगे"
            />
            <AccordionComponent
              Accordion_Heading="केयर क्रू कहाँ स्थित है? क्या सेवाएं पूरे भारत में दी जाती हैं?"
              Accordion_Content="हम गुरुग्राम, हरियाणा में स्थित हैं। हम अपनी सेवाओं को दिल्ली एनसीआर, गुड़गांव, नोएडा, ग्रेटर नोएडा, गाजियाबाद, फरीदाबाद, मुंबई, बेंगलुरु, हैदराबाद, चेन्नई, कोलकाता, पुणे, अहमदाबाद, सूरत, जयपुर, लखनऊ, कोच्चि और चंडीगढ़ जैसे बड़े शहरों में देते हैं।"
            />
            <AccordionComponent
              Accordion_Heading="क्या मुझे केयर क्रू को कोई शुल्क देने की आवश्यकता है?"
              Accordion_Content="नहीं, हम अपने कार्यकर्ताओं से कोई कमीशन या शुल्क नहीं लेते हैं। बल्कि, हम निरंतर उनका प्रशिक्षण करते हैं ताकि आप अपने कार्यक्षेत्र में नई चीजें सीखें और समय के साथ बेहतर वेतन प्राप्त करें।"
            />
            <AccordionComponent
              Accordion_Heading="क्या मैं परीक्षण के बाद नौकरी को अस्वीकार करना चुन सकता हूं?"
              Accordion_Content="हम तीन दिनों का परीक्षण करते हैं ताकि ग्राहक और उम्मीदवार दोनों एक-दूसरे को बेहतर तरीके से जान सकें। इसलिए, हालांकि ऐसा बहुत कम ही होता है, आप परीक्षण के बाद नौकरी अस्वीकार कर सकते हैं यदि आपको लगता है कि आप ग्राहक के स्थान पर काम करने में संतुष्ट नहीं हैं।"
            />
            <AccordionComponent
              Accordion_Heading="मेरा वेतन कौन देगा - कंपनी या ग्राहक?"
              Accordion_Content="आपके वेतन का भुगतान ग्राहक द्वारा प्रत्येक माह के अंत में सीधे आपको किया जाएगा। यदि कोई अनुचित विलंब होता है, तो आप अपनी सहायता के लिए अपने केयर क्रू संबंध अधिकारी से संपर्क कर सकते हैं।"
            />
          </Item>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Item>
            <AccordionComponent
              Accordion_Heading="मुझे एक महीने में कितनी छुट्टियों मिलेगी?"
              Accordion_Content="कार्यकर्ता प्रति माह 2 छुट्टियां ले सकते हैं। छुट्टी लेने की प्रक्रिया ग्राहक और कार्यकर्ता के बीच तय की जाती है।"
            />
            <AccordionComponent
              Accordion_Heading="अगर मैं 24 घंटे की नौकरी करता हूं, तो क्या मुझे रहने और खाने की सुविधा मिलेगी?"
              Accordion_Content="हाँ, 24 घंटे की नौकरी में, ग्राहक आपके ठहरने और खाने की व्यवस्था करेगा।"
            />
            <AccordionComponent
              Accordion_Heading="अगर आप कार्यकर्ताओं से कोई शुल्क नहीं लेते हैं, तो कंपनी पैसे कैसे कमाती है?"
              Accordion_Content="हमारी कंपनी का संचालन हमारे कर्मचारियों से शुल्क लेने पर निर्भर नहीं है। हम अपनी सेवाओं के लिए ग्राहक से प्रति माह 999 रुपये की एक छोटी राशि लेते हैं।"
            />
            <AccordionComponent
              Accordion_Heading="यदि मुझे केयर क्रू द्वारा प्रदान की गई नौकरी को छोड़ना है, तो क्या मुझे पहले से खबर करने की आवश्यकता है?"
              Accordion_Content="हां, जब आप किसी कारणवश नौकरी छोड़ना चाहते हैं, तो हम उम्मीद करते हैं कि आप हमें कम से कम 15 दिन पहले सूचित करें।"
            />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default JobsHindi;
