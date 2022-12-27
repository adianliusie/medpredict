import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import OutlineBlueButton from '../components/outline-blue-button'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Soft UI Pro</title>
        <meta property="og:title" content="Profile - Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="profiles-box">
        <div className="profile-profile">
          <img
            alt="image"
            src="/playground_assets/team-shirom.jpg"
            className="profile-image"
          />
          <div className="profile-container01">
            <div className="profile-container02">
              <h4 className="profile-text">Shirom Chabra</h4>
              <OutlineBlueButton button="follow"></OutlineBlueButton>
            </div>
            <span className="medium">
            Shirom Chabra is a clinician-scientist and the CEO of MedPredict. 
            He is a 3rd yead medical PhD student at the University of Cambridge researching genetics.
            He has previous experience in MedTech prior to MedPredict, where his start-up addressing aortic valve replacement won a national competition and secured NIHR funding in 2019. 
            </span>
          </div>
        </div>
        <div className="profile-profile">
          <img
            alt="image"
            src="/playground_assets/team-vatsal.jpg"
            className="profile-image"
          />
          <div className="profile-container01">
            <div className="profile-container02">
              <h4 className="profile-text">Vatsal Raina</h4>
              <OutlineBlueButton button="follow"></OutlineBlueButton>
            </div>
            <span className="medium">
            Vatsal Raina is a 3rd year PhD student in the Machine Intelligence Laboratory at the University of Cambrdige.
            He has experience in being the lead technology developer and the AI specialist at the digital health startup Mitara, which offers scientifically motivated nutrition plans.
            He additionally has experience working for Meta (previously Facebook) where he researched large scale feature embeddings. 
            </span>
          </div>
        </div>
        <div className="profile-profile">
          <img
            alt="image"
            src="/playground_assets/team-andy.jpg"
            className="profile-image"
          />
          <div className="profile-container01">
            <div className="profile-container02">
              <h4 className="profile-text">Andrew Zhou</h4>
              <OutlineBlueButton button="follow"></OutlineBlueButton>
            </div>
            <span className="medium">
            Dr Andrew Kailin Zhou graduated from the University of Cambridge and is currently a junior doctor at the Watford General Hospital.
            Andrew has experience in leading a digital health startup into multiple notable accelerators (Panacea Stars and Harvard Innovation Labs) 
            where the start-up secured a trial at Harley Street Plastic Surgery Clinic.
            </span>
          </div>
        </div>
        <div className="profile-profile">
          <img
            alt="image"
            src="/playground_assets/team-vyas.jpg"
            className="profile-image"
          />
          <div className="profile-container01">
            <div className="profile-container02">
              <h4 className="profile-text">Vyas Raina</h4>
              <OutlineBlueButton button="follow"></OutlineBlueButton>
            </div>
            <span className="medium">
            Vyas Raina is a 3rd year PhD student in the Machine Intelligence Laboratory at the Univerity of Cambridge.
            He has multiple publications in top-tier ML conferences (NAACL, NeurIPS) and has experience working for 
            market leaders as a machine learning researcher (PWC, Schonfeld, Yandex). 
            </span>
          </div>
        </div>
        <div className="profile-profile">
          <img
            alt="image"
            src="/playground_assets/team-adian.jpg"
            className="profile-image"
          />
          <div className="profile-container01">
            <div className="profile-container02">
              <h4 className="profile-text">Adian Liusie</h4>
              <OutlineBlueButton button="follow"></OutlineBlueButton>
            </div>
            <span className="medium">
              Adian Liusie is a 3th year PhD student, also at Machine Intelligence Laboratory at the University of Cambridge.
              He has experience doing tech development for rapidly growing start ups (Sensor Coating Systems, Alchemy Machines).
            </span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profile
