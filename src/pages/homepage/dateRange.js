
import { DateRangePicker } from 'react-date-range'

//date range component of homepage

const DateRangeComp = (props) => {
    return(
        <div style={{position:"fixed", top:0, left:0, zIndex:2, marginTop:"20%", marginLeft:"-80%"}}>
          <DateRangePicker
           direction='horizontal'
           showSelectionPreview={true}
           moveRangeOnFirstSelection={false}
          onChange={(item) => {
            props.handleDatePicker([item.selection])
          }}
          months={2}
          ranges={props.state}
          />
          </div>
        )
}

export default DateRangeComp