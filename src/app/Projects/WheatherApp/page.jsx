"use client";
import React, { useEffect, useState } from "react";
import { BsFillCloudsFill, BsFillCloudSnowFill, BsCloudSunFill } from "react-icons/bs";
import { LuWaves } from "react-icons/lu";
import { FaCloudRain, FaCloudSunRain, FaSun } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Navbar from "@/app/components/Navbar";

const WheatherApp = () => {
  const [inputCity, setInputCity] = useState("Dombivali");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const APIKEY = process.env.NEXT_PUBLIC_WHEATHER_API_KEY;

  const fetchWeatherData = async (city) => {
    setIsLoading(true);
    const API_URI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

    try {
      const response = await fetch(API_URI);
      if (!response.ok) {
        throw new Error("City Not Found");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
      alert("Please check spelling || City Not Found || Search Something");
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(inputCity);
  }, []);

  const handleSearchWheather = async (e) => {
    e.preventDefault();
    await fetchWeatherData(inputCity);
  };

  const getWeatherIcon = () => {
    if (!weatherData) return null;
    
    const iconMap = {
      Clouds: <BsFillCloudsFill className="text-7xl sm:text-8xl text-white/90 animate-pulse" />,
      Clear: <FaSun className="text-7xl sm:text-8xl text-yellow-300 animate-spin-slow" />,
      Rain: <FaCloudRain className="text-7xl sm:text-8xl text-blue-200 animate-bounce-slow" />,
      Snow: <BsFillCloudSnowFill className="text-7xl sm:text-8xl text-white/90 animate-bounce-slow" />,
      Drizzle: <FaCloudSunRain className="text-7xl sm:text-8xl text-blue-200 animate-pulse" />,
      Mist: <BsCloudSunFill className="text-7xl sm:text-8xl text-white/90 animate-pulse" />,
    };

    return iconMap[weatherData.weather[0].main] || <BsFillCloudsFill className="text-8xl text-white/90 animate-pulse" />;
  };

  return (
    <div className="min-h-screen py-10 bg-gradient-to-br from-slate-600 to-indigo-600">
      <Navbar />
      <div className="container mx-auto px-4 py-8  flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center  sm:text-5xl md:text-6xl font-extrabold mb-10 sm:mb-12  bg-gradient-to-br from-slate-100 to-slate-600 text-transparent bg-clip-text  animate-text">
          Weather Forecast
        </h1>
        
        <div className="w-full max-w-md backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">
        <form onSubmit={handleSearchWheather} className="mb-8">
            <div className="relative overflow-hidden">
              <input
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                type="text"
                required
                placeholder="Enter City Name..."
                className="w-full  px-6 py-2 sm:py-4 bg-white/20 rounded-full outline-none border border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm transition-all focus:bg-white/30"
              />
              <button
                type="submit"
                className="absolute right-0 p-[10px] sm:p-4 bg-white/20 hover:bg-white/30 rounded-full transition-all active:scale-95"
              >
                <IoSearch className="text-xl sm:text-2xl text-white" />
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center space-y-6 sm:space-y-10">
            <div className="transform transition-all duration-500 hover:scale-110">
              {isLoading ? (
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-white"></div>
              ) : (
                getWeatherIcon()
              )}
            </div>

            {weatherData && weatherData.main ? (
              <div className="text-center space-y-4">
                <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-2 animate-fade-in">
                  {Math.round(weatherData.main.temp)}°C
                </h1>
                <h2 className="text-3xl sm:text-4xl font-medium text-slate-200 underline underline-offset-8 tracking-wide">
                  {weatherData.name}
                </h2>
                <p className="text-xl  tracking-wide text-white/80">
                  {weatherData.weather[0].description}
                </p>
              </div>
            ) : (
              <div className="text-center space-y-4 text-white/90">
                <h1 className="text-3xl font-bold">No Data Available</h1>
                <p className="text-lg">Please search for a city</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-8">
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm hover:scale-105 border border-slate-300">
                <div className="flex items-center space-x-4">
                  <LuWaves className="text-3xl text-blue-300" />
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {weatherData?.main?.humidity || "N/A"}%
                    </p>
                    <p className="text-white/80">Humidity</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm hover:scale-105 border border-slate-300">
                <div className="flex items-center space-x-4">
                  <FaWind className="text-3xl text-blue-300" />
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {weatherData?.wind?.speed || "N/A"} m/s
                    </p>
                    <p className="text-white/80">Wind Speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheatherApp;
