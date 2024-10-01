in this we have to create a list of members data stored those who have greater than age 20 and then we can remove it also if it is present in it and also return the size of members...

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




// frontend React

// product validation

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


import java.util.Scanner;

abstract class Shape {
    int breadth, length;
    abstract void area();
    double k = Math.PI;
    int width1;
}

class Rectangle extends Shape {
    // Constructor to initialize breadth and length
    public Rectangle(int breadth, int length) {
        this.breadth = breadth;
        this.length = length;
    }

    @Override
    void area() {
        // Calculate and print the area of the rectangle
        int area = length * breadth;
        System.out.println(area);
    }
}

public class Program {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the breadth and length of the rectangle:");
        int breadth = sc.nextInt();
        int length = sc.nextInt();
        
        // Create Rectangle object with both breadth and length
        Rectangle a = new Rectangle(breadth, length);
        a.area();
    }
}


// angular

// temp. converter

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  mymodel: number;
  F: number;

  ngOnInit() {
  }
valuechange(newValue) {
  this.mymodel = newValue;
  this.F = Math.round((this.mymodel * 9/5 + 32)*10)/10;
  console.log(this.F);
}
valuechanges(newValue) {
  this.F = newValue;
  this.mymodel = Math.round(((this.F - 32) * 5/9)*10)/10;
  console.log(this.mymodel);
}
}

<div class="layout-column align-items-center mt-50">

<section class="layout-row align-items-center justify-content-between">
  <label>Celsius: </label>
  <input type="number" class="large" data-test-id="celsius-input" [ngModel]="mymodel" (ngModelChange)="valuechange($event)"/>
</section>

<section class="layout-row align-items-center justify-content-between">
    <label>Fahrenheit: </label>
    <input type="number" class="large" data-test-id="fahrenheit-input" [ngModel]="F" (ngModelChange)="valuechanges($event)"/>
</section>
</div>




// weather component

weatherData = [
  {
    "name": "San Jose",
    "temperature": "36º F",
    "wind": "31Kmph",
    "humidity": "66%"
  },
  {
    "name": "Seattle",
    "temperature": "30º F",
    "wind": "4Kmph",
    "humidity": "9%"
  },
  {
    "name": "New York",
    "temperature": "20º F",
    "wind": "8Kmph",
    "humidity": "61%"
  },
  {
    "name": "Chicago",
    "temperature": "27º F",
    "wind": "35Kmph",
    "humidity": "2%"
  },
  {
    "name": "Atlanta",
    "temperature": "22º F",
    "wind": "25Kmph",
    "humidity": "5%"
  },
  {
    "name": "Austin",
    "temperature": "25º F",
    "wind": "1Kmph",
    "humidity": "5%"
  },
  {
    "name": "Denver",
    "temperature": "30º F",
    "wind": "8Kmph",
    "humidity": "48%"
  }
];


<div class="weather-data layout-column align-items-center mt-50">

<section class="layout-row align-items-center justify-content-center">
  <label>Enter City: </label>
  <input type="text" [(ngModel)]="city" (ngModelChange)="cityChange($event)" class="large ml-30" placeholder="Seattle" data-test-id="app-input"/>
</section>

<section class="mt-20 layout-row align-items-center justify-content-center">
  <div class="card outlined">
      <div *ngIf="cityDetails && hideDetails" data-test-id="weather-details" class="card-text pt-10 layout-row justify-content-between">
          <div class="mt-20 outlined">
            <button class="icon-only mx-2">
              <i class="material-icons">wb_sunny</i>
            </button>
            <span data-test-id="output-temperature" class="temperature"> {{cityDetails.temperature}}</span>
          </div>
          <div class="mr-15 mb-15">
            <div data-test-id="output-wind" class="mt-20">
              Wind: {{cityDetails.wind}}
            </div>
            <div data-test-id="output-humidity" class="mt-20">
              Humidity: {{cityDetails.humidity}}
            </div>
          </div>
      </div>
      <div *ngIf="showNoResult" data-test-id="no-results" class="card-text">No Results Found</div>
  </div>
</section>
</div>

import { Component, Input, OnInit } from '@angular/core';
import { METHODS } from 'http'

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  city: any;
  cityDetails: any;
  showNoResult: boolean = false;
  hideDetails: boolean = false;

  ngOnInit() {

  }

  cityChange(value: any) {
    if (value) {
      let foundCityDetails = this.weatherData.find(city => city.name.toLowerCase() == value.toLowerCase());
      if (foundCityDetails) {
        this.cityDetails = foundCityDetails;
        this.hideDetails = true;
        this.showNoResult = false;
      }
      else {
        this.showNoResult = true;
        this.hideDetails = false;
      }
    } else {
      this.showNoResult = false;
      this.hideDetails = false;
    }

  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}


// sql basic

merit reward query

SELECT ei.employee_ID, ei.name
FROM employee_information ei
JOIN last_quarter_bonus b ON b.employee_ID = ei.employee_ID
WHERE ei.division LIKE 'HR'
AND b.bonus >= 5000;


// student advisor

SELECT roll_number,name
FROM student_information a
INNER JOIN faculty_information b
ON a.advisor = b.employee_ID
WHERE (b.gender = 'M' and b.salary>15000) or (b.gender = 'F' and b.salary>20000);




class Item:
    def __init__(self, name: str, price: int):
        self.name = name
        self.price = price


class ShoppingCart:
    def __init__(self):
        self.items = []

    def add(self, item: Item):
          self.items.append(item)

    def total(self) -> int:
        return sum(item.price for item in self.items)

    def __len__(self):
        return len(self.items)


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())
    items = []
    for _ in range(n):
        name, price = input().split()
        item = Item(name, int(price))
        items.append(item)

    cart = ShoppingCart()

    q = int(input())
    for _ in range(q):
        line = input().split()
        command, params = line[0], line[1:]
        if command == "len":
            fptr.write(str(len(cart)) + "\n")
        elif command == "total":
            fptr.write(str(cart.total()) + "\n")
        elif command == "add":
            name = params[0]
            item = next(item for item in items if item.name == name)
            cart.add(item)
        else:
            raise ValueError("Unknown command %s" % command)

    fptr.close()


    def numCells(grid):
    res = 0
    for i in range(len(grid)):
        for k in range (len(grid[0])):
            val = grid[i][k]
            flag = 1
            for ii in range (max(0,i-1),min(len(grid),i+2)):
                for kk in range(max(0,k-1),min(len(grid[0]),k+2)):
                    if (ii,kk)!=(i,k) and val<= grid[ii][kk] :
                         flag=0
                         break 
                if flag == 0:
                     break
            else:
                res+=1
    return res



    const https = require('https')
const fetch = (year, page) => {
    let url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`
    return new Promise((resolve, reject) => {
        https
            .get(url, (resp) => {
                let data = '';
                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                // The whole response has been received. Join all the chunks and parse them as JSON
                resp.on('end', () => {
                    resolve(JSON.parse(data));
                });
            })
            .on('error', (err) => {
                reject(err.message);
            });
    });
};


async function getTeams(year, k) {
    //teams data is unknown so defining an empty object
    let matchesperteam = {

    }
    try {
        //Initialise the page count =1 before getting the page count and update it after getting the page count
        totalpagecount = 1
        pagecount = 1
        while (pagecount <= totalpagecount) {
            const singlematchdata = await fetch(year, pagecount)
            //update the total page count
            totalpagecount = singlematchdata.total_pages
            pagecount++
            // counting the number of matches per team
            /*
            {
                "Manchester city":0,
                "Manchester United":0,
            }
            */
            singlematchdata.data.forEach(match => {
                matchesperteam[match["team1"]] = (matchesperteam[match["team1"]] || 0) + 1
                matchesperteam[match["team2"]] = (matchesperteam[match["team2"]] || 0) + 1
            })
        }
        // Push only the teams that have played at least k matches
        let result = []
        for (let team in matchesperteam) {
            if (matchesperteam[team] >= k) {
                result.push(team)
            }
        }
        //return the sorted teams
        return result.sort()
    }
    catch (err) {
        console.log(err)
    }

}

//Main
getTeams(2015, 13).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})


return a+b

function simpleArraySum(ar) {
  let sum = 0;
  for (let number of ar) {
      sum += number;
  }
  return sum;
}

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for(let i=0; i<3; i++){
      if(a[i]>b[i]){
          alice++;
      }
      else if(a[i]<b[i]){
          bob++;
      }
  }
  return[alice, bob]


function aVeryBigSum(ar){
  let sum = 0;
  for(let i = 0; i < ar.length; i++){
     sum += ar[i];
  }
  return sum;
}


function diagonalDifference(arr) {
  let diagonal1 = 0;
  let diagonal2 = 0;
  const n = arr.length;
  
  for(let i = 0; i<n; i++){
      diagonal1 += arr[i][i];
      diagonal2 += arr[i][n-1-i];
  }
  return Math.abs(diagonal1 - diagonal2)

}


function plusMinus(arr) {
  const n = arr.length
  let positive = 0;
  let negative = 0;
  let zero = 0;
  
  for(let i = 0; i< n;i++){
      if(arr[i]>0){
          positive++
      }
      else if(arr[i]<0){
          negative++
      }
      else{
          zero++;
      }
  }
  
  const positiveop = positive/n;
  const negativeop = negative/n;
  const zeroop = zero/n;
  
  console.log(positiveop)
  console.log(negativeop)
  console.log(zeroop)

}

function staircase(n) {
  for (let i = 1; i <= n; i++) {
      const spaces = ' '.repeat(n - i);
      const hashes = '#'.repeat(i);
      console.log(spaces + hashes);
  }
}


function miniMaxSum(arr) {
  let minans = 0;
  let maxans = 0;
  
  arr.sort((a, b) => a - b);
  for(let i = 0; i<arr.length-1; i++){
      
      minans = minans + arr[i];
  }
  arr.sort((a, b) => b - a);
  for(let j=0; j<arr.length-1; j++){
      
      maxans = maxans + arr[j];
  }
  console.log(minans, maxans);
  
}

const maxHeight = Math.max(...candles); // Find the tallest candle
const count = candles.filter(candle => candle === maxHeight).length; // Count the tallest candles
return count;

// time conversion

function timeConversion(s) {
    // Extract components
    const hour = parseInt(s.substring(0, 2));
    const minute = s.substring(3, 5);
    const second = s.substring(6, 8);
    const period = s.substring(8, 10);

    let convertedHour;

    // Convert hour based on AM/PM
    if (period === 'AM') {
        convertedHour = (hour === 12) ? '00' : (hour < 10 ? '0' + hour : hour);
    } else { // PM
        convertedHour = (hour === 12) ? '12' : (hour + 12);
    }

    // Return formatted time
    return `${convertedHour}:${minute}:${second}`;
}

// Example usage
const timeStr = "07:05:45 PM";
const convertedTime = timeConversion(timeStr);
console.log(convertedTime);  // Output: "19:05:45"


function gradingStudents(grades) {
    // Write your code here   
    for (let i = 0; i < grades.length; i++) {        
        if (((grades[i] + 2) % 5 == 0) && (grades[i] + 2 > 39)) {
            grades[i] = grades[i] + 2;
        } else if (((grades[i] + 1) % 5 == 0) && (grades[i] + 2 > 39)) {
            grades[i] = grades[i] + 1;
        }
    }
    return grades;
}

// apple and oranges


function countApplesAndOranges(s, t, a, b, apples, oranges) {
     let appleCount = 0;
    let orangeCount = 0;

    // Count apples
    for (let distance of apples) {
        const landingPosition = a + distance;
        if (landingPosition >= s && landingPosition <= t) {
            appleCount++;
        }
    }

    // Count oranges
    for (let distance of oranges) {
        const landingPosition = b + distance;
        if (landingPosition >= s && landingPosition <= t) {
            orangeCount++;
        }
    }

    return {
        applesInHouse: appleCount,
        orangesInHouse: orangeCount
    };
}
const s = 7;   // Start of house
const t = 11;  // End of house
const a = 5;   // Position of apple tree
const b = 15;  // Position of orange tree
const apples = [-2, 2, 1];   // Distances of apples
const oranges = [5, -6];     // Distances of oranges

// Count fruits that land in the house range
const result = countApplesAndOranges(s, t, a, b, apples, oranges);

// Output the results
console.log(`${result.applesInHouse}`);
console.log(`${result.orangesInHouse}`);


// stranger counter

function strangeCounter(t) {
  let cycleLength = 3;
  
  while (t > cycleLength) {
      t -= cycleLength;
      cycleLength *= 2;
  }
  
  return cycleLength - t + 1;
}

// Example usage
const time = 6; // Example input time
const counterValue = strangeCounter(time);
console.log(` ${time}: ${counterValue}`);


// find digits

function findDigits(n) {
  const digits = n.toString().split(''); 
  let count = 0;

  for (const digit of digits) {
      const digitValue = parseInt(digit);
      if (digitValue !== 0 && n % digitValue === 0) { 
          count++;
      }
  }
  return count;
}
const number = 1012;
const result = findDigits(number);
console.log(`${number} ${result}`);

// extra long factorial

function extraLongFactorials(n) {
  let result = BigInt(1);
  for (let i = 1; i <= n; i++) {
      result *= BigInt(i); 
  }
  console.log(result.toString());
}
const number = 25;
extraLongFactorials(number);

counting vallyes

function countingValleys(steps, path) {
  const result = 1
  
  for(let i=0;i<steps.length; i++){
      if(path == "U"){
          result = result + 1
      }
      else if(path == "D"){
          result = result - 1;
      }
  }
  return result;
}
console.log(countingValleys(12, "DDUUDDUDUUUD"));


let strArr = path.split('')
    let count = 0
    let result = 0
    for(let step=0; step<steps; step++){
        if(count == 0 && strArr[step].toLowerCase() == 'd'){
            count -= 1
            result += 1
        } else if(strArr[step].toLowerCase() == 'd'){
            count -= 1
        } else {
            count += 1
        }
    }
    return result

    // sales by match


    

function sockMerchant(n, ar) {
  let i = 0;
  let count = 1;
  let pair = 0;
  let sortedArr = ar.sort();
  let num = 0;
  for (i=0; i < sortedArr.length; i++) {
  if (num === sortedArr[i]) {
      count += 1
      if ((count % 2) === 0) {
          pair += 1;
      };
  }
  else if (num !== sortedArr[i]) {
      num = sortedArr[i];
      count = 1;
      };
  };
  return pair;
}

// drawing book 

function pageCount(n, p) {

  let firstpage = Math.floor(p/2);
  let backpage = Math.floor((n/2)-firstpage)
  var result = Math.min(firstpage, backpage)
  return result;
 
 }

//  electronic shop

function getMoneySpent(keyboards, drives, b) {
  let max=-1
  for(let i=0;i<keyboards.length;i++){
      const keyboardPrice = keyboards[i];
      for(let j=0;j<drives.length;j++){
          const drivePrice = drives[j];
          if(keyboardPrice + drivePrice <= b && keyboardPrice +       drivePrice >max){
              max= keyboardPrice + drivePrice                
          }
      }
  }
  return max;

}

// cat and mouse

let a = Math.abs(z-x)
    let b = Math.abs(z-y)
    
    if(a==b){
        return "Mouse C"
    }
    else if(a<b){
        return "Cat A"
    }
    else{
        return "Cat B"
    }

// breaking records


    function breakingRecords(scores) {
      let best = 0;
      let worst = 0;
      let bestScore = scores[0];
      let worstScore = scores[0];
      const lengthOfData = scores.length;
      for(let i = 1; i < lengthOfData; i++) {
          if (scores[i] > bestScore) {
              bestScore = scores[i];
              best++;
              continue;
          }
          if (scores[i] < worstScore) {
              worstScore = scores[i]
              worst++;
              continue;
          }
      }
      return [best, worst];
  
  }