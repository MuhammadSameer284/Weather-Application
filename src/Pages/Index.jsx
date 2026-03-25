import React, { useEffect, useState } from "react";
import "../Style/Index.css";

function Home() {

    const [input, setInput] = useState("Karachi");
    const [data, setData] = useState();
    const [loader, setLoader] = useState(false);

    async function getWeatherData() {

        try {

            setLoader(true);

            const weatherData = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=9e3b2761e773485384d203006262503&q=${input}&aqi=no`
            );

            const response = await weatherData.json();

            setData(response);
            setLoader(false);

        } catch (error) {
            console.log(error);
            setLoader(false);
        }
    }

    useEffect(() => {
        getWeatherData();
    }, [input]);

    return (
        <div className="weatherx-app">



            <div className="weatherx-card">

                    {loader && <p>Loading please wait...</p>}

                <div className="weatherx-select-box">

                    <select
                        className="weatherx-city-select"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    >

                        <option value=""selected disabled>Select a City</option>

                        <option value="Amsterdam">Amsterdam</option>
                        <option value="Athens">Athens</option>
                        <option value="Bangkok">Bangkok</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Beijing">Beijing</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Chicago">Chicago</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Istanbul">Istanbul</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Kuala Lumpur">Kuala Lumpur</option>
                        <option value="London">London</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Manila">Manila</option>
                        <option value="Melbourne">Melbourne</option>
                        <option value="Moscow">Moscow</option>
                        <option value="New York">New York</option>
                        <option value="Paris">Paris</option>
                        <option value="Rome">Rome</option>
                        <option value="Seoul">Seoul</option>
                        <option value="Shanghai">Shanghai</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sydney">Sydney</option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vienna">Vienna</option>
                        <option value="Warsaw">Warsaw</option>
                        <option value="Zurich">Zurich</option>

                    </select>

                </div>

                {data && (

                    <>
                        <div className="weatherx-info">

                            <img
                                src={data.current.condition.icon}
                                className="weatherx-icon"
                                alt="weather"
                            />

                            <h1 className="weatherx-temp">
                                {data.current.temp_c}°C
                            </h1>

                            <h2 className="weatherx-city">
                                {data.location.name}
                            </h2>

                        </div>

                        <div className="weatherx-extra">

                            <div className="weatherx-col">
                                <img src="https://cdn-icons-png.flaticon.com/512/4148/4148460.png" />
                                <div>
                                    <p>{data.current.humidity}%</p>
                                    <span>Humidity</span>
                                </div>
                            </div>

                            <div className="weatherx-col">
                                <img src="https://cdn-icons-png.flaticon.com/512/1116/1116453.png" />
                                <div>
                                    <p>{data.current.wind_kph} km/h</p>
                                    <span>Wind</span>
                                </div>
                            </div>

                        </div>

                    </>

                )}

            </div>

        </div>
    );
}

export default Home;