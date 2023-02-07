import React from 'react'
import $ from "jquery";
import { useEffect } from 'react';


export default function Header() {

    useEffect(()=>{
       
        //Anchors
            $(function(){
                $('a[href^="#"]').click(function(){
                    var target = $(this).attr('href');
                    $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);
                    return false;
                });
            });

            //Fixed-top menu
            function fixedHeader() {
                var ww = $(window).scrollTop();
                if(ww > 0){
                    $('.menu').addClass('menu--active');
                    $('.mobile-menu').addClass('mobile-menu--active');
                }else{
                    $('.menu').removeClass('menu--active');
                    $('.mobile-menu').removeClass('mobile-menu--active');
                }
            }
            fixedHeader();
            $(window).on('scroll', function () {
                fixedHeader();
            });

            //Open mobile menu
                $('.menu__mobile-button .fa-bars').on('click', function () {
                    $('.mobile-menu').addClass('active');
                });

                //Close mobile menu after click
                $('.mobile-menu__close .fa-close').on('click', function () {
                    $('.mobile-menu').removeClass('active');
                });
    },[])


   

  return (
    <header>
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="menu__wrapper d-none d-lg-block col-md-12">
                        <nav className="">
                        <ul>
                            <li><a href="#hello">Hello</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#testimonials">testimonials</a></li>
                            <li><a href="#blog">blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        </nav>
                    </div>
                    <div className="menu__wrapper col-md-12 d-lg-none">
                        <button type="button" className="menu__mobile-button">
                        <span><i className="fa fa-bars" aria-hidden="true"></i></span>
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div className="mobile-menu d-lg-none">
                <div className="container">
                    <div className="mobile-menu__close">
                        <span><i className="fa fa-close" aria-hidden="true"></i></span>
                    </div>
                    <nav className="mobile-menu__wrapper">
                        <ul>
                            <li><a href="#hello">Hello</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#testimonials">testimonials</a></li>
                            <li><a href="#blog">blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
</div>
    </header>
  )
}
