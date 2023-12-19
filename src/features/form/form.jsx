import React, {useState} from "react";
import { isValidValue } from "../../shared/helpers/validator";
import { Input } from "../../shared/input/input";
import "./form.css";

export const Form = ()=>{
    const [formState, setFormState] = useState({
        name:{value:""},
        email:{value:""},
        subject:{value:""}
    })

    const [formErrorState, setFormErrorState] = useState({
        name:{error:false},
        email:{error:false},
        subject:{error:false}
    })

    const handleChange = (data) =>{
        const {name, value}=data;

        setFormState ({...formState, [name]:{value:value}})

    }

    const handleSubmit = (event)=>{
        event.preventDefault();

let error=0;
let updatedFormErrorState={}

        for (const [key, value] of Object.entries(formState)){
        if (!isValidValue({name:key, value: value.value})){
            updatedFormErrorState[key]={error:true};
            error++;
        } else {
            updatedFormErrorState[key]={error:false};
        }

        }
    setFormErrorState(updatedFormErrorState);
    console.log(error>0?"ERROR":"SUCCESS");
    }

       return (
        <form onSubmit={handleSubmit}>
        <Input
        name="name"
        label="Your Full Name (Required)"
        value={formState.name.value}
        error={formErrorState.name.error}
        onChange={handleChange}
      />
         <Input
        name="email"
        label="Your Email ( Required)"
        value={formState.email.value}
        error={formErrorState.email.error}
        onChange={handleChange}
      />
      <Input
        name="subject"
        label="Subject"
        value={formState.subject.value}
        error={formErrorState.subject.error}
        onChange={handleChange}
      />
            <button type="submit">Send Message</button>
        </form>
    )


}