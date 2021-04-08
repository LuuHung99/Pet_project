import React, {useState} from 'react';
import OurMenu from './OurMenu';

const listMenu = [
    {
        id: 1,
        status: 'breakfast',
        url: 'https://react-projects-5-menu.netlify.app/images/item-1.jpeg',
        title: 'Buttermilk Pancakes',
        price: '$15',
        text: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed'
    },
    {
        id: 2,
        status: 'lunch',
        url: 'https://react-projects-5-menu.netlify.app/images/item-2.jpeg',
        title: 'Diner Double',
        price: '$15',
        text: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats'
    },
    {
        id: 3,
        status: 'shakes',
        url: 'https://react-projects-5-menu.netlify.app/images/item-3.jpeg',
        title: 'Godzilla Milkshake',
        price: '$15',
        text: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.'
    },
    {
        id: 4,
        status: 'breakfast',
        url: 'https://react-projects-5-menu.netlify.app/images/item-4.jpeg',
        title: 'Country Delight',
        price: '$15',
        text: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,'
    },
    {
        id: 5,
        status: 'lunch',
        url: 'https://react-projects-5-menu.netlify.app/images/item-1.jpeg',
        title: 'Egg Attack',
        price: '$15',
        text: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90 s pop-up'
    },
    {
        id: 6,
        status: 'shakes',
        url: 'https://react-projects-5-menu.netlify.app/images/item-6.jpeg',
        title: 'Oreo Dream',
        price: '$15',
        text: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday'
    },
    {
        id: 7,
        status: 'breakfast',
        url: 'https://react-projects-5-menu.netlify.app/images/item-7.jpeg',
        title: 'Bacon Overflow',
        price: '$15',
        text: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird'
    },
    {
        id: 8,
        status: 'lunch',
        url: 'https://react-projects-5-menu.netlify.app/images/item-8.jpeg',
        title: 'American Classic',
        price: '$15',
        text: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut'
    },
    {
        id: 9,
        status: 'shakes',
        url: 'https://react-projects-5-menu.netlify.app/images/item-9.jpeg',
        title: 'Quarantine Buddy',
        price: '$15',
        text: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.'
    },
]

function OurMenus(props) {
    const [data, setData] = useState(listMenu);
    const [showList, setShowList] = useState('all');

    const handleShowAll = (id) => {
        console.log(id.target);
    }

    const handleShowBreakfast = (id) => {
        // setShowList('breakfast');
        console.log(id.target);
    }

    const handleShowLunch = (id) => {
        // setShowList('lunch');
        console.log(id.target);

    }

    const handleShowShakes = (id) => {
        console.log(id.target);
        setShowList("shakes");
    }
    

    const renderStatus = data.filter(
        (items) => showList === 'all' || showList === items.status  )

    return (
        <div className="menu_container">
            <div className="menu">
                <h1 >Our Menu</h1>
                <hr />
                <ul>
                    <li onClick={handleShowAll}>All</li>
                    <li onClick={handleShowBreakfast}>Breakfast</li>
                    <li onClick={handleShowLunch}>Lunch</li>
                    <li onClick={handleShowShakes}>Shakes</li>
                </ul>
            
            </div>
            <div className="items">
                {data.map (e => <OurMenu items={e} renderStatus={renderStatus} />)}
            </div>
        </div>
        
    );
}

export default OurMenus;