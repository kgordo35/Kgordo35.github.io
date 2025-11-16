
    function SubmitQuiz() {
        let score = 0;
        let QuestionTotal = 5;
        let answer_sheet = [];

        let q1 = document.querySelector('input[name="q1"]:checked');
        if (q1 && q1.value == "a: User Authentication Cookies"){
            score++;
            answer_sheet.push('<span style= "color: green;"> Question 1 is correct!</span>');
        } else{answer_sheet.push('<span style= "color: red;"> Question 1 is incorrect. The correct answer is a: User Authentication Cookies.</span>');}

        let q2 = document.querySelector('input[name="q2"]:checked');
        if (q2 && q2.value == "c: Persistent Cookies"){
            score++;
            answer_sheet.push('<span style= "color: green;"> Question 2 is correct!</span>');
        } else{answer_sheet.push('<span style= "color: red;"> Question 2 is incorrect. The correct answer is c: Persistent Cookies.</span>');}

        let q3 = document.querySelector('input[name="q3"]:checked');
        if (q3 && q3.value == "b: Customer Profiling Cookies"){
            score++;
            answer_sheet.push('<span style= "color: green;"> Question 3 is correct!</span>');
        } else{answer_sheet.push('<span style= "color: red;"> Question 3 is incorrect. The correct answer is b: Customer Profiling Cookies.</span>');}

        let q4entry = document.getElementById("q4").value;
        if (q4entry && q4entry.toLowerCase() == "text"){
            score++;
            answer_sheet.push('<span style= "color: green;"> Question 4 is correct!</span>');
        } else{answer_sheet.push('<span style= "color: red;">Question 4 is incorrect. The correct answer is <u>text</u> files.</span>');}

        let rightQ5_answers = ["a: Behavioral advertising Cookies", "c: Website analytics Cookies"];
        let selectedq5_answers = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(el => el.value);

            if (selectedq5_answers.length === rightQ5_answers.length && selectedq5_answers.every(val => rightQ5_answers.includes(val))) {
                score++;
                answer_sheet.push('<span style= "color: green;"> Question 5 is correct!</span>');
            } else{answer_sheet.push('<span style= "color: red;">Question 5 is incorrect. The correct answers are a: Behavioral advertising Cookies and c: Website analytics Cookies.</span>');}

        document.getElementById("result").innerHTML = "You got " + score + " out of " + QuestionTotal;
        document.getElementById("percent").innerHTML = "Your score is " + ((score / QuestionTotal) * 100) + "%";
        document.getElementById("answer_sheet").innerHTML = answer_sheet.join("<br>");
        document.getElementById("restart").style.display = "inline";
    }

    function ResetQuiz() {location.reload();}