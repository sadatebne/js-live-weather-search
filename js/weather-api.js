const api_key ='fedece41b12e39c96b63ebbbb0848251'

const loadTemp=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    fetch(url)
    .then((res)=>res.json())
    .then (data=> tempData(data))
}

const tempData=data=>{
    //console.log(data)
    const getDataId= document.getElementById('temp-data')
    const cityNameId=document.getElementById('city-name')
    getDataId.innerText=`${data.main.temp}`
    cityNameId.innerHTML=`${data.name}`

    for(weather of data.weather){
        const getInfo= document.getElementById('temp-details')
        getInfo.innerHTML=`${weather.main}`
    }
    
}

document.getElementById('btn-search').addEventListener('click',function(){
    const getFieldId=document.getElementById('search-field')
    const getFieldValue=getFieldId.value

    loadTemp(getFieldValue)
    
})

loadTemp('dhaka')