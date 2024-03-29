//final input given for checking
let text_content = document.getElementById("text-content");
let input = document.getElementById("input-field");
function getNewQuote() {
    let data = text_content.innerText;
    text_content.innerText = "";
    data.split("").forEach(ch => {
        let char_span = document.createElement("pre");
        char_span.innerText = ch;
        text_content.appendChild(char_span);
    });
}


//for number and punctuation
let flagpunctuation = false;
let flagnumber = false;
function updatepunctuationflag() {
    if (flagpunctuation == false) {
        flagpunctuation = true;
        document.getElementById("punctuation").classList.add("selected");
        document.getElementById("punctuation").classList.remove("normal");
    } else {
        flagpunctuation = false;
        document.getElementById("punctuation").classList.remove("selected");
        document.getElementById("punctuation").classList.add("normal");
    }
    textchanger();
}

function updatenumberflag() {
    if (flagnumber == false) {
        flagnumber = true;
        document.getElementById("number").classList.add("selected");
        document.getElementById("number").classList.remove("normal");
    } else {
        flagnumber = false;
        document.getElementById("number").classList.add("normal");
        document.getElementById("number").classList.remove("selected");
    }
    textchanger();
}

// for change in time words and quote
let modification1 = true;
let modification2 = false;
let modification3 = false;
let modification4 = false;
function modification(num) {
    // document.getElementById("modification1").classList.add("normal")
    // document.getElementById("modification2").classList.add("normal")
    // document.getElementById("modification3").classList.add("normal")
    // document.getElementById("modification1").classList.remove("selected")
    // document.getElementById("modification2").classList.remove("selected")
    // document.getElementById("modification3").classList.remove("selected")
    if (num == 1) {
        document.getElementById("modification1").classList.add("normal")
        document.getElementById("modification2").classList.add("normal")
        document.getElementById("modification3").classList.add("normal")
        document.getElementById("modification1").classList.remove("selected")
        document.getElementById("modification2").classList.remove("selected")
        document.getElementById("modification3").classList.remove("selected")

        document.getElementById("modification1").classList.remove("normal")
        document.getElementById("modification1").classList.add("selected")
        modification1 = true;
        modification2 = false;
        modification3 = false;

    } else if (num == 2) {
        document.getElementById("modification1").classList.add("normal")
        document.getElementById("modification2").classList.add("normal")
        document.getElementById("modification3").classList.add("normal")
        document.getElementById("modification1").classList.remove("selected")
        document.getElementById("modification2").classList.remove("selected")
        document.getElementById("modification3").classList.remove("selected")

        document.getElementById("modification2").classList.remove("normal");
        document.getElementById("modification2").classList.add("selected");
        modification2 = true;
        modification1 = false;
        modification3 = false;

    } else if (num == 3) {
        document.getElementById("modification1").classList.add("normal")
        document.getElementById("modification2").classList.add("normal")
        document.getElementById("modification3").classList.add("normal")
        document.getElementById("modification1").classList.remove("selected")
        document.getElementById("modification2").classList.remove("selected")
        document.getElementById("modification3").classList.remove("selected")
        
        document.getElementById("modification3").classList.remove("normal");
        document.getElementById("modification3").classList.add("selected");
        modification3 = true;
        modification1 = false;
        modification2 = false;

    } else {
        var root = document.documentElement;
        if (modification4 == false) {

            root.style.setProperty('--mainbgcolor', '#323437 ');
            root.style.setProperty('--navitemwithouthov', 'white');
            root.style.setProperty('--navitemwithhov', 'gold');
            root.style.setProperty('--textcolor', 'rgb(82, 103, 119)');
            localStorage.setItem('mainbgcolor', '#323437');

            modification4 = true;
        } else {
            root.style.setProperty('--mainbgcolor', '#111111 ');
            root.style.setProperty('--navitemwithouthov', 'rgb(82, 103, 119)');
            root.style.setProperty('--navitemwithhov', 'white');
            root.style.setProperty('--textcolor', '#646669');
            localStorage.setItem('mainbgcolor', '#111111');


            modification4 = false;
        }
    }
    textchanger();
}

//to change the time 
function handletime(timetostart) {
    startsec = timetostart;
    time = timetostart;
    document.getElementById("countdown").innerHTML = timetostart;

    document.getElementById("sec1").classList.remove("selected");
    document.getElementById("sec2").classList.remove("selected");
    document.getElementById("sec3").classList.remove("selected");
    document.getElementById("sec4").classList.remove("selected");
    document.getElementById("sec1").classList.add("normal");
    document.getElementById("sec2").classList.add("normal");
    document.getElementById("sec3").classList.add("normal");
    document.getElementById("sec4").classList.add("normal");
    if (timetostart == 15) {
        document.getElementById("sec1").classList.add("selected");
        document.getElementById("sec1").classList.remove("normal");
        textchanger();

    } else if (timetostart == 30) {
        document.getElementById("sec2").classList.add("selected");
        document.getElementById("sec2").classList.remove("normal");
        textchanger();

    } else if (timetostart == 60) {
        document.getElementById("sec3").classList.add("selected");
        document.getElementById("sec3").classList.remove("normal");
        textchanger();

    } else if (timetostart == 120) {
        document.getElementById("sec4").classList.add("selected");
        document.getElementById("sec4").classList.remove("normal");
        textchanger();
    }
}

//time countdown
let timerflag = 1;
let startsec = 30;
let time = 30;
let stopwatch = 0;
let textlength = 0;
function updatetime() {
    if (timerflag == 1) {

    } else if (timerflag == 2) {
        if (time == 0) {
            countdown.innerHTML = time;
            window.open('result.html', '_self');
            localStorage.setItem('word', wordsdone);
            localStorage.setItem('time', startsec);
            localStorage.setItem('mistake', totalmistakes);
            localStorage.setItem('type', type);
            return;
        }
        inputlength = document.getElementById("input-field").value.length;
        if (inputlength >= textlength) {
            countdown.innerHTML = time;
            window.open('result.html', '_self');
            localStorage.setItem('word', wordsdone);
            localStorage.setItem('time', (startsec - time));
            localStorage.setItem('mistake', totalmistakes);
            localStorage.setItem('type', type);
        }
        countdown.innerHTML = time;
        time--;
    } else if (timerflag == 3) {
        inputlength = document.getElementById("input-field").value.length;
        if (inputlength >= textlength) {
            timerflag = 1;
            window.open('result.html', '_self');
            localStorage.setItem('word', wordsdone);
            localStorage.setItem('time', stopwatch);
            localStorage.setItem('mistake', totalmistakes);
            localStorage.setItem('type', type);
        } else {
            stopwatch += 1
            countdown.innerHTML = stopwatch;
        }
    }
}


setInterval(updatetime, 1000);



// to get random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let type = ""
// paraselecting
textchanger()
function textchanger() {
    if ((modification1 == true || modification2 == true) || ((modification1 == false && modification2 == false && modification3 == false))) {
        choice = getRandomNumber(1, 100) % 5;
        type = ""
        // if (flagnumber == true) {
        //     type = "Number ";
        // } if (flagpunctuation == true) {
        //     type += "Punctuation ";
        // }
        if (modification1 == true) {
            type += "Time "
        } if (modification2 == true) {
            type += "Words"
        }
        if ((modification2 == true || modification1 == true) && (startsec == 0)) {
            handletime(60);
        } if (modification1 == true) {
            countdown.innerText = startsec;
        }

        if ((flagpunctuation == true && flagnumber == true) || (flagpunctuation == false && flagnumber == false)) {
            if (choice == 0) {
                document.getElementById("text-content").innerText = "Renewable energy sources are vital for a sustainable future. With the increasing demand for clean energy alternatives, renewable technologies have seen significant growth in recent years. Solar power, for example, has experienced remarkable surge in adoption, with global solar capacity reaching over 580 gigawatts by the end of 2021. Wind energy also continues to expand rapidly, with over 750 gigawatts of installed capacity worldwide.";
            } else if (choice == 1) {
                document.getElementById("text-content").innerText = "Nutrition is essential for maintaining good health and vitality. From the 5 food groups to the daily recommended intake of vitamins and minerals, a balanced diet fuels our bodies with the nutrients needed to thrive. With 3 meals a day and 2 snacks in between, we nourish ourselves with a variety of fruits, vegetables, whole grains, proteins, and healthy fats. Each food choice we make plays a role in supporting our overall well-being, from boosting immunity to promoting heart health. As we strive to make informed dietary decisions, nutrition labels provide valuable information about serving sizes, calories, and nutrient content.";
            } else if (choice == 2) {
                document.getElementById("text-content").innerText = "Space exploration is a testament to human ingenuity and curiosity. With advancements in technology, humanity has achieved remarkable milestones in our journey beyond Earth's atmosphere. From the first manned moon landing in 1969 to the deployment of the International Space Station (ISS) in 1998, space missions have expanded our understanding of the cosmos. As of 2022, over 565 people have traveled to space, experiencing the awe-inspiring beauty of the universe firsthand."

            } else if (choice == 3) {
                document.getElementById("text-content").innerText = "Renewable energy sources are vital for a sustainable future. With the increasing demand for clean energy alternatives, renewable technologies have seen significant growth in recent years. Solar power, for example, has experienced a remarkable surge in adoption, with global solar capacity reaching over 580 gigawatts by the end of 2021. Wind energy also continues to expand rapidly, with over 750 gigawatts of installed capacity worldwide.";
            } else if (choice == 4) {
                document.getElementById("text-content").innerText = "Sustainable agriculture is essential for ensuring food security and preserving the health of our planet. With the global population expected to reach 9.7 billion by 2050, sustainable farming practices are more critical than ever. By implementing techniques such as crop rotation, organic fertilization, and integrated pest management, farmers can increase yields while minimizing environmental impact. Agroforestry, which combines trees and crops on the same land, offers multiple benefits, including soil conservation and biodiversity preservation.";
            }
        } else if (flagpunctuation == true) {
            if (choice == 0) {
                document.getElementById("text-content").innerText = "Nature, with its boundless beauty and tranquility, whispers secrets of harmony and balance. Each sunrise paints a masterpiece of vibrant hues across the sky; gentle breezes carry melodies of peace through the rustling leaves. Amidst the lush greenery, life pulsates in every corner—a symphony of chirping birds, buzzing insects, and rustling branches! In nature's embrace, one finds solace: a sanctuary where time stands still, and the soul finds renewal."
            } else if (choice == 1) {
                document.getElementById("text-content").innerText = "Artificial intelligence (AI), with its ever-evolving capabilities and potential, stands as a testament to human ingenuity and innovation. From the complexities of machine learning algorithms to the simplicity of voice-activated assistants, AI permeates our daily lives in myriad ways. Each breakthrough brings forth new possibilities: from autonomous vehicles navigating bustling streets to chatbots offering personalized assistance. Amidst the excitement, questions linger—about ethics, privacy, and the future of work. Yet, in the midst of uncertainty, one thing remains clear: AI continues to reshape our world, offering glimpses of a future where technology and humanity coexist in harmony!"
            } else if (choice == 2) {
                document.getElementById("text-content").innerText = "Space exploration, with its vast unknowns and awe-inspiring discoveries, captivates the imagination and pushes the boundaries of human achievement. Each rocket launch represents a triumph of engineering and ambition; as spacecraft venture into the cosmos, they unveil the mysteries of distant galaxies. Amidst the infinite expanse, we marvel at the beauty of celestial bodies: shimmering stars, majestic planets, and enigmatic black holes. From the surface of the Moon to the far reaches of the outer solar system, humanity's quest for knowledge knows no bounds!"
            } else if (choice == 3) {
                document.getElementById("text-content").innerText = "Creativity, with its endless possibilities and boundless inspiration, fuels the human spirit and ignites innovation. Each stroke of the brush or stroke of the keyboard represents a unique expression of imagination and originality. From the intricate melodies of a symphony to the vivid colors of a painting, creative endeavors breathe life into the world around us. Amidst the chaos of everyday life, creativity offers solace—a sanctuary where ideas flow freely and dreams take flight. In the dance of creation, we find liberation, forging connections that transcend language and culture!"
            } else if (choice == 4) {
                document.getElementById("text-content").innerText = "Resilience, with its unwavering strength and unwritten courage, defines the human spirit and shapes our journey through adversity. Each setback is a testament to our resilience, a stepping stone towards growth and transformation. From the darkest nights to the brightest days, we weather the storms of life with perseverance and determination. Amidst the challenges we face, resilience empowers us to rise from the ashes, to rebuild and renew our spirits. In the face of uncertainty, resilience offers hope—a beacon of light guiding us through the darkest of times!"
            }
        } else if (flagnumber == true) {
            if (choice == 0) {
                document.getElementById("text-content").innerText = "In the year 2023 AI-driven technologies will play a vital role in shaping industries worldwide Companies will rely on big data analytics and machine learning algorithms to make informed decisions With 5G networks becoming more widespread the Internet of Things IoT will connect billions of devices creating a seamless digital ecosystem As technology continues to evolve cybersecurity will remain a top priority ensuring the protection of sensitive information";
            } else if (choice == 1) {
                document.getElementById("text-content").innerText = "Nature is a wondrous 3 spectacle offering solace and inspiration to all who 7 embrace its beauty From majestic mountains to 9 tranquil rivers the earths natural wonders captivate the 4 imagination and nourish the soul In the depths of the 6 forest one can find peace amidst the rustling leaves and 8 chirping birds As the seasons change nature reveals its 1 endless cycle of growth and renewal reminding us of 0 the interconnectedness of all living things Embracing natures 2 bounty we find harmony and serenity in the 5 midst of a chaotic world";
            } else if (choice == 2) {
                document.getElementById("text-content").innerText = "Gym is a place 3 where individuals go 6 to improve their physical 8 fitness and overall health With 9 state of the art equipment and professional trainers gym facilities offer 4 a conducive environment for workouts In the gym one can 1 engage in various exercises such as cardio strength training and 2 flexibility workouts As individuals strive to achieve their fitness goals the gym becomes a 5 sanctuary where determination and perseverance thrive Amidst the hustle and bustle of 7 modern life the gym provides a refuge for self care and personal growth";
            } else if (choice == 3) {
                document.getElementById("text-content").innerText = "Crime is a complex 5 issue that affects communities worldwide From petty theft to 2 violent offenses crime takes many forms and has 9 far-reaching consequences for individuals and society as a whole In the fight against crime law enforcement agencies 4 work tirelessly to apprehend perpetrators and ensure justice is served While prevention efforts aim to address root causes and 8 mitigate future criminal activity Crime prevention programs education and 7 community engagement play vital roles in fostering safer neighborhoods and reducing crime rates Despite ongoing efforts crime remains a persistent challenge 3 requiring collaborative action and innovative solutions from all sectors of society";
            } else if (choice == 4) {
                document.getElementById("text-content").innerText = "Time is a universal 7 concept that governs our lives From the tick of the clock to the changing of the seasons time 4 dictates the rhythm of existence In a fast-paced world time management skills are essential for productivity and success With each passing moment opportunities arise and 1 memories are made reminding us of the fleeting nature of time Yet time also offers moments of stillness and reflection a chance to pause and appreciate the beauty of the present In the grand 5 scheme of things time is both finite and infinite a paradox that captivates the human mind";
            }
        }

        if (modification2 == false) {
            document.getElementById("text-content").innerText = document.getElementById("text-content").innerText.toLowerCase();
            textlength = document.getElementById("text-content").innerText.length;

        } else {
            document.getElementById("text-content").innerText = document.getElementById("text-content").innerText.split(" ").slice(0, startsec).join(" ");
            textlength = document.getElementById("text-content").innerText.split(" ").slice(0, startsec).join(" ").length;
            countdown.innerHTML = 0;
            // document.getElementById("text-content").innerText = document.getElementById("text-content").innerText.toLowerCase();

        }
    } else {
        if (flagpunctuation == true) {
            updatepunctuationflag();
        } if (flagnumber == true) {
            updatenumberflag();
        }

        type = "Quote"
        if (choice == 0) {
            document.getElementById("text-content").innerText = "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer";
        } else if (choice == 1) {
            document.getElementById("text-content").innerText = "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson"

        } else if (choice == 2) {
            document.getElementById("text-content").innerText = "In the end, we only regret the chances we didn't take, the relationships we were afraid to have, and the decisions we waited too long to make. - Unknown"

        } else if (choice == 3) {
            document.getElementById("text-content").innerText = "Life is inherently risky. There is only one big risk you should avoid at all costs, and that is the risk of doing nothing. - Denis Waitley"

        } else if (choice == 4) {
            document.getElementById("text-content").innerText = "Success is not measured by the position one has reached in life, but by the obstacles one has overcome while trying to succeed. - Booker T. Washington"

        }
        textlength = document.getElementById("text-content").innerText.length;
        countdown.innerHTML = 0;
        handletime(0);
    }
    getNewQuote();
}

//to hide customization-area and footer after start
function handleClick() {
    document.getElementById("text-content").style.filter = "none";
    document.getElementById("input-field").focus();
    var elements = document.getElementsByClassName("footer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = 0;
    }
    var elements = document.getElementsByClassName("customization-area");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = 0;
        const countdown = document.getElementById("countdown")
    }
    if (modification1 == true) {
        timerflag = 2;
    } else if (modification2 == true || modification3 == true) {
        timerflag = 3;
    }


}



let wordsdone = 0;
//function for checking weather the input is correct or wrong
input.addEventListener("input", () => {
    let countmistake = 0;
    const arrayQuote = text_content.querySelectorAll("pre")
    const userValue = input.value.split("");
    wordsdone = 0;
    arrayQuote.forEach((char, index) => {
        const charval = userValue[index]
        if (charval == null) {
            document.getElementById("keyboard-sound").play();
            char.classList.remove("wrong");
            char.classList.remove("correct");
            checkCorrectWord(countmistake);
            return;
        } else if (charval === char.innerText) {
            char.classList.add("correct");
            char.classList.remove("wrong");
        } else {
            countmistake += 1;
            char.classList.add("wrong")
            char.classList.remove("correct")
        }
        if (charval == ' ') {
            wordsdone += 1;
        }

    })
});

let totalmistakes = 0;
let previousmistake = 0;
let currentmistake = 0;
function checkCorrectWord(mistake) {
    currentmistake = mistake;
    if (currentmistake > previousmistake) {
        totalmistakes += 1;
    }
    previousmistake = mistake;
}




