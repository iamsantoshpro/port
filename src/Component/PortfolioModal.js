import React from 'react'

export default function PortfolioModal(props) {
  return (
    <div className="modal fade portfolio-modal" id={props.modalId}>
   <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
         <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button>
         </div>
         <div className="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
            <p className="portfolio-modal__title">{props.modalTitle}</p>
            <img className="portfolio-modal__img" src={props.modalImg} alt={props.modalTitle} />
            <p className="portfolio-modal__description">{props.modalDescription}</p>
            <div className="portfolio-modal__link">
               <a href={props.modalWebsite}>{props.modalWebsite}</a>
            </div>
            <div className="portfolio-modal__stack">
               <p className="portfolio-modal__stack-title">Using stack:</p>
               <ul className="tags">
               {
                    props.modalTag.map((item)=>
                        <li>{item}</li>
                    )
                }
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}
