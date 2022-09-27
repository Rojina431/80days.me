
import '../assets/styles/common.css'

const Dashed = ({number, color}) => {
    var component = []
    for(let i = 0; i < number; i++) {
        component.push(
            <div className='dash' key={i} style={{backgroundColor:color}}></div>
        )
    }
   return (
    component
   )
}

export default Dashed