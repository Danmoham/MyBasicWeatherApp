export const ShowChanges = ({myStats, switchThePage}) =>{
    const tempChecker = {'-20' :'Coldest ever','-10': "dangerously cold",0 : "freezing!",10 : "relatively cold!",20 : "relatively pleasant!",30: "quite warm!",40 : "boiling hot", 50: "scorching!"}
    let myTempDescription = ""
    for (let key in tempChecker){
        if (Number(key) === (Math.round(myStats.myTemp/10) * 10)){
            myTempDescription = tempChecker[key]
        }
    }
    let newTime = ``
    let timeInHours= (myStats.myTime.slice(10,13))
    if (timeInHours > 11){
        newTime = `${myStats.myTime.slice(10)}pm`
    }else if (timeInHours > 9){
        newTime = `${timeInHours}:${myStats.myTime.slice(14)}am`
    }else{
        newTime = `${timeInHours}${myStats.myTime.slice(13)}am`
    }
    return (<div>
        <p className ="finalStats"id="city">The City you picked is {myStats.myLocation}.</p>
        <p className="finalStats" id="region">The Region this is in is {myStats.myRegion}.</p>
        <p className= "finalStats"id="country">The Country this is in is {myStats.myCountry}.</p>
        <p className= "finalStats" id="temp">This Cities temperature is currently at {myStats.myTemp}°C and is {myTempDescription}</p>
        <p className= "finalStats" id="time">The time in this City is {newTime}.</p>
        <div id="buttonDiv">
        <button onClick={() =>{
            switchThePage("insert")
        }} >Go back!</button>
        </div>
    </div>)
    }