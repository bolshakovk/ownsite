import React from 'react';

function Projects({ darkMode }){
    return (
        <div id="root">
            <div className='project-name'>
                <h2>Sboard.online</h2>
                <ul>
                    <li>
                        <p className='hero_description'>
                            Переход от монолитной архитектуры к микросервисной, 
                            что повысило отказоустойчивость сервисных компонентов
                        </p> 
                    </li>
                    <li>
                        <p className='hero_description'>
                            Реализация механизма токена обновления доступа на основе JWT, 
                            который позволил пользователям
                            оставаться в сеансе в течение длительного времени
                        </p>
                    </li>
                    <li>
                        <p className='hero_description'>
                            Интеграция со сторонним API unisender, которая позволила 
                            уведомлять пользователей о новых функциях платформы
                        </p>
                    </li>
                    <li>
                        <p className='hero_description'>
                            Внедрение рекуррентных платежей, позволяющего пользователям оплачивать подписку
                        </p>
                    </li>
                    <li>
                        <p className='hero_description'>
                            Миграция базы данных с MySQL на PostgreSQL для получения дополнительных возможностей,
                             так как на данный момент количество пользователей увеличилось в 10 раз
                        </p>
                    </li>
                    <li>
                        <p className='hero_description'>
                            Осуществление авторизации через социальные сети , что обеспечило удобство и безопасность
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;