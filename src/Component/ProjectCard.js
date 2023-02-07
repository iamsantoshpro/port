import React, { useEffect } from 'react'
import PortfolioModal from './PortfolioModal'
import $ from 'jquery'

export default function ProjectCard(props) {
    useEffect(()=>{
        $('.project-card').click(function(){
            var getModalId = $(this).attr('data-target');
            $(`#${getModalId}`).addClass('modalActive');
            $('body').addClass('hideScroll');
        });

        $('.modal-header .close,.portfolio-modal').click(function(){
            $(`.portfolio-modal`).removeClass('modalActive');
            $('body').removeClass('hideScroll');
        });

        $('.modal-dialog').click(function(e){
            e.stopPropagation();
        });

    },[])
  return (
    <React.Fragment>
        <div className="row project-card" data-toggle="modal" data-target={props.id} data-portfolio-tag={props.category}>
         <div className="col-md-6 col-lg-5 project-card__img">
            <img className="" src={props.img} alt={props.title} />
         </div>
         <div className="col-md-6 col-lg-7 project-card__info">
            <h3 className="project-card__title">{props.title}</h3>
            <p className="project-card__description">{props.description} </p>
            <p className="project-card__stack">Used stack:</p>
            <ul className="tags">
                {
                    props.UsedStack.map((item)=>
                        <li>{item}</li>
                    )
                }
            </ul>
            <a href={props.website} className="project-card__link">{props.website}</a>
         </div>
      </div>
        <PortfolioModal 
            modalId={props.id}
            modalImg={props.img}
            modalTitle={props.title}
            modalDescription={props.description}
            modalTag={props.UsedStack}
            modalWebsite={props.website}
        />
    </React.Fragment>
  )
}
