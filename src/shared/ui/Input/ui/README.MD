## Импорт

`import { Input } from './shared/ui/Input';`

## Состояния

```
    // --- Контролируемое значение ---
    const onChangeValue = (e) => {
        setValue(e);
    };

    // --- Состояние ---
    const [disabled, setDisabled] = useState(false); // -- Активна или нет
    const [isErrorInput, setIsErrorInput] = useState(false); // --- Отображать ошибку или нет
    const [isErrorMessage, setIsErrorMessage] = useState(['Требуется указать верный E-mail.']); // --- Список выводимых ошибок
    const [isValid, setIsValid] = useState(false);

    // --- Значение ---
    const [value, setValue] = useState(''); // --- Контролируемое значение

    // --- Системный атрибут ---
    const [forName, setForName] = useState('mailUser');

    // --- Состояние label ---
    const [enabledLabel, setEnabledLabel] = useState(true); // --- Отображать или нет

    // --- Расположение текста ---
    const [align, setAlign] = useState('left');

    // --- Иконка в начале Input ---
    const [isBefore, setIsBefore] = useState(false);
    const [addBefore, setAddBefore] = useState(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
        </svg>,
    ); // --- Иконка, которую отобразить

    // --- Иконка в конце Input ---
    const [isAfter, setIsAfter] = useState(false); // --- Отображать или нет
    const [afterColor, setAfterColor] = useState('accent'); // -- Задать цвет иконки
    const [addAfter, setAddAfter] = useState(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
        </svg>,
    ); // --- Иконка, которую отобразить

    // --- Кнопка в конце Input ---
    const [isAfterButton, setIsAfterButtton] = useState(false); // --- Отображать или нет

    // --- Функция обработки кнопки в Input ---
    const onClickAfterButton = () => {
        alert('Клик по кнопке');
    };

    const [addAfterButton, setAddAfterButton] = useState(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
        </svg>,
    ); // --- Иконка, которую отобразить
```

## Вызов компонента

```
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
        isErrorInput={isErrorInput}
        isErrorMessage={isErrorMessage}
        isValid={isValid}
        onClickAfterButton={onClickAfterButton}
        afterColor={afterColor}
    >
        Ваша почта
    </Input>
```
