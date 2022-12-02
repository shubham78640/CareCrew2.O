import { Box, Button, styled } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import React from "react";
import { boxSizing, color, lineHeight, margin } from "@mui/system";

const BOX = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    textAlign: "justify",
    alignItems: "center",
    flexBasis:"260px"
    
});

const BOX2 = styled(Box)({
    background: "white",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "rgba(0,122,72) 0px 5px, rgba(0,122,72) 0px 10px, rgba(0,122,72) 0px 15px",
    "&:hover":{
        background:"#73bf45",
    }
});


const P = styled("p")({
    padding:"10px",
    boxSizing:"border-box",
    color: "#3a4268",
    lineHeight:"-20px",
    marginTop:"-20px"
   
});

const H3 = styled("h3")({
 color:"#73bf45"
});

const StyleDiv = styled("div")({
    width:"60px", 
    height:"2px", 
    background:"#73bf45",
    marginTop:"-20px"
   });

function StepsToHire() {
    return (
        <Box mt={10} sx={{ background: "#ededed" }}>
            <Box p={4} pt={10}>
                <h6 style={{color:"#73bf45"}}>Steps to hire</h6>
                <h1 style={{color:"rgba(0,122,72)"}}>How does it work?</h1>
            </Box>

            <Box display={"flex"} justifyContent={"center"} gap={3} flexWrap={"wrap"} rowGap={7}>
                <BOX>
                    <BOX2>
                        <CallIcon  sx={{color:"rgba(0,122,72)", fontSize:"30px"}}/>
                    </BOX2>
                    <H3>Enquire</H3>
                    <StyleDiv/>
                    <P>
                        Submit your inquiry on the website, WhatsApp us on 96433 28358, or
                        drop us a mail at help@carecrew.in, & get a call back from us.
                    </P>
                </BOX>

                <BOX>
                    <BOX2>
                        <CallIcon sx={{color:"rgba(0,122,72)", fontSize:"30px"}} />
                    </BOX2>
                    <H3>Enquire</H3>
                    <StyleDiv/>
                    <P>
                        Submit your inquiry on the website, WhatsApp us on 96433 28358, or
                        drop us a mail at help@carecrew.in, & get a call back from us.
                    </P>
                </BOX>

                <BOX>
                    <BOX2>
                        <CallIcon sx={{color:"rgba(0,122,72)", fontSize:"30px"}}/>
                    </BOX2>
                    <H3>Enquire</H3>
                    <StyleDiv/>
                    <P>
                        Submit your inquiry on the website, WhatsApp us on 96433 28358, or
                        drop us a mail at help@carecrew.in, & get a call back from us.
                    </P>
                </BOX>

                <BOX>
                    <BOX2>
                        <CallIcon sx={{color:"rgba(0,122,72)", fontSize:"30px"}}/>
                    </BOX2>
                    <H3>Enquire</H3>
                    <StyleDiv/>
                    <P>
                        Submit your inquiry on the website, WhatsApp us on 96433 28358, or
                        drop us a mail at help@carecrew.in, & get a call back from us.
                    </P>
                </BOX>

                <BOX>
                    <BOX2>
                        <CallIcon sx={{color:"rgba(0,122,72)", fontSize:"30px"}}/>
                    </BOX2>
                    <H3>Enquire</H3>
                    <StyleDiv/>
                    <P>
                        Submit your inquiry on the website, WhatsApp us on 96433 28358, or
                        drop us a mail at help@carecrew.in, & get a call back from us.
                    </P>
                </BOX>
            </Box>
            <Box mt={5} pb={5} display={"flex"} justifyContent={"center"}><Button variant="contained" color="success">Submit your inquiry</Button></Box>
        </Box>
    );
}

export default StepsToHire;
