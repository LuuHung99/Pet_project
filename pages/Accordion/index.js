import React, {useState}from 'react';
import Accordion from './Accordion';

const listQuestion = [
  {
    id: 1,
    title: 'Do I have to allow the use of cookes?',
    infor: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.'
  },
  {
    id: 2,
    title: 'How do I change my My Page password?',
    infor: 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.'
  },
  {
    id: 3,
    title: 'What is BankID?',
    infor: 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.'
  },
  {
    id: 4,
    title: 'Whose birth number can I use?',
    infor: 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.'
  },
  {
    id: 5,
    title: 'When do I recieve a password ordered by letter?',
    infor: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan'
  },
]

function Accoring(props) {
  const [data, setData] = useState(listQuestion);
  const [showData, setShowData] = useState('');

  function showQuestion(id) {
    // console.log(setShowData('infor'));
    setShowData('infor');
    console.log(id);
    
  }

  const  hideQuestion =(id) => {
    console.log(id);
  }

    return (
        <div>
          {data.map ((e)=> {
            if(e.infor !== showData || showData === '')
              return <Accordion items={e} showQuestion={showQuestion} hideQuestion={hideQuestion}/>})}  
        </div>
    );
}

export default Accoring;