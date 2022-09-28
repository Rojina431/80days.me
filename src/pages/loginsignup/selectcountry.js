import { CountryNames } from "../../assets/constants/places"

export const SelectCountry = () => {
    return (
        <div className="custom-select login-select">
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option value="">Select Country:</option>
            {CountryNames.map((country, i) => {
                return (
                    <option value={country.value} key={i}>{country.label}</option>
                )
            })}
        </select>
        </div>
    )
}