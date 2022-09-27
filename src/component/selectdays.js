export const SelectDays = () => {
    
    const numbers = [];
    for(let i=1; i<=32; i ++){
        numbers.push(i)
    }

    return (
        <select className="form-select">
           {numbers.map((num, i) => {
            return <option key={i} value={num}>{num}</option>
           })}
        </select>
    )
}

export const SelectMonth = () => {
    const months = [
        "01- January",
        "02-February",
        "03-March",
        "04-April",
        "05-May",
        "06-June",
        "07-July",
        "08-August",
        "09-September",
        "10-October",
        "11-November",
        "12-December"
    ]

    return (
        <select className="form-select">
            <option value="">Month</option>
            {months.map((month, i) => {
                return (
                    <option value={month} key={i}>{month}</option>
                )
            })}
        </select>
    )
}

