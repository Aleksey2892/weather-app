import axios from 'axios';
import notification from '../helpers/toastrSetting';

axios.defaults.baseURL = 'https://api.openweathermap.org';

const ApiKey = '889aa1433777fac2383867e84807139f';

const getWeather = async citySearch => {
  try {
    const { data } = await axios.get(
      `/data/2.5/forecast?q=${citySearch}&units=metric&appid=${ApiKey}`,
    );

    return data;
  } catch (error) {
    if (error.message === 'Request failed with status code 404') {
      notification.error(
        'Введите корректные данные и повторите попытку',
        `Город " ${citySearch} " не найден! :(`,
      );

      return;
    }

    notification.error('Что-то пошло не так! :(');

    console.error(error);
  }
};

export default { getWeather };
