export function getMatrix(arr) {
    const size = arr.length;
    const complexity = size === 9 ? 3 : size === 16 ? 4 : 5;
    const matrix = [[]];
    let x = 0;
    let y = 0;

    for (let i = 0; i < arr.length; i++) {
        if (x === complexity) {
            x = 0;
            y++;
            matrix.push([]);
        }
        matrix[y][x] = arr[i];
        x++;
    }

    return matrix;
};

export function setPositionItems(matrix, items) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            const value = matrix[y][x];
            const node = items[value - 1];
            setNodeStyle(node, x + 1, y + 1);
        }

    }
}

export function setNodeStyle(node, x, y) {
    node.style.gridArea = `${y} / ${x} / ${y} / ${x}`;
}

export function shuffleArray(arr) {
    return arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}


export function findCoordinatesByNumber(number, matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            if (matrix[y][x] === number) {
                return { x, y };
            }
        }

    }

    return null;
}

export function isValidForSwap(coords1, coords2) {
    const diffX = Math.abs(coords1.x - coords2.x);
    const diffY = Math.abs(coords1.y - coords2.y);

    const valX = coords1.x === coords2.x;
    const valY = coords1.y === coords2.y;


    return (diffX === 1 && valY) || (diffY === 1 && valX);

}

export function swap(coords1, coords2, matrix) {
    const coords1Number = matrix[coords1.y][coords1.x];
    matrix[coords1.y][coords1.x] = matrix[coords2.y][coords2.x];
    matrix[coords2.y][coords2.x] = coords1Number;

    if (isWon(matrix)) {
        addWonClass(matrix);

        setTimeout(() => changeMatrix(matrix), 5000);
        setTimeout(() => {
            const score = document.querySelector('.score');
            score.firstChild.innerText = String(0);
        }, 5000);

    } else {
        setScore();
    }

}

export function changeMatrix(matrix) {
    const items = Array.from(document.querySelectorAll('.playwindow__puzzle'));
    matrix = getMatrix(shuffleArray(matrix.flat()));
    setPositionItems(matrix, items);
}

function isWon(matrix) {
    const flatMatrix = matrix.flat();
    const length = flatMatrix.length;
    const winFlatArr = new Array(length).fill(0).map((_item, i) => i + 1);

    for (let i = 0; i < length - 1; i++) {
        if (flatMatrix[i] !== winFlatArr[i]) {
            return false;
        }
    }

    return true;
}

function addWonClass() {
    const last = document.querySelector('.main__playwindow').childNodes.length - 2;
    setTimeout(() => document.querySelector('.main__playwindow').childNodes[last].style.display = "", 100)
    setTimeout(() => document.querySelector('.main').style.transform = "scale3d(1.2, 1.2, 0.3)", 200);

    setTimeout(() => document.querySelector('.main').style.transform = "", 2000);
    setTimeout(() => document.querySelector('.main__playwindow').childNodes[last].style.display = "none", 5000);
}

export function changeComplexity(playWindow, newSize, oldSize) {
    const diff = newSize - oldSize;
    document.querySelector('.score').firstChild.innerText = 0;

    if (diff < 0) {
        const oldItems = Array.from(document.querySelectorAll('.playwindow__puzzle'));
        for (let i = newSize; i < oldSize; i++) {
            oldItems[i].remove();
        };

    } else {
        for (let i = 0; i < diff; i++) {
            const button = document.createElement('button');
            button.className = 'playwindow__puzzle';
            button.dataset.matrixId = oldSize + i + 1;

            playWindow.append(button);
        }
    }

    const complexity = Math.sqrt(newSize);
    const items = Array.from(document.querySelectorAll('.playwindow__puzzle'));
    for (let i = 0; i < items.length; i++) {
        items[i].innerHTML = `<img src='../static/images/pic1/${complexity}x${complexity}/${i < 9 ? 0 : ''}${i + 1}.jpg'/>`;
    };
}

export function setScore() {
    const score = document.querySelector('.score');
    score.firstChild.innerText = String(1 + +score.firstChild.innerText);
}


export default {
    getMatrix,
    setPositionItems,
    shuffleArray,
    findCoordinatesByNumber,
    isValidForSwap,
    changeComplexity,
    changeMatrix,
    setScore,
    swap
}
