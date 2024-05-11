import '../../../../styles/blowout.css';
import '../../../../styles/variables.css';

import { Select } from './Select';

export default {
    title: 'Компоненты/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },

    argTypes: {
        align: {
            type: 'string',
            desription: 'Выравнивание текста',
            defaultValue: 'center',
            options: ['center', 'left', 'right'],
            control: {
                type: 'radio',
            },
        },
        type: {
            type: 'string',
            desription: 'Тип выпадающего списка',
            defaultValue: 'select-and-seach',
            options: ['select-and-seach', 'select-menu'],
            control: {
                type: 'radio',
            },
        },
    },
};

export const Playground = {
    args: {
        children: 'Ваша почта',
        value: ``,
        forName: `mailUser`,
        disabled: false,
        stretched: false,
        list: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5', 'Пункт 6'],
        statusAddButton: false,
        isError: false,
        listError: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5', 'Пункт 6'],
        isIconAfter: false,
        iconAfter: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 12H20L12 20L4 12H11V4H13V12Z"></path>
            </svg>
        ),
    },
};
