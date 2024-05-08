import './styles/app.css';

import { useState } from 'react';

import { Input } from './shared/ui/Input';

function App() {
    // --- Состояние ---
    const [disabled, setDisabled] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isValid, setIsValid] = useState(false);

    // --- Значение ---
    const [value, setValue] = useState('Евгений');

    // --- Системный атрибут ---
    const [forName, setForName] = useState('nameUser');

    // --- Контролируемое значение ---
    const onChangeValue = (e) => {
        setValue(e);
    };

    // --- Состояние label ---
    const [enabledLabel, setEnabledLabel] = useState(true);

    // --- Расположение текста ---
    const [align, setAlign] = useState('left');

    // --- Элемент в начале и в конце кноки
    const [isBefore, setIsBefore] = useState(false);
    const [isAfter, setIsAfter] = useState(false);
    const [isAfterButton, setIsAfterButtton] = useState(true);

    const [addBefore, setAddBefore] = useState(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
        </svg>,
    );
    const [addAfter, setAddAfter] = useState(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
        </svg>,
    );

    const [addAfterButton, setAddAfterButton] = useState(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
        </svg>,
    );

    return (
        <>
            <div className="app">
                <Input
                    forName={forName}
                    value={value}
                    disabled={disabled}
                    onChangeValue={onChangeValue}
                    enabledLabel={enabledLabel}
                    align={align}
                    isBefore={isBefore}
                    isAfter={isAfter}
                    isAfterButton={isAfterButton}
                    addBefore={addBefore}
                    addAfter={addAfter}
                    addAfterButton={addAfterButton}
                    isError={isError}
                    isValid={isValid}
                >
                    Имя
                </Input>
            </div>
        </>
    );
}

export default App;
