// import './button.css';

import clsx from 'clsx';
import styled from './button.module.css';

// import { clsx } from 'clsx';

export function Button({
    children,
    addText,
    disabled,
    onClick,
    sizeButton,
    align,
    appearance,
    stretched,
    loadingIcon,
    isBefore,
    isAfter,
    addBefore,
    addAfter,
}) {
    return (
        <>
            <button
                onClick={onClick}
                disabled={disabled}
                className={clsx(
                    `${styled.button}`,
                    styled[sizeButton],
                    styled[align],
                    styled[appearance],
                    stretched && `${styled.stretched}`,
                    disabled && `${styled.disabled}`,
                )}
            >
                {isBefore && <div className={`${styled.before}`}>{addBefore}</div>}

                {addText && children}

                {isAfter && <div className={`${styled.after}`}>{addAfter}</div>}

                {loadingIcon && <div className={`${styled.loading}`}></div>}
            </button>
        </>
    );
}
