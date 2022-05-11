import {
    changeComplexity,
    changeMatrix,
    findCoordinatesByNumber,
    getMatrix,
    isValidForSwap,
    setPositionItems,
    shuffleArray,
    swap
} from "../helpers/playServiceHelper.js";

import complexities from "../constants/complexities.js";


function func() {
    const playWindow = document.querySelector(".main__playwindow");
    let items = Array.from(playWindow.querySelectorAll('.playwindow__puzzle'));
    let countItems = items.length;


    items[countItems - 1].style.display = "none";
    let matrix = getMatrix(
        items.map(item => +item.dataset.matrixId)
    );

    matrix = getMatrix(shuffleArray(matrix.flat()));
    setPositionItems(matrix, items);

    const complexityItems = Array.from(document.querySelectorAll('.complexity__item'));
    complexityItems.forEach(complexity => complexity.addEventListener('click', (e) => {
        e.stopPropagation();

        const isEasiest = playWindow.classList.contains(complexities.easy.className);
        const isHardest = playWindow.classList.contains(complexities.hard.className);

        const oldSize_ = isEasiest ? 9 : isHardest ? 25 : 16;
        const newSize_ = e.target.innerText === complexities.middle.name
            ? 16
            : e.target.innerText === complexities.easy.name
                ? 9
                : 25;

        playWindow.classList.remove(isEasiest
            ? complexities.easy.className
            : isHardest
                ? complexities.hard.className
                : complexities.middle.className);

        const newClass = newSize_ === 9 ? complexities.easy.className : newSize_ === 16 ? complexities.middle.className : complexities.hard.className;

        playWindow.classList.add(newClass);

        e.target.innerText = oldSize_ === 9 ? complexities.easy.name : oldSize_ === 16 ? complexities.middle.name : complexities.hard.name;

        changeComplexity(playWindow, newSize_, oldSize_);

        items = Array.from(playWindow.querySelectorAll('.playwindow__puzzle'));
        matrix = getMatrix(
            items.map(item => +item.dataset.matrixId)
        );

        matrix = changeMatrix(matrix);
    }));


    playWindow.addEventListener('click', event => {
        const buttonNode = event.target.closest('button');

        if (!buttonNode) {
            return;
        }

        const buttonNumber = +buttonNode.dataset.matrixId;

        event.stopPropagation();

        const buttonCoords = findCoordinatesByNumber(buttonNumber, matrix);
        const blankCoords = findCoordinatesByNumber(countItems, matrix);


        if (isValidForSwap(blankCoords, buttonCoords)) {
            swap(blankCoords, buttonCoords, matrix);
            setPositionItems(matrix, items);
        }
    });

    window.addEventListener('keydown', (event) => {
        if (!event.key.includes('Arrow')) {
            return;
        }

        const blankCoords = findCoordinatesByNumber(countItems, matrix);
        const buttonCoords = {
            x: blankCoords.x,
            y: blankCoords.y
        };

        const direction = event.key.split('Arrow')[1].toLowerCase();
        const maxIndexMatrix = matrix.length;

        switch (direction) {
            case 'up':
                buttonCoords.y += 1;
                break;
            case 'down':
                buttonCoords.y -= 1;
                break;
            case 'left':
                buttonCoords.x += 1;
                break;
            case 'right':
                buttonCoords.x -= 1;
                break;
        }

        if (buttonCoords.y >= maxIndexMatrix || buttonCoords.y < 0 ||
            buttonCoords.x >= maxIndexMatrix || buttonCoords.x < 0) {
            return;
        }

        swap(blankCoords, buttonCoords, matrix);
        setPositionItems(matrix, items);
    })

}

setTimeout(func, 100);

