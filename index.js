//nav bar
//creating elements

const div = document.getElementById('content');

const nav = document.createElement('nav');
    const logo = document.createElement('logo')
    const unOrdered = document.createElement('ul');
    const homeList = document.createElement('li');
    const aboutUs = document.createElement('li');
    const menuList = document.createElement('li');
    const galleryList = document.createElement('li');
    const contactList = document.createElement('li');


//adding textContent
    homeList.textContent = 'Home';
    aboutUs.textContent = 'About';
    menuList.textContent = ' Delicious Menu';
    galleryList.textContent = 'Gallery'
    contactList.textContent = 'Contact';
    nav.classList=('navbar');
    logo.textContent='Food Velly';
//classList
    logo.classList='logo-text';
    homeList.classList = 'nav-text';
    menuList.classList = 'nav-text';
    aboutUs.classList = 'nav-text';
    galleryList.classList = 'nav-text';
    contactList.classList = 'nav-text';
    
//appending
    unOrdered.appendChild(logo);
    unOrdered.appendChild(homeList);
    unOrdered.appendChild(aboutUs);
    unOrdered.appendChild(menuList);
    unOrdered.appendChild(galleryList);
    unOrdered.appendChild(contactList);
    nav.appendChild(unOrdered);
    div.appendChild(nav);
  

   
 //mainContent

    const mainContent = document.createElement('div');

    // creating DOM elements
    const intro = document.createElement('section');
    const heading = document.createElement('h1');
    const description = document.createElement('p');
    const descriptions = document.createElement('p');
    const descriptionss = document.createElement('p');
    const descriptionsss = document.createElement('p');
    const menuBtn = document.createElement('button');
    const closingText = document.createElement('h2');


    //text content
    heading.textContent = "Enjoy Our Delicious Meal...";
    description.textContent = 'Food Valley has received numerous awards including:best lunch from the ';
    descriptions.textContent ='readers of eye magazine;best food from now magazines critics pick;best '; 
    descriptionss.textContent = 'late night munchies from dineto, and has been recommended in toronto ';
    descriptionsss.textContent = 'lifes restaurant guide for best food.';
    menuBtn.textContent = 'Order Online Here';
    closingText.textContent = 'tasty meals everyday :)';

    //creating class lists
    mainContent.classList = 'main-content';
    heading.classList = 'home-header';
    description.classList = 'home-description';
    descriptions.classList = 'home-description';
    descriptionss.classList = 'home-description';
    descriptionsss.classList = 'home-description';
    menuBtn.classList = 'home-button';
    closingText.classList = "closing-text"



    //appending Elements
    intro.appendChild(heading);
    intro.appendChild(description);
    intro.appendChild(descriptions);
    intro.appendChild(descriptionss);
    intro.appendChild(descriptionsss);
    intro.appendChild(menuBtn);
    intro.appendChild(closingText);
    mainContent.appendChild(intro);
    div.appendChild(mainContent);

    
    
    //contact Session
    
    const contactContent = document.createElement('div');
    

    // creating DOM elements
    const contactBanner = document.createElement('section');
    const contactHeading = document.createElement('h1');
    const contactDesc = document.createElement('p');
    const contactNo = document.createElement('p');
    const physicalAdress = document.createElement('p');
    
    //creating Class Lists
    contactContent.classList = 'contact-wrapper';
    contactBanner.classList = 'contact-section';
    contactHeading.classList = 'contact-description';
    contactDesc.classList = 'menu-description';
    contactNo.classList = 'contact-no';
    physicalAdress.classList = 'physical-Adress';

   
    //creating textContent
    contactHeading.textContent = "Food Valleys Contact Details";
    contactDesc.textContent = 'FoodValley@gmail.com';
    contactNo.textContent = '015 516 2899';
    physicalAdress.textContent = 'The grove mall shop no.35'
    
    //appending elements
    contactContent.appendChild(contactBanner);
    contactContent.appendChild(contactHeading);
    contactContent.appendChild(contactDesc);
    contactContent.appendChild(contactNo);
    contactContent.appendChild(physicalAdress);
    div.appendChild(contactContent);