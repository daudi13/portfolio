const containerBox = document.querySelector('.work-section__box');
const boxModal = document.querySelector('.modals');
const popUpName = document.querySelector('.project-name');
const closeBtn = document.querySelector('.close-btn');
const range = document.querySelector('.range');
const imageMobile = document.querySelector('#image-1');
const imageDesktop = document.querySelector('#image-2');
const popUpDesc = document.querySelector('.desc');
const tech = document.querySelector('.tech');

const updateSkills = (skill1, skill2, skill3) => `
<li class="tech__type">${skill1}</li>
<li class="tech__type">${skill2}</li>
<li class="tech__type">${skill3}</li>
`;

const createProfile = (project, role, year) => `
<p class="range__canopy">${project}</p>
<div class="range__circle"></div>
<p class="range__txt">${role}</p>
<div class="range__circle"></div>
<p class="range__txt">${year}</p>
`;

const modals = [{
  modalId: 'con-1',
  name: 'Tonic',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  imageOneMobile: './images/SnapshootPortfolio.png',
  order: 'order--one',
  imageOneDesktop: './images/Card-images/SnapshootPortfolioDesktop1.png',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
},
{
  modalId: 'con-2',
  name: 'Multi-Post Stories',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and ",
  imageOneMobile: '/images/SnapshootPortfolio(1).png',
  order: 'order--two',
  imageOneDesktop: './images/Card-images/SnapshootPortfolioDesktop2.png',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
},
{
  modalId: 'con-3',
  name: 'Facebook 360',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  imageOneMobile: './images/SnapshootPortfolio(2).png',
  order: 'order--one',
  imageOneDesktop: './images/Card-images/SnapshootPortfolioDesktop3.png',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
},
{
  modalId: 'con-4',
  name: 'Uber Navigation',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  imageOneMobile: './images/SnapshootPortfolio(3).png',
  order: 'order--two',
  imageOneDesktop: './images/Card-images/SnapshootPortfolioDesktop4.png',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
}];

function createCards(projects) {
  containerBox.innerHTML = ' ';
  projects.forEach((project, i) => {
    const htmlTemp = `
<div class="work-section__card">
<div class="work-section__card--img mobile"><img src="${project.imageOneMobile}" alt="card snap"></div>
<div class="work-section__card--img desktop ${project.order}"><img src="${project.imageOneDesktop}" alt="card snap"></div>
<div class="work-section__card--info">
<h3 class="project-name">${project.name}</h3>
<div class="range">${project.jobProfile}
</div>
<p class="general__desc">
${project.desc}
</p>
<ul class="tech">${project.skillSet}</ul>
<button type="button" class="btn see-project modal-${i}" id="one">See Project</button>
</div>
</div>
`;
    containerBox.insertAdjacentHTML('afterbegin', htmlTemp);
    document.querySelectorAll(`.modal-${i}`).forEach((btn) => btn.addEventListener('click', () => {
      boxModal.classList.add('active');
      popUpName.textContent = project.name;
      range.innerHTML = project.jobProfile;
      imageMobile.src = project.imageOneMobile;
      imageDesktop.src = project.imageOneDesktop;
      popUpDesc.textContent = project.desc;
      tech.innerHTML = project.skillSet;
    }));
  });

  closeBtn.addEventListener('click', () => {
    boxModal.classList.remove('active');
  });
}

createCards(modals);