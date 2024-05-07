## Импорт

`import { Button } from './shared/ui/Button';`

## Состояния

```
    const onClick = () => {
        alert('Кнопка нажата');
    };

    // --- Выравнивание текста
    const [align, setAlign] = useState('center');

    // --- Наличие текста
    const [addText, setAddText] = useState(true);

    // --- Процесс загрузки
    const [loading, setLoading] = useState(false);
    const [loadingIcon, setLoadingIcon] = useState(false);

    // --- Тип и внешность кнопки
    const [appearance, setAppearance] = useState('accent-fill');

    // --- Неактивность кнопки
    const [disabled, setDisabled] = useState(false);

    // --- Размер кноки
    const [sizeButton, setSizeButton] = useState('large');

    // --- На всю ширину кнопки
    const [stretched, setStretched] = useState(false);

    // --- Элемент в начале и в конце кноки
    const [isBefore, setIsBefore] = useState(false);
    const [isAfter, setIsAfter] = useState(false);

    const [addBefore, setAddBefore] = useState(HTML ЭЛЕМЕНТ);
    const [addAfter, setAddAfter] = useState(HTML ЭЛЕМЕНТ);
```

## Вызов компонента

```
    <Button
        onClick={onClick}
        appearance={appearance}
        align={align}
        stretched={stretched}
        disabled={disabled}
        sizeButton={sizeButton}
        loading={loading}
        loadingIcon={loadingIcon}
        isBefore={isBefore}
        isAfter={isAfter}
        addBefore={addBefore}
        addAfter={addAfter}
        addText={addText}
    >
        Кнопка
    </Button>
```
