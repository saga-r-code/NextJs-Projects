"use client";
import React, { useEffect, useState } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import "./quiz.css";

const AllcategoryQuestion = [
    {
        category: "programming",
        questions: [
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Pre Processor",
                    "Hyper Text Markup Language",
                    "Hyper Text Multiple Language",
                    "Hyper Tool Multi Language",
                ],
                correctAnswer: 1,
            },
            {
                question:
                    "Which of the following is a correct way to declare a variable in JavaScript?",
                options: [
                    "var x = 10;",
                    "variable x = 10;",
                    "int x = 10;",
                    "let 10 = x;",
                ],
                correctAnswer: 0,
            },
            {
                question: "How do you write comment in Python?",
                options: [
                    "// This is a comment",
                    "# This is a comment",
                    "/* This is a comment */",
                    "<!-- This is a comment 	-->",
                ],
                correctAnswer: 1,
            },
            {
                question: "What does CSS stand for?",
                options: [
                    "Cascading Style Sheets",
                    "Colorful Style Sheets",
                    "Computer Style Sheets",
                    "Cascading Simple Sheets",
                ],
                correctAnswer: 0,
            },
            {
                question: "In JavaScript, how do you create a function?",
                options: [
                    "create function myFunction()",
                    "def function myFunction()",
                    "func myFunction()",
                    "function myFunction()",
                ],
                correctAnswer: 3,
            },
            {
                question: "What does the 'typeof' operator do in JavaScript?",
                options: [
                    "Checks the type of a variable",
                    "Declares a variable",
                    "Assigns a value to a variable",
                    "Converts a variable to another type",
                ],
                correctAnswer: 0,
            },
            {
                question: "In C, how do you define a function?",
                options: [
                    "function myFunction()",
                    "def myFunction()",
                    "void myFunction()",
                    "func myFunction()",
                ],
                correctAnswer: 2,
            },
            {
                question: "Which of the following is a characteristic of Python?",
                options: [
                    "Compiled language",
                    "Dynamic typing",
                    "Low-level language",
                    "Static typing",
                ],
                correctAnswer: 3,
            },
            {
                question: "Which language is used for Android development?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correctAnswer: 1,
            },
            {
                question:
                    "What is the purpose of the 'forEach()' method in JavaScript?",
                options: [
                    "Removes duplicate elements from an array",
                    "Filters elements in an array",
                    "Sorts an array",
                    "Iterates through each element in an array",
                ],
                correctAnswer: 3,
            },
            {
                question: "What does the 'return' keyword do in a function?",
                options: [
                    "Ends the function and returns a value",
                    "Continues the function",
                    "Exits the function without value",
                    "Ends the program execution",
                ],
                correctAnswer: 0,
            },
            {
                question: "Which of the following is NOT a semantic HTML element?",
                options: ["<header>", "<footer>", "<div>", "<article>"],
                correctAnswer: 2,
            },
            {
                question: "What is the primary purpose of a 'for' loop in programming?",
                options: [
                    "Repeat code for a specified number of times",
                    "Repeat code until a condition is true",
                    "Define a function",
                    "Evaluate conditions in the loop",
                ],
                correctAnswer: 0,
            },
            {
                question: "Which data structure is ideal for LIFO (Last In First Out)?",
                options: ["Queue", "Stack", "Linked list", "Array"],
                correctAnswer: 1,
            },
            {
                question:
                    "Which command is used in Git to store changes in the repository?",
                options: ["git commit", "git push", "git pull", "git add"],
                correctAnswer: 0,
            },
            {
                question: "What does the 'map()' function do in JavaScript?",
                options: [
                    "Sorts an array",
                    "Filters out items",
                    "Creates a new array",
                    "Modifies the original array",
                ],
                correctAnswer: 2,
            },
            {
                question: "What is an IDE?",
                options: [
                    "An Integrated Development Environment",
                    "A function for code execution",
                    "An interpreter",
                    "An input method for writing code",
                ],
                correctAnswer: 0,
            },
            {
                question:
                    "Which of the following is a feature of object-oriented programming?",
                options: [
                    "Encapsulation",
                    "Modularity",
                    "Recursion",
                    "Memory Management",
                ],
                correctAnswer: 0,
            },
            {
                question: "What does SQL stand for?",
                options: [
                    "Simple Question Language",
                    "Systematic Query Language",
                    "Standard Question Language",
                    "Structured Query Language",
                ],
                correctAnswer: 3,
            },
            {
                question: "Which of these is an example of a non-relational database?",
                options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
                correctAnswer: 0,
            },
            {
                question: "How do you write comment in CSS?",
                options: [
                    "// This is a comment",
                    "/* This is a comment */",
                    "# This is a comment",
                    "<!-- This is a comment -->",
                ],
                correctAnswer: 1,
            },
            {
                question:
                    "Which of the following algorithms is used to sort an array by comparing elements?",
                options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
                correctAnswer: 0,
            },
            {
                question: "What does the 'finally' block in Java do?",
                options: [
                    "Handles all exceptions",
                    "Attempts to handle runtime exceptions",
                    "Executes code after try-catch",
                    "Defines execution start point",
                ],
                correctAnswer: 2,
            },
            {
                question:
                    "Which data structure is best for searching elements quickly?",
                options: ["Binary search tree", "Array", "Linked list", "Queue"],
                correctAnswer: 0,
            },
            {
                question: "What is the correct syntax for a JavaScript if statement?",
                options: [
                    "if (condition) {}",
                    "if condition {}",
                    "if {} else",
                    "if {condition}",
                ],
                correctAnswer: 0,
            },
        ],
    },

    {
        category: "geography",
        questions: [
            {
                question: "Which is the longest river in the world?",
                options: [
                    "Amazon River",
                    "Nile River",
                    "Yangtze River",
                    "Mississippi River",
                ],
                correctAnswer: 1,
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "South Korea", "Japan", "Thailand"],
                correctAnswer: 2,
            },
            {
                question: "What is the largest ocean in the world?",
                options: [
                    "Atlantic Ocean",
                    "Indian Ocean",
                    "Arctic Ocean",
                    "Pacific Ocean",
                ],
                correctAnswer: 3,
            },
            {
                question: "Which country has the largest population in the world?",
                options: ["India", "China", "United States", "Indonesia"],
                correctAnswer: 1,
            },
            {
                question: "Which country is known for the Great Barrier Reef?",
                options: ["Australia", "United States", "South Africa", "New Zealand"],
                correctAnswer: 0,
            },
            {
                question: "Which is the smallest country in the world?",
                options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
                correctAnswer: 2,
            },
            {
                question: "Which is the tallest mountain in the world?",
                options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
                correctAnswer: 2,
            },
            {
                question: "What is the capital of Canada?",
                options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
                correctAnswer: 0,
            },
            {
                question: "Which desert is the largest hot desert in the world?",
                options: [
                    "Gobi Desert",
                    "Atacama Desert",
                    "Sahara Desert",
                    "Karakum Desert",
                ],
                correctAnswer: 2,
            },
            {
                question: "Which country is known as the Land of the Midnight Sun?",
                options: ["Sweden", "Finland", "Norway", "Denmark"],
                correctAnswer: 2,
            },
            {
                question: "What is the longest mountain range in the world?",
                options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
                correctAnswer: 2,
            },
            {
                question: "Which river flows through Egypt?",
                options: [
                    "Amazon River",
                    "Yangtze River",
                    "Nile River",
                    "Ganges River",
                ],
                correctAnswer: 2,
            },
            {
                question: "Which is the largest island in the world?",
                options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
                correctAnswer: 0,
            },
            {
                question: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
                correctAnswer: 2,
            },
            {
                question: "Which country has the most time zones?",
                options: ["United States", "Russia", "Canada", "Australia"],
                correctAnswer: 1,
            },
            {
                question: "Which country is known for the Eiffel Tower?",
                options: ["Germany", "Italy", "Spain", "France"],
                correctAnswer: 3,
            },
            {
                question: "Which is the most populous city in the world?",
                options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
                correctAnswer: 0,
            },
            {
                question: "Which mountain range is located in South America?",
                options: [
                    "Himalayas",
                    "Rocky Mountains",
                    "Appalachian Mountains",
                    "Andes",
                ],
                correctAnswer: 3,
            },
            {
                question: "Which continent is known as the 'Dark Continent'?",
                options: ["Asia", "Africa", "South America", "Europe"],
                correctAnswer: 1,
            },
            {
                question: "What is the capital of Brazil?",
                options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
                correctAnswer: 2,
            },
            {
                question: "What is the official language of Brazil?",
                options: ["Spanish", "English", "Portuguese", "French"],
                correctAnswer: 2,
            },
            {
                question: "Which country has the most volcanoes?",
                options: ["Japan", "Indonesia", "United States", "Italy"],
                correctAnswer: 1,
            },
            {
                question: "Which city is known as the Big Apple?",
                options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
                correctAnswer: 1,
            },
            {
                question: "Which ocean is located to the east of Africa?",
                options: [
                    "Indian Ocean",
                    "Pacific Ocean",
                    "Southern Ocean",
                    "Atlantic Ocean",
                ],
                correctAnswer: 3,
            },
            {
                question: "Which is the second largest continent by area?",
                options: ["Asia", "Africa", "North America", "Europe"],
                correctAnswer: 1,
            },
        ],
    },

    {
        category: "mathematics",
        questions: [
            {
                question: "What is the square root of 144?",
                options: ["10", "11", "12", "13"],
                correctAnswer: 2,
            },
            {
                question: "What is 15 × 13?",
                options: ["180", "185", "195", "200"],
                correctAnswer: 2,
            },
            {
                question: "What is the value of 8³?",
                options: ["512", "216", "256", "128"],
                correctAnswer: 0,
            },
            {
                question: "What is 48 ÷ 6?",
                options: ["7", "8", "9", "10"],
                correctAnswer: 1,
            },
            {
                question: "What is the value of 3 + 5 × 4?",
                options: ["20", "22", "24", "23"],
                correctAnswer: 3,
            },
            {
                question: "What is the sum of the angles in a triangle?",
                options: ["180°", "360°", "90°", "270°"],
                correctAnswer: 0,
            },
            {
                question:
                    "What is the perimeter of a square with a side length of 4 cm?",
                options: ["12 cm", "16 cm", "20 cm", "24 cm"],
                correctAnswer: 1,
            },
            {
                question: "What is 11²?",
                options: ["121", "131", "141", "111"],
                correctAnswer: 3,
            },
            {
                question: "What is 9 × 12?",
                options: ["105", "110", "108", "120"],
                correctAnswer: 2,
            },
            {
                question: "What is the value of 16 ÷ 4?",
                options: ["2", "3", "4", "5"],
                correctAnswer: 2,
            },
            {
                question: "What is 25% of 200?",
                options: ["30", "40", "50", "60"],
                correctAnswer: 2,
            },
            {
                question:
                    "What is the area of a rectangle with length 5 cm and width 8 cm?",
                options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
                correctAnswer: 0,
            },
            {
                question: "What is the value of 10 ÷ 2 + 3?",
                options: ["8", "7", "9", "6"],
                correctAnswer: 1,
            },
            {
                question: "What is 3 × 7 + 2?",
                options: ["20", "21", "22", "23"],
                correctAnswer: 1,
            },
            {
                question: "What is the greatest common divisor (GCD) of 24 and 36?",
                options: ["4", "6", "8", "12"],
                correctAnswer: 3,
            },
            {
                question: "What is the least common multiple (LCM) of 6 and 8?",
                options: ["24", "32", "48", "56"],
                correctAnswer: 0,
            },
            {
                question: "What is the value of 2³ × 3?",
                options: ["12", "15", "18", "24"],
                correctAnswer: 0,
            },
            {
                question: "What is the value of 10 × (5 + 3)?",
                options: ["80", "70", "60", "50"],
                correctAnswer: 1,
            },
            {
                question: "What is the value of 14 × 14?",
                options: ["186", "196", "206", "216"],
                correctAnswer: 1,
            },
            {
                question: "What is the sum of the first 10 positive integers?",
                options: ["50", "55", "60", "65"],
                correctAnswer: 1,
            },
            {
                question: "What is 12 × 15?",
                options: ["150", "160", "170", "180"],
                correctAnswer: 3,
            },
            {
                question:
                    "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
                options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
                correctAnswer: 0,
            },
            {
                question: "What is the value of (8 + 2) × 3?",
                options: ["30", "32", "34", "28"],
                correctAnswer: 3,
            },
            {
                question: "What is the value of 50% of 80?",
                options: ["30", "35", "40", "45"],
                correctAnswer: 2,
            },
            {
                question: "What is the value of 25 ÷ 5 × 3?",
                options: ["12", "15", "18", "20"],
                correctAnswer: 1,
            },
        ],
    },

    {
        category: "entertainment",
        questions: [
            {
                question: "Who won the Academy Award for Best Actor in 2022?",
                options: [
                    "Leonardo DiCaprio",
                    "Will Smith",
                    "Joaquin Phoenix",
                    "Matthew McConaughey",
                ],
                correctAnswer: 1,
            },
            {
                question: "Which movie won the Academy Award for Best Picture in 2021?",
                options: ["Parasite", "1917", "The Shape of Water", "Nomadland"],
                correctAnswer: 3,
            },
            {
                question:
                    "Who played the character of Jack Dawson in the movie Titanic?",
                options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
                correctAnswer: 0,
            },
            {
                question:
                    "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
                options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
                correctAnswer: 1,
            },
            {
                question: "Who is known as the 'King of Pop'?",
                options: [
                    "Michael Jackson",
                    "Prince",
                    "Whitney Houston",
                    "Elvis Presley",
                ],
                correctAnswer: 0,
            },
            {
                question: "Which superhero is known for saying, 'I am Iron Man'?",
                options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
                correctAnswer: 3,
            },
            {
                question:
                    "Which movie franchise includes a character named Luke Skywalker?",
                options: [
                    "Guardians of the Galaxy",
                    "Star Wars",
                    "The Matrix",
                    "Star Trek",
                ],
                correctAnswer: 1,
            },
            {
                question:
                    "Who played the character of Hermione Granger in the Harry Potter film series?",
                options: [
                    "Emma Watson",
                    "Anne Hathaway",
                    "Maggie Smith",
                    "Natalie Portman",
                ],
                correctAnswer: 0,
            },
            {
                question: "Who directed the movie 'Inception'?",
                options: [
                    "James Cameron",
                    "Steven Spielberg",
                    "Christopher Nolan",
                    "Martin Scorsese",
                ],
                correctAnswer: 2,
            },
            {
                question: "Which artist released the album 'Lover' in 2019?",
                options: [
                    "Billie Eilish",
                    "Taylor Swift",
                    "Ed Sheeran",
                    "Ariana Grande",
                ],
                correctAnswer: 1,
            },
            {
                question: "What was the first video game to feature Mario?",
                options: [
                    "Mario Kart",
                    "Super Mario Bros.",
                    "Donkey Kong",
                    "The Legend of Zelda",
                ],
                correctAnswer: 2,
            },
            {
                question:
                    "Which movie features the famous line, 'Here's looking at you, kid'?",
                options: [
                    "Casablanca",
                    "Citizen Kane",
                    "The Godfather",
                    "Gone with the Wind",
                ],
                correctAnswer: 0,
            },
            {
                question: "Which country won the FIFA World Cup in 2018?",
                options: ["France", "Germany", "Argentina", "Brazil"],
                correctAnswer: 0,
            },
            {
                question: "Who created the comic book character Spider-Man?",
                options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
                correctAnswer: 1,
            },
            {
                question: "In which movie did Heath Ledger portray the Joker?",
                options: [
                    "The Dark Knight",
                    "Batman Begins",
                    "The Dark Knight Rises",
                    "Joker",
                ],
                correctAnswer: 0,
            },
            {
                question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
                options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
                correctAnswer: 2,
            },
            {
                question:
                    "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
                options: [
                    "Kristen Stewart",
                    "Shailene Woodley",
                    "Jennifer Lawrence",
                    "Emma Stone",
                ],
                correctAnswer: 2,
            },
            {
                question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
                options: [
                    "Heath Ledger",
                    "Johnny Depp",
                    "Joaquin Phoenix",
                    "Jared Leto",
                ],
                correctAnswer: 2,
            },
            {
                question:
                    "Which Disney animated film features the song 'A Whole New World'?",
                options: [
                    "Cinderella",
                    "Aladdin",
                    "Beauty and the Beast",
                    "The Little Mermaid",
                ],
                correctAnswer: 1,
            },
            {
                question:
                    "Which TV series features the characters of Walter White and Jesse Pinkman?",
                options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
                correctAnswer: 3,
            },
            {
                question: "Who sang the hit song 'Shape of You'?",
                options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
                correctAnswer: 3,
            },
            {
                question: "Which film won the Academy Award for Best Picture in 2020?",
                options: [
                    "The Irishman",
                    "Once Upon a Time in Hollywood",
                    "Parasite",
                    "1917",
                ],
                correctAnswer: 2,
            },
            {
                question: "What year did the movie 'The Matrix' release?",
                options: ["1997", "1998", "2000", "1999"],
                correctAnswer: 3,
            },
            {
                question:
                    "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
                options: [
                    "Mark Ruffalo",
                    "Chris Evans",
                    "Robert Downey Jr.",
                    "Chris Hemsworth",
                ],
                correctAnswer: 2,
            },
            {
                question: "Which singer is known as the 'Queen of Pop'?",
                options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
                correctAnswer: 3,
            },
        ],
    },
];

const QuizApp = () => {
    const QUIZ_TIME_LIMIT = 15;
    const [numberOfQuestions, setNumberOfQuestions] = useState(5);
    const [currentTime, setCurrentTime] = useState(QUIZ_TIME_LIMIT);
    const [timer, setTimer] = useState(null);
    const [programmingData, setProgrammingData] = useState([]);
    const [selectCategoryQuestions, setSelectCategoryQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [questionIndexHistory, setQuestionIndexHistory] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [showQuizMainPage, setShowQuizMainPage] = useState(true);

    // reset Timer
    const resetTimer = () => {
        clearInterval(timer);
        setCurrentTime(QUIZ_TIME_LIMIT);
        setShowCorrectAnswer(false);
        startTimer();
    };

    // start Timer
    const startTimer = () => {
        const newTimer = setInterval(() => {
            setCurrentTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(newTimer);
                    setShowCorrectAnswer(true);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        setTimer(newTimer);
    };

    // Random Question Generator
    const handleRandomQuestion = (data) => {
        if (data.length === 0) return;
        resetTimer(); // Reset the timer

        let index;
        do {
            index = Math.floor(Math.random() * data.length);
        } while (questionIndexHistory.includes(index)); // Ensure the question is not repeated

        setCurrentQuestion(data[index]); // Set the new current question
        setQuestionIndexHistory([...questionIndexHistory, index]); // Update the history
        setSelectedAnswer(null); // Reset selected answer
        setShowCorrectAnswer(false); // Hide correct answer indication
    };

    // Correct Answer Check
    const handleCorrectAnswer = (index) => {
        clearInterval(timer);
        setSelectedAnswer(index);
        if (index === currentQuestion.correctAnswer) {
            console.log("Correct Answer");
            setScore((prevScore) => prevScore + 1);
        } else {
            console.log("Wrong Answer");
        }
        setShowCorrectAnswer(true);

        handleShowScoreEvent();
    };

    // Show Score when quiz End
    const handleShowScoreEvent = () => {
        if (questionIndexHistory.length === numberOfQuestions) {
            setShowScore(true);
        }
    };

    // Show Main Page
    const hanldeshowQuizMainPage = () => {
        setShowQuizMainPage(!showQuizMainPage);
    };

    // Select Quiz Category To Play
    const selectCategory = (quizCateogry, index) => {
        const questions = AllcategoryQuestion[index].questions;
        setProgrammingData(questions);
        setSelectCategoryQuestions(index);
        console.log(questions);
    };

    // No Of Question Select
    const selectNumberOfQuestion = (num) => {
        setNumberOfQuestions(num);
        console.log(num);
    };

    // Reset Question Quiz
    const handleResetQuestionQuiz = () => {
        // Reset the programming data to the initial questions
        setShowQuizMainPage(false);
        setProgrammingData(AllcategoryQuestion[selectCategoryQuestions].questions);
        setCurrentQuestion(null);
        setShowScore(false);
        setScore(0);
        setSelectedAnswer(null);
        setShowCorrectAnswer(false);

        // Reset the timer and fetch a new question
        resetTimer();
        handleRandomQuestion(
            AllcategoryQuestion[selectCategoryQuestions].questions
        );
        setQuestionIndexHistory([]);
    };

    useEffect(() => {
        if (selectCategoryQuestions.length > 0) {
            setProgrammingData(selectCategoryQuestions);
        }
    }, [selectCategoryQuestions]);

    useEffect(() => {
        handleRandomQuestion(programmingData);
    }, [programmingData]);

    useEffect(() => {
        return () => {
            clearInterval(timer);
        };
    }, [timer]);

    return (
        <>
            <div
                className={`min-h-screen  flex px-2 ${showQuizMainPage ? "" : "hidden"
                    } justify-center items-center flex-col `}
            >
                <div className="bg-gradient-to-bl from-slate-500 to-slate-200 p-5 rounded-lg">
                    <h1 className="flex justify-center  items-center text-4xl my-10 sm:text-5xl font-bold tracking-wide  sm:my-10">
                        Play&nbsp;<span className="bg-black text-white">Quiz</span>
                    </h1>
                    <div className="flex  flex-col gap-10 sm:gap-20">
                        {/* Select category */}
                        <div className="selectCategory flex justify-center items-start sm:items-center gap-5 sm:gap-10 flex-col">
                            <h2 className="text-lg  sm:text-2xl font-medium underline underline-offset-4 ">
                                Select category
                            </h2>
                            <div className="category-option grid grid-cols-2 gap-7 sm:gap-10">
                                {AllcategoryQuestion.map((cate, index) => {
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => selectCategory(cate.category, index)}
                                            className="px-3 py-2 sm:px-10 sm:py-3 sm:text-lg shadow-md shadow-black bg-teal-700 rounded-xl border-none text-white active:scale-95 hover:bg-teal-800 active:bg-teal-700"
                                        >
                                            {cate.category.charAt(0).toUpperCase() +
                                                cate.category.slice(1)}
                                        </button>
                                    );
                                })}
                            </div>

                            <div>
                                {currentQuestion === null ? (
                                    <p className="text-lg sm:text-xl bg-slate-300 px-1 font-medium text-red-600">
                                        Please select category
                                    </p>
                                ) : (
                                    <p className="text-lg sm:text-xl">
                                        You select this category:{" "}
                                        <span className="font-bold  bg-black p-1 text-white">
                                            {AllcategoryQuestion[selectCategoryQuestions]?.category
                                                .charAt(0)
                                                .toUpperCase() +
                                                AllcategoryQuestion[
                                                    selectCategoryQuestions
                                                ]?.category.slice(1)}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>
                        {/* Select questions Length */}
                        <div className="selectCategory flex justify-center items-start sm:items-center gap-5 sm:gap-10 flex-col">
                            <h2 className="text-lg  sm:text-2xl font-medium underline underline-offset-4">
                                No. of questions
                            </h2>
                            <div className="category-option grid grid-cols-3 sm:grid-cols-5 gap-7">
                                {[5, 10, 15, 20, 25].map((num, index) => {
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => selectNumberOfQuestion(num)}
                                            className="px-5 py-2 sm:px-7 sm:py-3 sm:text-lg shadow-md shadow-black bg-teal-700 rounded-xl border-none text-white active:scale-95 hover:bg-teal-800"
                                        >
                                            {num}
                                        </button>
                                    );
                                })}
                            </div>
                            <div>
                                {numberOfQuestions === 5 ? (
                                    <p className="text-lg sm:text-xl">
                                        Default <span className="text-white bg-black px-1">5</span>{" "}
                                        questions
                                    </p>
                                ) : (
                                    <p className="text-lg sm:text-xl">
                                        You selected{" "}
                                        <span className="text-white bg-black px-1">
                                            {numberOfQuestions}
                                        </span>{" "}
                                        questions
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Start */}
                        <div className="flex justify-center items-center mb-10">
                            <button
                                onClick={handleResetQuestionQuiz}
                                className="px-10 py-3 shadow-black shadow-md font-bold rounded-full bg-teal-700 hover:bg-teal-800 active:scale-95 text-white"
                                style={{
                                    pointerEvents:
                                        currentQuestion !== null ? "auto" : "none",
                                }}
                            >
                                Start Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quiz Container */}
            {!showQuizMainPage && (
                <div className="my-52 flex flex-col gap-20 p-2 sm:p-0 justify-center items-center">
                    {!showScore && (
                        <div className="flex justify-center items-center flex-col gap-10 sm:gap-14 bg-slate-200 p-5 sm:p-10 rounded-xl shadow-md shadow-black">
                            <div className="flex justify-between w-full items-start gap-10">
                                <h1 className="text-xl font-bold sm:text-3xl md:text-4xl">
                                    Quiz Application For{" "}
                                    {AllcategoryQuestion[selectCategoryQuestions].category
                                        .charAt(0)
                                        .toUpperCase() +
                                        AllcategoryQuestion[selectCategoryQuestions].category.slice(
                                            1
                                        )}
                                </h1>
                                <div className="flex bg-slate-700 p-2 rounded-md text-white font-bold justify-center gap-2 sm:gap-3 items-center">
                                    <FaClockRotateLeft size={20} />
                                    <p>{currentTime}s</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-start gap-5 w-full">
                                {currentQuestion && currentQuestion.options && (
                                    <>
                                        <h1 className="text-xl font-bold sm:text-3xl md:text-4xl">
                                            {currentQuestion.question}
                                        </h1>
                                        <div className="option flex justify-center items-center gap-4 flex-col sm:text-lg w-full">
                                            {currentQuestion.options.map((option, index) => (
                                                <div
                                                    onClick={() => handleCorrectAnswer(index)}
                                                    key={index}
                                                    className={`border-2 ${selectedAnswer !== null
                                                            ? index === currentQuestion.correctAnswer
                                                                ? "bg-green-300 border-green-500 "
                                                                : index === selectedAnswer
                                                                    ? "bg-red-300 border-red-500 "
                                                                    : "opacity-50 bg-slate-400"
                                                            : "bg-slate-400"
                                                        } active:bg-slate-400 p-2 rounded-md cursor-pointer`}
                                                    style={{
                                                        pointerEvents:
                                                            selectedAnswer !== null ? "none" : "auto",
                                                    }}
                                                >
                                                    <p>{option}</p>
                                                    {selectedAnswer !== null && (
                                                        <>
                                                            {index === currentQuestion.correctAnswer && (
                                                                <FaCircleCheck
                                                                    size={30}
                                                                    className="text-green-600"
                                                                />
                                                            )}
                                                            {index === selectedAnswer &&
                                                                index !== currentQuestion.correctAnswer && (
                                                                    <MdCancel
                                                                        size={30}
                                                                        className="text-red-600"
                                                                    />
                                                                )}
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        {showCorrectAnswer && (
                                            <div className="mt-4 text-lg font-bold">
                                                <p>
                                                    The correct answer is:{" "}
                                                    {
                                                        currentQuestion.options[
                                                        currentQuestion.correctAnswer
                                                        ]
                                                    }
                                                </p>
                                            </div>
                                        )}
                                    </>
                                )}

                                <div className="flex justify-between items-center gap-10 sm:w-full">
                                    <p className="text-lg underline underline-offset-2">
                                        <span className="font-bold">
                                            {questionIndexHistory.length} / {numberOfQuestions}
                                        </span>{" "}
                                        Questions
                                    </p>
                                    {selectedAnswer !== null &&
                                        questionIndexHistory.length <
                                        Math.min(programmingData.length, numberOfQuestions) && (
                                            <button
                                                onClick={() => handleRandomQuestion(programmingData)}
                                                className={`flex gap-3 items-center bg-blue-500 hover:bg-blue-700 active:scale-95 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                                            >
                                                Next <FaArrowRight />
                                            </button>
                                        )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* show Result */}
                    {showScore && (
                        <div className="winning-section flex flex-col justify-center items-center gap-5 bg-slate-700 p-10 rounded-xl shadow-md shadow-black ">
                            <h1 className="text-3xl md:text-4xl font-bold text-white w-full">Quiz Complete</h1>
                            <p className="text-2xl font-bold text-white tracking-wide text-center">
                                You answered <span className="text-green-600">{score}</span> out
                                of <span className="text-green-600">{numberOfQuestions}</span>{" "}
                                questions correct{" "}
                                <span className="text-green-600">Great !!</span>
                            </p>
                            <button
                                onClick={hanldeshowQuizMainPage}
                                className="bg-blue-500 hover:bg-blue-700 active:scale-95 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Try Again
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default QuizApp;
