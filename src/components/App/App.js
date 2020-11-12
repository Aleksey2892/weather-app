import React from 'react';

import weatherApi from '../../weatherApi/weatherApi';
import WeatherDays from '../WeatherDays/WeatherDays';
import s from './App.module.scss';

export default class App extends React.Component {
  state = { city: '', data: null };

  handleSearchPrompt = async () => {
    const data = await weatherApi.getWeather('Kyiv');

    if (data) this.setState({ data });
    this.setState({ city: '' });
  };

  handleSearchCity = value => {
    const reg = /[а-яА-ЯёЁ]/g;

    value.search(reg) !== -1
      ? (value = value.replace(reg, ''))
      : this.setState({ city: value });
  };

  handleSubmitCity = async evt => {
    evt.preventDefault();

    if (!this.state.city) return;

    const data = await weatherApi.getWeather(this.state.city);

    console.log(data);

    if (data) this.setState({ data });
    this.setState({ city: '' });
  };

  render() {
    const { city, data } = this.state;
    const isShowData = data;

    return (
      <div className={s.appWrapper}>
        <h1 className={s.titleApp}>
          <p>Погода</p>
          <p>
            by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://openweathermap.org/"
            >
              OpenWeatherMap
            </a>{' '}
            api
          </p>
          <p>(React app)</p>
        </h1>
        <form onSubmit={this.handleSubmitCity} className={s.form}>
          <input
            className={s.input}
            type="text"
            value={city}
            placeholder="Поиск города"
            onChange={({ target }) => this.handleSearchCity(target.value)}
          />
          <button type="submit" className={s.button}>
            Поиск
          </button>
        </form>

        {!isShowData && (
          <div className={s.description}>
            Введите город латиницей (англ. раскладка) в поле ввода, например:
            <button className={s.descrBtn} onClick={this.handleSearchPrompt}>
              Kyiv
            </button>
          </div>
        )}

        {isShowData && <WeatherDays data={data.list} />}

        <div className={s.devName}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aleksey-grygorenko-1358911ba/"
          >
            by Aleksey Grygorenko
          </a>
        </div>
      </div>
    );
  }
}
