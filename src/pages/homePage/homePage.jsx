import React from "react";
import './homePage.css';
import{Information} from "../../widgets/information/Information";
import{Header} from "../../widgets/header/Header";
import {Contacts} from "../../widgets/contacts/Contacts";
import {Portfolio} from "../../widgets/portfolio/Portfolio";
import { RightPanel } from "../../widgets/rightPanel/RightPanel";
import { WorkHistory } from "../../widgets/workHistory/WorkHistory";
import {Footer} from "../../widgets/footer/Footer";
import { WORK, EDUCATION } from "../../constants/workHistory";


export const HomePage = () =>   {
  return <div className="container">
    <Information/>
    <div className="inner">
     <Header/>
     <WorkHistory name="education" data={EDUCATION}/>
     <WorkHistory name="work" data={WORK}/>
     <Portfolio/>
     <Contacts/>
     <Footer/>
    </div>
    <RightPanel/>
  </div>;
}


