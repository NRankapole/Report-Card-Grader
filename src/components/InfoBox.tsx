import "../styles/InfoBox.css"

function InfoBox() {
    return (
        <div id="infoBoxSection">
            <h3>Information box</h3>
            <div className="overflow-x-auto" id="infoBoxTable">
                <table className="table-xs">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Meaning</th>
                            <th>Mark Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="excellent"></th>
                            <td>Excellent</td>
                            <td>80%-100%</td>
                        </tr>
                        <tr>
                            <th className="good"></th>
                            <td>Good</td>
                            <td>70% - 79%</td>
                        </tr>
                        <tr>
                            <th className="moderate"></th>
                            <td>Moderate</td>
                            <td>60% - 69%</td>
                        </tr>
                        <tr>
                            <th className="belowAverage"></th>
                            <td>Below average</td>
                            <td>50% - 59%</td>
                        </tr>
                        <tr>
                            <th className="fail"></th>
                            <td>Fail</td>
                            <td>0% - 49%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InfoBox;