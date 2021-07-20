

const Activity = () => {
    return (
        <>


            <div className="act-container">

                <div>
                    <h4>Activity</h4>
                </div>
                <div>
                    <button className="add-post">Start a post</button>
                </div>
            </div>

            <div className="act-section">
                <p>Posts you created, shared, or commented on in the last 90 days are displayed here</p>
                <button className="act-button">See all activity</button>
            </div>

        </>
    )
}

export default Activity