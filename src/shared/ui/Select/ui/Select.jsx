import React from 'react';

import { useRef } from 'react';

import clsx from 'clsx';
import styled from './select.module.scss';

export function Select({
    children,
    forName,
    value,
    onChangeValue,
    stretched,
    disabled,
    type,
    list,
    toggleMenu,
    handleToggleMenu,
    onClickSelectMenuItem,
    statusAddButton,
    onClickAddButton,
    isIconAfter,
    iconAfter,
    isError,
    listError,
}) {
    const refDropdownList = useRef(null);
    const refInputAndLabel = useRef(null);

    let sortList = list?.filter((item) => {
        return item.toLowerCase().includes(value?.toLowerCase());
    });

    if (!value) {
        sortList = list;
    }

    const onChangeFocusActive = () => {
        refDropdownList.current.setAttribute('data-seacrh', 'true');
        refInputAndLabel.current.setAttribute('data-active', 'true');
    };
    const onChangeFocusNoActive = () => {
        setTimeout(() => refDropdownList.current.setAttribute('data-seacrh', 'false'), 250);
        refInputAndLabel.current.setAttribute('data-active', 'false');
    };

    return (
        <>
            <div className={clsx(styled['select-menu'], styled[`${stretched && 'select-menu--stretched'}`])}>
                <div
                    className={clsx(styled[`select-menu__input-and-label`], styled[`${isError && 'error'}`])}
                    onClick={() => handleToggleMenu()}
                    ref={refInputAndLabel}
                >
                    <input
                        type="text"
                        className={clsx(
                            styled[`select-menu__input`],
                            styled[`${disabled && 'disabled'}`],
                            styled[`${stretched && 'select-menu__input--stretched'}`],
                            styled[`${type === 'select-menu' && 'select-menu__input-menu'}`],
                            styled[`${isIconAfter && 'select-menu__input--add-after-icon'}`],
                        )}
                        name={forName}
                        placeholder=" "
                        value={value}
                        disabled={disabled}
                        readOnly={type != 'select-and-seach'}
                        onClick={() => handleToggleMenu()}
                        onChange={(e) => onChangeValue(e.target.value)}
                        onFocus={() => onChangeFocusActive()}
                        onBlur={() => onChangeFocusNoActive()}
                    />
                    {type === 'select-menu' && value ? null : (
                        <label className={clsx(styled[`select-menu__label`])} htmlFor={forName}>
                            {children}
                        </label>
                    )}

                    {isIconAfter && <div className={clsx(styled['select-menu__after-icon'])}>{iconAfter}</div>}
                </div>
                <ul
                    className={clsx(styled[`select-menu__dropdown-list`], styled[`${toggleMenu && 'active'}`])}
                    ref={refDropdownList}
                >
                    {sortList?.length === 0 ? (
                        <li className={clsx(styled['select-menu__list-item'])}>
                            <button
                                className={clsx(
                                    styled[`select-menu__item-button`],
                                    styled['select-menu__item-button--no-active'],
                                )}
                            >
                                Ничего не найдено
                            </button>
                        </li>
                    ) : (
                        sortList?.map((item, index) => (
                            <li key={index} className={clsx(styled['select-menu__list-item'])}>
                                <button
                                    className={clsx(styled['select-menu__item-button'])}
                                    onClick={() => onClickSelectMenuItem(item)}
                                >
                                    {item}
                                </button>
                            </li>
                        ))
                    )}
                    {statusAddButton && (
                        <li className={clsx(styled['select-menu__list-item'])}>
                            <button
                                className={clsx(styled['select-menu__item-button'])}
                                onClick={() => onClickAddButton('Создать новую')}
                            >
                                Создать новую
                            </button>
                        </li>
                    )}
                </ul>

                {isError && (
                    <ul className={clsx(styled[`list-errors`])}>
                        {listError?.map((item, index) => (
                            <li key={index} className={styled[`list-errors__item`]}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}
