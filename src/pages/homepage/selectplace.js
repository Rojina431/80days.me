import { useState } from 'react'

export const SelectPlace = (props) => {


   return (
    <select class="form-select" aria-label="Default select example">
      {props.data.map((data, index) => {
        return (
          <option key={index} value={data}>{data}</option>
        )
      })}
  </select>
   )
}

export const SelectMultiplePlace = (props) => {
  console.log(props.placeholder)
  return (
    // <Select
    // bordered={false}
    // placeholder={props.placeholder}
    // onChange={(val) => {
    //   props.handleChange(val)
    // }}
    // showArrow={false}
    // mode="tags"
    // maxTagTextLength={3}
    // >
    //   {props.data.map((data, index) => {
    //     return (
    //        <Select.Option key={index} value={data}
    //        >
    //         {data}
    //        </Select.Option>
    //     )
    //   })}
    // </Select>
    <select class="form-select" aria-label="Default select example">
    {props.data.map((data, index) => {
      return (
        <option key={index} value={data}>{data}</option>
      )
    })}
</select>
  )
}