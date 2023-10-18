import { useState } from "react"
import {myData} from '../messingWithApi'
export const InsertMyData = ({ChangeStats,myStats,switchThePage}) =>{
    const [isCorrect,checkIfCorrect] = useState("")
    const [currentCity,setCurrentCity] = useState("")

    const changingCityPermanant = (event) =>{
        event.preventDefault()
      myData(currentCity).then((response) =>{
        if (response === "No matching location found."){
            checkIfCorrect("This is not correct please try again")
        }else{
            ChangeStats((stats) =>{
                switchThePage('information')
                return {...response}
            })
        }

      })
       
        
    }
    return (
        <div id= "mainDiv">
            <div id="openingLineDiv">
            <p>Please either enter the post code, the IP address or the name of the city you are looking to check. If there are multiple of cities across the world with this name, please type the country afterwards. E.G Skipton UK.</p>
            </div>
            <div id="styleDiv">
    <div id="formDiv">
    <form onSubmit={changingCityPermanant}>
        <div id="textInput">
        <label htmlFor="userInput">Please Enter your City/Town here</label>
        <input onChange={(event) =>{
            setCurrentCity(() =>{
                return event.target.value
            })
            checkIfCorrect("")
        }} type="text" value={currentCity} id="userInput"placeholder="Type your text here"></input>
        </div>
        <div id="buttonDiv">
        <button id="submitButton">Please submit here</button>
        </div>

    </form>
    </div>
    </div>
    <p id="myError">{isCorrect}</p>
    </div>)
    }