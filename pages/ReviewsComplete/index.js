import React, {useState} from 'react';
import ReviewsComplete from './ReviewsComplete';

function Reviews(props) {
    const listReivews = [
        {
            url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            name: 'Susan Smith',
            direction: 'WEB DEVELOPER',
            text: 'Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry',
        },
        {
            url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
            name: 'Anna Johnson',
            direction: 'WEB DESIGNER',
            text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
            url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            name: 'Peter Jones',
            direction: 'WINTERN',
            text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
            url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            name: 'Bill Anderson',
            direction: 'THE BOSS',
            text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
        },
    ];

    const [listReview, setListReview] = useState(listReivews);
    return (
        <div>
            <h1><b>Our Reviews</b></h1>
            <hr></hr>

            {listReivews.map(e=> <ReviewsComplete url={e.url} name={e.name} direction={e.direction} text={e.text} />)}
        </div>
    );
}

export default Reviews;