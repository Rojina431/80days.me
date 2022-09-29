import { Fragment } from 'react'
import { BookedAdventureDetails, Colors } from '../../assets/constants/adventuredetails'
import LeftContainer from "./leftcont"

const LeftWhole = () => {
    return (
        <div style={{marginTop:"80px"}}>

            {BookedAdventureDetails.map((adv, i) => {
                return (
                    <Fragment key={i}>
                        <div>
                            <div className='st-path' style={{ backgroundColor: Colors[i] }}></div>
                            <div className='date-container' style={{ zIndex: 2 }}>
                                <div className='circle-path' style={{ border: `3.5px solid ${Colors[i]}` }}></div>
                                <div className='place-det'>
                                    <div className='stay stay-map'>
                                        {i === 0 ? "Start" : BookedAdventureDetails[i - 1].stay} / {i === 0 ? adv.startDate : `${BookedAdventureDetails[i - 1].startDate} - ${BookedAdventureDetails[i - 1].endDate}`}
                                    </div>
                                    <div className='from-city from-city-map'>{adv.fromCity}</div>
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