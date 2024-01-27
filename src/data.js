const questions = [
    {
        id: 1,
        title: "Whats on your mind?",
        answers: [
            {
                id: 1,
                text: "Giving",
                followUp: 1
            },
            {
                id: 2,
                text: "Doing",
                followUp: 2
            },
            {
                id: 3,
                text: "Thoughts",
                followUp: 3
            },
            {
                id: 4,
                text: "Fear",
                followUp: 4
            },
        ],
        back: false
    },
    {
        id: 2,
        title: "Aim I to give?",
        question: "Why do I want to give?",
        answers: [
            {
                id: 1,
                text: "Because someone asked me",
                followUp: 4
            },
            {
                id: 2,
                text: "Because I'm good when I give",
                resultPage: "/result-no"
            },
            {
                id: 3,
                text: "Because it's expected of me",
                resultPage: "/result-no"
            },
            {
                id: 4,
                text: "Because I want to",
                resultPage: "/result-yes"
            }
        ],
        back: 0

    },
    {
        id: 3,
        title: "Should I do it?",
        question: "Why do I want to do it?",
        answers: [
            {
                id: 1,
                text: "Because someone wants me to",
                followUp: 4
            },
            {
                id: 2,
                text: "Because it's what I'm suppose to do",
                resultPage: "/result-no"
            },
            {
                id: 3,
                text: "Because I'm good when I do it",
                resultPage: "/result-no"
            },
            {
                id: 4,
                text: "Because I want to",
                resultPage: "/result-yes"
            }
        ],
        back: 0
    },
    {
        id: 4,
        title: "Is it true?",
        question: "What is it about?",
        answers: [
            {
                id: 1,
                text: "About the future",
                resultPage: "/result-no"
            },
            {
                id: 2,
                text: "About the past",
                resultPage: "/result-no"
            },
            {
                id: 3,
                text: "About the here and the now",
                followUp: 4
            },
            {
                id: 4,
                text: "About me",
                followUp: 4
            }
        ],
        back: 0
    },
    {
        id: 5,
        title: "Is it true?",
        question: "How does it make you feel?",
        answers: [
            {
                id: 1,
                text: "Just good!",
                resultPage: "/result-yes"
            },
            {
                id: 2,
                text: "I don't know",
                resultPage: "/result-no"
            },
            {
                id: 2,
                text: "Bad",
                resultPage: "/result-no"
            },
        ],
        back: 0
    }
]

export default questions;
