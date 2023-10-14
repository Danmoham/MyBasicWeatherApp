import { useState } from 'react'
import {InsertMyData} from './InsertMyData'
import { ShowChanges } from './ShowChanges'

export const MainSection = () =>{
    const [myStats,ChangeStats] =  useState({myLocation : "myLocation",
    myCountry : "",
    myRegion : "",
    myTime : "",
    myTemp : 0})
    const [switcher,switchThePage] = useState('insert')

return  (switcher ==="insert"?(
    <div>
        <InsertMyData ChangeStats = {ChangeStats} myStats={myStats} switchThePage={switchThePage} switcher={switcher}/>
        </div>
):
        <div>
        <ShowChanges myStats={myStats} switchThePage ={switchThePage} switcher={switcher}/>
    </div>

)
    }