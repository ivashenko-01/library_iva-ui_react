import { useState } from 'react';

import { Button } from './shared/ui/Button';

function App() {
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

    const [addBefore, setAddBefore] = useState(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
        </svg>,
    );
    const [addAfter, setAddAfter] = useState(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z"></path>
        </svg>,
    );

    return (
        <>
            <div>
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
            </div>
        </>
    );
}

export default App;
