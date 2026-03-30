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
            ]
        },
        parts: [
            {
                label: "(a)(i)",
                question: "Calculate the percentage reduction in 10 km running time.",
                marks: 1,
                answer: "(40.05 – 38.98) ÷ 40.05 × 100 = 2.67 <%>",
                studentExplanation: {
                    title: "Percentage Change:",
                    content: "Percentage change is calculated using the formula:<br><div style='text-align:center;margin:10px 0;'>Percentage change = (Original value – New value) / Original value × 100</div> Here, the original value is the usual shoe time (40.05 min) and the new value is the CFP shoe time (38.98 min). A <i>reduction</i> means the new value is smaller. The answer must be expressed as a percentage (%). Always check that you are dividing by the <b>original</b> value, not the new one. See <b>Course Companion p. 638</b> for a worked version of this question."
                }
            },
            {
                label: "(a)(ii)",
                question: "Explain why the study selected only races taking place at sea level.",
                marks: 2,
                answer: "✓ altitude affects performance;<br>✓ controlled variable;",
                studentExplanation: null
            }
        ]
    }
];

window.saQuestions = saQuestions;
