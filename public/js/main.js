document.addEventListener('DOMContentLoaded', function () {
    const cityName = document.getElementById('CityName');//this is for input where user fill in the input
    const submit = document.getElementById('Submitbtn');
    const city_name = document.getElementById('city_name');
    const temp = document.getElementById('temp_real_val');
    const temp_status = document.getElementById('temp_status');
    const hide = document.querySelector('.middle_layer');


    const getInfo = async(event) => {
        event.preventDefault();

        const cityVal = cityName.value;
        if(cityVal ===""){
            city_name.innerText = `Please enter the city before you search`;
            hide.classList.add('data_hide');
        }else{
            try{
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c5033b44f6ae7ede5d9067f34293d02a`;
                const response = await fetch(url);
                const data = await response.json();//to convert this json to object
                const arrData = [data];
                console.log(arrData);
                city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
                temp.innerText = arrData[0].main.temp ;
                // temp_status.innerText =arrData[0].weather[0].main;
                const tempMood = arrData[0].weather[0].main;
                
                if(tempMood == "Clear"){
                    temp_status.innerHTML = '<i class="fas fa-sun" style="color: #FFD43B;"></i>';
                }else if(tempMood == "Clouds"){
                    temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #74C0FC;"></i>';
                }else if(tempMood == "Rain"){
                    temp_status.innerHTML = '<i class="fas fa-cloud-rain" style="color: #204c97;"></i>';
                }else{
                    temp_status.innerHTML = '<i class="fas fa-sun" style="color: #74C0FC;"></i>';
                }
                hide.classList.remove('data_hide');
            }catch{
                city_name.innerText = `Please enter the city name and country code properly`;
                hide.classList.add('data_hide');
            }
        }
        
    }

    submit.addEventListener('click', getInfo);
});
