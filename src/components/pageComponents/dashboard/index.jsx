import React from "react";
import NewSidebar from "../../themeComponents/sidebar/NewSidebar";
// import Header from "../../themeComponents/header";
// import Container from "../../themeComponents/container"
import "./dashboard.scss"

const Dashboard = () => {
    
    return(
        <div className="dashboard"> 
            <NewSidebar/>
            {/* <Header/> */}
            {/* <Container/> */}
        </div>
    )
}

export default Dashboard;