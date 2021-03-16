import customer from '../images/customer1.png'

function CustomerBenefit(props) {
    const { customerBenefits } = props

    return (
        <div className="customer">
            <h2>Customers benefit despite of the automation level</h2>
            <div className="customer__grid">
                {
                    customerBenefits.map((benefit, i) => (
                        <div className="customer__card" key={i}>
                            <img src={ benefit.link } alt=""/>
                            <p className="customer__title">{ benefit.title }</p>
                            <p className="customer__subtitle">
                                {
                                    benefit.subtitle.map(sub => {
                                       return Object.keys(sub).map((key,k) => {
                                            return key === "highlight" ? sub[key] : <span key={''+i+k}>{sub[key]}</span>
                                        })
                                    })
                                }
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomerBenefit