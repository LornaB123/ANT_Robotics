function Team(props) {
    const { team } = props

    return (
        <div className="team">
            <h2>Team</h2>
            <div className="team__grid">
                {
                    team.map(t => (
                        <div className="team__card">
                            <div className="team__image">
                                <img src={ t.link } alt="member image"/>
                            </div>
                            <div className="team__body">
                                <p className="team__title">{ t.title }</p>
                                <p className="team__subtitle">{ t.subtitle }</p>
                                <p className="team__text">{ t.text }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team