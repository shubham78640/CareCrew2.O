import { Box, Typography } from '@mui/material'
import React from 'react'

function AssociateInfo() {
    return (
        <Box
            sx={{
                padding: "5%",
                color: "#007a48",
                fontSize: "25px",
                fontWeight: "500",
                fontSize: "35px",
                marginTop: { sm: "35%", xs: "300%" },
                bgcolor: "#ededed"
            }}
        >
            How are our associates trained?
            <br />

            <Box sx={{display:"flex", mt:2, flexWrap:"wrap", justifyContent:"space-between"}}>
                <br />
                <Box>
                    
                    <ul style={{width:"400px"}}>
                    <p style={{ fontSize: "20px", color: "#72bf44" }}>Housekeeping Training</p>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>1. </span>End to end cleaning of rooms, floors, walls, bathroom, balcony and terrace</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>2. </span>Cleaning fixtures, furnitures and appliances</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>3. </span>Use of chemicals and their storage</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>4. </span>Bed making and laundry management</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>5. </span>Guest management</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>6. </span>Garden management</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>7. </span>Logistics and home maintenance</li>
                    </ul>
                </Box>
                <br />
                <Box>
                    
                <ul style={{width:"400px"}}>
                    <p style={{ fontSize: "20px", color: "#72bf44" }}>Cooking Training</p>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>1. </span>Cooking techniques like sauteing, roasting, grilling, braising, varieties of gravies and dressing</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>2. </span>Basic baking techniques, different types of doughs and batters</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>3. </span>Storage and utilisation of ingredients, spices and herbs</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>4. </span>Popular North Indian breakfast and main course cuisines (veg and non-veg)</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>5. </span>GSignature global cuisines</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>6. </span>Well balanced menus and meal planning</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>7. </span>Cooking and plating techniques</li>
                    </ul>
                </Box>
                <br />
                <Box>
                    
                <ul style={{width:"400px"}}>
                    <p style={{ fontSize: "20px", color: "#72bf44" }}>Babysitter Training</p>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>1. </span>Oral hygiene</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>2. </span>Massaging, sponge bathing, undressing and dressing of kids</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>3. </span>Preparation of infant feed, sterilisation of feeding utensils and pallada/spoon feeding</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>4. </span>Wrapping/swaddling and holding of baby</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>5. </span>Assisting mother in lactation</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>6. </span>Engagement of kid in various activities as per the age group: reading to the child, songs and rhymes, practising speech, storytelling, managing screen time and pram walking
                        </li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>7. </span>Etiquette training, stress and anxiety management among toddlers</li>
                        <li style={{ fontWeight: "400", color: "black" }}> <span>8. </span>Safety and first aid measures</li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}

export default AssociateInfo