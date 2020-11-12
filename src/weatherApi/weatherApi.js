import axios from 'axios';

axios.defaults.baseURL = 'http://api.openweathermap.org';

const ApiKey = '889aa1433777fac2383867e84807139f';

const getWeather = async citySearch => {
  try {
    const { data } = await axios.get(
      `/data/2.5/forecast?q=${citySearch}&units=metric&appid=${ApiKey}`,
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default { getWeather };
