import styled from './input.module.css';

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
    isError,
    isValid,
}) {
    return (
        <>
            <div className={styled['the-input-field']}>
                <div className={styled['the-input-field__wrapper']}>
                    <div>
                        {isBefore && <div className={styled['the-input-field__before']}>{addBefore}</div>}
                        <input
                            type="text"
                            className={`${styled[`the-input-field__input`]} ${styled[align]}`}
                            placeholder=" "
                            name={forName}
                            value={value}
                            disabled={disabled}
                            onChange={(e) => onChangeValue(e.target.value)}
                        />

                        {enabledLabel && (
                            <label className={styled[`the-input-field__label`]} for={forName}>
                                {children}
                            </label>
                        )}

                        {isAfter && <div className={styled['the-input-field__after']}>{addAfter}</div>}
                        {isAfterButton && (
                            <div className={styled['the-input-field__after-button']}>
                                <button>{addAfterButton}</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
