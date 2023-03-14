import React, { useEffect, useState } from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"

const Cards = ({ movie }) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return <>
        {
            isLoading
                ?
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
                :
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <div>
                        {/* <div className="circle-wrapper circle">
                            <div className="circle first" />
                            <div className="circle second" />
                            <div className="circle third" />
                            <div className="circle fourth" />
                            <div className="circle fifth" />
                            <div className="circle sixth" /> 
                        </div>  */}
                        <ul className="cards">
                            <li>
                                <a href="" className="card ">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
                                        className="card__image"
                                        alt=""
                                    />
                                    <div className="card__overlay glass-panel">
                                        <div className="">
                                            <div className="card__header-text">
                                                <h3 className="card__title">{movie ? movie.original_title : ""}</h3>
                                                    <span className="card__status">{movie ? movie.release_date : ""}</span>
                                                    <span className="card__rating px-2"><i className="star"><FaStar /></i>{movie ? movie.vote_average : ""}</span>
                                            </div>
                                        </div>
                                        <p classname="card__description  " contentEditable role="textbox" aria-multiline="true">    

                                            {movie ? movie.overview.slice(0, 118) + "..." : ""}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Link>

        }
    </>

}

export default Cards