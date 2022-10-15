import { Fragment } from 'react'
import { ContryNames } from '../../assets/constants/places'
import { HiCreditCard } from 'react-icons/hi'


//debit process container
const DebitProcess = () => {
    return (
        <Fragment>
            <div>
                <div className='pay-row' style={{ padding: "20px 0" }}>
                    <div className='col-left-1'>
                        <label className="form-label fonts-12">Name on the card</label>
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className='col-mid-1'>
                        <label className="form-label fonts-12">City</label>
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className='col-right-1'>
                        <label className="form-label fonts-12">Country</label>
                        <select className='form-select'>
                            <option value="">Country</option>
                            {ContryNames.map((cont, index) => {
                                return (
                                    <option value={cont} key={index}>{cont}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className='row card-no' style={{ paddingBottom: "30px" }}>
                <div className='col-12 input-group'>
                    <span className="input-group-text left"><HiCreditCard size={30} style={{ color: "#666" }} /></span>
                    <input style={{ fontWeight: "500" }} type="text" className="form-control" placeholder="Card number" />
                    <span className="input-group-text right fontw-500" style={{ color: "#666" }}>MM / YY CVC</span>
                </div>
            </div>
        </Fragment>
    )
}

export default DebitProcess