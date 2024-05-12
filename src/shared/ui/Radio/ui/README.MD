## Импорт

`import { Radio } from './shared/ui/Radio';`

## Состояния

```
    // --- Список вариантов ---
    const [list, setList] = useState([
        { name: 'Пункт 1', description: 'Описание пункта 1', disabled: false },
        { name: 'Пункт 2', description: 'Описание пункта 2', disabled: true },
        { name: 'Пункт 3', description: 'Описание пункта 3', disabled: false },
    ]);

    // --- Системное название группы вариантов ---
    const [name, setName] = useState('Группа 1');

    // --- Контролируемое значение ---
    const [value, setValue] = useState(null);
    const changeValue = (value) => {
        setValue(value);
    };

    // --- Растянуть на всю ширину ---
    const [stretched, setStretched] = useState(false);
```

## Вызов компонента

```
    <Radio list={list} name={name} value={value} changeValue={changeValue} stretched={stretched}></Radio>
```
