import '../../../../styles/blowout.css';
import '../../../../styles/variables.css';

import { Radio } from './Radio';

export default {
    title: 'Компоненты/Radio',
    component: Radio,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export const Playground = {
    args: {
        name: 'Группа 1',
        list: [
            { name: 'Пункт 1', description: 'Описание пункта 1', disabled: false },
            { name: 'Пункт 2', description: 'Описание пункта 2', disabled: true },
            { name: 'Пункт 3', description: 'Описание пункта 3', disabled: false },
        ],
        stretched: false,
        value: 'Пункт 1',
        changeValue: (value) => {
            setValue(value);
        },
    },
};
