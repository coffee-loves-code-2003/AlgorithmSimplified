import React from 'react';
import '../dist/css/style.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import img1 from '../dist/images/dsa.svg'
import img2 from '../dist/images/ml.svg'
import img3 from '../dist/images/cn.svg'
import img4 from '../dist/images/db.svg'
import img5 from '../dist/images/sys.svg'
import img6 from '../dist/images/os.svg'
import logo from '../dist/images/logo_algo.svg'
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div>
  <body class="is-boxed has-animations">
    <div class="body-wrap">
   
            
                
                
                
            

        <main>
            <section class="hero">
            
                <div class="container">
                    <div class="hero-inner">
						<div class="hero-copy">
                        <AnimatedOnScroll animationIn="fadeIn">
                    <h1 class="hero-title mt-5" style={{fontSize:"40px"}}>Algorithm Simplified</h1>
	                        <p class="hero-paragraph mt-3">Open Source blogging site particularly focused on Algorithms revolving around Computer Science</p>
	                        <div class="w-full h-40 flex items-center justify-center cursor-pointer">
  <div
    class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
  >
    <span
      class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"
    ></span>
    <span
      class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        class="w-5 h-5 text-green-400"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        class="w-5 h-5 text-green-400"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
      >Get Started</span>
  </div>
</div>

                </AnimatedOnScroll>
	                        
						</div>
						
                    </div>
                </div>
            </section>

            <section class="features section">
                <div class="container">
					<div class="features-inner section-inner has-bottom-divider">
                        <div class="features-wrap">
                        <AnimatedOnScroll animationIn="bounceInLeft">
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img1} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/Data%20Structures%20and%20Algorithms"> <h4 class="feature-title mt-24">Data Structures and Algorithms</h4></Link>
                                    <p class="text-sm mb-0">Core DSA Concepts including Linear and Non Linear data structures and optimized algorithms to solve them which includes Greedy Approach, Divide and Conquer, Sorting, Dynamic Programming etc..,Also covered intuitions and problem solving</p>
                                </div>
                            </div>
                </AnimatedOnScroll>
                            
                <AnimatedOnScroll animationIn="fadeInDownBig">
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img2} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/Machine%20Learning"> <h4 class="feature-title mt-24">Machine Learning</h4></Link>                                    <p class="text-sm mb-0">Machine learning concepts including supervised, unsupervised, reinforcement learning and the terminalogies which includes both hard code and library implementations. Also included neural networks concepts</p>
                                </div>
                            </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="bounceInRight">
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img3} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/Computer%20Networks"> <h4 class="feature-title mt-24">Computer Networks</h4></Link>                                    <p class="text-sm mb-0">Includes Core computer networks concepts which comprises of Networking, TCP/OSI model, terminalogies around them and posts which includes placement top questions that are asked frequently.</p>
                                </div>
                            </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="bounceInLeft">
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img4} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/DBMS"> <h4 class="feature-title mt-24">Database Management System</h4></Link>                                    <p class="text-sm mb-0">Includes both Relational and Non relational Databases concepts like normalization,query optimization, Schema Definition, DB Scaling and DDL, DML commands which also includes some optimized system design concepts.</p>
                                </div>
                            </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="fadeInDownBig">
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img5} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/System%20Design"> <h4 class="feature-title mt-24">System Design</h4></Link>                                      <p class="text-sm mb-0">Covered most important aspects of System design which includes ER Diagram, Schema Diagram, Software Engineering terminalogies, Object oriented Design.</p>
                                </div>
                            </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="bounceInRight">
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img6} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/Operating%20System"> <h4 class="feature-title mt-24">Operating System</h4></Link>                                      <p class="text-sm mb-0">Fundamentals of Computer Architecture, Operating Systems concepts like CPU Scheduling, Disk Scheduling which compraises of the core concepts of the roles of opearting systems.</p>
                                </div>
                            </div>
                </AnimatedOnScroll>
                        </div>
                    </div>
                </div>
            </section>

           

			
        </main>

        <footer class="site-footer">
            <div class="container">
                <div class="site-footer-inner">
                    <div class="brand footer-brand">
						<a href="#">
							<img class="header-logo-image" src={logo} alt="Logo"/>
						</a>
                    </div>
                    <ul class="footer-links list-reset">
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">FAQ's</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                    <ul class="footer-social-links list-reset">
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Facebook</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#0270D7"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Twitter</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#0270D7"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Google</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#0270D7"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div class="footer-copyright">&copy; 2024 Algorithm Simplified, All rights reserved </div>
                </div>
            </div>
        </footer>
    </div>
        
</body>
    </div>
  );
}

export default HomePage;
