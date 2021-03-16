function Benefits() {
    return (
      <div className="benefits">
          <h2 className="benefits__title"> Benefits </h2>
        <div className="benefits__column-1">
            <img className="benefits__image" alt="img" src="../images/benefits__img-1"></img>
            <div className="benefits__column-title">Top-Notch Technology</div>
            <div className="benefits__column-subtitle">Once you transform your indoor logistics, we'll keep it up-to-date.</div>
        </div>
        <div className="benefits__column-2">
            <img className="benefits__image" alt="img" src="/images/benefits__img-2"></img>
            <div className="benefits__column-title">Up-To-Date Software</div>
            <div className="benefits__column-subtitle">You always get immediate software updates including new features and algorithms in background.</div>
            </div>
        <div className="benefits__column-3">
            <img className="benefits__image" alt="img" src="/images/benefits__img-3"></img>
            <div className="benefits__column-title">Seamless Fleet Upgrade</div>
            <div className="benefits__column-subtitle">No need to stop the production to upgrade, extend, or replace the fleet. No hassle needed for the new units to get to work.</div>
        </div>
        <div className="benefits__column-4">
            <img className="benefits__image" alt="img" src="/images/benefits__img-4"></img>
            <div className="benefits__column-title">Incompatible Robots Team-Up</div>
            <div className="benefits__column-subtitle">Robots produced by tens of different vendors can collaborate in the same workspace.</div>
        </div>
      </div>
    );
}

export default Benefits;