import React, { useEffect } from 'react'
import ProfilePic from '../Img/profile_pic_png.png'
import ReactTypingEffect from 'react-typing-effect';

export default function Banner(props) {
    return (
        <div className="main-header">
        <div className="container">
           <div className="row personal-profile">
              <div className="col-md-4 personal-profile__avatar">
                 <img className="" src={ProfilePic} alt={props.name} />
              </div>
              <div className="col-md-8">
                 <p className="personal-profile__name">{props.name}</p>
                 <p className="personal-profile__work mb0">{props.designation}</p>
                 <p className="personal-profile__work">Coding is <span className="typed-text"><ReactTypingEffect text={["hard", "fun", "a journey", "LIFE"]}/></span></p>


                 <div className="personal-profile__contacts">
                    <dl className="contact-list contact-list__opacity-titles">
                       <dt>Phone:</dt>
                       <dd><a href={'tel:'+props.phone}>{props.phone}</a></dd>
                       <dt>Email:</dt>
                       <dd><a href={'mailto:'+props.email}>{props.email}</a></dd>
                       <dt>Address:</dt>
                       <dd>{props.address}</dd>
                    </dl>
                 </div>
                 <p className="personal-profile__social">
                    <a href="https://github.com/iamsantoshpro" target="_blank"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/santosh-kumar-a47b08a3/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                    <a href="https://www.facebook.com/Skgbm/" target="_blank"><i className="fa fa-facebook-square"></i></a>
                 </p>
              </div>
           </div>
        </div>
     </div>
    )
  }