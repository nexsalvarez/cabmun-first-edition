const buttonInfo = document.querySelector('#info-button');
const buttonCommittees = document.querySelector ('#cmt-button');
const munInfo = document.querySelector('.info-content');
const munCommittees = document.querySelector('#committees-id');

function createContent (imagen, altText, titleH, contentP, textA, linkA, label) {
    const container = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h3');
    const parr = document.createElement ('p');
    const ancle = document.createElement ('a');

    container.classList.add('info-cabmun');

    image.src = imagen;
    image.alt = altText;
    title.innerText = titleH;
    parr.innerText = contentP;
    ancle.innerText = textA;
    ancle.setAttribute('href', linkA);
    ancle.setAttribute('target', '_blank');

    container.appendChild(image);
    container.appendChild(title);
    container.appendChild(parr);
    container.appendChild(ancle);

    return label.appendChild(container);
}

createContent('../img/cabmun-example.jpg', 'Fecha de CABMUN 2023', '23 - 25 Marzo 2023', 'Tienes la oportunidad de participar los días 23, 24 y 25 del mes de marzo en la Primera Edición del Modelo de Naciones Unidas del Colegio Andrés Bello.', 'Inscripciones', '#', munInfo);