import React, { useEffect } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import ProjectCard from './ProjectCard';
import project from '../Img/project.png'
import $ from 'jquery'

export default function Portfolio() {
   useEffect(()=>{
      $('[data-portfolio-target-tag]').click(function(){
         var getTag = $(this).attr('data-portfolio-target-tag');
         $(`[data-portfolio-tag="${getTag}"]`).siblings().addClass('hidetag');
         $(`[data-portfolio-tag="${getTag}"]`).removeClass('hidetag');
         $(`[data-portfolio-tag="${getTag}"]`).addClass('activetag');
      });

      $('[data-portfolio-target-tag="all"]').click(function(){
         $(`.project-card`).removeClass('hidetag activetag');
      });


   },[])
  return (
    <section id="portfolio" className="container section">
   <div className="row">
      <div className="col-md-12">
         <h2 id="portfolio_header" className="section__title"><ReactTypingEffect text={["My projects_"]}/></h2>
      </div>
   </div>
   <div className="row portfolio-menu">
      <div className="col-md-12">
         <nav>
            <ul>
               <li><a href="javascript:void(0);" data-portfolio-target-tag="all">all</a></li>
               <li><a href="javascript:void(0);" data-portfolio-target-tag="mobileapp">mobile apps</a></li>
               <li><a href="javascript:void(0);" data-portfolio-target-tag="websites">web-sites</a></li>
               <li><a href="javascript:void(0);" data-portfolio-target-tag="landingpage">landing pages</a></li>
            </ul>
         </nav>
      </div>
   </div>
   <div className="portfolio-cards">
     
      <ProjectCard 
         id="1"
         category="websites"
         img={project} 
         title="Website for Sweets and Catters"
         description="Caters and Sweets is an online gourmet marketplace that offers a tempting array of delightful treats for every sweet tooth. From artisanal chocolates and candies to baked goods and specialty desserts, we have something for everyone. Our carefully curated selection features unique and delectable sweets from local and international confectioners, ensuring a high-quality taste experience. Our website is easy to navigate and provides detailed descriptions of each product, including ingredients, flavor profiles, and any dietary restrictions. Whether you're planning a special event or just looking for a sweet treat, Caters and Sweets is the perfect place to satisfy your cravings. Indulge in a world of sugary delights and order your sweets today!"
         website="thesbscgroup.com"
         UsedStack={["HTML","CSS","jQuery","JavaScript","PHP","PhotoShop","Bootstrap"]}
         />

      <ProjectCard 
         id="2"
         category="mobileapp"
         img={project} 
         title="Sample Mobile App"
         description="Caters and Sweets is an online gourmet marketplace that offers a tempting array of delightful treats for every sweet tooth. From artisanal chocolates and candies to baked goods and specialty desserts, we have something for everyone. Our carefully curated selection features unique and delectable sweets from local and international confectioners, ensuring a high-quality taste experience. Our website is easy to navigate and provides detailed descriptions of each product, including ingredients, flavor profiles, and any dietary restrictions. Whether you're planning a special event or just looking for a sweet treat, Caters and Sweets is the perfect place to satisfy your cravings. Indulge in a world of sugary delights and order your sweets today!"
         website="thesbscgroup.com"
         UsedStack={["HTML","CSS","jQuery","JavaScript","PHP","PhotoShop"]}
         />
   
      <ProjectCard 
         id="3"
         category="landingpage"
         img={project} 
         title="Sample Landing Page"
         description="Caters and Sweets is an online gourmet marketplace that offers a tempting array of delightful treats for every sweet tooth. From artisanal chocolates and candies to baked goods and specialty desserts, we have something for everyone. Our carefully curated selection features unique and delectable sweets from local and international confectioners, ensuring a high-quality taste experience. Our website is easy to navigate and provides detailed descriptions of each product, including ingredients, flavor profiles, and any dietary restrictions. Whether you're planning a special event or just looking for a sweet treat, Caters and Sweets is the perfect place to satisfy your cravings. Indulge in a world of sugary delights and order your sweets today!"
         website="thesbscgroup.com"
         UsedStack={["HTML","CSS","jQuery","JavaScript","PHP","PhotoShop"]}
         />

   </div>
</section>
  )
}
