const p2Questions = [
    {
        id: "P2_001",
        type: "structured",
        section: "B",
        subtopic: "B.1.4",
        level: "HL",
        title: "Question 1 — Rowing",
        context: "Rowing is a sport that involves the use of oars to propel a boat through water. The oar acts as a lever system.",
        parts: [
            {
                label: "(a)(i)",
                question: "Identify the type of lever.",
                marks: 1,
                answer: "✓ first class <lever>;<br><i>Accept \"second class lever\" as the end of the blade can act as fulcrum.</i>",
                studentExplanation: {
                    title: "Lever Systems",
                    icon: "📚",
                    content: "In a <b>first-class lever</b>, the fulcrum sits <i>between</i> the effort and the load — like a seesaw. In the rowing oar, the <b>oarlock (fulcrum)</b> sits between the rower's hands (effort) and the blade (load). A <b>second-class lever</b> is also accepted because if you treat the <i>end of the blade</i> where it meets the water as the fixed point (fulcrum), the load (boat/oarlock resistance) sits between it and the effort (hands) — making it second class. Both interpretations are biomechanically valid depending on where you define the fulcrum.<br><br>📖 <b>Course Companion, pp. 300–303 (Chapter B.1.4)</b>"
                }
            },
            {
                label: "(a)(ii)",
                question: "Identify the fulcrum and the load on the oar.",
                marks: 2,
                answer: "Fulcrum: ✓ oarlock/gate;<br>Load: ✓ blade/cleaver;<br><i>Accept \"end of the blade\" for the fulcrum if \"second class lever\" given in (i).</i>",
                studentExplanation: {
                    title: "Lever Components",
                    icon: "📚",
                    content: "The <b>three components of any lever</b> are the fulcrum (pivot point), the effort (applied force), and the load (resistance to be overcome). In the rowing oar:<br><ul><li><b>Effort</b> = the rower's hands pulling the handle</li><li><b>Fulcrum</b> = the oarlock (the metal hoop through which the oar pivots)</li></ul>"
                }
            }
        ]
    }
];

window.p2Questions = p2Questions;
