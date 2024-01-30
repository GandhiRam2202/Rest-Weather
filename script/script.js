
function getAllDetails() {
    const url = "https://restcountries.com/v2/all";

    fetch(url)
        .then(res => res.json())
        .then(response => {
            response.forEach(country => {
                let count = country.name || 'No Data'
                let countcapital = country.capital || 'No Data'
                let reg = country.region || 'No Data'
                let coutCode = country.alpha3Code || 'No Data'
                let latlng = country.latlng || 'No Data'



                const contBox = document.createElement('div')
                contBox.setAttribute('class', 'col-sm-6 col-md-4 col-lg-4 col-xl-4')
                row1.append(contBox)



                const card = document.createElement('div')
                card.setAttribute('class', 'card h-100 rounded-5 p-0')
                contBox.append(card)


                const cardHead = document.createElement('div')
                cardHead.setAttribute('class', 'card-header text-center rounded-top-5 p-0')
                cardHead.innerText = `${count}`
                card.append(cardHead)


                const cardBody = document.createElement('div')
                cardBody.setAttribute('class', 'card-body')
                card.append(cardBody)


                const cardFlag = document.createElement('img')
                cardFlag.setAttribute('class', 'card-img-top')
                cardFlag.setAttribute('src', `${country.flags.png}`)
                cardBody.append(cardFlag)


                const cardDetails = document.createElement('div')
                cardDetails.setAttribute('class', 'card-text')
                cardBody.append(cardDetails)

                const countCap = document.createElement('div')
                countCap.innerText = `Capital : ${countcapital}`
                cardDetails.append(countCap)

                const countReg = document.createElement('div')
                countReg.innerText = `Region : ${reg}`
                cardDetails.append(countReg)

                const countCode = document.createElement('div')
                countCode.innerText = `Country Code : ${coutCode || 'No Data'}`
                cardDetails.append(countCode)


                const countlat = document.createElement('div')
                countlat.setAttribute('class', '')
                countlat.innerText = `LATNG : ${latlng}`
                cardDetails.append(countlat)



                const divBtn = document.createElement('div')
                divBtn.setAttribute('class', 'row')
                cardBody.append(divBtn)


                const weaBtn = document.createElement('button')
                divBtn.append(weaBtn);
                weaBtn.innerText = 'Check Weather'

                const weather = document.createElement('div')
                weather.setAttribute('class', 'weatherBody')

                const temp = document.createElement('div')
                weather.append(temp)
                const humi = document.createElement('div')
                weather.append(humi)
                const pressure = document.createElement('div')
                weather.append(pressure)
                const speed = document.createElement('div')
                weather.append(speed)
                const cloud = document.createElement('div')
                weather.append(cloud)
                const sunrise = document.createElement('div')
                weather.append(sunrise)
                const sunset = document.createElement('div')
                weather.append(sunset)



                const backBtnRow = document.createElement('div')
                backBtnRow.setAttribute('class', 'column')


                const backBtn = document.createElement('button')
                backBtn.innerText = 'Back'
                backBtnRow.append(backBtn)

                const more = document.createElement('button')
                more.innerText = 'More'
                backBtnRow.append(more)

                const det = document.createElement('div')
                det.setAttribute('class','det text-center')

                const row2 = document.createElement('div')
                det.append(row2)

                const subReg = document.createElement('div')
                subReg.innerText = `SubRegion :${country.subregion}`
                row2.append(subReg)
                const population = document.createElement('div')
                population.innerText = `Population :${country.population}`
                row2.append(population)
                const time = document.createElement('div')
                time.innerText = `Time Zone :${country.timezones}`
                row2.append(time)
                const area = document.createElement('div')
                area.innerText = `Area :${country.area}`
                row2.append(area)
                const callingCode = document.createElement('div')
                callingCode.innerText = `Calling Code :+${country.callingCodes}`
                row2.append(callingCode)
                const ind = document.createElement('div')
                ind.innerText = `Independent :${country.independent===true?'YES':'NO'}`
                row2.append(ind)


                const back = document.createElement('button')
                back.innerText = 'BACK'
                row2.append(back)

                const home = document.createElement('button')
                home.innerText = 'HOME'
                row2.append(home)

                
                home.addEventListener('click',function(){
                    card.removeChild(det)
                    card.append(cardBody)
                })
                
                back.addEventListener('click',function(){
                    card.removeChild(det)
                    card.append(weather)
                })
                
                
                
                
                more.addEventListener('click', function () {
                    card.removeChild(weather)
                    card.append(det)

                })


                backBtn.addEventListener('click', function () {
                    card.removeChild(weather)
                    card.append(cardBody)

                })

                weaBtn.addEventListener('click', function () {
                    function getAllDetails() {
                        let cap = country.capital
                        if (cap !== undefined) {
                            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cap}&appid=e24d18a4db08c6e0606eeaa49d24069a&units=metric`;
                            fetch(url)
                                .then(res => res.json())
                                .then((response) => {
                                    if (response.cod === 200) {

                                        temp.innerHTML = `Temperature : ${response.main.temp || 'No Records'} &degC`
                                        humi.innerText = `Humidity : ${response.main.humidity || 'No Records'} %`
                                        pressure.innerText = `Pressure : ${response.main.pressure || 'No Records'} mb`
                                        cloud.innerText = `Clouds : ${response.weather[0].main || 'No Records'}`
                                        speed.innerText = `Wind Speed : ${response.wind.speed || 'No Records'} km/h`
                                        sunrise.innerText = `Sunrise : ${response.sys.sunrise || 'No Records'}`
                                        sunset.innerText = `Sunset : ${response.sys.sunset || 'No Records'}`
                                        weather.append(backBtnRow)
                                    }
                                    else {
                                        temp.innerText = 'Temperature : No Records'
                                        humi.innerText = 'Humidity : No Records'
                                        pressure.innerText = 'Pressure : No Records'
                                        cloud.innerText = 'Clouds : No Records'
                                        speed.innerText = 'Wind Speed : No Records'
                                        sunrise.innerText = 'Sunrise : No Records'
                                        sunset.innerText = 'Sunset : No Records'
                                        weather.append(backBtnRow)
                                    }


                                })
                        }
                        else {
                            temp.innerText = 'Temperature : No Records'
                            humi.innerText = 'Humidity : No Records'
                            pressure.innerText = 'Pressure : No Records'
                            cloud.innerText = 'Clouds : No Records'
                            speed.innerText = 'Wind Speed : No Records'
                            sunrise.innerText = 'Sunrise : No Records'
                            sunset.innerText = 'Sunset : No Records'
                            weather.append(backBtnRow)
                        }
                    }


                    getAllDetails()
                    card.removeChild(cardBody);
                    card.append(weather);
                });








            });
        })

}

getAllDetails()

const cont = document.createElement('div')
cont.setAttribute('class', 'container')
document.body.append(cont)



const heading = document.createElement('div')
heading.setAttribute('class', 'container-fluid')
cont.append(heading)



const h1Tag = document.createElement('h1')
h1Tag.setAttribute('class', 'text-center')
h1Tag.setAttribute('id', 'title')
h1Tag.innerText = 'RestCountries API & Weather API'
heading.append(h1Tag)



const row = document.createElement('div')
row.setAttribute('class', 'row')
cont.append(row)



const content = document.createElement('div')
content.setAttribute('class', 'col-lg-12 col-sm-12')
row.append(content)



const row1 = document.createElement('div')
row1.setAttribute('class', 'row')
content.append(row1)















