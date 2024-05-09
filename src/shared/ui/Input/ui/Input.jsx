import styled from './input.module.scss';

export function Input({
    children,
    forName,
    enabledLabel,
    value,
    disabled,
    onChangeValue,
    align,
    isBefore,
    isAfter,
    isAfterButton,
    addBefore,
    addAfter,
    addAfterButton,
    isErrorInput,
    isErrorMessage,
    isValid,
    onClickAfterButton,
    afterColor,
}) {
    if (!onClickAfterButton) {
        onClickAfterButton = () => {};
    }
    return (
        <>
            <div className={styled['the-input']}>
                <div className={styled['the-input-field']}>
                    <div className={styled['the-input-field__wrapper']}>
                        <div>
                            {isBefore && <div className={styled['the-input-field__before']}>{addBefore}</div>}
                            <input
                                type="text"
                                className={`${styled[`the-input-field__input`]} ${styled[isErrorInput ? 'error-true' : 'error-false']} ${styled[align]} ${isBefore && styled[`the-input-field__input-add-before`]} ${isAfter && styled[`the-input-field__input-add-after`]}`}
                                placeholder=" "
                                name={forName}
                                value={value}
                                disabled={disabled}
                                onChange={(e) => onChangeValue(e.target.value)}
                            />

                            {enabledLabel && (
                                <label
                                    className={`${styled[`the-input-field__label`]} ${isBefore && styled[`the-input-field__label-add-before`]}`}
                                    htmlFor={forName}
                                >
                                    {children}
                                </label>
                            )}

                            {isAfter && (
                                <div
                                    className={`${styled['the-input-field__after']} ${styled[`the-input-field__after--${afterColor}`]}`}
                                >
                                    {addAfter}
                                </div>
                            )}
                            {isAfterButton && (
                                <div className={styled['the-input-field__after-button']}>
                                    {value && <button onClick={() => onClickAfterButton()}>{addAfterButton}</button>}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {isErrorInput &&
                    isErrorMessage.map((error) => (
                        <div className={styled[`the-input-field__error-message`]}>{error}</div>
                    ))}
            </div>
        </>
    );
}
