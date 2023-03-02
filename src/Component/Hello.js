import React from 'react'
import DownloadIcon from '../Img/img_btn_icon.png'
import ReactTypingEffect from 'react-typing-effect';
import cv from './updated_CV.pdf'


export default function Hello() {
  return (
    <section id="hello" className="container section">
   <div className="row">
      <div className="col-md-10">
         <h2 id="hello_header" className="section__title"><ReactTypingEffect text={["Hi_"]}/></h2>
         <p className="section__description">
         As a seasoned front-end developer and Hubspot CMS specialist with 7 years of experience, I bring a unique blend of technical and creative skills to the table. My expertise in creating visually appealing and intuitive user interfaces, combined with my passion for design, has enabled me to deliver exceptional results for my clients. In addition to my front-end development skills, I am also well-versed in React JS and have intermediate-level experience in this cutting-edge technology. Whether I'm working on complex integrations or custom theme designs, I am dedicated to finding the best solutions for my clients. With a track record of delivering high-quality results, I am confident in my ability to exceed your expectations and bring your vision to life.
         </p>
         <a href={cv} download target="_blank" className="section_btn site-btn" rel="noreferrer"><img src={DownloadIcon} alt="Download Icon"/>Download CV</a>
      </div>
   </div>
</section>
  )
}
