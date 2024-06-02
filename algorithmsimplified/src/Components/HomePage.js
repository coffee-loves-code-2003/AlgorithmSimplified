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

	                        
						</div>
						
                    </div>
                </div>
            </section>

            <section class="features section">
                <div class="container">
					<div class="features-inner section-inner has-bottom-divider">
                        <div class="features-wrap">
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img1} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/Data%20Structures%20and%20Algorithms"> <h4 class="feature-title mt-24">Data Structures and Algorithms</h4></Link>
                                    <p class="text-sm mb-0">Core DSA Concepts including Linear and Non Linear data structures and optimized algorithms to solve them which includes Greedy Approach, Divide and Conquer, Sorting, Dynamic Programming etc..,Also covered intuitions and problem solving</p>
                                </div>
                            </div>
                            
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img2} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/Machine%20Learning"> <h4 class="feature-title mt-24">Machine Learning</h4></Link>                                    <p class="text-sm mb-0">Machine learning concepts including supervised, unsupervised, reinforcement learning and the terminalogies which includes both hard code and library implementations. Also included neural networks concepts</p>
                                </div>
                            </div>
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img3} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/Computer%20Networks"> <h4 class="feature-title mt-24">Computer Networks</h4></Link>                                    <p class="text-sm mb-0">Includes Core computer networks concepts which comprises of Networking, TCP/OSI model, terminalogies around them and posts which includes placement top questions that are asked frequently.</p>
                                </div>
                            </div>
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img4} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/DBMS"> <h4 class="feature-title mt-24">Database Management System</h4></Link>                                    <p class="text-sm mb-0">Includes both Relational and Non relational Databases concepts like normalization,query optimization, Schema Definition, DB Scaling and DDL, DML commands which also includes some optimized system design concepts.</p>
                                </div>
                            </div>
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img5} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/System%20Design"> <h4 class="feature-title mt-24">System Design</h4></Link>                                      <p class="text-sm mb-0">Covered most important aspects of System design which includes ER Diagram, Schema Diagram, Software Engineering terminalogies, Object oriented Design.</p>
                                </div>
                            </div>
                        <div class="feature text-center is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img src={img6} alt="Feature 01"/>
                                    </div>
                                    <Link to="/algorithms/Operating%20System"> <h4 class="feature-title mt-24">Operating System</h4></Link>                                      <p class="text-sm mb-0">Fundamentals of Computer Architecture, Operating Systems concepts like CPU Scheduling, Disk Scheduling which compraises of the core concepts of the roles of opearting systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           

			
        </main>
    </div>
        
</body>
    </div>
  );
}

export default HomePage;
