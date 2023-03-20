let images = ['img/img2.jpg', 'img/img3.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg', 'img/img11.jpg', 'img/img12.jpg', 'img/img13.jpg', 'img/img14.jpg', 'img/img15.jpg', 'img/img4.jpg', 'img/img6.jpg', 'img/img5.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img10.jpg', 'img/img11.jpg', 'img/img12.jpg', 'img/img13.jpg', 'img/img14.jpg', 'img/img15.jpg', 'img/img4.jpg', 'img/img5.jpg'];


function showImages() {
    let content = document.getElementById('img-container');

    for (let i = 0; i < images.length; i++) {
        content.innerHTML += generateShowImg(i);
    }
}


function generateShowImg(i) {
    return `<div onclick = "openImg(${i})" >
                <img src="${images[i]}" id="img" class="img">
            </div>
            `;
}


function openImg(x) {
    document.getElementById('img').classList.remove('img');
    document.getElementById('body').classList.add('overflow');
    document.getElementById('show-img').classList.remove('d-none');
    let showImg = document.getElementById('show-img');
    const image = images[x];

    showImg.innerHTML = generateOpenImg(image, x);
}

function generateOpenImg(i, x) {
    

    return `<img src=${i} class="show-img">
            <img src="img/close-white.png" id="close-icon" onclick="closeImg()">
            <img src="img/arrow.png" id="arrow-1" onclick="nextImg(${x})">
            <img src="img/arrow.png" id="arrow-2" onclick="previousImg(${x})">
            `;  
}

function closeImg() {
    document.getElementById('body').classList.remove('overflow');
    document.getElementById('img').classList.add('img');
    document.getElementById('show-img').classList.add('d-none');
}


function nextImg(x) {
    x++;

    if (x > 25) {
        x = 0;
    }
    openImg(x);
}


function previousImg(x) {
    x--;

    if (x < 0) {
        x = 25;
    }
    openImg(x);
}