import { MenuItem, TextField } from "@mui/material";

export function TextFields(props) {
    const { name, input, setInput, selected, data, disable } = props;
    return (
      <div>
        <TextField
          select={selected}
          sx={{ width: "250px" }}
          size="small"
          // disabled={disable}
          label={name}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        >
          {name!="Name*" && name!="For Whom"&&name!="Age"&&<MenuItem key={""} value={""}>
            Unselect
          </MenuItem>}
          {data?.map((option) => (
            <MenuItem
              key={option}
              value={option}
            >
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
