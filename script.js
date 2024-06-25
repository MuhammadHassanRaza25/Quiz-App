var question = document.getElementById('question')
var nextbtn = document.getElementById('nextbtn')
var radio = document.getElementsByName('radio')
var opt1 = document.querySelector('.opt1')
var opt2 = document.querySelector('.opt2')
var opt3 = document.querySelector('.opt3')
var opt4 = document.querySelector('.opt4')

var score = 0;
var quizApp = [
{
  question: 'What does HTML stand for?',
  options:[
   'Hyperlinks and Text Markup Language',
   'Hyper Text Markup Language',
   'Hyper Tool Markup Language',
   'Hyper Tool Mark Language',
  ],
  correct: 'Hyper Text Markup Language',
},
{
    question: 'Choose the correct HTML element for the largest heading:',
    options:[
       '<heading>',
       '<h5>',
       '<head>',
       '<h1>',
    ],
    correct: '<h1>',
},
{
  question: 'What is the correct syntax to write an HTML comment?',
  options:[
     '<!-- Comment -->',
     '// Comment',
     '# Comment',
     '/* Comment */',
  ],
  correct: '<!-- Comment -->',
},
{
  question: 'What is the effect of the <b> tag?',
  options:[
     'It converts the text within it to bold font',
     'It is used to write blck-colored font',
     'It is used to change the font size',
     'None of the above',
  ],
  correct: 'It converts the text within it to bold font',
},
{
  question: 'Which attribute is used to provide a unique name to an HTML element?',
  options:[
     'id',
     'class',
     'type',
     'None of the above',
  ],
  correct: 'id',
},
{
  question: 'Which HTML element is used to define description data?',
  options:[
     '<li>',
     '<ol>',
     '<dd>',
     '<dl>',
  ],
  correct: '<dd>',
},
{
  question: 'Which HTML tag is called the root element of an HTML document?',
  options:[
     '<html>',
     '<body>',
     '<head>',
     '<title>',
  ],
  correct: '<html>',
},
{
  question: 'Which of the following are examples of block-level elements in HTML?',
  options:[
     '<div>',
     '<p>',
     '<h1>',
     'All of the above',
  ],
  correct: 'All of the above',
},
{
  question: 'Which of the following is the correct syntax for using the HTML style attribute?',
  options:[
     '<tagname style="property:value;">',
     '<tagname style="property;">',
     '<tagname style>',
     'None of the above',
  ],
  correct: '<tagname style="property:value;">',
},
{
  question: 'Which of the following tags is used to add a row to a table in HTML?',
  options:[
     '<tr>',
     '<td>',
     '<th>',
     'None of the above',
  ],
  correct: '<tr>',
},
]

//testing
// console.log(opt1.childNodes[1].nodeValue);

// e means hamne body pe onload laga h or ye function wahan call kia h
// or argument main 0 dia hai to e 0 le rha h.
function showQuestions(e) {
    question.innerText = quizApp[e].question
    Qheading.innerHTML = `Question ${questionCount} of ${quizApp.length}`
     // option //
    for (let i = 0; i < radio.length; i++) {
        radio[i].value = quizApp[e].options[i]   
        opt1.childNodes[1].nodeValue = quizApp[e].options[0]
        opt2.childNodes[1].nodeValue = quizApp[e].options[1]
        opt3.childNodes[1].nodeValue = quizApp[e].options[2]
        opt4.childNodes[1].nodeValue = quizApp[e].options[3]
    }
}

// next button start
var questionCount = 0
var Qheading = document.getElementById('Qheading')

nextbtn.addEventListener('click',()=>{

  for (let i = 0; i < radio.length; i++) {
    if(radio[i].checked){
      var checkVal = radio[i].value
    }
 }

 for (let i = 0; i < quizApp.length; i++) {
  if(checkVal == quizApp[i].correct){
  score += 10
  console.log(score);
  break
}
}

   questionCount++
   for (let i = 0; i < radio.length; i++) {
     radio[i].checked = false
   }
   Qheading.innerHTML = `Question ${questionCount} of ${quizApp.length}`
   showQuestions(questionCount)
})
// next button end


// Timer Start
var timer = document.getElementById('timer')
var min = 20
var sec = 60

seconds = setInterval(() => {
  // second
  sec -= 1
  if(sec<10){
    sec = '0'+sec
    if(sec == 0){
      sec = 60
    }
  }
  else if(sec == 60){
    sec -= 1
  }
  // minute
  if(sec == 60){
    min -= 1
  }
  // swal
  if(min == 0 && sec == 1){
    clearInterval(seconds)
    Swal.fire({
      title: "Time is Up !",
      icon: "info"
    });
    onload()
  }
  timer.innerHTML = `<i class="bi bi-clock"></i> ${min}:${sec}`
}, 1000);
// Timer End

// Result
// if(score > 50){
//   Swal.fire({
//     title: "Good job!",
//     text: "Congratulations, you passed",
//     text: `Your Score ${score}`,
//     icon: "success"
//   });
// }
// else if(score < 50){
// alert('sd')
// }