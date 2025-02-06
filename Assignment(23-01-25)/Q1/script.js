let buttonData = {
  buttonCounter: 2,
   totals: Array(2).fill(0)
 };
 
 let mainPage = document.createElement('div');
 document.body.appendChild(mainPage);
 
 function buttonn(type, parent, content, classes = []) {
   let element = document.createElement(type);
   element.textContent = content;
   classes.forEach(cls => element.classList.add(cls));
   parent.appendChild(element);
   return element;
 }
 
 function createButtons() {
   for (let i = 0; i < buttonData.buttonCounter; i++) {
     let button = buttonn('button', mainPage, `Button ${i + 1}: Clicks 0`, ['btn']);
     button.setAttribute('data-index', i);
 
     button.addEventListener('click', () => {
       buttonData.totals[i]++;
       button.textContent = `Button ${i + 1}: Clicks ${buttonData.totals[i]}`;
     });
   }
 
   let tallyButton = buttonn('button', mainPage, 'Show All Totals', ['btn']);
   tallyButton.addEventListener('click', showTotals);
 }
 
 function showTotals() {
  let ul = document.createElement('ul');
  mainPage.appendChild(ul);
  
  let totalClicks = buttonData.totals.reduce((acc, current) => acc + current, 0);
  
  let totall = document.createElement('li');
  totall.textContent = `Total Clicks: ${totalClicks}`;
  ul.appendChild(totall);
  }
 
 createButtons();
