// https://www.youtube.com/watch?v=0SB3h1AJYQ4

import React from 'react';

import styled from './radio.module.scss';
import clsx from 'clsx';

export function Radio({ list, name, value, changeValue, stretched }) {
    return (
        <>
            <ul className={clsx(styled[`radio-list`], styled[`${stretched && 'radio-list--stretched'}`])}>
                {list?.map((item, index) => (
                    <li
                        key={index}
                        className={clsx(
                            styled[`radio-list__item`],
                            styled[`radio-list__item--disabled-${item.disabled}`],
                            styled[`${stretched && 'radio-list__item--stretched'}`],
                        )}
                    >
                        <label htmlFor={item.name} className={clsx(styled[`radio-list__box-icon`])}>
                            {value === item.name ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path>
                                </svg>
                            )}
                        </label>
                        <input
                            type="radio"
                            className={clsx(styled[`radio-list__item-input`])}
                            name={name}
                            id={item.name}
                            value={item.name}
                            checked={value === item.name}
                            onChange={() => changeValue(item.name)}
                            disabled={item.disabled}
                        />
                        <div
                            className={clsx(
                                styled[`radio-list__labels`],
                                styled[`${stretched && 'radio-list__labels--stretched'}`],
                            )}
                        >
                            <label htmlFor={item.name}>{item.name}</label>
                            {item.description && (
                                <label htmlFor={item.name} className={clsx(styled[`radio-list__label-description`])}>
                                    {item.description}
                                </label>
                            )}
                        </div>
                        {item.disabled && (
                            <div className={clsx(styled[`radio-list__disabled-icon`])}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"></path>
                                </svg>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
