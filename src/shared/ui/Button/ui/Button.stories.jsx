import '../../../../styles/blowout.css';
import '../../../../styles/variables.css';

import { Button } from './Button';

export default {
    title: 'Компоненты/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },

    argTypes: {
        sizeButton: {
            type: 'string',
            desription: 'Размер кнопки',
            defaultValue: 'large',
            options: ['large', 'medium', 'small'],
            control: {
                type: 'radio',
            },
        },
        align: {
            type: 'string',
            desription: 'Выравнивание текста',
            defaultValue: 'center',
            options: ['center', 'left', 'right'],
            control: {
                type: 'radio',
            },
        },
        appearance: {
            type: 'string',
            desription: 'Тип кнопки и внешний вид',
            defaultValue: 'accent-fill',
            options: [
                'accent-fill',
                'accent-gray-fill',
                'accent-transparent',
                'accent-border',
                'positive-fill',
                'positive-gray-fill',
                'positive-transparent',
                'positive-border',
                'negative-fill',
                'negative-gray-fill',
                'negative-transparent',
                'negative-border',
                'neutral-fill',
                'neutral-gray-fill',
                'neutral-transparent',
                'neutral-border',
            ],
            control: {
                type: 'radio',
            },
        },
    },
};

export const Playground = {
    args: {
        addText: true,
        children: 'Отправить',
        disabled: false,
        isBefore: false,
        isAfter: false,
        loading: false,
        loadingIcon: false,
        stretched: false,
        addBefore: '<div></div>',
        addAfter: '<div></div>',
    },
};
