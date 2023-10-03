import React from 'react';
import 'boxicons/css/boxicons.min.css';
import { Icon } from '@iconify/react';

function Home({ darkMode, themeToggle }) {
  return (
    <div>
      <div className={`hero ${darkMode ? 'dark-mode' : ''}`}>
        <div className="hero_container">
          <div className="hero_about">
            <h1 className="hero_title">Веб-разработчик</h1>
            <h2 className="hero_subtitle">Большаков Константин</h2>
            <p className="hero_description">
              Привет, я занимаюсь бекенд разработкой для веб-приложений. Пишите для сотрудничества.
            </p><div className="hero_links">
          {/* Ваши ссылки на социальные сети */}
          <a
            target="_blank"
            rel="noreferrer"
            className="hero_link"
            href="https://github.com/bolshakovk"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="hero_link"
            href="https://www.linkedin.com/in/konstantin-bolshakov-a85094286/"
          >
            <Icon icon="mdi:linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="hero_link"
            href="https://t.me/wombara01"
          >
            <i className="bx bxl-telegram"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="hero_link"
            href="mailto:bolshakovk1234@gmail.com"
          >
            <i className="bx bxl-gmail"></i>
          </a>
        </div>
          </div>
          <div className="hero_box">
            <img
              className="hero_box_image"
              src="/9e8d82d77c408be4b04c2b338549bf93-removebg-preview.png"
              alt="Мое фото"
            />
          </div>
        </div>
      </div>
      <footer>
      
      </footer>
    </div>
  );
}

export default Home
