function handleOptions2D() {
    const p1 = document.getElementById("p-range1");
    const p2 = document.getElementById("p-range2");
    const range1 = document.getElementById("range1").value;
    const range2 = document.getElementById("range2").value;
    const transform = document.getElementById("transforms2D").value;
    const target = document.getElementById("target");
    p1.textContent = range1;
    p2.textContent = range2;
    target.style.transform = "none";

    if (transform == 'translate') {
        target.style.transform = `translate(${range1}px, ${range2}px)`;
    } else if (transform == 'rotate') {
        target.style.transform = `rotate(${range1}deg)`;
    } else if (transform == 'rotateX') {
        target.style.transform = `rotateX(${range1}deg)`;
    } else if (transform == 'rotateY') {
        target.style.transform = `rotateY(${range1}deg)`;
    } else if (transform == 'scale') {
        target.style.transform = `scale(${1+(range1/100)}, ${1+(range2/100)})`;
    } else if (transform == 'skew') {
        target.style.transform = `skew(${range1}deg, ${range2}deg)`;
    }

}

function handleOptions3D() {
    const p1 = document.getElementById("p-range1");
    const p2 = document.getElementById("p-range2");
    const range1 = document.getElementById("range1").value;
    const range2 = document.getElementById("range2").value;
    const transform = document.getElementById("transforms3D").value;
    const target = document.getElementById("target");
    p1.textContent = range1;
    p2.textContent = range2;
    target.style.transform = "none";
    target.parentElement.style.perspective = 0;

    if (transform == 'perspective') {
        target.parentElement.style.perspective = `${(range1/2+100)/2}px`;
        target.style.transform = `rotateY(${range2}deg)`;
    } else if (transform == 'translateZ') {
        target.style.transform = `translateZ(${range1/25}px)`;
    } else if (transform == 'rotateX') {
        target.style.transform = `rotateX(${range1}deg)`;
    } else if (transform == 'rotateY') {
        target.style.transform = `rotateY(${range1}deg)`;
    } else if (transform == 'scale') {
        target.style.transform = `scale(${1+(range1/100)}, ${1+(range2/100)})`;
        target.style.transform = `scaleZ(${1+(range1/100)}px)`
    } else if (transform == 'skew') {
        target.style.transform = `skew(${range1}deg, ${range2}deg)`;
    }
}