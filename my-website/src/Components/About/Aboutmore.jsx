import React from "react";

const About = () => {
  return (
    <div style={{margin:'100px'}}>
      <p style={{margin:'5px'}}>
        <h1 style={{color:'red'}}  > PROGRAMMING IS EVERYWHERE</h1>
        Programming is, quite literally, all around
        us. From the take-out we order, to the movies we stream, code enables
        everyday actions in our lives. Tech companies are no longer recognizable
        as just software companies — instead, they bring food to our door, help
        us get a taxi, influence outcomes in presidential elections, or act as a
        personal trainer. When you’re walking down the street, where can you
        find technology in your environment? Click on the white circles.
      </p>
      <img style={{width:'30%',boxShadow:'10px 10px 30px rgba(0, 0, 0, .2)',marginTop:'20px'}} src="./assets/everyone.webp"/>

      <p style={{margin:'5px'}}>
     <h1  style={{color:'red'}}> …AND PROGRAMMING IS FOR EVERYONE</h1>
For many years, only a few people have known how to code. However, that’s starting to change. The number of people learning to code is increasing year by year, with estimates around 26.2 million software developers worldwide, which doesn’t even account for the many OTHER careers that relate to programming.

Here at Codecademy, our mission is to make technical knowledge accessible and applicable. Technology plays a crucial role in our economy — but programming is no longer just for software engineers. Any person can benefit from learning to program — whether it’s learning HTML to improve your marketing emails or taking a SQL course to add a dose of analysis to your research role.

Even outside of the tech industry, learning to program is essential to participating in the world around you: it affects the products you buy, the legal policies you vote for, and the data you share online.

So, let’s dig into what programming is.
      </p>
      <img style={{width:'30%',boxShadow:'10px 10px 30px rgba(0, 0, 0, .2)',marginTop:'20px'}} src="./assets/programmingpersons.webp"/>

      <p style={{margin:'5px'}}>
    <h1  style={{color:'red'}}>WHAT IS PROGRAMMING?</h1>  
Put simply, programming is giving a set of instructions to a computer to execute. If you’ve ever cooked using a recipe before, you can think of yourself as the computer and the recipe’s author as a programmer. The recipe author provides you with a set of instructions which you read and then follow. The more complex the instructions, the more complex the result!
How good are you at giving instructions? Try and get Codey to draw a square!
      </p>
      <img style={{width:'30%',boxShadow:'10px 10px 30px rgba(0, 0, 0, .2)',marginTop:'20px'}} src="./assets/languages.webp"/>

      <h3 style={{fontSize:'30px',color:'red'}}>Learn More</h3>
<a style={{fontSize:'25px'}} href="https://w3schools.com" target='_blank'>www.w3shools.com</a>
    </div>
  );
};

export default About;
