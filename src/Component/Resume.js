import React, { useEffect } from 'react'
import $ from "jquery";
import jQuery from "jquery";
import ReactTypingEffect from 'react-typing-effect';

export default function Resume() {

   useEffect(()=>{
      (function($, win) {
         $.fn.inViewport = function(cb) {
           return this.each(function(i,el){
             function visPx(){
               var H = $(this).height(),
                   r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
               return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
             } visPx();
             $(win).on("resize scroll", visPx);
           });
         };
       }(jQuery, window));
       
       // CSS transitions
       $(".progress-bar").inViewport(function(px){
         if(px){
            $(this).addClass("active-width");
            var getWidth = $(this).attr('aria-valuenow');
            $(this).css('width',getWidth+'%')
         } 
         else {
            $(this).removeClass("active-width");
            $(this).css('width',0+'%')
         }
       });

   },[])
  return (

   <React.Fragment>
    <hr></hr>
    <section id="resume" className="container section">
      <div className="row">
         <div className="col-md-10">
            <h2 id="resume_header" className="section__title"><ReactTypingEffect text={["Resume_"]}/></h2>
            <p className="section__description">
            Highly motivated and detail-oriented Frontend and Hubspot CMS Developer with 7 years of experience in delivering innovative and scalable web solutions. Adept at combining creative design with technical expertise to create engaging and user-friendly websites. Proficient in React JS, I have a strong ability to translate complex requirements into intuitive and interactive designs. Excellent problem-solving and communication skills, with a passion for staying ahead of the curve in an ever-evolving industry. Dedicated to producing top-notch results and exceeding expectations for clients.
            </p>
         </div>
      </div>
      <div className="row">
         <div className="col-md-8 section__resume resume-list">
            <h3 className="resume-list_title">education</h3>
            <div className="resume-list__block">
               <p className="resume-list__block-title">Indira gandhi national open university</p>
               <p className="resume-list__block-date">2014 - 2017</p>
               <p>
                  Bachelor of Arts
               </p>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-md-8 section__resume resume-list">
            <h3 className="resume-list_title">employment</h3>
            <div className="resume-list__block">
               <p className="resume-list__block-title">Colors dot prepress studio - Training</p>
               <p className="resume-list__block-date">2014</p>
               <p>Graphics design</p>
            </div>
            <div className="resume-list__block">
               <p className="resume-list__block-title">The Webplant Pvt LTD</p>
               <p className="resume-list__block-date">2015 - Persent</p>
               <p>Frontend and Hubspot CMS Developer (2015 - 2021)</p>
               <p>Team Lead - Hubspot CMS Developer (2021 - Persent) </p>
            </div>

         </div>
      </div>
      <div className="row section__resume progress-list js-progress-list">
         <div className="col-md-12">
            <h3 className="progress-list__title">general skills</h3>
         </div>
         <div className="col-md-5 mr-auto">
            <div className="progress-list__skill">
               <p>
                  <span className="progress-list__skill-title">html5</span>
                  <span className="progress-list__skill-value">90%</span>
               </p>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>
            <div className="progress-list__skill">
               <p>
                  <span className="progress-list__skill-title">css3</span>
                  <span className="progress-list__skill-value">90%</span>
               </p>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>
            <div className="progress-list__skill">
               <p>
                  <span className="progress-list__skill-title">java script</span>
                  <span className="progress-list__skill-value">80%</span>
               </p>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>
            <div className="progress-list__skill">
               <p>
                  <span className="progress-list__skill-title">jquery</span>
                  <span className="progress-list__skill-value">80%</span>
               </p>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>
            <div className="progress-list__skill">
               <p>
                  <span className="progress-list__skill-title">Figma</span>
                  <span className="progress-list__skill-value">50%</span>
               </p>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>
         </div>
         <div className="col-md-5 mr-auto">
            <div className="progress-list__skill">
               <p>
                  <span className="progress-list__skill-title">bootstrap 3</span>
                  <span className="progress-list__skill-value">80%</span>
               </p>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>
            <div className="progress-list__skill">
               <p>
                  <span className="progress-list__skill-title">react js</span>
                  <span className="progress-list__skill-value">60%</span>
               </p>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>
            <div className="progress-list__skill">
               <p>
                  <span className="progress-list__skill-title">git</span>
                  <span className="progress-list__skill-value">40%</span>
               </p>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>

            <div className="progress-list__skill">
               <p>
                  <span className="progress-list__skill-title">Hubspot CMS</span>
                  <span className="progress-list__skill-value">90%</span>
               </p>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>

            <div className="progress-list__skill">
               <p>
                  <span className="progress-list__skill-title">adobe photoshop</span>
                  <span className="progress-list__skill-value">70%</span>
               </p>
               <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>

            

         </div>
      </div>
     </section>
   </React.Fragment>
  )
}
