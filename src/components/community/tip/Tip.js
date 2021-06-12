import React from 'react';

const Tip = ({tips}) => {

    // Get this month's tip
    const today = new Date();   // today's date & time
    const thisMonth = today.toLocaleString('default', {month: 'long'}); // get current month name
    const thisMonthUpper = thisMonth.toUpperCase()  // convert to uppercase
    const tipsFromThisMonth = tips.filter((tip) => (tip.month === thisMonthUpper)); //select tips whose Enum month match the current month
        //clever mathsy thing coming up
    const thisYear = today.getFullYear();  // we are going to use the current year to fix this month's tip
    const numberOfTips = tipsFromThisMonth.length;
    const tipIndex = thisYear % numberOfTips;  // modulus
    const tip = tipsFromThisMonth[tipIndex];  // choose month tip based on the year

    return (
        <div>
            <h2>Tip for {thisMonth}: <span>{tip.title}</span></h2>
            <h3>{tip.body}</h3>

            {/*  Debugging
            
            <h4>Number of tips:  {tips.length}</h4>
            <h4>Number of June tips: {tipsFromThisMonth.length}</h4>
            <h4>Control: {numberOfTips}</h4>
            <h4>This year: {thisYear}</h4>
            <h4>Tip Index: {tipIndex}</h4>
            <h4></h4> 
            
            */}
            


        </div>
    )
}

export default Tip;