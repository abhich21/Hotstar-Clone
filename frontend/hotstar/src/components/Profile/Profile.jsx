import "./profile.css"

export function Profile (){
    let user = JSON.parse(localStorage.getItem('user'))
    return (
        <>
            <div className="containerdiv">
                <div className="topdiv">
                    <div>
                        <h1>Profile</h1>
                        <img className="user-img" src={user.picture ? user.picture : "https://via.placeholder.com/100x100"} alt="" />
                        <h1 className="user-name">{user.name}</h1>
                        <h2 className="user-mob">{user.email}</h2>
                    </div>
                </div>
                <div className="bottomdiv">
                    <div>
                        Disney+ Hotstar Mobile for ₹ 499/year 
                        Valid till: 27 Mar 2023</div>
                    <div>UPGRADE PLAN</div>
                    <div>View Transactions</div>
                    <div>Account Settings</div>
                    <div>Manage Devices</div>
                    <div>Log Out All Devices</div>
                </div>
            </div>
        </>
    )
}






