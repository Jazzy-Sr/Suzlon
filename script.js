document.addEventListener('DOMContentLoaded', function() {

    const screenData = [
        { era: '1995-1999', headline: "30 Years of<br>Performance,<br>Progress, and<br>Possibilities", subhead: "India's most trusted wind energy company", body: "START THE JOURNEY >", imageDesktop: 'slide0-desktop.jpg', imageMobile: 'slide0-mobile.jpg' },
        { era: '1995-1999', headline: '1995', subhead: 'Formation of Suzlon Energy Limited', body: "India's clean energy future took root.<BR> It promised power to all, freedom from<br>pollution, and gentler planet in return. ", imageDesktop: 'slide1-desktop.jpg', imageMobile: 'slide1-mobile.jpg' },
        { era: '1995-1999', headline: '1996', subhead: 'First 0.27 MW Wind Turbine Commissioned', body: 'In Gujarat, Dhank welcomed a spinning giant of their own, generating electricity from thin air and signalling a new age.', imageDesktop: 'slide2-desktop.jpg', imageMobile: 'slide2-mobile.jpg' },
        { era: '1995-1999', headline: '1997', subhead: 'First Wind Energy Manufacturing Facility', body: 'India began its domestic manufacturing journey in wind energy with Suzlon\'s first WTG manufacturing facility in Daman, quality-certified by Det Norske Veritas.', imageDesktop: 'slide3-desktop.jpg', imageMobile: 'slide3-mobile.jpg' },
        { era: '2000-2004', headline: '2000', subhead: 'First Private-Sector Project', body: 'India Inc. bought into the promise of wind energy, reducing its power costs and carbon footprint alike.', imageDesktop: 'slide4-desktop.jpg', imageMobile: 'slide4-mobile.jpg' },
        { era: '2000-2004', headline: '2001', subhead: 'First 1 MW Wind Turbine Commissioned', body: 'India leapt from kilowatts to its first megawatt wind turbine platform, on par with Europe.', imageDesktop: 'slide5-desktop.jpg', imageMobile: 'slide5-mobile.jpg' },

        { era: '2000-2004', headline: '2002', subhead: 'First \'Made in India\' Blades Dispatched', body: 'With blades manufactured in India for the first time at Daman, Suzlon\'s S-60 blades marked another breakthrough in wind technology manufacturing for the nation.', imageDesktop: 'slide6-desktop.jpg', imageMobile: 'slide6-mobile.jpg' },

        /* SCREEN 8 (2003) — FIXED: use subhead/subhead2 + body/body2 so both render */
        { era: '2000-2004', headline: '2003',
          subhead: 'Asia\'s Largest Wind Park in Maharashtra',
          body: 'Maharashtra\'s Vankusawade Wind Park provided reliable energy to India\'s key corporates and an excellent investment opportunity to investors.',
          subhead2: '<br>First Export Order on its Way',
          body2: 'India\'s first wind energy export to the world began with the US, marking the start of a global journey.',
          imageDesktop: 'slide7-desktop.jpg', imageMobile: 'slide7-mobile.jpg' },
        { era: '2000-2004', headline: '2005', subhead: '1,000 MW Milestone Crossed', body: 'India\'s wind energy sector gained solid ground with this milestone, marking the beginning of a new phase of a self-reliant India.',
		 subhead2: '<br>BTM Report Ranks Suzlon 9th Globally',
		 body2: 'India entered the global top ten, giving confidence to investors that homegrown technology could compete worldwide.',
		 imageDesktop: 'slide8-desktop.jpg', imageMobile: 'slide8-mobile.jpg' },
        { era: '2000-2004', headline: '2005', subhead: 'First 2 MW Turbine Commissioned', body: 'Suzlon dedicated India\'s largest turbine to the nation on Independence Day, symbolising freedom from fossil fuels and a new kind of power.', imageDesktop: 'slide9-desktop.jpg', imageMobile: 'slide9-mobile.jpg' },
        { era: '2005-2009', headline: '2006', subhead: 'Hansen Transmission Acquisition', body: 'Belgium\'s Hansen Transmission joined the family, ensuring reliable gearboxes that keep turbines spinning for decades.', 
		subhead2: '<br>Ranked Number 5 WTG Manufacturer Globally',		body2: 'India earned global recognition, proving that world-class wind technology could be made in India and taken to the world.', 
		imageDesktop: 'slide10-desktop.jpg', imageMobile: 'slide10-mobile.jpg' },
        { era: '2005-2009', headline: '2006', subhead: 'IPO Opens with Overwhelming Response', body: 'As everyday investors rallied behind India\'s wind energy revolution, Suzlon\'s IPO was oversubscribed by 15 times on Day 1, making it \'IPO of the Year\'.', imageDesktop: 'slide11-desktop.jpg', imageMobile: 'slide11-mobile.jpg' },
        { era: '2005-2009', headline: '2007', subhead: 'SE Forge Limited Formed', body: 'A turning point in backward integration for India\'s wind energy supply chain, foundries began shaping turbine backbones with precision and pride.', 
		 subhead2: '<br>European Market Entry',
		 body2: 'Portugal welcomed Indian wind technology, proving that developing nations could power developed economies sustainably.',
		 imageDesktop: 'slide12-desktop.jpg', imageMobile: 'slide12-mobile.jpg' },
        { era: '2005-2009', headline: '2007', subhead: 'Asia\'s First Blade Testing Facility', body: 'India joined global leaders like the Netherlands and the US to qualify and certify wind energy technology for international standards.', 
		 subhead2: '<br>First Wind Energy Company to Receive FDI',
		 body2: 'A 40 MW project from a global company made Suzlon the only Indian manufacturer to attract foreign direct investment in the Indian wind energy sector.',		 
		 imageDesktop: 'slide13-desktop.jpg', imageMobile: 'slide13-mobile.jpg' },
        { era: '2005-2009', headline: '2008', subhead: 'Harvard Business School Case Study', body: '\'The Suzlon Edge\' entered the Harvard Business School curriculum, taking Indian innovation into classrooms that shape future leaders.', imageDesktop: 'slide14-desktop.jpg', imageMobile: 'slide14-mobile.jpg' },
        { era: '2010-2014', headline: '2010', subhead: 'Ranked Number 3 WTG Manufacturer Globally', body: 'The only Indian wind energy company to reach the global top three, proving Indian wind engineering is world-class.', imageDesktop: 'slide15-desktop.jpg', imageMobile: 'slide15-mobile.jpg' },
        { era: '2010-2014', headline: '2011', subhead: '5 GW Milestone and New Global HQ', body: 'With more clean power coming to the country, India also became home to one of the world\'s greenest corporate campuses, Suzlon One Earth.', imageDesktop: 'slide16-desktop.jpg', imageMobile: 'slide16-mobile.jpg' },
        { era: '2010-2014', headline: '2014', subhead: 'Asia\'s Largest Wind Park in Gujarat', body: 'At 1,100 MW, the Kutch wind park became a beacon of hope to combat climate change on a large scale', 
		 subhead2: '<br>Hybrid Lattice Tower Introduced',
		 body2: 'Installed in Gujarat, the 120-metre tower achieved greater heights and improved output, earning a prestigious Eco Innovation award.',
		 imageDesktop: 'slide17-desktop.jpg', imageMobile: 'slide17-mobile.jpg' },
        { era: '2010-2014', headline: '2017', subhead: 'First Wind Farm Completes 20 Years & Suzlon surpasses the milestone of 11 GW installed wind energy in India', body: 'Twenty years of uninterrupted clean power proved that Indian-made technology could stand the test of time and quality. Wind power reached more cities, industries, and homes, improving lives and strengthening India\'s clean energy leadership.', imageDesktop: 'slide18-desktop.jpg', imageMobile: 'slide18-mobile.jpg' },
        { era: '2015-2019', headline: '2018', subhead: 'S128: Largest WTG Commissioned', body: 'India\'s largest turbine at Sanganeri captured more wind from smaller plots, maximising farmers\' rental income.', imageDesktop: 'slide19-desktop.jpg', imageMobile: 'slide19-mobile.jpg' },
        { era: '2015-2019', headline: '2023', subhead: '20 GW Installed Worldwide', body: 'Across 17 countries, Indian wind energy made its mark in a short span, standing toe to toe with global engineering and quality benchmarks.', 
		subhead2: '<br>S144, 3 MW Platform Makes Low-Wind Sites Work',
		 body2: 'A new generation of turbines, built for India\'s diverse weather conditions, delivers more low-cost power and greater care to nature.',		 
		 imageDesktop: 'slide20-desktop.jpg', imageMobile: 'slide20-mobile.jpg' },
        { era: '2020-2024', headline: '2024', subhead: 'NTPC Green Energy Order', body: 'Largest wind energy order of 1,166 MW placed, a win for clean air, green growth, and the children who will inherit tomorrow.', imageDesktop: 'slide21-desktop.jpg', imageMobile: 'slide21-mobile.jpg' }
    ];

    const topNavData = [
        { label: '1995-1999', screenIndex: 1 },
        { label: '2000-2004', screenIndex: 4 },
        { label: '2005-2009', screenIndex: 10 },
        { label: '2010-2014', screenIndex: 15 },
        { label: '2015-2019', screenIndex: 19 },
        { label: '2020-2024', screenIndex: 21 }
    ];

    const screenContainer = document.getElementById('screen-container');
    const topNavContainer = document.getElementById('top-nav');
    const dotNavContainer = document.getElementById('dot-nav');

    let currentScreenIndex = 0;
    let isScrolling = false;
    let screens = [];

    function buildScreens() {
        // This is a special separate block just for the main page background and intro text.
        document.body.style.setProperty('--bg-desktop', `url(images/${screenData[0].imageDesktop})`);
        document.body.style.setProperty('--bg-mobile', `url(images/${screenData[0].imageMobile})`);
        
        // Build the 22 screens
        screenData.forEach((data, index) => {
            const screen = document.createElement('section');
            let alignmentClass;
            
            // --- NEW Alignment Logic remains the same ---
            if (index === 0) {
                 alignmentClass = 'align-left-center';
            } else {
                const alignmentPattern = [ 'align-left-center', 'align-right-center' ];
                alignmentClass = alignmentPattern[(index-1) % 2];
            }
            screen.className = `screen ${alignmentClass}`;
            screen.id = `screen-${index}`;

            // Build subsections HTML: supports (subhead/body) + (subhead2/body2) OR subsections[]
            let subsectionsHTML = "";
            if (Array.isArray(data.subsections) && data.subsections.length) {
                subsectionsHTML = data.subsections.map(sb => `
                    <h2 class="screen-subhead">${sb.subhead || ""}</h2>
                    <p class="screen-body">${sb.body || ""}</p>
                `).join("");
            } else {
                if (data.subhead || data.body) {
                    subsectionsHTML += `
                        <h2 class="screen-subhead">${data.subhead || ""}</h2>
                        <p class="screen-body">${data.body || ""}</p>
                    `;
                }
                if (data.subhead2 || data.body2) {
                    subsectionsHTML += `
                        <h2 class="screen-subhead">${data.subhead2 || ""}</h2>
                        <p class="screen-body">${data.body2 || ""}</p>
                    `;
                }
            }
            
            screen.innerHTML = `
                <div class="screen-foreground-bg"></div>
                <div class="screen-content">
                    <h1 class="screen-headline">${data.headline}</h1>
                    ${subsectionsHTML}
                </div>
            `;

            // Set the foreground image for slides 2-22 (index 1-21)
            if (index > 0) {
                const foregroundBg = screen.querySelector('.screen-foreground-bg');
                foregroundBg.style.setProperty('--bg-desktop', `url(images/${data.imageDesktop})`);
                foregroundBg.style.setProperty('--bg-mobile', `url(images/${data.imageMobile})`);
            }
            
            screenContainer.appendChild(screen);
        });
        screens = document.querySelectorAll('.screen');
    }

    function buildTopNav() {
        topNavData.forEach(data => {
            const link = document.createElement('a');
            link.href = `#`;
            link.textContent = data.label;
            link.dataset.targetIndex = data.screenIndex;
            topNavContainer.appendChild(link);
        });
    }

    function buildDotNav() {
        screenData.forEach((data, index) => {
            const link = document.createElement('a');
            link.href = `#`;
            link.dataset.targetIndex = index;
            dotNavContainer.appendChild(link);
        });
    }

    function goToScreen(index) {
        if (index < 0 || index >= screens.length) return;
        currentScreenIndex = index;
        screens.forEach((screen, i) => {
            screen.classList.toggle('active-screen', i === currentScreenIndex);
        });
        updateNavigation();
    }

    function updateNavigation() {
        const topNavLinks = document.querySelectorAll('.top-nav a');
        const dotNavLinks = document.querySelectorAll('.dot-nav a');
        
        dotNavLinks.forEach((link, i) => {
            link.classList.toggle('active', i === currentScreenIndex);
        });

        const currentEra = screenData[currentScreenIndex]?.era;
        topNavLinks.forEach(link => {
            link.classList.toggle('active', link.textContent === currentEra);
        });
    }

    function handleScroll(event) {
        if (isScrolling) return;
        isScrolling = true;
        if (event.deltaY > 0) {
            goToScreen(currentScreenIndex + 1);
        } else {
            goToScreen(currentScreenIndex - 1);
        }
        setTimeout(() => { isScrolling = false; }, 1000);
    }

    function init() {
        if (!screenContainer) return;
        buildScreens();
        buildTopNav();
        buildDotNav();
        goToScreen(0);
        
        window.addEventListener('wheel', handleScroll);
        topNavContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                goToScreen(parseInt(e.target.dataset.targetIndex));
            }
        });
        dotNavContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                goToScreen(parseInt(e.target.dataset.targetIndex));
            }
        });
    }
    
    init();
});
