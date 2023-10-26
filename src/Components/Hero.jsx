import React, { useState } from 'react'
import "./hero.css"
import {BiSearchAlt2} from "react-icons/bi"
import Card from './Card'
import axios from 'axios';
import Modal from './Modal';



const Hero = () => {
    const [search, setSearch] = useState("")
    const [bookData, setBookdata]= useState([])

    const searchBook = (e)=> {
        if(e.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAajTj0FvJgWnEch9bku7jNdfRPl4Opk_g'+'&maxResults=40' )
            .then((res)=> setBookdata(res.data.items))
            .then((err)=> console.log(err))
        }

        
    }


  return (
    <div>
        <div className="header">
            <div className="row1">
                <h1>A Room without Books is like a <br /> a body without Soul  </h1>
            </div>
            <div className="row2">
                <h2>Find Your Book</h2>
                <div className="search">
                    <input type="text" value={search}
                     onChange={(e)=> setSearch(e.target.value)} placeholder='Search Your Book'
                     onKeyPress={searchBook}  />
                    <button><BiSearchAlt2 size={28}
                     className='search_icon'
                      /> </button>
                </div>
                <img src="src/assets/bg2.png" alt="bg2" />
            </div>
        </div>

         <div className="container">
            {

                <Card book={bookData} />
                
            }
                
        </div>  
    </div>
  )
}

export default Hero