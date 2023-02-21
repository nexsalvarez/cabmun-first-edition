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

createContent('./src/img/cabmun-example.jpg', 'Fecha de CABMUN 2023', '23 - 25 Marzo 2023', 'Tienes la oportunidad de participar los días 23, 24 y 25 del mes de marzo en la Primera Edición del Modelo de Naciones Unidas del Colegio Andrés Bello.', 'Inscripciones', '#', munInfo);

createContent('./src/img/cabmun-pnuma.jpg', 'Portada del comité PNUMA', 'PNUMA', 'Este es el comité del Programa de las Naciones Unidas para el Medio Ambiente, donde el tópico a debatir será la "Contaminación petrolífera en el Delta del Níger". La modalida de este comité será individual.', 'Guía académica', '#', munCommittees);
createContent('./src/img/cabmun-crisis.jpg', 'Portada del comité de crisis', 'Crisis', 'En la crisis se estará simulando una reunión estratégica del Partido Comunista Chino, con el objetivo de la "Consolidación de China como primera potencia Mundial". La modalida de este comité será individual.', 'Guía académica', '#', munCommittees);
createContent('./src/img/cabmun-cdh.jpg', 'Portada del comité CDH', 'CDH', 'El Consejo de Derechos Humanos es el comité donde se estará debatiendo sobre las "Condiciones laborales de inmigrantes en Qatar". La modalida de este comité será agencia, es decir, pareja de participantes.', 'Guía académica', '#', munCommittees);
createContent('./src/img/cabmun-habitat.jpg', 'Portada del comité ONU-Hábitat', 'ONU-Hábitat', 'El Programa de las Naciones Unidas para el Asentamiento Humano es el comité que debatirá sobre la "Planificación urbana por desplazamiento de inmigrantes". La modalida de este comité será individual.', 'Guía académica', '#', munCommittees);
createContent('./src/img/cabmun-cpi.jpg', 'Portada del comité CPI', 'CPI', 'En el simulacro de la Corte Penal Internacional, el tema a tratar será la "Misión Internacional Independiente de Determinación de los Hechos sobre Venezuela". La modalida de este comité será individual.', 'Guía académica', '#', munCommittees);

buttonInfo.addEventListener('click', () => {
    munCommittees.classList.replace('committees-content', 'inactive');
    munInfo.classList.replace('inactive', 'info-content');
    buttonCommittees.classList.remove('active-btn');
    buttonInfo.classList.add('active-btn');
});
buttonCommittees.addEventListener('click', () => {
    munInfo.classList.replace('info-content', 'inactive');
    munCommittees.classList.replace('inactive', 'committees-content');
    buttonInfo.classList.remove('active-btn');
    buttonCommittees.classList.add('active-btn');
});