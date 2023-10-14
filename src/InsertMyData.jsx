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
        <div>
            <p>Just type in the City you want the Temperature from and watch the magic unfold</p>
    <form onSubmit={changingCityPermanant}>
        <label htmlFor="userInput">Please Enter your City/Town here</label>
        <input onChange={(event) =>{
            setCurrentCity(() =>{
                return event.target.value
            })
        } } id="userInput"placeholder="Type your text here"></input>
        <button>Please submit here</button>

    </form>
    <p id="myError">{isCorrect}</p>
    </div>)
    }