import { Fragment } from 'react'
import { BookedAdventureDetails, Colors } from '../../assets/constants/adventuredetails'
import LeftContainer from "./leftcont"


//left whole paart of map page including time, airport name, air name and so on
const LeftWhole = () => {
    return (
        <div className='left-whole'>

            {BookedAdventureDetails.map((adv, i) => {
                return (
                    <Fragment key={i}>
                        <div>
                            <div className='st-path' style={{ backgroundColor: Colors[i] }}></div>
                            <div className='date-container'>
                                <div className='circle-path' style={{ border: `3.5px solid ${Colors[i]}` }}></div>
                                <div className='place-det'>
                                    <div className='from-city from-city-map'>{adv.fromCity}</div>
                                    <div className='stay-map fontw-700'  style={{color:`${Colors[0]}`}}>
                                        {i === 0 ? "Start" : BookedAdventureDetails[i - 1].stay} / {i === 0 ? adv.startDate : `${BookedAdventureDetails[i - 1].startDate} - ${BookedAdventureDetails[i - 1].endDate}`}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LeftContainer i={i} summary={adv} color={Colors[i]} />
                    </Fragment>
                )
            })
            }
            <div>
                <div className='date-container' style={{ zIndex: 2 }}>
                    <div className='circle-path' style={{ border: `3.5px solid ${Colors[0]}` }}></div>
                    <div className='place-det'>
                        <div className='stay stay-map'>
                        {`Fininsh / ${BookedAdventureDetails[BookedAdventureDetails.length -1].endDate}`}
                        </div>
                        <div className='from-city from-city-map'>{BookedAdventureDetails[0].fromCity}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftWhole