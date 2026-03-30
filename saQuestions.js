const saQuestions = [
    {
        id: "SA_DR001",
        type: "data-response",
        section: "B",
        subtopic: "B.2",
        level: "SL/HL",
        title: "Question 1 — Context",
        context: "In 2016, carbon fibre plate (CFP) shoes were introduced. The makers claimed that the shoes would improve times in long-distance running events.<br><br>(a) The effectiveness of the CFP shoes was investigated by recording the running times of a female athlete. She competed in six 10 km races over a 10-week period, alternating between her usual shoes and a pair of CFP shoes.",
        table: {
            title: "Table 1: Female athlete's mean 10 km time",
            headers: ["", "Mean 10 km time"],
            rows: [
                ["Usual shoes", "40 minutes 03 seconds (40.05 minutes)"],
                ["CFP shoes", "38 minutes 59 seconds (38.98 minutes)"]
            ],
            image: "images/HL1BQ1Ci.png"
        },
        parts: [
            {
                label: "(a)(i)",
                question: "Using Table 1, identify the shoe brand that appears most frequently in the top 10 male marathon times.",
                marks: 1,
                answer: "Nike ✔",
                studentExplanation: {
                    title: "Percentage Change:",
                    content: "Count the occurrences of each brand in the 'Shoe' column for males. Nike is the dominant brand in the list."
                }
            },
            {
                label: "(a)(ii)",
                answer: "✓ altitude affects performance;<br>✓ controlled variable;",
                studentExplanation: null
            }
        ]
    }
];

window.saQuestions = saQuestions;
