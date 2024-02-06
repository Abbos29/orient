import React from 'react'
import './Form.scss'

const Form = () => {
    return (
        <section className="form">
            <div className="container">
                <h2 className="form__title section-title">Форма обслуживания</h2>

                <form action="">

                    <div className="form__wrap">
                        <div className="form__box">
                            <label htmlFor="">
                                Фамилия
                                <input type="text" />
                            </label>

                            <label htmlFor="">
                                Имя
                                <input type="text" />
                            </label>

                            <label htmlFor="">
                                Почта
                                <input type="text" />
                            </label>
                        </div>

                        <div className="form__box">
                            <label htmlFor="">
                                Тема
                                <input type="text" />
                            </label>

                            <label htmlFor="">
                                Ваше сообщение
                                <textarea type="text" />
                            </label>

                        </div>
                    </div>

                    <button className='btn'>Отправить</button>



                </form>
            </div>
        </section>
    )
}

export default Form