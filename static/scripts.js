// TASK 2
function checkInput() {
    const userLogin = document.querySelector('#name');
    const userPassword = document.querySelector('#password')
    const userPasswordConf = document.querySelector('#confirm-password')

    if (!userLogin.value.length > 0) {
        document.querySelector('#loginMessage').innerHTML = "Essential Field!"
        document.querySelector('#loginMessage').style.color = `red`;
    } else if (!userPassword.value.length > 0 && !userPasswordConf.value.length > 0) {
        document.querySelector('#passwordMessage').innerHTML = "Essential Field!"
        document.querySelector('#confPasswordMessage').innerHTML = "Essential Field!"
        document.querySelector('#confPasswordMessage').style.color = `red`;
        document.querySelector('#passwordMessage').style.color = `red`;
    } else {
        document.querySelector('#loginMessage').innerHTML = ``;
        document.querySelector('#passwordMessage').innerHTML = ``;
        document.querySelector('#confPasswordMessage').innerHTML = ``;
        if (userPassword.value == userPasswordConf.value) {
            document.querySelector('#register-btn').disabled = false;
        } else {
            document.querySelector('#confPasswordMessage').innerHTML = `Passwords doesn't match!`;
            document.querySelector('#confPasswordMessage').style.color = `red`;
        }
    }   
}

const button = document.querySelector('#register-btn');

button.addEventListener("click", function() {
    document.querySelector('#registrationMessage').innerHTML = `Registration Successful!`;
    document.querySelector('#registrationMessage').style.color = `green`;
    setTimeout(5000);
    document.querySelector('#registrationMessage').innerHTML = ``;
});


// TASK 1

document.addEventListener('DOMContentLoaded', function () {
    const paragraph = document.querySelector('#paragraph');
    const wordCount = document.querySelector('#counter');
    const source = document.querySelector('#source');
    // 1 
    paragraph.innerHTML = paragraph.textContent.replace(/\b\w{9,}\b/g, '<span style="background-color: yellow;">$&</span>');
    // 2 
    source.href = `https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html`;
    source.target = `_blank`;
    source.innerHTML = `https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html`;
    // 3 
    paragraph.innerHTML = paragraph.innerHTML.replace(/\.\s/g, '.<br>');
    // 4 
    wordCount.innerHTML = paragraph.textContent.split(' ').filter(word => word !== '').length;
    // 5 
    paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '&#129300;').replace(/\!/g, '&#128562;');
});