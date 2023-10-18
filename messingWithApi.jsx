import axios from 'axios'
export function myData (userInput){

return axios({
    method: 'get',
    url : `https://api.weatherapi.com/v1/current.json?key=966d38a1a26e442b9a3155919231410&q=${userInput}}&aqi=no`
  }).then(({data}) => {
    const myLocation = data.location.name
    const myCountry = data.location.country
    const myTime = data.location.localtime
    const temp = data.current.temp_c
    const myRegion = data.location.region
    return ({
      myLocation : myLocation,
      myCountry : myCountry,
      myRegion : myRegion,
      myTime : myTime,
      myTemp : Number(temp)
    })
  })
  .catch(({response}) =>{
    return(response.data.error.message)
  })
}
