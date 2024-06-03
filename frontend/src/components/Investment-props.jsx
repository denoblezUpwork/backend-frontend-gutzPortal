import './style/Investments.css'

const InvestmentsDetails = ({ data }) => {
    return (
        <li className="user-items">
            <div className="client-details">
                <div className="title">
                    <h5>Clients Information</h5>
                </div>
                <div className="details">
                    <p><strong>ID: </strong>{ data._id}</p>
                    <p><strong>Full Name: </strong>{ data.fullName}</p>
                    <p><strong>Address: </strong>{ data.address}</p>
                </div>
            </div>
        </li>
    )
}

export default InvestmentsDetails