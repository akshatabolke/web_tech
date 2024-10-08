
let countA = 0;
        let teamA = 0;

        let h1A = document.querySelector("#teamA");
        let btnAdd2a = document.querySelector("#btn2a");
        let btnAdd3a = document.querySelector("#btn3a");
        let btnSubmitA = document.querySelector("#btn1");

        btnAdd2a.addEventListener("click", () => {
            countA += 2;
            h1A.innerHTML = countA;
        });

        btnAdd3a.addEventListener("click", () => {
            countA += 3;
            h1A.innerHTML = countA;
        });

        btnSubmitA.addEventListener("click", () => {
            teamA = countA;
            winner();
            countA = 0;
        });

        let countB = 0;
        let teamB = 0;

        let h1B = document.querySelector("#teamB");
        let btnAdd2b = document.querySelector("#btn2b");
        let btnAdd3b = document.querySelector("#btn3b");
        let btnSubmitB = document.querySelector("#btn2");

        btnAdd2b.addEventListener("click", () => {
            countB += 2;
            h1B.innerHTML = countB;
        });

        btnAdd3b.addEventListener("click", () => {
            countB += 3;
            h1B.innerHTML = countB;
        });

        btnSubmitB.addEventListener("click", () => {
            teamB = countB;
            winner();
            countB = 0;
        });

        let h4 = document.querySelector("h4");
        let para = document.querySelector("p");

        h4.addEventListener("click", winner);

        function winner() {
            let tA = teamA;
            let tB = teamB;
            if (tA !== 0 && tB !== 0) {
                if (tA > tB) {
                    para.innerHTML = `Team A scored ${tA} and Team B scored ${tB}, so Team A wins.`;
                } else if (tA < tB) {
                    para.innerHTML = `Team B scored ${tB} and Team A scored ${tA}, so Team B wins.`;
                } else {
                    para.innerHTML = `Match is a draw.`;
                }
            }
        }