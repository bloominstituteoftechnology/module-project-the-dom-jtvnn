function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div');
  widgets.forEach((widget, idx) => {
    widget.classList.add('widget');
    widget.setAttribute('tabindex', idx + 1);
  })
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  // generate random index for quotes
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  // build quote
  const quote = document.createElement('div');
  const quoteText = randomQuote.quote;
  quote.textContent = quoteText;
  const widget1 = document.querySelector('.quoteoftheday');
  widget1.appendChild(quote);
  // build author and date
  const authorDate = document.createElement('div');
  const { author, date } = randomQuote;
  authorDate.textContent = `${author} in ${date || "an unknown date"}`
  widget1.appendChild(authorDate);
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  // generate random values
  const randomVerbs = Math.floor(Math.random() * verbs.length);
  const randomVerb = verbs[randomVerbs];
  const randomVerbs2 = Math.floor(Math.random() * verbs.length);
  const randomVerb2 = verbs[randomVerbs2];
  const randomNouns = Math.floor(Math.random() * nouns.length);
  const randomNoun = nouns[randomNouns];
  const randomNouns2 = Math.floor(Math.random() * nouns.length);
  const randomNoun2 = nouns[randomNouns2];
  const randomAdverbs = Math.floor(Math.random() * adverbs.length);
  const randomAdverb = adverbs[randomAdverbs];
  const randomAdverbs2 = Math.floor(Math.random() * adverbs.length);
  const randomAdverb2 = adverbs[randomAdverbs2];
  // build speak
  const speak = document.createElement('p');
  speak.textContent = `We need to ${randomVerb} our ${randomNoun} ${randomAdverb}
  in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`;
  const widget2 = document.querySelector('.corporatespeak');
  widget2.appendChild(speak);
  
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countWidget = document.querySelector('.countdown')
  let count = 5;
  const para = document.createElement('p');
  para.textContent = `T-minus ${count}...`;
  countWidget.appendChild(para);
  const id = setInterval(() => { 
    if (count === 1) {
    para.textContent = 'Liftoff! 🚀'
    clearInterval(id);
    } else {
      count--;
      para.textContent = `T-minus ${count}...`;
    }
  }, 1000); 

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const person = people[Math.floor(Math.random() * people.length)];
  const personParagraph = document.createElement('p');
  document.querySelector('.friends').appendChild(personParagraph);
  const year = person.dateOfBirth.split('-')[0];
  let sentence = `${person.fname} ${person.lname} was born in ${year} and `;

  if (!person.friends.length) {
    sentence += 'has no friends.';
  } else {
    sentence += 'is friends with ';
    for (let idx = 0;idx < person.friends.length; idx++) {
      const friendId = person.friends[idx];
      const friend = people.find(p => p.id === friendId);
      const fullName = `${friend.fname} ${friend.lname}`;
      console.log(fullName);
      let isLastIdx = idx === person.friends.length - 1;
      let isNextToLastIdx = idx === person.friends.length - 2;
      if (isLastIdx) {
        sentence += `${fullName}.`;
      } else if (isNextToLastIdx) {
        sentence += `${fullName} and `;
      } else {
        sentence += `${fullName}, `;
      }
    }
  }
  personParagraph.textContent = sentence;
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
