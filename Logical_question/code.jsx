in this we have to create a list of members data stored those who have greater than age 20 and then we can remove it also if it is present in it and also return the size of members...


// my code


class StaffList {
    constructor(){
        this.member = [];
    }
    
    add(name, age){
        if(age>20){
            this.member.push(name);
            console.log(this)
            return(this.member) 
        }
        else if(age<=20){
            console.log("Staff member age must be greater than 20");
        }
    }
    remove(name){
        if(this.member.indexOf(name)){
            this.member.splice(this.member.indexOf(name))
        }
        else{
            return false;
        }
    }
    getSize(){
        return this.member.length
    }
}



// google code

function readLine() {
  return inputString[currentLine++];
}
class StaffList {
    
    staffList = [];
    add(name,age){
    if(Number(age)>20){
        if(this.staffList.find(i => i.name === name) !=0){
        this.staffList.push({name,age})
        }
    }
    else{
    throw new Error('Staff member age must be greater than 20');
    }
    }

    remove(name){
        const foundName = this.staffList.find(i=>i.name === name);
        if(foundName){
        this.staffList = this.staffList.filter(i => i.name !== name);
        return true;
        }
        return false;
    }

    getSize(){
    return this.staffList.length;
    }
}








in the secound program we have to make 3 function which check the array of it and return the data if given input is present or not, inshort it finds the input number from given numbers



// mycode

function datafinder(data){
    var find = function(minrange, maxrange, value){
        for (let i = minrange; i<= maxrange; i++){
            if(data[i] == value){
                return data
            }
            else{
                return "Not found"
            }
        } 
    }
}




// google code


function dataFinder(data) {
    var find = function (minRange, maxRange, value) {
    if (minRange < 0 || maxRange >= data.length) {
      throw new Error("Invalid range");
    }
    for (let i = minRange; i <= maxRange; i++) {
      if (data[i] === value) {
        return true;
      }
    }
    return false;
  };
  return find;
}



// basic react scrollbar



import React, {useState} from 'react';

function Slides({slides}) {
        const[index, setIndex] = useState(0);
        const rest = () => {setIndex(0)}
        const prew = () => {setIndex(i=> i-1)}
        const next = () => {setIndex(i=> i+1)}
    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={()=>rest()} disabled={index===0} data-testid="button-restart" className="small outlined">Restart</button>
                <button onClick={()=>prew()} disabled={index===0} data-testid="button-prev" className="small">Prev</button>
                <button onClick={()=>next()} disabled={index===slides.length-1} data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
            <h1 data-testid='title'> {slides[index].title}</h1>
        <p data-testid='text'> {slides[index].text}</p>
            </div>
        </div>
    );

}

const SLIDES = [
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamental exercises."
    },
    {
        title: "First, 10 push-ups",
        text: "Do 10 reps. Remember about full range of motion. Don't rush."
    },
    {
        title: "Next, 20 squats",
        text: "Squats are important. Remember to keep your back straight."
    },
    {
        title: "Finally, 15 sit-ups",
        text: "Slightly bend your knees. Remember about full range of motion."
    },
    {
        title: "Great job!",
        text: "You made it, have a nice day and see you next time!"
    }
];


export default Slides;




// react practise 2 : sorting article



import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const sortarticle = articles.sort((a,b)=> b.upvotes - a.upvotes)
    const [data, setData] = useState(sortarticle);

    const upvoted = () => {
        const copy = [...articles]
        const votesdata = copy.sort((a,b)=> b.upvotes - a.upvotes)
        setData(votesdata)
    }
    const recent = () => {
        const copy = [...articles]
        const datedata = copy.sort((a,b)=>(new Date(b.date) - new Date(a.date)))
        setData(datedata)
    }
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={() => upvoted()} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={()=> recent()} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={data}/>
        </div>
    );

}

export default App;



import React from 'react';

const Articles = ({ articles }) => {
  return (
    <div className='card w-50 mx-auto'>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.length > 0 &&
            articles.map((art, i) => (
              <tr data-testid='article' key={i}>
                <td data-testid='article-title'>{art.title}</td>
                <td data-testid='article-upvotes'>{art.upvotes}</td>
                <td data-testid='article-date'>{art.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;


const ARTICLES = [
    {
      title: "A message to our customers",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "Alphabet earnings",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "Artificial Mountains",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "Scaling to 100k Users",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      title: "the Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "Simple text editor has 15k monthly users",
      upvotes: 7,
      date: "2010-12-31",
    },
  ];
  


  // intermediate js:

    // user transcation

    const axios =  require('axios');

async function getNumTransactions(username) {
     try {
        const {data} = await axios.get(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`);
        if(data.data && data.data.length !==0){
            const userID = data.data[0].id;
            const response = await axios.get(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userID}`)
            return response.data.total;
        } else {
            return "Username Not Found";
        } 
    } catch (error){
        console.log(error);
    }
}


// acivity list

function Activity(amount) {
  this.setAmount(amount);
}
Activity.prototype.setAmount = (amount)=>{
  if(amount<=0){
      return false
  }
  else{
      this.amount = amount;
      return true
  }
}
Activity.prototype.getAmount = () => {
  return this.amount
}

function Payment(amount, receiver) {
  this.setAmount(amount);
  this.setReceiver(receiver)
}
Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.setReceiver = (receiver)=>{
  this.receiver = receiver;
  return true;
}
Payment.prototype.getReceiver = () => {
  return this.receiver;
}

function Refund(amount, sender) {
  this.setAmount(amount);
  this.setSender(sender);
}
Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.setSender = (sender) => {
  this.sender = sender;
  return true;
}
Refund.prototype.getSender = (sender) => {
  return this.sender
}




frontend React

product validation

import React, {useState} from "react";
import "./index.css";

function ProductValidation () {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const isProductNameValid = productName.trim() !== "";
  const isQuantityValid = quantity.trim() !== "";

  const isSubmitDisabled = productName.trim() === "" || quantity.trim() === "";

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Your form submission logic goes here
  // };

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              onInput={handleNameChange}
              onBlur={handleNameChange}
              data-testid="name-input"
              className={`white large outlined error`}
              placeholder="Product name"
            />
            {isProductNameValid? null : (
              <p className="error-text form-hint" data-testid="name-input-error">
              Product name is required
            </p>
            )}
            
          </label>
          <label>
            <input
              type="number"
              data-testid="quantity-input"
              onInput={handleQuantityChange}
              onBlur={null}
              className={`white large outlined error`}
              placeholder="Quantity"
            />
            {isQuantityValid? null : (
               <p className="error-text form-hint" data-testid="quantity-input-error">
               Quantity is required
              </p>
            )}
           
          </label>
          <button className="mt-50" type="submit" data-testid="submit-button" disabled={isSubmitDisabled}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;


// dataFinder

function dataFinder(data) {
  var find = function (minRange, maxRange, value) {
  if (minRange < 0 || maxRange >= data.length) {
    throw new Error("Invalid range");
  }
  for (let i = minRange; i <= maxRange; i++) {
    if (data[i] === value) {
      return true;
    }
  }
  return false;
};
return find;
}



// node js

// recipe filter
router.get("/", (req, res) => {
  res.send(recipes).status(200);
});

router.get("/shopping-list", (req, res) => {
  const id = req.query.ids;
  if (!id) return res.sendStatus(400);

  let id_object = id.split(",");
  let arr = [];
  let data = [];

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < id_object.length; j++) {
      if (recipes[i].id == id_object[j]) {
        arr.push(id_object[j]);
      }
    }
  }

  if (arr.length == 0) return res.status(404).send("NOT_FOUND");

  for (let i = 0; i < arr.length; i++) {
    data.push(...recipes[arr[i] - 1].ingredients);
  }

  res.json(data).status(200);
});



SELECT DISTINCT prof.name AS "PROFESSOR.NAME", cou.name AS "COURSE.NAME"
FROM professor prof
INNER JOIN schedule sch 
ON sch.professor_id = prof.id
INNER JOIN course cou 
ON sch.course_id = cou.id
WHERE cou.department_id <> prof.department_id;