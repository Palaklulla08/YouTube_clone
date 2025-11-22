import React from 'react';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import HomePage from '../../components/homepage/HomePage';

function Home({sideNavbar}){
    return(
        <>
        <SideNavbar sideNavbar={sideNavbar}/>
        <HomePage sideNavbar={sideNavbar} />
        </>
    )

}
export default Home;