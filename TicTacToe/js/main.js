window.onload = function() {
    // TODO:: Do your initialization job
    
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var boxes = document.querySelectorAll(".options");
    var winner = document.querySelector("#result");
    var reset = document.querySelector("#reset");
    var scoreXElement = document.getElementById("scoreX");
    var scoreOElement = document.getElementById("scoreO");

    var array = [];
    var array_p1 = [];
    var array_p2 = [];
    var scoreX = 0;
    var scoreO = 0;

    boxes = Array.prototype.slice.call(boxes);

    boxes.forEach(function(element) {
        element.addEventListener("click", function() {
            if (array.indexOf(element) === -1 && !winner.innerText) {
                array.push(element);
                console.log(array);
                element.innerText = (array.length % 2 === 0) ? "O" : "X";
                (array.length % 2 === 0) ? array_p2.push(element) : array_p1.push(element);
                console.log(array_p1);
                console.log(array_p2);
                if (
                    (array_p1.indexOf(boxes[0]) !== -1 && array_p1.indexOf(boxes[1]) !== -1 && array_p1.indexOf(boxes[2]) !== -1) ||
                    (array_p1.indexOf(boxes[3]) !== -1 && array_p1.indexOf(boxes[4]) !== -1 && array_p1.indexOf(boxes[5]) !== -1) ||
                    (array_p1.indexOf(boxes[6]) !== -1 && array_p1.indexOf(boxes[7]) !== -1 && array_p1.indexOf(boxes[8]) !== -1) ||

                    (array_p1.indexOf(boxes[0]) !== -1 && array_p1.indexOf(boxes[3]) !== -1 && array_p1.indexOf(boxes[6]) !== -1) ||
                    (array_p1.indexOf(boxes[1]) !== -1 && array_p1.indexOf(boxes[4]) !== -1 && array_p1.indexOf(boxes[7]) !== -1) ||
                    (array_p1.indexOf(boxes[2]) !== -1 && array_p1.indexOf(boxes[5]) !== -1 && array_p1.indexOf(boxes[8]) !== -1) ||

                    (array_p1.indexOf(boxes[0]) !== -1 && array_p1.indexOf(boxes[4]) !== -1 && array_p1.indexOf(boxes[8]) !== -1) ||
                    (array_p1.indexOf(boxes[2]) !== -1 && array_p1.indexOf(boxes[4]) !== -1 && array_p1.indexOf(boxes[6]) !== -1)
                ) {
                    winner.innerText = "X Won The Game";
                    scoreX++;
                    scoreXElement.innerText = scoreX;
                } else if (
                    (array_p2.indexOf(boxes[0]) !== -1 && array_p2.indexOf(boxes[1]) !== -1 && array_p2.indexOf(boxes[2]) !== -1) ||
                    (array_p2.indexOf(boxes[3]) !== -1 && array_p2.indexOf(boxes[4]) !== -1 && array_p2.indexOf(boxes[5]) !== -1) ||
                    (array_p2.indexOf(boxes[6]) !== -1 && array_p2.indexOf(boxes[7]) !== -1 && array_p2.indexOf(boxes[8]) !== -1) ||

                    (array_p2.indexOf(boxes[0]) !== -1 && array_p2.indexOf(boxes[3]) !== -1 && array_p2.indexOf(boxes[6]) !== -1) ||
                    (array_p2.indexOf(boxes[1]) !== -1 && array_p2.indexOf(boxes[4]) !== -1 && array_p2.indexOf(boxes[7]) !== -1) ||
                    (array_p2.indexOf(boxes[2]) !== -1 && array_p2.indexOf(boxes[5]) !== -1 && array_p2.indexOf(boxes[8]) !== -1) ||

                    (array_p2.indexOf(boxes[0]) !== -1 && array_p2.indexOf(boxes[4]) !== -1 && array_p2.indexOf(boxes[8]) !== -1) ||
                    (array_p2.indexOf(boxes[2]) !== -1 && array_p2.indexOf(boxes[4]) !== -1 && array_p2.indexOf(boxes[6]) !== -1)
                ) {
                    winner.innerText = "O Won The Game";
                    scoreO++;
                    scoreOElement.innerText = scoreO;
                } else if (
                    array.length === 9
                ) {
                    winner.innerText = "It's a Draw";
                }
            }
        });
    });

    reset.addEventListener("click", function() {
        boxes.forEach(function(box) {
            box.innerText = "";
        });
        array = [];
        array_p1 = [];
        array_p2 = [];
        winner.innerText = "";
    });

};