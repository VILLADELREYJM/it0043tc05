let container = document.getElementById("flex-container");

function Reset() {
    container.style.flexDirection = "row";
    container.style.justifyContent = "start";
    container.style.alignItems = "stretch";
    container.style.gap = "0px";
    document.getElementById("gap").value = 0;

    document.getElementById("box-i1").value = 0;
    document.getElementById("box-i2").value = 0;
    document.getElementById("box-i3").value = 0;

    FlexGrow(1, 0);
    FlexGrow(2, 0);
    FlexGrow(3, 0);
}

function UpdateGap() {
    const gap = parseInt(document.getElementById("gap").value, 10);
    container.style.gap = `${gap}px`;
}

function Direction(x) {
    if (x === 1) {
        container.style.flexDirection = "row";
    } else if (x === 2) {
        container.style.flexDirection = "column";
    }
}

function JustifyContent(x) {
    const justifyContentMap = ["start", "center", "end", "space-between", "space-around", "space-evenly"];
    container.style.justifyContent = justifyContentMap[x - 1];
}

function AlignItems(x) {
    const alignItemsMap = ["start", "center", "end"];
    container.style.alignItems = alignItemsMap[x - 1];
}

function FlexGrow(number, value) {
    document.getElementById(`box${number}`).style.flexGrow = value;
}

function UpdateGrow(x) {
    if (x === 1) {
        for (let i = 1; i <= 3; i++) {
            const box = document.getElementById(`box${i}`);
            const grow = parseInt(box.style.flexGrow, 10) + 1;
            box.style.flexGrow = grow;
            document.getElementById(`box-i${i}`).value = grow;
        }
    } else if (x === 2) {
        for (let i = 1; i <= 3; i++) {
            const box = document.getElementById(`box${i}`);
            box.style.flexGrow = 0;
            document.getElementById(`box-i${i}`).value = 0;
        }
    }
}
