const p2Questions = [
    {
        id: "P2_001",
        type: "structured",
        section: "B",
        subtopic: "B.1.4",
        level: "HL",
        title: "Question 1 — Rowing",
        context: "Rowing is a sport that involves the use of oars to propel a boat through water. The oar acts as a lever system. Figures 1-4 show data and lever analysis, and Figures 5-8 show force-time curves for different rowing techniques.",
        images: [
            "images/HL2Q1fig1.png", "images/HL2Q1fig2.png", "images/HL2Q1fig3.png", "images/HL2Q1fig4.png",
            "images/HL2Q1fig5.png", "images/HL2Q1fig6.png", "images/HL2Q1fig7.png", "images/HL2Q1fig8.png"
        ],
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
    },
    {
        id: "P2_002",
        type: "structured",
        section: "A",
        subtopic: "A.1.3",
        level: "SL",
        title: "Question 2 — Physiology",
        context: "Cardiovascular redistribution during exercise.",
        parts: [
            {
                label: "(a)",
                question: "Describe how blood is redistributed during exercise.",
                marks: 5,
                answer: "Exercise: Increases blood acidity/temperature/CO2 causing a redistribution of blood OR Sympathetic stimulation/nervous system controls the vascular shunt/redistribution of blood ✔ Q/blood is redistribution to working/active muscles/tissues ✔ Vasodilation «of arterioles» to working/active muscles/tissues ✔ Q/blood is directed away from non-active tissues «e.g. kidneys» ✔ Vasoconstriction «of arterioles» to non-active tissues «e.g. stomach» ✔ Vasodilation to the skin provides a cooling process ✔ However, blood flow to the brain remains constant ✔ Exercise enhances venous return due to muscle/respiratory pumps «aiding distribution of Q» ✔",
                studentExplanation: "Think about the 'Vascular Shunt' mechanism. Adrenaline and the nervous system tell blood vessels to open up (dilate) near muscles and squeeze shut (constrict) near the gut. This pushes blood to where it's needed most."
            }
        ]
    },
    {
        id: "P2_003",
        type: "structured",
        section: "B",
        subtopic: "B.1.4",
        level: "SL",
        title: "Question 3 — Biomechanics",
        context: "Lever classes in sport.",
        parts: [
            {
                label: "(a)",
                question: "Distinguish between first class levers and third class levers.",
                marks: 2,
                answer: "Third-class lever has effort in the middle, first-class lever has the fulcrum in the middle ✔ Third-class lever always has longer load arm, in the first-class lever, the load arm and effort arm depend on where the fulcrum is placed in relation to load and effort ✔ Third-class lever is a speed multiplier, the first-class lever can be a speed or strength multiplier ✔",
                studentExplanation: "Remember the order: FLE (1-2-3). 1=Fulcrum in middle, 2=Load in middle, 3=Effort in middle. Most joints in the body are 3rd class levers!"
            }
        ]
    },
    {
        id: "P2_004",
        type: "structured",
        section: "C",
        subtopic: "C.1.2",
        level: "SL",
        title: "Question 4 — Psychology",
        context: "Anxiety in athletes.",
        parts: [
            {
                label: "(a)",
                question: "Distinguish between cognitive and somatic anxiety. Give sporting examples.",
                marks: 4,
                answer: "Cognitive anxiety: worry/negative thoughts/loss of concentration/doubts ✔ Somatic anxiety: physiological symptoms/increased heart rate/sweating/nausea/butterflies ✔ Cognitive example: 'I'm going to fail'/fear of making mistakes ✔ Somatic example: increased HR/sweating/nausea/trembling ✔",
                studentExplanation: "Cognitive = Head (thoughts). Somatic = Body (physical feelings). Both can hurt performance if too high."
            }
        ]
    },
    {
        id: "P2_005",
        type: "structured",
        section: "A",
        subtopic: "A.2.3",
        level: "SL",
        title: "Question 5 — Energy Systems",
        context: "Energy for a 400m sprint.",
        parts: [
            {
                label: "(a)",
                question: "An athlete runs a 400 metre race in 60 seconds. Describe the re-synthesis of ATP during this race.",
                marks: 6,
                answer: "ATP is re-synthesized anaerobically/without presence of oxygen ✔ First few seconds ATP is re-synthesized using the CP system ✔ Creatine phosphate is broken down into Cr, P and energy ✔ ADP + P + energy = ATP OR 1 CP molecule: 1 ATP ✔ Creatine kinase is the controlling enzyme ✔ The predominant energy system is the lactic acid system/anaerobic glycolysis ✔ Glucose is broken down into pyruvate ✔ Pyruvate is converted to lactic acid ✔ By lactate dehydrogenase ✔ 1 glucose molecule: 2 ATP <net> ✔",
                studentExplanation: "At the start, you use stored CP (lasts ~10s). Then the lactic acid system takes over for the rest of the minute. It's almost entirely anaerobic."
            }
        ]
    },
    {
        id: "P2_006",
        type: "structured",
        section: "A",
        subtopic: "A.1.2",
        level: "SL",
        title: "Question 6 — Nutrition",
        context: "Hormonal regulation of fuel.",
        parts: [
            {
                label: "(a)",
                question: "Explain the role of insulin in the formation of glycogen.",
                marks: 3,
                answer: "Insulin is released from pancreas «beta cells» in response to elevated <blood> glucose levels ✔ Insulin increases muscle/fat/liver cell permeability «through translocation of GLUT 4 or GLUT 1 for the liver» ✔ This stimulates glucose uptake/glycogen formation/glycogenesis in «skeletal» muscle/fat/liver «cells» ✔ Glycogen is formed linking large numbers of glucose molecules together ✔",
                studentExplanation: "Insulin is like a key that opens the 'doors' (GLUT4) of your muscles to let sugar in and store it as glycogen for later."
            }
        ]
    },
    {
        id: "P2_007",
        type: "structured",
        section: "B",
        subtopic: "B.2.1",
        level: "SL",
        title: "Question 7 — Motion",
        context: "Two balls are the same diameter but A is heavier (has more mass) than B.",
        parts: [
            {
                label: "(a)",
                question: "Explain how Newton's second and third laws of motion would influence each of the balls.",
                marks: 6,
                answer: "Second law: acceleration is proportional to, and in the same direction as, the unbalanced force applied to it ✔ Ball A has a larger mass and therefore would require a greater amount of force applied to accelerate it at the same speed as ball B ✔ Third law: For every action there is an equal and opposite reaction ✔ The player applying a force to the ball has an equal and opposite force applied back to them ✔ When ball A is dribbled/bounced, it will create a larger reaction force from the floor to the ball ✔",
                studentExplanation: "F=ma means heavy things need more force. The 3rd law means the harder you hit the ball, the harder the ball hits you back!"
            }
        ]
    },
    {
        id: "P2_008",
        type: "structured",
        section: "C",
        subtopic: "C.3.2",
        level: "SL",
        title: "Question 8 — Motivation",
        context: "Types of motivation in sport.",
        parts: [
            {
                label: "(a)",
                question: "Using examples, distinguish between intrinsic and extrinsic motivation.",
                marks: 2,
                answer: "Intrinsic motivation from within is its own reward, connected to engaging in an activity for its inherent satisfaction, whereas extrinsic motivation serves as a means to achieving a specific goal/external stimulus ✔ Extrinsic motivation is contingent upon a reward whereas intrinsic motivation is not ✔ Intrinsic example: enjoyment / fun. Extrinsic example: money / trophies ✔",
                studentExplanation: "Intrinsic = doing it because you love it. Extrinsic = doing it for the medal or the money."
            }
        ]
    },
    {
        id: "P2_009",
        type: "structured",
        section: "B",
        subtopic: "B.2.3",
        level: "SL",
        title: "Question 9 — Biomechanics",
        context: "Balance and stability.",
        parts: [
            {
                label: "(a)",
                question: "Define the term centre of mass.",
                marks: 1,
                answer: "The point around which the mass of a body is evenly distributed OR the point which the body is balanced in all directions ✔",
                studentExplanation: "It's the balance point of your body. It moves when you move your limbs!"
            }
        ]
    },
    {
        id: "P2_010",
        type: "structured",
        section: "A",
        subtopic: "A.3.1",
        level: "SL",
        title: "Question 10 — Training",
        context: "Indicators of overtraining.",
        parts: [
            {
                label: "(a)",
                question: "Identify two indicators of overtraining.",
                marks: 2,
                answer: "Increase to resting heart rate/higher blood pressure ✔ Chronic muscle soreness/bone tenderness ✔ Reduced immune function/increased susceptibility to infections ✔ Sleep disturbance ✔ Chronic fatigue ✔ Decreased appetite / weight loss ✔ Sudden and unexplained decrease in performance / motivation ✔",
                studentExplanation: "If you train too hard without rest, your body starts to break down. Watch for high resting HR and getting sick easily."
            }
        ]
    }
];

window.p2Questions = p2Questions;
