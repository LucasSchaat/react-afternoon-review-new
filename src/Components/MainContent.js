import React from 'react'
import '../App.css'

function MainContent(props) {
    let {data, index, handlePrevious, handleNext} = props
    return(
        <div className='mainContent'>
            <div className='details'>
                <div className='tracker'>{`${data[index].id}/25`}</div>
                <div className='fullName'>{`${data[index].name.first} ${data[index].name.last}`}</div>
                <div className='description'>
                    <div className='personDescription'>
                        <div>From:</div>
                        <div  className='genericLabel'>{`${data[index].city}, ${data[index].country}`}</div>
                    </div>
                    <div className='personDescription'>
                        <div>Job Title:</div>
                        <div  className='genericLabel'>{data[index].title}</div>
                    </div>
                    <div className='personDescription'>
                        <div>Employer:</div>
                        <div  className='genericLabel'>{data[index].employer}</div>
                    </div>    
                </div>
                <div className='favMovies'>
                    <div className='personDescription'>Favorite Movies:</div>
                        <ol className='movieList'>
                            <li className='movieStyle'>{data[index].favoriteMovies[0]}</li>
                            <li className='movieStyle'>{data[index].favoriteMovies[1]}</li>
                            <li className='movieStyle'>{data[index].favoriteMovies[2]}</li>
                        </ol>
                </div>
            </div>
            <div className='buttonsContainer'>
                <div>
                    <button className='noColorButtons' onClick={handlePrevious}>{`< Previous`}</button>
                </div>
                <div className='buttonsGroup'>
                    <button className='colorButtons'>
                        Edit
                    </button>
                    <button className='colorButtons'>
                        Delete
                        </button>
                    <button className='colorButtons'>New</button>
                </div>
                <div>
                    <button className='noColorButtons' onClick={handleNext}>{`Next >`}</button>
                </div>
            </div>
        </div>
    )
}

export default MainContent