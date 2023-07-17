import { Box } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { TextFields } from "../../components/MuiComponents/AllInputs";
import { db } from "../../firebase.config";
import { languageData, genderData, skillData } from "../../AllData";

function EmployeeAddingForm(props) {
  const [age, setAge] = useState("");
  const [name, setName] = useState("")
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkill] = useState("");
  const [worktime, setWorkTime] = useState("");
  const [language, setLanguage] = useState("");
  const [experience, setExperience] = useState("");
  const [trainingDetails, setTrainingDetails] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    try {
      const mealCollection = collection(db, "CandidateList");

      await addDoc(mealCollection, {
        name,
        age,
        gender,
        location,
        experience,
        skills,
        worktime,
        language,
        trainingDetails,
        image,
        //    "date": today
      });
      alert("success");
      // setInput(false)
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box
      pb={3}
      display={"grid"}
      justifyContent={"center"}
      rowGap={4}
      sx={{ position: "relative", top: "120px" }}
    >
      <Box
        sx={{
          width: "600px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          paddingTop: "30px",
          paddingBottom: "20px",
        }}
      >
          <TextFields
          name="Name"
        //   selected={true}
          setInput={setName}
          // data={stateData}
        />

        <TextFields
          name="Age"
        //   selected={true}
          setInput={setAge}
          // data={stateData}
        />
        <TextFields
          name="Gender"
          selected={true}
          setInput={setGender}
          data={genderData}
        />
        <TextFields
          name="Location"
          // selected={true}
          setInput={setLocation}
          // data={foodpreferenceData}
        />
        <TextFields
          name="Skills"
          // selected={true}
          setInput={setSkill}
          data={skillData}
        />
        <TextFields
          name="Work Time"
          // selected={true}
          setInput={setWorkTime}
          // data={deficiencyData}
        />
        <TextFields
          name="Language"
          // selected={true}
          setInput={setLanguage}
          data={languageData}
        />

        <TextFields
          name="Experience"
          // selected={true}
          setInput={setExperience}
          // data={allegriesData}
        />

        <TextFields
          name="Training Details"
          // selected={true}
          setInput={setTrainingDetails}
          // data={allegriesData}
        />

        <TextFields
          name="Image"
          setInput={setImage}
          // data={allegriesData}
        />
      </Box>
      <button
        style={{
          padding: "10px",
          width: "250px",
          border: "none",
          fontWeight: "600",
          fontSize: "18px",
          margin: "auto",
          marginTop: "-20px",
          backgroundColor: "#007a48",
          color:"#ebe956"
        }}
        onClick={handleSubmit}
      >
        Add Candidate
      </button>
    </Box>
  );
}

export default EmployeeAddingForm;


