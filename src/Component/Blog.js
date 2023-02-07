import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import featured_image from '../Img/img_blog_1.png';

export default function Blog() {
  return (
    <section id="blog" className="container section">
   <div className="row">
      <div className="col-md-12">
         <h2 id="blog_header" className="section__title"><ReactTypingEffect text={["Latest Posts_"]}/></h2>
      </div>
   </div>
   <div className="row post-cards">
      <div className="col-md-4">
         <a href="blog.html">
            <div className="post-cards__card">
                  <p className="post-cards__date">October 22, 2017</p>
               <div className="post-cards__img">
                  <img src={featured_image} alt="blog_img" />
               </div>
               <div className="post-cards__info">
                  <h3 className="post-cards_title">Sample Post 1</h3>
                  <p className="post-cards_description">Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit, sed do eiusmod tempr incididunt...
                  </p>
               </div>
            </div>
         </a>
      </div>
      <div className="col-md-4">
         <a href="blog.html">
            <div className="post-cards__card">
               <div className="post-cards__img">
                  <img src={featured_image} alt="blog_img" />
               </div>
               <div className="post-cards__info">
                  <p className="post-cards__date">October 22, 2017</p>
                  <h3 className="post-cards_title">Sample Post 2</h3>
                  <p className="post-cards_description">Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit, sed do eiusmod tempr incididunt...
                  </p>
               </div>
            </div>
         </a>
      </div>
      <div className="col-md-4">
         <a href="blog.html">
            <div className="post-cards__card">
               <div className="post-cards__img">
                  <img src={featured_image} alt="blog_img" />
               </div>
               <div className="post-cards__info">
                  <p className="post-cards__date">October 22, 2017</p>
                  <h3 className="post-cards_title">Sample Post 3</h3>
                  <p className="post-cards_description">Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit, sed do eiusmod tempr incididunt...
                  </p>
               </div>
            </div>
         </a>
      </div>
   </div>
</section>
  )
}
