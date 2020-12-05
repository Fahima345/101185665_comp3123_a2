import './App.css';

import { Component } from 'react'

import axios from 'axios';

class App extends Component {
	constructor(props) {
        super(props)
    }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=edaf738634bc1f2ed2aa349946be4cb3')
      .then(res => {
        const resp = res.data;
		console.log(res.data);
		document.getElementById('location').innerHTML = resp.name;

          document.getElementById('temp').innerHTML =Math.round(resp.main.temp/274.15);
        document.getElementById('maxMin').innerHTML =Math.round((resp.main.temp_max/274.15)) + "/"+Math.round((resp.main.temp_min/274.15));
		document.getElementById('cloud').innerHTML = resp.weather[0].main;
          document.getElementById('wind').innerHTML =resp.wind.speed+" km/h";
          document.getElementById('feels_like').innerHTML =Math.round(resp.main.feels_like/274.15);

          document.getElementById('lat').innerHTML =resp.coord.lat;
          document.getElementById('lon').innerHTML =resp.coord.lon;

      })
  }
  
  render() {
    return (
    	
		
			<body>
		
		<div class="forecast-table">
				<div class="container">
					<div class="forecast-container">
						<div class="today forecast">
							<div class="forecast-header">
								<div class="day">Monday</div>
								<div class="date">7 Dec</div>
							</div> 
							<div class="forecast-content">
								<div class="location" id="location"></div>
                                <div className="location">
                                    Latitude : <span id="lat"></span>
                                    Longitude : <span id="lon"></span>
								</div>
								<div class="degree">
									<div class="num"><span id = "temp"></span><sup>o</sup>C</div>
									<div><span id = "maxMin"></span><sup>o</sup>C &nbsp; &nbsp; &nbsp; &nbsp; Feels like &nbsp; &nbsp; <span id = "feels_like"></span><sup>o</sup>C </div>
                                    <span id="cloud"></span>
									<div class="forecast-icon">
										<img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" width="90"/>

									</div>	
								</div>
								<span><img src="/icon-umberella.png" alt=""/>20%</span>
								<span id="wind"></span>
								<span><img src="/icon-compass.png" alt=""/>East</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		
	</body>

    );
  }
}

export default App;