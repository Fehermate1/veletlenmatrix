let displayArray = Array(9).fill(null);
        let szabad = Array.from({ length: 9 }, (_, i) => i + 1);

        function initialBoard() 
        {
            renderBoard();
        }

        function setDisplayBoard(index) 
        {
            if (displayArray[index] === null && szabad.length > 0) {
                const random = Math.floor(Math.random() * szabad.length);
                displayArray[index] = szabad.splice(random, 1)[0];
                renderBoard();
            }
        }

        function renderBoard() 
        {
            const matrixElement = document.getElementById("matrix");
            matrixElement.innerHTML = "";

            for (let i = 0; i < 9; i++) 
            {
                const cella = document.createElement("div");
                cella.classList.add("matrix-cell");
                if (displayArray[i] !== null) {
                    cella.textContent = displayArray[i];
                }
                cella.onclick = function () { setDisplayBoard(i); };
                matrixElement.appendChild(cella);
            }
        }

        function resetMatrix() 
        {
            displayArray = Array(9).fill(null);
            szabad = Array.from({ length: 9 }, (_, i) => i + 1);
            renderBoard();
        }

        initialBoard();