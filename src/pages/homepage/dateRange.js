import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'

const DateRangeComp = (props) => {


    return(
        <div style={{position:"fixed", top:0, left:0, zIndex:2, marginTop:"20%", marginLeft:"-80%"}}>
          <DateRangePicker
           direction='horizontal'
           showSelectionPreview={true}
           moveRangeOnFirstSelection={false}
          onChange={(item) => {
            console.log(item)
            props.handleDatePicker([item.selection])
          }}
          months={2}
          ranges={props.state}
          />
          </div>
        )
}

export default DateRangeComp