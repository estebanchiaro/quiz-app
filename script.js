const startButton= document.getElementById('start-btn')
const nextButton= document.getElementById('next-btn')
const questionContainerElement= document.getElementById('question-container')
const questionElement= document.getElementById('question')
const answerButtonsElements=document.getElementById('answer-buttons')

let shuffleQuestions;
let currentQuestionIndex;



startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', e=>{
    currentQuestionIndex++;
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffleQuestions=questions.sort(()=> Math.random()-.5)
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()


}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElements.appendChild(button)
    })
}

function resetState(){
clearStatusClass(document.body)
nextButton.classList.add('hide')
while(answerButtonsElements.firstChild){
    answerButtonsElements.removeChild
    (answerButtonsElements.firstChild)
}
}

function selectAnswer(e){
    const selectedButton= e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElements.children).forEach(button => {
        setStatusClass(button , button.dataset.correct)
    })
    if(shuffleQuestions.length> currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
}else{startButton.innerText='Restart'
        startButton.classList.remove('hide')}
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct') 
        confetti();
        

    }else{
        
        element.classList.remove('correct')
        element.classList.add('wrong')   
        console.log(correct)
    }
}




function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions=[
    {
        question:'Donde fue nuestra primera cita?',
        answers:[
            {text:'Elantra', correct:false},
            {text:'Ross', correct:true},
            {text:'Bravos', correct:false},
            {text:'Cine', correct:false}
        ]
    },
    {
        question:'cuanto es 3 mas 2?',
        answers:[
            {text:'5', correct:true},
            {text:'22', correct:false},
            {text:'20', correct:false},
            {text:'5', correct:false}
        ]
    },
    {
        question:'cuanto es 1 mas 2?',
        answers:[
            {text:'3', correct:true},
            {text:'22', correct:false},
            {text:'20', correct:false},
            {text:'5', correct:false}
        ]
    },
]

