import { useState, useEffect } from 'react'
import Select from 'react-select'

const style = {
  control: base => ({
    ...base,
    border: 0,
    boxShadow: 'none',
    backgroundColor: "transparent",
    marginTop: "-7px",
    color:"white",
    fontSize:"14px",
    fontWeight:"700",
  })
};

export const SelectPlace = (props) => {

  return (
    <Select 
    styles={style}
    defaultValue={(props.data)[0]}
    options={props.data}/>
  )
}

export const SelectMultiplePlace = (props) => {
  
  console.log(props.placeholder)
  const [values, setValues] = useState([""])

  useEffect(() => {
     if(values.length === 3) {
      props.handleNumber(true)
     } else {
      props.handleNumber(false)
     }
  }, [values])

  return (
    <Select
    styles={style}
    placeholder={props.placeholder}
    value={values}
    options={props.data}
    isMulti={true}
    onChange={(value) => {
      if(value.length > 0) {
         if(values.length < 3 || value.length < 3) {
        setValues(value)
       } else {
         setValues(values)
       }
      } else {
        setValues([""])
      }
      console.log(value.length)
      
    }}
    />
  )
}