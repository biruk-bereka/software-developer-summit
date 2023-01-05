const menuBar = document.querySelector('.mobile-header');
const closeBar = document.getElementById('close-menu');
const header = document.querySelector('.header');
const topNav = document.querySelector('.top-nav');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.links');

function openMenu() {
  menuBar.classList.toggle('invisible');
  header.classList.toggle('visible');
  topNav.classList.toggle('invisible');
  mainNav.classList.toggle('align-items');
  navLinks.classList.toggle('align-items');
  links.classList.toggle('align-items');
}

function closeMenu() {
  header.classList.toggle('visible');
  menuBar.classList.toggle('invisible');
  closeBar.classList.toggle('invisible');
  topNav.classList.toggle('invisible');
  mainNav.classList.toggle('align-items');
  navLinks.classList.toggle('align-items');
  links.classList.toggle('align-items');
}

menuBar.addEventListener('click', openMenu);
closeBar.addEventListener('click', closeMenu);

// Create Featured Speakers

const featuredSpeakers = document.querySelector('.featured-speakers');
const title = document.createElement('h2');
title.innerText = 'Featured Speakers';
title.classList.add('header');

const titleDecoration = document.createElement('img');
titleDecoration.src = '/assets/images/title_decoration.png';
titleDecoration.alt = 'title decoration';
titleDecoration.classList.add('title-decoration');

const speakers = [
  {
    name: 'Venkat Subramaniam',
    profession: 'Founder, Agile Developer, Inc.',
    details: `Dr. Venkat Subramaniam is an award-winning author, founder of
    Agile Developer, Inc., creator of agilelearner.com, and an
    instructional professor at the University of Houston`,
    picture: 'assets/images/speakers/speaker-01.jpeg',
    decoration: '/assets/images/speakers/speaker_decoration.png',
  },
  {
    name: 'Emily Jiang',
    profession: 'Microservices Architect, IBM',
    details: ` Emily Jiang is a Java Champion. She is Liberty Microservices
    Architect and Advocate, Senior Technical Staff Member (STSM) in
    IBM, based at Hursley Lab in the UK.`,
    picture: 'assets/images/speakers/speaker-02.jpeg',
    decoration: '/assets/images/speakers/speaker_decoration.png',
  },
  {
    name: 'Michael Carducci',
    profession: 'Software Architect & Magician',
    details: `Michael Carducci is a hands-on software architect, consultant,
    entrepreneur, entertainer, and speaker with a reputation for
    doing the impossible.`,
    picture: 'assets/images/speakers/speaker-03.jpeg',
    decoration: '/assets/images/speakers/speaker_decoration.png',
  },
  {
    name: 'Abir Das',
    profession: 'Masters Student (Operational Research)',
    details: `Abir Das is currently pursuing his masters degree in Operational
    Research From University Of Delhi. He received bachelor's degree
    from Calcutta University in Statistics.`,
    picture: 'assets/images/speakers/speaker-04.jpeg',
    decoration: '/assets/images/speakers/speaker_decoration.png',
  },
  {
    name: 'Daniel Oh',
    profession: ' Senior Principal Developer Advocate, Red Hat',
    details: ` Daniel Oh is a Senior Principal Developer Advocate at Red Hat to
    evangelize developers for building Cloud-Native Microservices
    and Serverless Functions with Cloud-Native Runtimes.`,
    picture: 'assets/images/speakers/speaker-05.jpeg',
    decoration: '/assets/images/speakers/speaker_decoration.png',
  },
  {
    name: 'Pooja Subramanian',
    profession: 'Market Technology Partner, Australia, ThoughtWorks',
    details: `Pooja joined ThoughtWorks as a Graduate Consultant Developer
    about 11 years ago and since then she has led multiple
    co-sourced and distributed engagements in domains like retail,
    IoT, and healthcare for enterprises and scale-ups.`,
    picture: 'assets/images/speakers/speaker-06.jpeg',
    decoration: '/assets/images/speakers/speaker_decoration.png',
  },

];

const speakersContainer = document.createElement('div');
speakersContainer.classList.add('speakers');

for (let i = 0; i < speakers.length; i += 1) {
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');

  const picture = document.createElement('img');
  picture.classList.add('speaker-image');
  picture.src = speakers[i].picture;
  picture.alt = `${speakers[i].name} image`;

  const profile = document.createElement('div');
  profile.classList.add('profile');

  const name = document.createElement('h4');
  name.classList.add('name');
  name.textContent = speakers[i].name;
  const profession = document.createElement('p');
  profession.classList.add('profession');
  profession.textContent = speakers[i].profession;
  const decoration = document.createElement('img');
  decoration.src = speakers[i].decoration;
  decoration.alt = 'profession decoration';
  const details = document.createElement('p');
  details.textContent = speakers[i].details;

  profile.append(name, profession, decoration, details);
  speaker.append(picture, profile);
  speakersContainer.append(speaker);
}

const speakerButton = document.createElement('button');
speakerButton.classList.add('speaker-button', 'more-button');
speakerButton.innerHTML = 'MORE <i class="fa-solid fa-angle-down"></i>';

featuredSpeakers.append(title, titleDecoration, speakersContainer, speakerButton);

const moreSpeakers = document.querySelectorAll('.speaker');

speakerButton.addEventListener('click', () => {
  const buttonName = speakerButton.classList[1];
  if (buttonName === 'more-button') {
    for (let i = 3; i < moreSpeakers.length; i += 1) {
      moreSpeakers[i].style.display = 'flex';
    }
    speakerButton.classList.remove('more-button');
    speakerButton.innerHTML = 'LESS <i class="fa-sharp fa-solid fa-angle-up"></i>';
    speakerButton.classList.add('less-button');
  }
  if (buttonName === 'less-button') {
    for (let i = 3; i < moreSpeakers.length; i += 1) {
      moreSpeakers[i].style.display = 'none';
    }
    speakerButton.classList.remove('less-button');
    speakerButton.innerHTML = 'MORE <i class="fa-solid fa-angle-down"></i>';
    speakerButton.classList.add('more-button');
  }
});
