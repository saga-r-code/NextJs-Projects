"use client";
import React, { useEffect, useState } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";

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
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
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
        // Clear any existing timer
        if (timer) {
            clearInterval(timer);
            setTimer(null); // Important: Reset the timer state
        }
        setCurrentTime(QUIZ_TIME_LIMIT);
        setShowCorrectAnswer(false);
    };

    // Random Question Generator
    const handleRandomQuestion = (data) => {
        if (data.length === 0) return;
        
        let index;
        do {
            index = Math.floor(Math.random() * data.length);
        } while (questionIndexHistory.includes(index));

        // First update the question state
        setCurrentQuestion(data[index]);
        setQuestionIndexHistory([...questionIndexHistory, index]);
        setSelectedAnswer(null);
        setShowCorrectAnswer(false);
        
        // Then handle the timer
        resetTimer();
        
        // Create new timer after state updates
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
        setQuestionIndexHistory([]);

        // Let handleRandomQuestion handle the timer
        handleRandomQuestion(
            AllcategoryQuestion[selectCategoryQuestions].questions
        );
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
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [timer]);

    return (
        <>
        <Navbar />
            <div className={`layout-style bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-50 flex px-4 ${showQuizMainPage ? "" : "hidden"}  py-10`}>
                        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
                    <h1 className="text-center text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Interactive Quiz
                    </h1>
                    <div className="space-y-12">
                        {/* Select category */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                                Select Category
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {AllcategoryQuestion.map((cate, index) => (
                                    <button
                                        key={index}
                                        onClick={() => selectCategory(cate.category, index)}
                                        className="px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg shadow-md transform transition hover:scale-105 font-medium"
                                    >
                                        {cate.category.charAt(0).toUpperCase() + cate.category.slice(1)}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-4">
                                {currentQuestion === null ? (
                                    <p className="text-red-500 bg-red-50 p-3 rounded-lg font-medium">
                                        Please select a category to continue
                                    </p>
                                ) : (
                                    <p className="text-green-600 bg-green-50 p-3 rounded-lg font-medium">
                                        Selected category:{" "}
                                        <span className="font-bold">
                                            {AllcategoryQuestion[selectCategoryQuestions]?.category
                                                .charAt(0)
                                                .toUpperCase() +
                                                AllcategoryQuestion[selectCategoryQuestions]?.category.slice(1)}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Select questions Length */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                                Number of Questions
                            </h2>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                                {[5, 10, 15, 20, 25].map((num, index) => (
                                    <button
                                        key={index}
                                        onClick={() => selectNumberOfQuestion(num)}
                                        className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-lg shadow-md transform transition hover:scale-105 font-medium"
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-4">
                                {numberOfQuestions === 0 ? (
                                    <p className="text-gray-600 bg-gray-50 p-3 rounded-lg font-medium">
                                        Select number of questions to begin
                                    </p>
                                ) : (
                                    <p className="text-blue-600 bg-blue-50 p-3 rounded-lg font-medium">
                                        Selected {numberOfQuestions} questions
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Start Button */}
                        <div className="flex justify-center pt-6">
                            <button
                                onClick={handleResetQuestionQuiz}
                                className={`px-12 py-4 text-lg font-bold rounded-full transform transition ${currentQuestion !== null && numberOfQuestions
                                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white hover:scale-105"
                                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }`}
                                disabled={!(currentQuestion !== null && numberOfQuestions)}
                            >
                                Start Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quiz Container */}
            {!showQuizMainPage && (
                <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-50 py-10 px-4">
                    <div className="max-w-4xl mx-auto">
                        {!showScore && (
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                                        {AllcategoryQuestion[selectCategoryQuestions].category
                                            .charAt(0)
                                            .toUpperCase() +
                                            AllcategoryQuestion[selectCategoryQuestions].category.slice(1)} Quiz
                                    </h1>
                                    <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg">
                                        <FaClockRotateLeft className="text-xl" />
                                        <span className="text-xl font-bold">{currentTime}s</span>
                                    </div>
                                </div>

                                {currentQuestion && currentQuestion.options && (
                                    <div className="space-y-8">
                                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                                            {currentQuestion.question}
                                        </h2>
                                        <div className="grid gap-4">
                                            {currentQuestion.options.map((option, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleCorrectAnswer(index)}
                                                    className={`w-full p-4 rounded-xl text-left transition-all ${selectedAnswer !== null
                                                            ? index === currentQuestion.correctAnswer
                                                                ? "bg-green-100 border-2 border-green-500"
                                                                : index === selectedAnswer
                                                                    ? "bg-red-100 border-2 border-red-500"
                                                                    : "bg-gray-100 opacity-50"
                                                            : "bg-white border-2 border-gray-200 hover:border-purple-500"
                                                        } flex justify-between items-center`}
                                                    disabled={selectedAnswer !== null}
                                                >
                                                    <span className="text-lg">{option}</span>
                                                    {selectedAnswer !== null && (
                                                        <>
                                                            {index === currentQuestion.correctAnswer && (
                                                                <FaCircleCheck className="text-2xl text-green-500" />
                                                            )}
                                                            {index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                                                                <MdCancel className="text-2xl text-red-500" />
                                                            )}
                                                        </>
                                                    )}
                                                </button>
                                            ))}
                                        </div>

                                        {showCorrectAnswer && (
                                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                                <p className="text-blue-700 font-medium">
                                                    Correct answer: {currentQuestion.options[currentQuestion.correctAnswer]}
                                                </p>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap  gap-5 justify-between items-center mt-8">
                                            <p className="text-lg font-medium text-gray-600">
                                                Question {questionIndexHistory.length} of {numberOfQuestions}
                                            </p>
                                            {selectedAnswer !== null &&
                                                questionIndexHistory.length < Math.min(programmingData.length, numberOfQuestions) && (
                                                    <button
                                                        onClick={() => handleRandomQuestion(programmingData)}
                                                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
                                                    >
                                                        Next Question <FaArrowRight />
                                                    </button>
                                                )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {showScore && (
                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                    Quiz Complete!
                                </h2>
                                <div className="py-6">
                                    <p className="text-xl text-gray-700">
                                        You scored <span className="text-green-500 font-bold">{score}</span> out of{" "}
                                        <span className="text-green-500 font-bold">{numberOfQuestions}</span>
                                    </p>
                                    <p className="text-purple-600 font-medium mt-2">Well done!</p>
                                </div>
                                <button
                                    onClick={hanldeshowQuizMainPage}
                                    className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-3 rounded-lg font-medium transition transform hover:scale-105"
                                >
                                    Try Another Quiz
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default QuizApp;

