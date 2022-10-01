import { useState, useEffect } from 'react'
import Select from 'react-select'

const style = {
  control: base => ({
    ...base,
    border: 0,
    boxShadow: 'none',
    backgroundColor: "transparent",
    marginTop: "-7px",
    fontSize:"14px",
    fontWeight:"700",
  })
};

export const SelectPlace = (props) => {

  return (
    <Select 
    onChange={(val) => props.handleChange(val)}
    styles={style}
    defaultValue={props.value}
    options={props.data}/>
  )
}

export const SelectMultiplePlace = (props) => {
  
  const [data, setData] = useState([])

  useEffect(() => {
     for(let i = 0; i < props.data.length; i++){
      if(props.around.value === props.data[i].name){
        setData(props.data[i].places)
      }
     }
  },  [props.around])

  useEffect(() => {
     if(props.values.length === 3) {
      props.handleNumber(true)
     } else {
      props.handleNumber(false)
     }
  }, [props.values])

  return (
    <Select
    styles={style}
    placeholder={props.placeholder}
    value={props.values}
    options={data}
    isMulti={true}
    onChange={(value) => {
      if(value.length > 0) {
         if(props.values.length < 3 || value.length < 3) {
        props.handleChange(value)
       } else {
         props.handleChange(props.values)
       }
      } else {
        props.handleChange([])
      }
      console.log(value.length)
      
    }}
    />
  )
}