import React, { useState }  from "react";
import AccordionComponent from "../../components/MuiComponents/AccordionComponent";
import { styled } from "@mui/material/styles";
import { Button ,Autocomplete,TextField,Box,Grid} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Footer from "../../components/Footer/Footer";
import TabsComponent from "../../components/TabComponent/TabsComponent";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ScrollToTop from "react-scroll-to-top";
import { servicesDatainHindi } from "../../AllData";
import axios from "axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Item = styled(Box)(({ theme }) => ({
  flexWrap: "wrap",
  display: "flex",
  padding: "10px",
  justifyContent: "center",
  gap: "20px",
}));
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

const SPAN = styled("span")({
  color: "#000000",
  fontWeight: "900",
});
function JobsHindi() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [skill,setSkill]=useState([]);


  const date =Date.now()
  var names = skill.map(function(item) {
    return item['service'];
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Details=",
      name,
      phone,
      city,
      names,
      date,
    );

    const data = {
      name: name,
      phoneNumber: phone,
      city: city,
      services:names,
      createdAt:date

    };
    axios
      .post(
        // "http://13.126.160.155:8082/candidate/save",
        "http://localhost:8082/carecrew/candidate/save",
        data
      )
      .then((response) => {
        console.log(response);
        setCity("");
        setName("");
        setPhone("");

      });
  }

  return (
    <>
      <ScrollToTop smooth color="#007a47" />
      <Grid container>
        <Grid mt="5%" item lg={6} xs={12}>
          <Section>
            <TabsComponent
              labelfortab1="हमारा लक्ष्य"
              labelfortab2="मूल्य"
              labelfortab3="संपर्क करें"
              Contentfortab1={
                <Box>
                  <Box sx={{ lineHeight: "30px" }} mt={2}>
                    {" "}
                    <SPAN>केयर क्रू </SPAN>में हमारा लक्ष्य घरेलू सहायता क्षेत्र
                    का परिवर्तन करना है। हम चाहते हैं कि घरेलू कार्यकर्ता उचित
                    रूप से कमाएं और उन्हें सम्मान और गौरव के साथ एक सुरक्षित,
                    स्थिर जीवन प्रदान करें। साथ ही, हम उन ग्राहकों की मदद करना
                    चाहते हैं जिन्हें घर पर सहायता की आवश्यकता है।
                  </Box>
                  <Box sx={{ lineHeight: "30px" }} mt={2}>
                    हम भारत के सभी प्रमुख शहरों में घर की सफाई (हाउसकीपिंग),
                    खाना बनाना (कुकिंग), बच्चों की देखभाल (चाइल्ड केयर), बड़ों
                    की देखभाल (एल्डर केयर) और गाड़ी चलाना (ड्राइविंग) में
                    नौकरियां देते हैं। हमारे पास दो तरह की नौकरियां हैं: 24 घंटे
                    जहां आप ग्राहक के घर में ही रहेंगे, या 8-12 घंटे की नौकरी
                    जहां आप काम के लिए रोज ग्राहक के घर जाएंगे।
                  </Box>
                  <Box sx={{ lineHeight: "30px" }} mt={2}>
                    हमारा उदेश्य घरेलू कार्यकर्ताओं के लिए सबसे भरोसेमंद रोजगार
                    साधन बनना है। इसके लिए हम यह सुनिश्चित करते हैं कि हम अपने
                    घरेलू कार्यकर्ताओं को प्रशिक्षण दें, उनका वेतन समय पर मिले
                    और उनकी शिकायतों को ध्यान से सुनें और उनकी सहायता करें।
                  </Box>
                </Box>
              }
              Contentfortab2={
                <Box>
                  <Box mt={2} sx={{ lineHeight: "30px" }}>
                    हमारे चार प्रमुख मूल्य हैं – सम्मान, निष्पक्षता, कल्याण और
                    सामूहिक विकास जो जीवन स्तर को बढ़ाता है। वे समानता के मूल
                    सिद्धांत पर आधारित हैं और हमारे ग्राहकों, कर्मचारी और
                    कार्यकर्ताओं सभी को महत्व देते हैं।
                  </Box>
                  <Box mt={2} sx={{ lineHeight: "30px" }}>
                    {" "}
                    <SPAN>सम्मान:</SPAN> हम उम्मीद करते हैं कि ग्राहक और घरेलू
                    कार्यकर्ता दोनों एक-दूसरे से सम्मान के साथ मानवीय व्यवहार
                    करें, और समझें कि वे एक दूसरे के जीवन में क्या अंतर ला रहे
                    हैं।
                  </Box>
                  <Box mt={2} sx={{ lineHeight: "30px" }}>
                    {" "}
                    <SPAN>निष्पक्षता:</SPAN> कोई भी मानवीय संबंध समय के साथ
                    बढ़ता और बदलता है। इसके अपने उतार-चढ़ाव होते हैं। हम जानते
                    हैं कि ग्राहक और घरेलू कार्यकर्ता के बीच का रिश्ता ऐसा ही
                    होगा। और चूंकि हम इस संबंध को संभव बनाते हैं, हम हर समय
                    दोनों पक्षों के प्रति निष्पक्ष रहने का प्रयास करेंगे।
                  </Box>
                  <Box mt={2} sx={{ lineHeight: "30px" }}>
                    {" "}
                    <SPAN>कल्याण:</SPAN> हम वास्तव में दुनिया को एक बेहतर जगह
                    बनाना चाहते हैं। हम चाहते हैं कि हमारा प्रयास और हमारी
                    सेवाएं ग्राहकों, घरेलू कार्यकर्ताओं और कर्मचारियों को कल्याण
                    की स्थिति की ओर ले जाएं। खुशी एक अच्छा एहसास है, और हम इसे
                    उनके जीवन में जितना संभव हो उतना बढ़ाना चाहते हैं।
                  </Box>
                  <Box mt={2} sx={{ lineHeight: "30px" }}>
                    {" "}
                    <SPAN>व्यक्तिगत विकास:</SPAN> परिवर्तन आवश्यक है। हर कोई
                    बढ़ना और बेहतर बनना चाहता है। हम इसमें मदद करते हैं। हम
                    सुनिश्चित करते हैं कि हमारी सेवाएं ग्राहकों को उनके जीवन में
                    प्रगति के लिए सही वातावरण प्रदान करें, इस बीच हम व्यक्तिगत
                    विकास के लिए अपने घरेलू कार्यकर्ता को लगातार प्रशिक्षित और
                    कुशल बनाते हैं।
                  </Box>
                </Box>
              }
              Contentfortab3={
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
                >
                  <Box mt={2}>
                    <SPAN>कार्य समय:</SPAN>
                  </Box>
                  <Box>सोम-शुक्र: सुबह 10 बजे से शाम 6 बजे</Box>
                  <Box>
                    <SPAN>फ़ोन नंबर: </SPAN>
                    <Span> </Span>
                  </Box>
                  <Box>
                    <SPAN>लैंडलाइन –</SPAN>
                    <Span> 080-6201-2086 </Span>
                  </Box>
                  <a
                    href="https://api.whatsapp.com/send?phone=919643328358"
                    style={{ color: "#72bf44", textDecoration: "none" }}
                    target="_blank"
                  >
                    <Box>
                      <SPAN>व्हाट्सएप –</SPAN> 964-332-8358
                    </Box>
                  </a>
                  <Box>
                    <SPAN>ईमेल:</SPAN>
                    <Span> help@carecrew.in</Span>
                  </Box>
                  <Box>
                    <SPAN>पता:</SPAN>{" "}
                    <a
                      style={{ textDecoration: "none", color: "#72bf44" }}
                      target="_blank"
                      href="https://www.google.com/maps/place/Pinch/@28.473333,77.089442,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1f217d84f5a9:0xdb16d79eda45c82a!8m2!3d28.473333!4d77.091636"
                    >
                      ए-55/8, डीएलएफ फेज -1, सेक्टर 28, गुरुग्राम, 122 002
                    </a>
                  </Box>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <a
                      href="https://www.facebook.com/carecrew.in"
                      target="_blank"
                    >
                      {" "}
                      <FacebookIcon
                        sx={{ fontSize: "30px", color: "#4267B2" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/showcase/care-crew-in/"
                      target="_blank"
                    >
                      {" "}
                      <LinkedInIcon
                        sx={{ fontSize: "30px", color: "#0077B7" }}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/carecrew.in/"
                      target="_blank"
                    >
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
                onChange={(e) => setName(e.target.value)}
                value={name}
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
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              {/* <Box>
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
              </Box> */}

<Autocomplete
          multiple
          disableCloseOnSelect
          size="medium"
          color="primary"
          sx={{ width: "96%", marginTop:"3%" }}
          options={servicesDatainHindi}
          getOptionLabel={(option) => option.service}
          onChange={(event, newValue) => {
            setSkill([...newValue]);
          }}
          renderInput={(params) => (
            <TextField {...params}
              placeholder=" आप इनमें से कौन-कौन से काम कर सकते हैं?*"
            />
          )}
        />

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
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
              <Button
                variant="contained"
                color="success"
                sx={{ marginTop: "30px" }}
                onClick={handleSubmit}
              >
                फार्म जमा करें
              </Button>
            </Box>
          </Section>
        </Grid>
      </Grid>

      <Grid sx={{ padding: { sm: "5% 8%", xs: "2%" } }} container spacing={2}>
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
      <Footer />
    </>
  );
}

export default JobsHindi;
