import React from 'react'
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Footer from '../../components/Footer/Footer';

const BOX = styled(Box)(({ theme }) => ({
    flexWrap: "wrap",
    display: "flex",
    flexDirection:"column",
    padding: "8.5%",
    gap: "20px",
    color:"#3a4268",
    marginBottom:"6%",
    
  }));

function AgePolicy() {
  return (
    <>
    <BOX>
        <Box  mt={10}sx={{fontWeight:"600", textDecoration:"underline"}} >Our Age Policy on Deployment of Associates</Box>
    <Box>
    We, as a company, stand strong with the government of India to curb child labour. We believe that every child should have a right to be educated and to live freely with respect, their tender years should not be exploited and their growth and development should not be hampered by any economic activity. Hence, we do not deploy any child or adolescent for rendering any services to a client.<span style={{fontWeight:"600"}}> Kindly note that any requests for deployment of an associate below the age of 18 years will not be catered to.</span>
        </Box>
        <Box>
        Child labour is a major concern across the globe, especially in developing countries. As per the stats, India is one of the leading countries in Asia with more than 33 million children employed in various forms of child labour. As a layman, we understand that child labour is the practice of engaging kids, generally below the age of 18 years, in economic activities on a part-time or full-time basis. In India, child labour is not an isolated phenomenon, it always occurs with socio-economic problems of the society. In order to eliminate child labour, the Indian Government has taken effective steps and measures time and again and it stands imperative that each citizen takes every possible step to fulfil the said agenda.


    </Box>
    <Box>
    The Constitution of India speaks for the upliftment and growth of children and provides for the prohibition of employment of children in economic activities and any other activity that is not suitable for the children. The Fundamental Rights conferred by the Constitution of India along with Directive Principles of State Policy advocate this commitment in the following articles:
    </Box>
    <Box>
        <Box  sx={{fontWeight:"600"}}>Article 21 A: Right To Education</Box>
        <Box>Under this article, the government shall provide free and compulsory education to all children who are 6 to 14 years of age.</Box>
    </Box>
    <Box>
        <Box  sx={{fontWeight:"600"}}>Article 24: Prohibition of employment of children in factories, etc.</Box>
        <Box>The Constitution prohibits the employment of children under the age of 14 in any factory or mine or in any other hazardous industry.</Box>
    </Box>
    
    <Box  > <span style={{fontWeight:"600"}}>Article 39: </span> Under this Article, the Constitution of India directs the state to form policies that secure the health and strength of workers and that ensure that no man, woman or tender age child is abused. This Article aims to ensure that citizens are not forced by economic necessity to enter avocations unsuited to their age or strength.</Box>

    <Box>Constitutional and legislative provisions providing protection to children against employment have been elaborated in the <span style={{fontWeight:"600"}}> National Child Labour Policy</span> announced in 1987. The policy addresses the complex issue of child labour in a comprehensive, holistic and integrated manner.</Box>
    <Box>In pursuance of the NCLP, the Indian Government also started the <span style={{fontWeight:"600"}}> National Child Labour Project Scheme,</span> a central sector scheme, with the aim to rehabilitate the children in the age group of 9-14 years who have been involved in economic activities. These children are withdrawn from work and put into Special Centres where they are provided with education, meals and health care. The Scheme also identified adolescents in the age group of 14 to 18 years working in hazardous occupations and they are also provided with vocational training for their skill development.</Box>
    <Box>The Government of India, under the <span style={{fontWeight:"600"}}>  Child Labour (Prohibition and Regulation) act, 1986 </span> had prohibited the employment of children only up to 14 years of age in hazardous occupations and processes. The government later suitably amended the Act in 2016 to the <span style={{fontWeight:"600"}}> Child and Adolescent (Prohibition and Regulation) Act, 1986 </span> and via the amended act, there is a prohibition of employment of children below 14 years of age in all occupations and processes. The age has been linked to the age under <span style={{fontWeight:"600"}}> The Right to Education Act, 2009 </span> for free and compulsory education. Furthermore, the employment of adolescents (14 to 18 years of age) has been prohibited in hazardous occupations and processes. The employment of an adolescent in non-hazardous processes and occupations has been marked by strict processes and restrictions.</Box>
    <Box>Under the Child and Adolescent (Prohibition and Regulation) Act, 1986, domestic work and employment in any restaurant, dhaba, hotels, tea shops, spas or any other recreational establishments has been listed as hazardous occupation and in view of the same, employment of any person below the age of 18 as a domestic worker in houses or in any other establishments is prohibited and illegal and attracts punishment under this Act.</Box>
    <Box>Any person who employs a child or adolescent in contravention to the provisions of this Act shall be punishable with imprisonment for a term of 6 months exceeding up to 2 years. Also, such a person may be fined an amount ranging from Rs. 20,000 to Rs. 50,000. The parents and guardians of such children and adolescents are also punishable under this Act, shall they allow their kids to work.</Box>
    <Box>After necessary amendments were made in 2016, India has also ratified two <span style={{fontWeight:"600"}}>ILO Conventions </span>in 2017, <span style={{fontWeight:"600"}}> being Minimum Age Convention (No.138) and the Worst Forms of Child Labour Convention (No.182) </span> which are legally binding on the country and ensure that the country moves towards the eradication of child labour. By ratifying these two conventions, India is now amongst the majority of countries that have legislation to prohibit child labour and place severe punishments on those who become a part of this problem.</Box>
    <Box>The Indian government has, thus, taken several steps over the years to provide a good quality of life to children by ensuring compulsory and free education and by prohibiting child and adolescent labour. We support the government and all its initiatives that promise the betterment of children and adolescents of the country, who truly stand as the future of the country. Pursuant to the same, we would like to reiterate that we do not deploy any person below the age of 18 years under any circumstances.</Box>
    </BOX>

<Footer/>
    </>
  )
}

export default AgePolicy