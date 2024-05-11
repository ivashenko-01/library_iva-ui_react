## Импорт

`import { Select } from './shared/ui/Select/ui/Select';`

## Состояния

```
    // --- Контролируемое значение ввода ---
    const [value, setValue] = useState();

    const onChangeValue = (value) => {
        setValue(value);
    };

    // --- Системный атрибут ---
    const [forName, setForName] = useState('userName');

    // --- Активность кнопки ---
    const [disabled, setDisabled] = useState(false);

    // --- Ширина кнопки на всю ширину ---
    const [stretched, setStretched] = useState(false);

    // --- Тип кнопки: С возможность ввода или без ---
    const [type, setType] = useState('select-and-seach');

    // --- Выводимый список ---
    const [list, setList] = useState(['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5', 'Пункт 6']);

    // --- Открыто или закрыто выпадающее меню ---
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    // --- Активировать кнопку создания нового пункта или нет ---
    const [statusAddButton, setStatusAddButton] = useState(true);

    const onClickAddButton = (value) => {
        setToggleMenu(false);
        alert(value);
    };

    // --- Функция выбранного значения из списка меню
    const onClickSelectMenuItem = (value) => {
        setToggleMenu(false);
        onChangeValue(value);
    };

    // --- Иконка в конце Input ---
    const [isIconAfter, setIsIconAfter] = useState(true);
    const [iconAfter, setIconAfter] = useState(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 12H20L12 20L4 12H11V4H13V12Z"></path>
        </svg>,
    );

    // --- Отображение ошибки ---
    const [isError, setIsError] = useState(false);

    // --- Передача описания ошибок ---
    const [listError, setListError] = useState(['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5', 'Пункт 6']);
```

## Вызов компонента

```
    <Select
        value={value}
        onChangeValue={onChangeValue}
        forName={forName}
        stretched={stretched}
        disabled={disabled}
        type={type}
        list={list}
        toggleMenu={toggleMenu}
        handleToggleMenu={handleToggleMenu}
        onClickSelectMenuItem={onClickSelectMenuItem}
        statusAddButton={statusAddButton}
        onClickAddButton={onClickAddButton}
        isIconAfter={isIconAfter}
        iconAfter={iconAfter}
        isError={isError}
        listError={listError}
    >
        ФИО сотрудника
    </Select>
```
