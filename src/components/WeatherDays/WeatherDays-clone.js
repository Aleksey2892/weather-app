import React from 'react';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import s from './WeatherDays.module.scss';

export default class WeatherDays extends React.Component {
  state = { weatherUseData: [], weatherUseDetails: {} };

  componentDidMount() {
    const weatherUseData = this.props.data.filter(
      (day, idx) => idx % 8 === 0 && day,
    );

    this.setState({
      weatherUseData,
      weatherUseDetails: { ...weatherUseData[0] },
    });
  }

  handleClickDay = dayIdx => {
    this.setState({
      weatherUseDetails: {
        ...this.changeDayDetails(dayIdx)[0],
        whatTheDay: dayIdx,
      },
    });
  };

  changeDayDetails = dayIdx =>
    this.state.weatherUseData.filter((_, idx) => idx === dayIdx);

  render() {
    const isShowDetails = this.state.weatherUseDetails;

    return (
      <div>
        <p className={s.about}>
          Нажмите на нужный день, чтобы узнать подробности
        </p>

        <p className={s.titleCity}>
          Погода для города <span>{this.props.cityName}</span>
        </p>
        <div className={s.daysWeatherBox}>
          {this.state.weatherUseData.map((day, idx) => {
            const icon = day.weather.find(item => item.icon).icon;

            const urlIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            if (idx === 0) {
              return (
                <div
                  className={s.dayBox}
                  key={day.dt}
                  onClick={() => this.handleClickDay(0)}
                >
                  <h3 className={s.titleDay}>Сегодня</h3>
                  <div className={s.iconBox}>
                    <img
                      src={urlIcon}
                      alt="weather icon"
                      className={s.imageIcon}
                    />
                  </div>
                  <p className={s.temp}>{day.main.temp}°</p>
                </div>
              );
            }
            if (idx === 1) {
              return (
                <div
                  className={s.dayBox}
                  key={day.dt}
                  onClick={() => this.handleClickDay(1)}
                >
                  <h3 className={s.titleDay}>Завтра</h3>
                  <div className={s.iconBox}>
                    <img
                      src={urlIcon}
                      alt="weather icon"
                      className={s.imageIcon}
                    />
                  </div>
                  <p className={s.temp}>{day.main.temp}°</p>
                </div>
              );
            }
            if (idx === 2) {
              return (
                <div
                  className={s.dayBox}
                  key={day.dt}
                  onClick={() => this.handleClickDay(2)}
                >
                  <h3 className={s.titleDay}>Через день</h3>
                  <div className={s.iconBox}>
                    <img
                      src={urlIcon}
                      alt="weather icon"
                      className={s.imageIcon}
                    />
                  </div>
                  <p className={s.temp}>{day.main.temp}°</p>
                </div>
              );
            }
            if (idx === 3) {
              return (
                <div
                  className={s.dayBox}
                  key={day.dt}
                  onClick={() => this.handleClickDay(3)}
                >
                  <h3 className={s.titleDay}>Через 2 дня</h3>
                  <div className={s.iconBox}>
                    <img
                      src={urlIcon}
                      alt="weather icon"
                      className={s.imageIcon}
                    />
                  </div>
                  <p className={s.temp}>{day.main.temp}°</p>
                </div>
              );
            }
            if (idx === 4) {
              return (
                <div
                  className={s.dayBox}
                  key={day.dt}
                  onClick={() => this.handleClickDay(4)}
                >
                  <h3 className={s.titleDay}>Через 3 дня</h3>
                  <div className={s.iconBox}>
                    <img
                      src={urlIcon}
                      alt="weather icon"
                      className={s.imageIcon}
                    />
                  </div>
                  <p className={s.temp}>{day.main.temp}°</p>
                </div>
              );
            }
            return day;
          })}
        </div>

        {isShowDetails && (
          <WeatherDetails details={this.state.weatherUseDetails} />
        )}
      </div>
    );
  }
}
