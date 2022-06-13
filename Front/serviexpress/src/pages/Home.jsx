import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPublications, swich_loading, getPublicationsByCategory} from "../redux/action"
// import {Link} from 'react-router-dom';
import CardPublications from "../components/CardPublications/CardPublications"
import Pagination from "../components/Pagination/Pagination";
import Loading from "../components/Loading/Loading.js"
import NavBar from '../components/NavBar/NavBar'
import ServicesBar from "../components/ServicesBar";
import './styles/Home.scss';

import Carousel from 'react-bootstrap/Carousel';
import stylesDetail from './styles/stylesDetail.module.scss';


// const currentServices = [1,2,3]
// const SwichL= false

export default function Home(){
    const dispatch = useDispatch();
    const allPublications = useSelector ((state)=>state.Publications);
    const SwichL = useSelector ((state)=>state.switchloading)
    console.log(SwichL)
    console.log(allPublications)
    const [CurrentPage, setCurrentPage] = useState(1);
    const [PublicationsPerPage, setPublicationsPerPage] = useState(12);
    const indexOfLastPublication = (CurrentPage *PublicationsPerPage);
    const indexOfFirstPublication = (indexOfLastPublication - PublicationsPerPage);
    const currentServices = allPublications.slice(indexOfFirstPublication,indexOfLastPublication);
    // const [order,setorder] = useState ("")
    // const [orderscore , setorderscore] = useState(1)
    // const servicescreate = [];
    const pagination = (pageNumber) => {setCurrentPage(pageNumber)}
    
        useEffect(() => {
           
            setTimeout(() => {
				dispatch(getPublications());
			}, 1000);
        }, [dispatch]);

        useEffect(()=>{
            setCurrentPage((pag)=> pag = 1)
        }, [allPublications])


function filterforCategory1(){dispatch(getPublicationsByCategory(1))}
function filterforCategory2(){dispatch(getPublicationsByCategory(2))}
function filterforCategory3(){dispatch(getPublicationsByCategory(3))}
function filterforCategory4(){dispatch(getPublicationsByCategory(4))}
function filterforCategory5(){dispatch(getPublicationsByCategory(5))}
function filterforCategory6(){dispatch(getPublicationsByCategory(6))}
function filterforCategory7(){dispatch(getPublicationsByCategory(7))}
function filterforCategory8(){dispatch(getPublicationsByCategory(8))}
function filterforCategory9(){dispatch(getPublicationsByCategory(9))}
function filterforCategory10(){dispatch(getPublicationsByCategory(10))}

        return(
            <div className="wphome">

            <NavBar>
                
            </NavBar>
            <div className="filterservice">

<p onClick={filterforCategory1}  className="filtername">Plumbing</p>
<p className="filtername">|</p>
<p onClick={filterforCategory2}  className="filtername">Carpentry</p>
<p className="filtername">|</p>
<p onClick={filterforCategory3}  className="filtername">Photography & Sound</p>
<p className="filtername">|</p>
<p onClick={filterforCategory4}  className="filtername">Computing and Information</p>
<p className="filtername">|</p>
<p onClick={filterforCategory5}  className="filtername">Graphics & Design</p>
<p className="filtername">|</p>
<p onClick={filterforCategory6}  className="filtername">Finance</p>
<p className="filtername">|</p>
<p onClick={filterforCategory7}  className="filtername">Digital Marketing</p>
<p className="filtername">|</p>
<p onClick={filterforCategory8}  className="filtername">Writing & Translation</p>
<p className="filtername">|</p>
<p onClick={filterforCategory9}  className="filtername">Video & Animation</p>
<p className="filtername">|</p>
<p onClick={filterforCategory10}  className="filtername">Electricity</p>
<p className="filtername">|</p>
<p className="filtername">Gas</p>

{/* <p className="filtername">Painter</p>
<p className="filtername">Digital-Marketing</p> */}
{/* <select>
                            <option key = 'All' value='0'>More...</option>
                            <option key = 'plumbing' value='1'>plumbing</option>
                            <option key = 'electricity' value='3'>electricity</option>
                            <option key = 'carpentgasry' value='2'>gas</option>
                            <option key = 'developers' value='4'>developers</option>
                            <option key = 'graphic & design' value='5'>graphic & design</option>
                            <option key = 'advocacy' value='6'>advocacy</option>
                            <option key = 'engineering' value='7'>engineering</option>
                            <option key = 'technical service' value='8'>technical service</option>
                            <option key = 'digital marketing' value='9'>digital marketing</option>
                            <option key = 'music & audio' value='10'>music & audio</option>
</select>  */}
</div>



                <div className='services-home'>
  
               

                
                { SwichL===true ||  allPublications.length===0 ? (
					
                    <Loading></Loading>
						
						
					
                    ) : (currentServices.map( e => {
                    
                    return(
                    <div>
                        <CardPublications  
                            id={e.id}
                            album = {e.album[0]}
                            title={e.title} 
                            summary={e.detail_resume}
                            // score={e.score} 
                            price={e.price}
                            // opinions= {e.opinions}
                            
                        />
                    </div>
                  
                    )}))

                }
            
                </div>
                <div className="pagination">
                <Pagination className ="pagination"
                            allpublicationsnumber={allPublications.length}
                            pagination = {pagination}
                            PublicationsPerPage = {PublicationsPerPage}
                                                    />
                </div>
                <div className="logos">
                
                  
                </div>

            
        
        </div>
    )

}


    


