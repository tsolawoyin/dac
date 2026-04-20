export interface Question {
  id: string;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  is_visible: boolean;
}

export const questions = [
  {
    id: "femur-001",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which part of the femur articulates with the acetabulum?",
    options: [
      "Neck of femur",
      "Head of femur",
      "Greater trochanter",
      "Lesser trochanter",
    ],
    answer: "Head of femur",
    explanation:
      "The head of the femur articulates with the acetabulum of the hip bone to form the hip joint.",
    is_visible: true,
  },
  {
    id: "femur-002",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The head of the femur is directed:",
    options: [
      "Laterally, upward, and backward",
      "Medially, upward, and forward",
      "Medially, downward, and backward",
      "Laterally, downward, and forward",
    ],
    answer: "Medially, upward, and forward",
    explanation:
      "The head of the femur faces medially, upward, and forward toward the acetabulum.",
    is_visible: true,
  },
  {
    id: "femur-003",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure is found on the posterior aspect of the proximal femur?",
    options: [
      "Intertrochanteric line",
      "Patellar surface",
      "Intertrochanteric crest",
      "Linea aspera",
    ],
    answer: "Intertrochanteric crest",
    explanation:
      "The intertrochanteric crest is located on the posterior surface of the proximal femur, while the intertrochanteric line is anterior.",
    is_visible: true,
  },
  {
    id: "femur-004",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which of the following structures lies between the medial and lateral condyles posteriorly?",
    options: [
      "Patellar surface",
      "Intertrochanteric crest",
      "Intercondylar fossa",
      "Linea aspera",
    ],
    answer: "Intercondylar fossa",
    explanation:
      "The intercondylar fossa is the deep notch found between the condyles on the posterior distal femur.",
    is_visible: true,
  },
  {
    id: "femur-005",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure is found on the posterior surface of the shaft of the femur?",
    options: [
      "Intertrochanteric line",
      "Linea aspera",
      "Patellar surface",
      "Adductor tubercle",
    ],
    answer: "Linea aspera",
    explanation:
      "The linea aspera is a prominent longitudinal ridge on the posterior surface of the shaft of the femur.",
    is_visible: true,
  },
  {
    id: "femur-006",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The lesser trochanter is located on which aspect of the femur?",
    options: [
      "Anterolateral",
      "Posterolateral",
      "Posteromedial",
      "Anteromedial",
    ],
    answer: "Posteromedial",
    explanation:
      "The lesser trochanter is a posteromedial projection at the junction of the neck and shaft of the femur.",
    is_visible: true,
  },
  {
    id: "femur-007",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure on the femur provides attachment for the ligament of the head of the femur?",
    options: [
      "Intertrochanteric crest",
      "Fovea capitis",
      "Lesser trochanter",
      "Gluteal tuberosity",
    ],
    answer: "Fovea capitis",
    explanation:
      "The fovea capitis is a small pit on the head of the femur that gives attachment to the ligament of the head of the femur.",
    is_visible: true,
  },
  {
    id: "femur-008",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which part of the distal femur articulates with the patella?",
    options: [
      "Intercondylar fossa",
      "Patellar surface",
      "Adductor tubercle",
      "Lateral condyle",
    ],
    answer: "Patellar surface",
    explanation:
      "The patellar surface is the smooth anterior surface of the distal femur that articulates with the patella.",
    is_visible: true,
  },
  {
    id: "femur-009",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which artery is the major blood supply to the head of the femur in adults?",
    options: [
      "Lateral circumflex femoral artery",
      "Femoral artery",
      "Medial circumflex femoral artery",
      "Obturator artery",
    ],
    answer: "Medial circumflex femoral artery",
    explanation:
      "The medial circumflex femoral artery provides the major blood supply to the head and neck of the femur in adults.",
    is_visible: true,
  },
  {
    id: "femur-010",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The neck of the femur passes:",
    options: [
      "Upward, forward, and medially",
      "Downward, backward, and laterally",
      "Downward, forward, and medially",
      "Upward, backward, and laterally",
    ],
    answer: "Downward, backward, and laterally",
    explanation:
      "From the head toward the shaft, the neck of the femur passes downward, backward, and laterally.",
    is_visible: true,
  },
  {
    id: "femur-011",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which trochanter is larger?",
    options: [
      "Lesser trochanter",
      "Greater trochanter",
      "Both are equal",
      "Neither",
    ],
    answer: "Greater trochanter",
    explanation: "The greater trochanter is larger and more lateral.",
    is_visible: true,
  },
  {
    id: "femur-012",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which trochanter gives insertion to iliopsoas?",
    options: [
      "Greater trochanter",
      "Intertrochanteric crest",
      "Lesser trochanter",
      "Linea aspera",
    ],
    answer: "Lesser trochanter",
    explanation: "Iliopsoas inserts into the lesser trochanter.",
    is_visible: true,
  },
  {
    id: "femur-013",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The intertrochanteric line is located on which surface?",
    options: ["Posterior", "Anterior", "Medial", "Lateral"],
    answer: "Anterior",
    explanation: "The intertrochanteric line lies anteriorly.",
    is_visible: true,
  },
  {
    id: "femur-014",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The intertrochanteric crest is located on which surface?",
    options: ["Anterior", "Posterior", "Medial", "Lateral"],
    answer: "Posterior",
    explanation: "The intertrochanteric crest lies posteriorly.",
    is_visible: true,
  },
  {
    id: "femur-015",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure is found at the midpoint of the intertrochanteric crest?",
    options: [
      "Adductor tubercle",
      "Quadrate tubercle",
      "Gluteal tuberosity",
      "Nutrient foramen",
    ],
    answer: "Quadrate tubercle",
    explanation:
      "The quadrate tubercle is located on the intertrochanteric crest.",
    is_visible: true,
  },
  {
    id: "femur-016",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the gluteal tuberosity?",
    options: ["Gluteus maximus", "Gluteus medius", "Piriformis", "Iliacus"],
    answer: "Gluteus maximus",
    explanation: "Gluteus maximus inserts partly into the gluteal tuberosity.",
    is_visible: true,
  },
  {
    id: "femur-017",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the greater trochanter?",
    options: ["Pectineus", "Adductor longus", "Gluteus medius", "Gracilis"],
    answer: "Gluteus medius",
    explanation:
      "Gluteus medius inserts into the lateral surface of the greater trochanter.",
    is_visible: true,
  },
  {
    id: "femur-018",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the lesser trochanter?",
    options: [
      "Gluteus maximus",
      "Iliopsoas",
      "Adductor magnus",
      "Rectus femoris",
    ],
    answer: "Iliopsoas",
    explanation: "Iliopsoas inserts into the lesser trochanter.",
    is_visible: true,
  },
  {
    id: "femur-019",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The nutrient foramen of the femur is usually directed:",
    options: ["Upward", "Laterally", "Downward", "Medially"],
    answer: "Upward",
    explanation: "The nutrient canal is directed upward in the femur.",
    is_visible: true,
  },
  {
    id: "femur-020",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which surface of the shaft is smooth?",
    options: ["Posterior", "Anterior", "Medial", "Lateral"],
    answer: "Anterior",
    explanation: "The anterior surface of the shaft is smooth and convex.",
    is_visible: true,
  },
  {
    id: "femur-021",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The linea aspera divides inferiorly into:",
    options: [
      "Two trochanters",
      "Two condyles",
      "Medial and lateral supracondylar lines",
      "Intertrochanteric lines",
    ],
    answer: "Medial and lateral supracondylar lines",
    explanation:
      "Inferiorly, the linea aspera divides into supracondylar lines.",
    is_visible: true,
  },
  {
    id: "femur-022",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which tubercle is found above the medial condyle?",
    options: [
      "Quadrate tubercle",
      "Adductor tubercle",
      "Intercondylar tubercle",
      "Gluteal tubercle",
    ],
    answer: "Adductor tubercle",
    explanation: "The adductor tubercle lies above the medial epicondyle.",
    is_visible: true,
  },
  {
    id: "femur-023",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the adductor tubercle?",
    options: [
      "Adductor magnus",
      "Adductor brevis",
      "Gluteus maximus",
      "Sartorius",
    ],
    answer: "Adductor magnus",
    explanation:
      "Hamstring part of adductor magnus inserts into the adductor tubercle.",
    is_visible: true,
  },
  {
    id: "femur-024",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which condyle projects more inferiorly?",
    options: ["Lateral condyle", "Medial condyle", "Both equal", "Neither"],
    answer: "Medial condyle",
    explanation: "The medial condyle projects further inferiorly.",
    is_visible: true,
  },
  {
    id: "femur-025",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which condyle is more prominent anteriorly?",
    options: ["Medial condyle", "Lateral condyle", "Both equal", "Neither"],
    answer: "Lateral condyle",
    explanation: "The lateral condyle is more prominent anteriorly.",
    is_visible: true,
  },
  {
    id: "femur-026",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which structure is used to determine the side of a femur?",
    options: [
      "Head faces laterally",
      "Linea aspera faces anteriorly",
      "Head faces medially",
      "Patellar surface faces posteriorly",
    ],
    answer: "Head faces medially",
    explanation: "The head always faces medially.",
    is_visible: true,
  },
  {
    id: "femur-027",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "The patellar surface is found on which aspect of the distal femur?",
    options: ["Anterior", "Posterior", "Medial", "Lateral"],
    answer: "Anterior",
    explanation: "The patellar surface lies anteriorly between the condyles.",
    is_visible: true,
  },
  {
    id: "femur-028",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which structure lies above the condyles posteriorly?",
    options: [
      "Patellar surface",
      "Supracondylar lines",
      "Intertrochanteric crest",
      "Trochanteric fossa",
    ],
    answer: "Supracondylar lines",
    explanation:
      "The supracondylar lines are continuations of the linea aspera.",
    is_visible: true,
  },
  {
    id: "femur-029",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The normal angle of inclination of the femur is approximately:",
    options: ["45 degrees", "90 degrees", "125 degrees", "180 degrees"],
    answer: "125 degrees",
    explanation: "The normal neck-shaft angle is about 125 degrees.",
    is_visible: true,
  },
  {
    id: "femur-030",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Decrease in the angle of inclination is called:",
    options: ["Coxa valga", "Coxa vara", "Genu valgum", "Genu varum"],
    answer: "Coxa vara",
    explanation: "Coxa vara is a decrease in the neck-shaft angle.",
    is_visible: true,
  },
  {
    id: "femur-031",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Increase in the angle of inclination is called:",
    options: ["Coxa vara", "Coxa valga", "Genu valgum", "Genu varum"],
    answer: "Coxa valga",
    explanation: "Coxa valga is an increase in the neck-shaft angle.",
    is_visible: true,
  },
  {
    id: "femur-032",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure is located on the medial surface of the greater trochanter?",
    options: [
      "Trochanteric fossa",
      "Quadrate tubercle",
      "Patellar surface",
      "Intercondylar fossa",
    ],
    answer: "Trochanteric fossa",
    explanation:
      "The trochanteric fossa lies on the medial surface of the greater trochanter.",
    is_visible: true,
  },
  {
    id: "femur-033",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle inserts into the trochanteric fossa?",
    options: [
      "Obturator externus",
      "Gluteus medius",
      "Piriformis",
      "Quadratus femoris",
    ],
    answer: "Obturator externus",
    explanation: "Obturator externus inserts into the trochanteric fossa.",
    is_visible: true,
  },
  {
    id: "femur-034",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which condyle is larger?",
    options: ["Medial condyle", "Lateral condyle", "Both equal", "Neither"],
    answer: "Medial condyle",
    explanation: "The medial condyle is usually larger.",
    is_visible: true,
  },
  {
    id: "femur-035",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which part of the femur is most commonly fractured in the elderly?",
    options: ["Shaft", "Neck", "Greater trochanter", "Condyles"],
    answer: "Neck",
    explanation: "Fracture neck of femur is common in elderly people.",
    is_visible: true,
  },
  {
    id: "femur-036",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Fracture of the neck of femur may lead to:",
    options: [
      "Osteomyelitis",
      "Avascular necrosis",
      "Dislocation of knee",
      "Rickets",
    ],
    answer: "Avascular necrosis",
    explanation: "The blood supply to the head may be disrupted.",
    is_visible: true,
  },
  {
    id: "femur-037",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which epicondyle bears the adductor tubercle?",
    options: ["Lateral", "Medial", "Both", "Neither"],
    answer: "Medial",
    explanation: "The adductor tubercle is found on the medial epicondyle.",
    is_visible: true,
  },
  {
    id: "femur-038",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "The femur articulates distally with which bones?",
    options: [
      "Tibia only",
      "Fibula only",
      "Tibia and patella",
      "Tibia and fibula",
    ],
    answer: "Tibia and patella",
    explanation: "The femur articulates with the tibia and patella.",
    is_visible: true,
  },
  {
    id: "femur-039",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which border of the shaft contains the linea aspera?",
    options: ["Anterior", "Posterior", "Medial", "Lateral"],
    answer: "Posterior",
    explanation: "The posterior border forms the linea aspera.",
    is_visible: true,
  },
  {
    id: "femur-041",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which secondary ossification center appears first in the femur?",
    options: ["Head", "Greater trochanter", "Distal end", "Lesser trochanter"],
    answer: "Distal end",
    explanation:
      "The distal end is the first secondary ossification center to appear.",
    is_visible: true,
  },
  {
    id: "femur-042",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which secondary ossification center appears last in the femur?",
    options: ["Head", "Greater trochanter", "Lesser trochanter", "Distal end"],
    answer: "Lesser trochanter",
    explanation:
      "The lesser trochanter is the last secondary ossification center to appear.",
    is_visible: true,
  },
  {
    id: "femur-043",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which part of the femur ossifies first?",
    options: ["Head", "Shaft", "Distal end", "Greater trochanter"],
    answer: "Shaft",
    explanation:
      "The shaft is the primary ossification center and appears first.",
    is_visible: true,
  },
  {
    id: "femur-044",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which structure separates the neck from the shaft of the femur posteriorly?",
    options: [
      "Intertrochanteric line",
      "Intertrochanteric crest",
      "Linea aspera",
      "Trochanteric fossa",
    ],
    answer: "Intertrochanteric crest",
    explanation:
      "Posteriorly, the neck is separated from the shaft by the intertrochanteric crest.",
    is_visible: true,
  },
  {
    id: "femur-045",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which structure separates the neck from the shaft anteriorly?",
    options: [
      "Intertrochanteric crest",
      "Patellar surface",
      "Intertrochanteric line",
      "Gluteal tuberosity",
    ],
    answer: "Intertrochanteric line",
    explanation:
      "Anteriorly, the neck is separated from the shaft by the intertrochanteric line.",
    is_visible: true,
  },
  {
    id: "femur-046",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question: "Which muscle is attached to the quadrate tubercle?",
    options: [
      "Quadratus femoris",
      "Piriformis",
      "Gemellus superior",
      "Gluteus minimus",
    ],
    answer: "Quadratus femoris",
    explanation: "Quadratus femoris inserts into the quadrate tubercle.",
    is_visible: true,
  },
  {
    id: "femur-047",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which surface of the greater trochanter receives the insertion of gluteus medius?",
    options: ["Anterior", "Posterior", "Lateral", "Medial"],
    answer: "Lateral",
    explanation:
      "Gluteus medius inserts into the lateral surface of the greater trochanter.",
    is_visible: true,
  },
  {
    id: "femur-048",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which surface of the greater trochanter receives the insertion of gluteus minimus?",
    options: ["Anterior", "Posterior", "Lateral", "Medial"],
    answer: "Anterior",
    explanation:
      "Gluteus minimus inserts into the anterior surface of the greater trochanter.",
    is_visible: true,
  },
  {
    id: "femur-049",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which muscle inserts into the upper border of the greater trochanter?",
    options: ["Piriformis", "Pectineus", "Adductor longus", "Gluteus maximus"],
    answer: "Piriformis",
    explanation:
      "Piriformis inserts into the upper border of the greater trochanter.",
    is_visible: true,
  },
  {
    id: "femur-050",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-001",
    question:
      "Which line extends upward from the linea aspera toward the greater trochanter?",
    options: [
      "Spiral line",
      "Pectineal line",
      "Gluteal line",
      "Lateral supracondylar line",
    ],
    answer: "Gluteal line",
    explanation: "The gluteal line extends upward to the greater trochanter.",
    is_visible: true,
  },
  {
    id: "tibiafibula-001",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which bone is the main weight-bearing bone of the leg?",
    options: ["Fibula", "Tibia", "Talus", "Patella"],
    answer: "Tibia",
    explanation:
      "The tibia is the major weight-bearing bone of the leg, while the fibula mainly provides muscle attachment and ankle stability.",
    is_visible: true,
  },
  {
    id: "tibiafibula-002",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "Which part of the tibia gives attachment to the ligamentum patellae?",
    options: [
      "Medial condyle",
      "Fibular notch",
      "Tibial tuberosity",
      "Soleal line",
    ],
    answer: "Tibial tuberosity",
    explanation:
      "The ligamentum patellae is attached to the tibial tuberosity on the anterior aspect of the proximal tibia.",
    is_visible: true,
  },
  {
    id: "tibiafibula-003",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The intercondylar eminence is found between which structures?",
    options: [
      "The medial and lateral malleoli",
      "The medial and lateral condyles",
      "The tibia and fibula",
      "The shaft and head of fibula",
    ],
    answer: "The medial and lateral condyles",
    explanation:
      "The intercondylar eminence lies between the medial and lateral condyles of the tibia.",
    is_visible: true,
  },
  {
    id: "tibiafibula-004",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which feature is found on the posterior surface of the tibia?",
    options: [
      "Tibial tuberosity",
      "Fibular notch",
      "Soleal line",
      "Lateral malleolus",
    ],
    answer: "Soleal line",
    explanation:
      "The soleal line is a ridge on the posterior surface of the tibia for attachment of the soleus muscle.",
    is_visible: true,
  },
  {
    id: "tibiafibula-005",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which border of the tibia is commonly called the shin?",
    options: [
      "Medial border",
      "Interosseous border",
      "Anterior border",
      "Lateral border",
    ],
    answer: "Anterior border",
    explanation:
      "The sharp anterior border of the tibia is subcutaneous and is commonly referred to as the shin.",
    is_visible: true,
  },
  {
    id: "tibiafibula-006",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which part of the fibula forms the lateral malleolus?",
    options: ["Head", "Neck", "Shaft", "Distal end"],
    answer: "Distal end",
    explanation:
      "The distal end of the fibula expands downward to form the lateral malleolus.",
    is_visible: true,
  },
  {
    id: "tibiafibula-007",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which structure is related to the neck of the fibula?",
    options: [
      "Femoral nerve",
      "Common peroneal nerve",
      "Sciatic nerve",
      "Tibial nerve",
    ],
    answer: "Common peroneal nerve",
    explanation:
      "The common peroneal nerve winds around the neck of the fibula and is vulnerable to injury there.",
    is_visible: true,
  },
  {
    id: "tibiafibula-008",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "Which structure on the distal tibia articulates with the fibula?",
    options: [
      "Medial malleolus",
      "Fibular notch",
      "Tibial tuberosity",
      "Intercondylar eminence",
    ],
    answer: "Fibular notch",
    explanation:
      "The fibular notch on the distal tibia articulates with the distal fibula.",
    is_visible: true,
  },
  {
    id: "tibiafibula-009",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which bone does not participate directly in the knee joint?",
    options: ["Tibia", "Femur", "Patella", "Fibula"],
    answer: "Fibula",
    explanation:
      "The fibula does not form part of the knee joint even though its head lies near the knee.",
    is_visible: true,
  },
  {
    id: "tibiafibula-010",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which surface of the tibia is subcutaneous?",
    options: [
      "Posterior surface",
      "Lateral surface",
      "Medial surface",
      "Interosseous surface",
    ],
    answer: "Medial surface",
    explanation:
      "The medial surface of the tibia is subcutaneous and can be felt easily beneath the skin.",
    is_visible: true,
  },
  {
    id: "tibiafibula-011",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The tibia is the medial bone of the leg.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The tibia lies medially, while the fibula lies laterally in the leg.",
    is_visible: true,
  },
  {
    id: "tibiafibula-012",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The fibula is the major weight-bearing bone of the leg.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "The tibia is the major weight-bearing bone; the fibula mainly provides attachment for muscles.",
    is_visible: true,
  },
  {
    id: "tibiafibula-013",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The tibial tuberosity gives attachment to the ligamentum patellae.",
    options: ["true", "false"],
    answer: "true",
    explanation: "The ligamentum patellae inserts into the tibial tuberosity.",
    is_visible: true,
  },
  {
    id: "tibiafibula-014",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The medial malleolus is a feature of the fibula.",
    options: ["true", "false"],
    answer: "false",
    explanation: "The medial malleolus is a projection from the distal tibia.",
    is_visible: true,
  },
  {
    id: "tibiafibula-015",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The lateral malleolus is formed by the distal fibula.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The distal end of the fibula expands to form the lateral malleolus.",
    is_visible: true,
  },
  {
    id: "tibiafibula-016",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The fibula articulates directly with the femur.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "The fibula does not articulate with the femur and does not participate in the knee joint.",
    is_visible: true,
  },
  {
    id: "tibiafibula-017",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The soleal line is located on the posterior surface of the tibia.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The soleal line is a ridge on the posterior aspect of the tibia.",
    is_visible: true,
  },
  {
    id: "tibiafibula-018",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The common peroneal nerve winds around the neck of the fibula.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The common peroneal nerve passes around the fibular neck and is prone to injury there.",
    is_visible: true,
  },
  {
    id: "tibiafibula-019",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The fibular notch is located on the proximal tibia.",
    options: ["true", "false"],
    answer: "false",
    explanation: "The fibular notch is found on the distal end of the tibia.",
    is_visible: true,
  },
  {
    id: "tibiafibula-020",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "The fibula is more slender than the tibia.",
    options: ["true", "false"],
    answer: "true",
    explanation: "The fibula is thinner and more slender than the tibia.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-001",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The tibia is the large weight-bearing bone of the leg. Which side does it occupy?",
    options: ["Lateral", "Medial", "Anterior", "Posterior"],
    answer: "Medial",
    explanation:
      "The tibia is described as the large weight-bearing medial bone of the leg.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-002",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The tibia articulates superiorly with the femoral condyles and the head of the fibula.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The tibia articulates with femoral condyles and the head of fibula at its upper end.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-003",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Compared to its upper end, the lower end of the tibia is:",
    options: ["Wider", "Equal in size", "Smaller", "Bifurcated"],
    answer: "Smaller",
    explanation:
      "The tibia has an expanded upper end, a shaft, and a smaller lower end.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-004",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The tibial plateaus consist of medial and lateral condyles.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The upper end of the tibia has tibial plateaus made up of lateral and medial condyles.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-005",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "What separates the two tibial plateaus at the upper end of the tibia?",
    options: [
      "Soleal line",
      "Anterior and posterior intercondylar areas",
      "Tibial tuberosity",
      "Linea aspera",
    ],
    answer: "Anterior and posterior intercondylar areas",
    explanation:
      "Anterior and posterior intercondylar areas separate the tibial plateaus. There is also an intercondylar eminence between them.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-006",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The groove on the medial condyle of the tibia is for the semimembranosus muscle.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The slide mentions a groove on the medial condyle for the semimembranosus (SM) muscle.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-007",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "What is the cross-sectional shape of the tibial shaft?",
    options: ["Circular", "Oval", "Triangular", "Quadrilateral"],
    answer: "Triangular",
    explanation: "The tibial shaft is triangular in cross-section.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-008",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "True or False: The tibial shaft has 4 borders and 4 surfaces.",
    options: ["True", "False"],
    answer: "False",
    explanation: "The tibial shaft has 3 borders and 3 surfaces, not 4.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-009",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which border of the tibia forms the shin?",
    options: [
      "Medial border",
      "Lateral border",
      "Anterior border",
      "Posterior border",
    ],
    answer: "Anterior border",
    explanation: "The anterior border of the tibial shaft forms the shin.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-010",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The soleal line is found on the posterior surface of the tibia and gives origin to the soleus muscle.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The soleal line is located posteriorly on the tibial shaft and serves as the origin of the soleus muscle.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-011",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The lower end of the tibia has a saddle-shaped articular surface for which bone?",
    options: ["Calcaneum", "Navicular", "Talus", "Cuboid"],
    answer: "Talus",
    explanation:
      "The lower end of the tibia is expanded with a saddle-shaped articular surface for the talus.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-012",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The medial malleolus is formed by the tibia projecting downward on its lateral side.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The medial malleolus is formed by the tibia prolonging downward medially, not laterally.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-013",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "From where to where is the medial surface of the tibia subcutaneous?",
    options: [
      "From tibial tuberosity to lateral malleolus",
      "From medial malleolus to medial condyle above",
      "From soleal line to tibial tuberosity",
      "From intercondylar eminence to medial malleolus",
    ],
    answer: "From medial malleolus to medial condyle above",
    explanation:
      "The medial surface of the tibia is subcutaneous from the medial malleolus to the medial condyle above.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-014",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The borders and surfaces of the tibia are named by opposites.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The slide explicitly states that borders and surfaces of the tibia are named by opposites.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-015",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "Which of the following is NOT a feature of the upper end of the tibia?",
    options: [
      "Tibial plateaus",
      "Intercondylar eminence",
      "Lateral malleolus",
      "Articular facet for head of fibula",
    ],
    answer: "Lateral malleolus",
    explanation:
      "The lateral malleolus is a feature of the fibula, not the upper end of the tibia.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-016",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The tibia takes no part in transmission of body weight.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "It is the fibula, not the tibia, that takes no part in transmission of body weight. The tibia is the main weight-bearing bone of the leg.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-017",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The lower end of the tibia has a fibular notch for articulation with which bone?",
    options: ["Talus", "Calcaneum", "Fibula", "Navicular"],
    answer: "Fibula",
    explanation:
      "The fibular notch at the lower end of the tibia articulates with the fibula, as seen in the distal tibia diagram.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-018",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: Both the medial and lateral menisci are associated with the upper end of the tibia.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The upper end of the tibia has both lateral and medial menisci associated with the tibial plateaus.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-019",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "The fibula is described as which type of bone relative to its position in the leg?",
    options: [
      "Large medial bone",
      "Slender lateral bone",
      "Large anterior bone",
      "Flat posterior bone",
    ],
    answer: "Slender lateral bone",
    explanation:
      "The fibula is described as the slender lateral upper bone of the leg.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-020",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The fibula takes part in transmitting body weight.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The slide explicitly states the fibula takes no part in transmission of body weight.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-021",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "True or False: The fibula takes part in the knee joint.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The slide clearly states the fibula takes no part in the knee joint.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-022",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which malleolus does the fibula form at the ankle?",
    options: [
      "Medial malleolus",
      "Lateral malleolus",
      "Both malleoli",
      "Neither malleolus",
    ],
    answer: "Lateral malleolus",
    explanation: "The fibula forms the lateral malleolus at the ankle joint.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-023",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "How many surfaces and borders does the fibular shaft have?",
    options: [
      "3 surfaces, 3 borders",
      "4 surfaces, 3 borders",
      "4 surfaces, 4 borders",
      "3 surfaces, 4 borders",
    ],
    answer: "4 surfaces, 4 borders",
    explanation:
      "The fibular shaft is a slender body with 4 surfaces and 4 borders.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-024",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The four surfaces of the fibular shaft are anterior, posterior, peroneal, and interosseous.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The fibular shaft surfaces are: anterior (extensor), posterior (flexor), peroneal, and interosseous.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-025",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "What is found at the upper end of the fibula?",
    options: [
      "Medial malleolus and tibial tuberosity",
      "Styloid process, head, and neck",
      "Intercondylar eminence and soleal line",
      "Tibial plateaus and menisci",
    ],
    answer: "Styloid process, head, and neck",
    explanation:
      "The upper end of the fibula has a styloid process, a head, and a neck.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-026",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The lower end of the fibula is the triangular lateral malleolus, which is subcutaneous.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The lower end of the fibula is the triangular lateral malleolus, which is subcutaneous and has a triangular articular facet and a malleolar fossa.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-027",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "How many muscles does the fibula provide attachment for, according to the slide?",
    options: ["5", "7", "9", "11"],
    answer: "9",
    explanation:
      "One of the main functions of the fibula is to provide attachment for 9 muscles.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-028",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: One of the main functions of the fibula is to hold the talus in its socket.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The two main functions of the fibula are to provide attachment for 9 muscles and to hold the talus in its socket.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-029",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question: "Which of the following correctly compares the tibia and fibula?",
    options: [
      "Both bear body weight equally",
      "Tibia is medial and weight-bearing; fibula is lateral and non-weight-bearing",
      "Fibula is medial and weight-bearing; tibia is lateral and non-weight-bearing",
      "Both participate in the knee joint",
    ],
    answer:
      "Tibia is medial and weight-bearing; fibula is lateral and non-weight-bearing",
    explanation:
      "The tibia is the large medial weight-bearing bone; the fibula is the slender lateral bone that bears no body weight and does not participate in the knee joint.",
    is_visible: true,
  },
  {
    id: "ga101-oll002-030",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-002",
    question:
      "True or False: The lateral malleolus of the fibula has a malleolar fossa on its posterior aspect.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The lower end of the fibula — the lateral malleolus — has a triangular articular facet and a malleolar fossa.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-001",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "Which is the largest tarsal bone and the largest bone of the foot?",
    options: ["Talus", "Navicular", "Calcaneum", "Cuboid"],
    answer: "Calcaneum",
    explanation:
      "The calcaneum is both the largest tarsal and the largest bone of the foot.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-002",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The calcaneum forms the prominence of the heel via its posterior one-third.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The calcaneum forms the prominence of the heel at its posterior 1/3rd.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-003",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "How many surfaces does the calcaneum have?",
    options: ["4", "5", "6", "8"],
    answer: "6",
    explanation:
      "The calcaneum has 6 surfaces: superior, posterior, anterior, inferior, medial, and lateral.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-004",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "True or False: The calcaneum bears the weight of the body.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The calcaneum bears the weight of the body, which is consistent with its role as the largest bone of the foot.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-005",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "The talus is described as shaped like which animal?",
    options: ["Crocodile", "Tortoise", "Crab", "Snail"],
    answer: "Tortoise",
    explanation: "The slide describes the talus as shaped like a tortoise.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-006",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "True or False: The talus has a head, neck, and a body.",
    options: ["True", "False"],
    answer: "True",
    explanation: "The talus has three parts: a head, a neck, and a body.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-007",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "Which bones does the talus articulate with above?",
    options: [
      "Calcaneum and navicular",
      "Tibia and fibula",
      "Cuboid and navicular",
      "Tibia and calcaneum",
    ],
    answer: "Tibia and fibula",
    explanation:
      "The talus articulates above with the tibia and fibula, below with the calcaneum, and anteriorly with the navicular.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-008",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The talus articulates anteriorly with the cuboid.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The talus articulates anteriorly with the navicular, not the cuboid.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-009",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "The talus has articular facets for which two malleoli?",
    options: [
      "Superior and inferior malleoli",
      "Medial and lateral malleoli",
      "Anterior and posterior malleoli",
      "Tibial and fibular tuberosities",
    ],
    answer: "Medial and lateral malleoli",
    explanation:
      "The talus has articular facets for both the medial and lateral malleoli.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-010",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The tuberosity of the navicular is subcutaneous and palpable.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The navicular tuberosity is subcutaneous and palpable, felt on the medial border of the foot 2.5cm anterior and below the medial malleolus.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-011",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "The tuberosity of the navicular serves as attachment for the main part of which tendon?",
    options: [
      "Peroneus longus tendon",
      "Tibialis anterior tendon",
      "Tibialis posterior tendon",
      "Flexor hallucis longus tendon",
    ],
    answer: "Tibialis posterior tendon",
    explanation:
      "The navicular tuberosity is the attachment site for the main part of the tibialis posterior tendon.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-012",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "Where exactly on the foot is the navicular tuberosity palpable?",
    options: [
      "2.5cm posterior and above the medial malleolus",
      "2.5cm anterior and below the medial malleolus",
      "2.5cm lateral and above the lateral malleolus",
      "2.5cm posterior and below the lateral malleolus",
    ],
    answer: "2.5cm anterior and below the medial malleolus",
    explanation:
      "The navicular tuberosity is felt on the medial border of the foot, 2.5cm anterior and below the medial malleolus.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-013",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The cuboid has a groove on its superior aspect that lodges the tendon of peroneus longus.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The groove is on the inferior aspect of the cuboid, not the superior. It lodges the tendon of peroneus longus muscle.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-014",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "How many tarsal bones are there in total in one foot?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    explanation:
      "There are 7 tarsals: calcaneum, talus, navicular, cuboid, and 3 cuneiforms (medial, intermediate, lateral).",
    is_visible: true,
  },
  {
    id: "ga101-oll003-015",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "True or False: The cuneiforms are small wedge-shaped bones.",
    options: ["True", "False"],
    answer: "True",
    explanation: "The cuneiforms are described as small wedged-shaped bones.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-016",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "The cuneiforms articulate distally with which metatarsals?",
    options: [
      "1st, 2nd and 3rd metatarsals",
      "2nd, 3rd and 4th metatarsals",
      "3rd, 4th and 5th metatarsals",
      "1st and 2nd metatarsals only",
    ],
    answer: "1st, 2nd and 3rd metatarsals",
    explanation:
      "The cuneiforms articulate distally with the first three metatarsals.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-017",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The cuneiforms articulate proximally with the navicular.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The cuneiforms articulate proximally with the navicular bone.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-018",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "The cuneiforms play an important role in the formation of which arch of the foot?",
    options: [
      "Medial longitudinal arch",
      "Lateral longitudinal arch",
      "Transverse arch",
      "Plantar arch",
    ],
    answer: "Transverse arch",
    explanation:
      "The cuneiforms play an important role in the formation of the transverse arch of the foot.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-019",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "How many metatarsal bones are in one foot?",
    options: ["4", "5", "6", "7"],
    answer: "5",
    explanation:
      "There are 5 metatarsals in each foot: metatarsals I, II, III, IV, and V.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-020",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: All metatarsals and phalanges have a head, shaft, and a base.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The slide states that ALL metatarsals and phalanges have a head, shaft, and a base.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-021",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "Which of the following correctly lists the three types of phalanges in the foot?",
    options: [
      "Proximal, middle, and distal",
      "Superior, intermediate, and inferior",
      "Medial, central, and lateral",
      "Base, shaft, and head",
    ],
    answer: "Proximal, middle, and distal",
    explanation:
      "The phalanges of the foot are classified as proximal, middle, and distal phalanges.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-022",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The foot has two longitudinal arches and one transverse arch.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The arches of the foot include a medial part and lateral part of the longitudinal arch, and a transverse arch.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-023",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "Which tarsal bones form the lateral part of the longitudinal arch of the foot?",
    options: [
      "Talus, navicular and cuneiforms",
      "Calcaneus and cuboid",
      "Calcaneus, talus and navicular",
      "Cuboid and lateral cuneiform",
    ],
    answer: "Calcaneus and cuboid",
    explanation:
      "From the arch diagram on the slide, the lateral part of the longitudinal arch is formed by the calcaneus and cuboid.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-024",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question:
      "True or False: The lateral cuneiform is numbered the 1st cuneiform.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The lateral cuneiform is the 3rd cuneiform. The medial cuneiform is 1st and the intermediate cuneiform is 2nd.",
    is_visible: true,
  },
  {
    id: "ga101-oll003-025",
    subject: "gross-anatomy-101",
    topic: "osteology-of-lower-limb-003",
    question: "Which of the following bones is NOT a tarsal bone?",
    options: ["Talus", "Navicular", "Calcaneum", "Metatarsal I"],
    answer: "Metatarsal I",
    explanation:
      "Metatarsal I belongs to the metatarsals, not the tarsals. The 7 tarsals are: calcaneum, talus, navicular, cuboid, and 3 cuneiforms.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-001",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "What is the primary function of the lower limb?",
    options: [
      "Sensory reception and balance",
      "Support body weight and provide stable foundation for standing, walking and running",
      "Thermoregulation and lymphatic drainage",
      "Facilitate upper limb movement",
    ],
    answer:
      "Support body weight and provide stable foundation for standing, walking and running",
    explanation:
      "The primary functions of the lower limb are to support the weight of the body and provide a stable foundation in standing, walking, and running.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-002",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Into how many regions is the lower limb divided?",
    options: ["4", "5", "6", "7"],
    answer: "6",
    explanation:
      "The lower limb is divided into 6 regions: gluteal, thigh, knee, leg, ankle, and foot.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-003",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The deep fascia of the thigh is called the fascia lata.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The deep fascia of the thigh is specifically named the fascia lata.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-004",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "How many fascial septa pass from the inner aspect of the deep fascial sheath of the thigh to the linea aspera of the femur?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation:
      "3 fascial septa pass from the inner aspect of the deep fascial sheath to the linea aspera of the femur, dividing the thigh into 3 compartments.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-005",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The fascial septa of the thigh attach to the linea aspera of the femur.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The 3 fascial septa pass from the inner aspect of the deep fascial sheath to the linea aspera of the femur.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-006",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Into how many compartments does the fascia lata divide the thigh?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation:
      "The fascial septa divide the thigh into 3 compartments: anterior, medial, and posterior.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-007",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following correctly lists the three fascial compartments of the thigh?",
    options: [
      "Superior, inferior, and lateral",
      "Anterior, medial, and posterior",
      "Medial, lateral, and posterior",
      "Anterior, posterior, and lateral",
    ],
    answer: "Anterior, medial, and posterior",
    explanation:
      "The thigh is divided into anterior, medial, and posterior fascial compartments, each with its own muscles, nerves, and vessels.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-008",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: Each fascial compartment of the thigh has its own nerves, muscles, and vessels.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "Each of the three fascial compartments of the thigh has its own dedicated nerves, muscles, and vessels.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-009",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which nerve supplies the anterior compartment of the thigh?",
    options: [
      "Obturator nerve",
      "Sciatic nerve",
      "Femoral nerve",
      "Tibial nerve",
    ],
    answer: "Femoral nerve",
    explanation:
      "The anterior compartment of the thigh is supplied by the femoral nerve (L2, 3, 4 posterior division).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-010",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The femoral nerve arises from the posterior division of L2, 3, and 4.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The femoral nerve supplying the anterior compartment arises from the posterior division of L2, 3, 4.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-011",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which nerve supplies the medial compartment of the thigh?",
    options: [
      "Femoral nerve",
      "Obturator nerve",
      "Sciatic nerve",
      "Saphenous nerve",
    ],
    answer: "Obturator nerve",
    explanation:
      "The medial compartment of the thigh is supplied by the obturator nerve (L2, 3, 4 anterior division).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-012",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The obturator nerve arises from the anterior division of L2, 3, and 4.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The obturator nerve supplying the medial compartment arises from the anterior division of L2, 3, 4 — contrasting with the femoral nerve which comes from the posterior division.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-013",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which nerve supplies the posterior compartment of the thigh?",
    options: [
      "Femoral nerve",
      "Obturator nerve",
      "Sciatic nerve",
      "Common peroneal nerve",
    ],
    answer: "Sciatic nerve",
    explanation:
      "The posterior compartment is supplied by the sciatic nerve (L4, 5, S1, 2, 3) which has tibial and peroneal divisions.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-014",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The sciatic nerve has spinal root values of L4, 5, S1, 2, 3.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The sciatic nerve supplying the posterior compartment has spinal root values of L4, 5, S1, 2, 3 and consists of tibial and peroneal components.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-015",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "How many named muscles does the lower limb have in total according to the slide?",
    options: ["41", "47", "51", "55"],
    answer: "51",
    explanation:
      "The slide states that the nerves of the lower limb supply 51 named muscles of the lower limb.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-016",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following is described as a hybrid muscle of the lower limb receiving supply from two nerves?",
    options: ["Rectus femoris", "Pectineus", "Sartorius", "Gracilis"],
    answer: "Pectineus",
    explanation:
      "Pectineus is a hybrid muscle supplied by two nerves: the femoral nerve and the obturator nerve.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-017",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The adductor magnus is supplied by two nerves — the tibial and obturator nerves.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "Adductor magnus is a hybrid muscle with two parts, supplied by two nerves: the tibial and obturator nerves.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-018",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Biceps femoris is described as a hybrid muscle with two heads. Which two nerves supply it?",
    options: [
      "Femoral and obturator",
      "Tibial and peroneal",
      "Sciatic and femoral",
      "Obturator and tibial",
    ],
    answer: "Tibial and peroneal",
    explanation:
      "Biceps femoris has two heads and is supplied by two nerves: the tibial nerve (long head) and the peroneal nerve (short head).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-019",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following muscles is NOT listed as a content of the anterior fascial compartment of the thigh?",
    options: ["Sartorius", "Iliacus", "Gracilis", "Pectineus"],
    answer: "Gracilis",
    explanation:
      "Gracilis is a muscle of the medial compartment, not the anterior. The anterior compartment contains Sartorius, Iliacus, Psoas, Pectineus, and the Quadriceps femoris group.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-020",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The quadriceps femoris consists of rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The quadriceps femoris group in the anterior compartment consists of these four muscles: rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-021",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "What is the blood supply to the anterior fascial compartment of the thigh?",
    options: [
      "Obturator artery",
      "Femoral artery",
      "Popliteal artery",
      "Internal iliac artery",
    ],
    answer: "Femoral artery",
    explanation:
      "The blood supply to the anterior fascial compartment of the thigh is the femoral artery.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-022",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The femoral artery is a branch of the external iliac artery.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The femoral artery is a branch of the external iliac artery and is the main arterial supply to the thigh.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-023",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which artery gives rise to the lateral femoral circumflex, medial femoral circumflex, and 4 perforating arteries?",
    options: [
      "Femoral artery",
      "Profunda femoris artery",
      "Popliteal artery",
      "Obturator artery",
    ],
    answer: "Profunda femoris artery",
    explanation:
      "The profunda femoris artery gives off the lateral femoral circumflex (LFC), medial femoral circumflex (MFC), and 4 perforating arteries.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-024",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "How many perforating arteries does the profunda femoris give off?",
    options: ["2", "3", "4", "5"],
    answer: "4",
    explanation:
      "The profunda femoris artery gives off 4 perforating arteries in addition to the lateral and medial femoral circumflex arteries.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-025",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The cruciate anastomosis around the hip joint is formed by the LFC, MFC, superior gluteal artery, and the 1st perforating artery.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The cruciate anastomosis around the hip joint is formed by the lateral femoral circumflex (LFC), medial femoral circumflex (MFC), superior gluteal artery (SG), and the 1st perforating artery (PA).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-026",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "What are the two veins responsible for venous drainage of the thigh?",
    options: [
      "Femoral and obturator veins",
      "Popliteal and femoral veins",
      "Great saphenous and small saphenous veins",
      "Femoral and great saphenous veins",
    ],
    answer: "Popliteal and femoral veins",
    explanation:
      "Venous drainage of the thigh is via the popliteal and femoral veins.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-027",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "How many main types of veins exist in the lower limb?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation:
      "There are 3 main types of veins in the lower limb: superficial veins, deep veins, and perforating veins.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-028",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: Perforating veins communicate between the superficial and deep veins of the lower limb.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "Perforating veins are communicating veins that run between the superficial and deep veins of the lower limb.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-029",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following is described as the longest vein in the body?",
    options: [
      "Small saphenous vein",
      "Femoral vein",
      "Great saphenous vein",
      "Popliteal vein",
    ],
    answer: "Great saphenous vein",
    explanation:
      "The great saphenous vein (GSV) is described as the longest vein in the body.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-030",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "How many valves does the great saphenous vein have?",
    options: ["5-10", "10-20", "20-30", "1-5"],
    answer: "10-20",
    explanation:
      "The great saphenous vein has 10-20 valves that permit blood flow from the superficial into the deep veins.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-031",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The valves of the great saphenous vein permit blood flow from the superficial veins into the deep veins.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The 10-20 valves of the GSV permit blood flow from the superficial into the deep veins. Incompetence of these valves leads to varicose veins.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-032",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Where does the great saphenous vein drain into?",
    options: [
      "Popliteal vein",
      "External iliac vein",
      "Femoral vein at the fossa ovalis",
      "Small saphenous vein",
    ],
    answer: "Femoral vein at the fossa ovalis",
    explanation:
      "The great saphenous vein is continuous with the femoral vein at the fossa ovalis.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-033",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following is NOT a tributary of the great saphenous vein?",
    options: [
      "Superficial circumflex vein",
      "Superficial epigastric vein",
      "Superficial external pudendal vein",
      "Deep femoral vein",
    ],
    answer: "Deep femoral vein",
    explanation:
      "The GSV receives the superficial circumflex vein, superficial epigastric vein, and superficial external pudendal vein as tributaries. The deep femoral vein is not a tributary of the GSV.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-034",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: Incompetence of the valves of the great saphenous vein leads to varicose veins.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "Incompetence of the valves of the GSV allows blood to flow in the wrong direction, leading to varicose veins of the lower limb.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-035",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "What are venae comitantes?",
    options: [
      "Superficial veins of the lower limb",
      "Medium-sized deep arteries each accompanied by two veins, one on each side",
      "Perforating veins connecting superficial and deep systems",
      "Tributaries of the great saphenous vein",
    ],
    answer:
      "Medium-sized deep arteries each accompanied by two veins, one on each side",
    explanation:
      "Venae comitantes are medium-sized deep arteries accompanied by 2 veins, one on each side, forming part of the deep venous system.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-036",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "The fossa ovalis is also known by which two other names?",
    options: [
      "Femoral ring and femoral canal",
      "Saphenous opening and saphenous hiatus",
      "Cribriform fascia and falciform margin",
      "Femoral sheath and femoral canal",
    ],
    answer: "Saphenous opening and saphenous hiatus",
    explanation:
      "The fossa ovalis is the same structure as the saphenous opening and the saphenous hiatus — three names for the same opening.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-037",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The fossa ovalis is located in the proximal anterior part of the thigh.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The fossa ovalis is located in the proximal anterior part of the thigh, within the femoral sheath.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-038",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "How far below and lateral to the pubic tubercle does the fossa ovalis lie?",
    options: ["2cm", "3cm", "4cm", "5cm"],
    answer: "4cm",
    explanation:
      "The fossa ovalis lies 4cm below and lateral to the pubic tubercle, within the femoral sheath.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-039",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "What creates the fossa ovalis?",
    options: [
      "The femoral artery passing through the fascia lata",
      "The great saphenous vein as it drains into the femoral vein",
      "The femoral nerve piercing the fascia lata",
      "The profunda femoris artery branching off the femoral artery",
    ],
    answer: "The great saphenous vein as it drains into the femoral vein",
    explanation:
      "The fossa ovalis is created by the great saphenous vein as it pours its contents into the femoral vein.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-040",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The fossa ovalis is filled with loose connective tissue called the cribriform fascia.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The fossa ovalis opening is filled with loose connective tissue called the cribriform fascia.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-041",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "What is the adductor canal also known as?",
    options: [
      "Femoral canal",
      "Subsartorial canal",
      "Hunter's groove",
      "Obturator canal",
    ],
    answer: "Subsartorial canal",
    explanation:
      "The adductor canal is also called the subsartorial canal because it lies beneath the sartorius muscle.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-042",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The adductor canal is situated on the medial aspect of the middle third of the thigh.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The adductor canal is an intermuscular cleft situated on the medial aspect of the middle third of the thigh, beneath the sartorius muscle.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-043",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "The adductor canal lies beneath which muscle?",
    options: [
      "Rectus femoris",
      "Vastus medialis",
      "Sartorius",
      "Adductor longus",
    ],
    answer: "Sartorius",
    explanation:
      "The adductor canal is situated beneath the sartorius muscle, which is why it is also called the subsartorial canal.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-044",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Where does the adductor canal commence superiorly?",
    options: [
      "At the inguinal ligament",
      "At the apex of the femoral triangle",
      "At the fossa ovalis",
      "At the lesser trochanter",
    ],
    answer: "At the apex of the femoral triangle",
    explanation:
      "The adductor canal commences from the apex of the femoral triangle above and ends below at the opening in the adductor magnus.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-045",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Where does the adductor canal end inferiorly?",
    options: [
      "At the popliteal fossa",
      "At the opening in the adductor magnus",
      "At the medial condyle of the femur",
      "At the knee joint",
    ],
    answer: "At the opening in the adductor magnus",
    explanation:
      "The adductor canal ends below at the opening in the adductor magnus, through which the femoral vessels pass to become the popliteal vessels.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-046",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The adductor canal is triangular in cross section.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The adductor canal is triangular in cross section with anteromedial, posterior, and lateral walls.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-047",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which muscle forms the anteromedial wall of the adductor canal?",
    options: [
      "Adductor magnus",
      "Vastus medialis",
      "Sartorius",
      "Adductor longus",
    ],
    answer: "Sartorius",
    explanation:
      "The anteromedial wall of the adductor canal is formed by the sartorius muscle (S).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-048",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which muscles form the posterior wall of the adductor canal?",
    options: [
      "Sartorius and vastus medialis",
      "Adductor magnus and adductor longus",
      "Rectus femoris and adductor longus",
      "Gracilis and adductor magnus",
    ],
    answer: "Adductor magnus and adductor longus",
    explanation:
      "The posterior wall of the adductor canal is formed by adductor magnus (AM) and adductor longus (AL).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-049",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Which muscle forms the lateral wall of the adductor canal?",
    options: [
      "Sartorius",
      "Adductor magnus",
      "Vastus medialis",
      "Rectus femoris",
    ],
    answer: "Vastus medialis",
    explanation:
      "The lateral wall of the adductor canal is formed by vastus medialis (VM).",
    is_visible: true,
  },
  {
    id: "ga101-apot001-050",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following is a content of the femoral triangle found within the femoral sheath?",
    options: [
      "Femoral nerve",
      "Deep inguinal lymph nodes",
      "Femoral canal",
      "Genitofemoral nerve",
    ],
    answer: "Femoral canal",
    explanation:
      "The femoral sheath contains the femoral artery, femoral canal, and femoral vein with its tributaries. The femoral nerve lies outside the femoral sheath.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-051",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The femoral nerve lies within the femoral sheath.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The femoral nerve lies outside the femoral sheath. The femoral sheath contains the femoral artery, femoral canal, and femoral vein.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-052",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following is NOT a content of the femoral triangle?",
    options: [
      "Femoral sheath and its contents",
      "Femoral nerve and its branches",
      "Deep inguinal lymph nodes",
      "Obturator nerve",
    ],
    answer: "Obturator nerve",
    explanation:
      "The obturator nerve is not a content of the femoral triangle. The femoral triangle contains the femoral sheath and contents, femoral nerve and branches, nerve to pectineus, lateral cutaneous nerve of thigh, deep inguinal lymph nodes, and the femoral branch of the genitofemoral nerve.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-053",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The deep inguinal lymph nodes are contents of the femoral triangle.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The deep inguinal lymph nodes are listed as a content of the femoral triangle.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-054",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "The superficial inguinal lymph nodes are arranged in which two groups?",
    options: [
      "Superior and inferior",
      "Horizontal and vertical",
      "Medial and lateral",
      "Deep and superficial",
    ],
    answer: "Horizontal and vertical",
    explanation:
      "The superficial inguinal lymph nodes are arranged in a horizontal group and a vertical group.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-055",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: Groin swellings involving lymph nodes can be due to infections in the leg.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The slide states that groin swellings involving lymph nodes may be due to leg infections, since the inguinal nodes drain the lower limb.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-056",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: Femoral herniae are more common in females because the femoral canal is larger in females due to the greater width of their pelvis.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "Femoral canals are larger in females due to the greater width of their pelvis, making femoral herniae more common in females.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-057",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question: "Through which opening does an inguinal hernia protrude?",
    options: [
      "Deep inguinal ring",
      "Femoral ring",
      "Superficial inguinal ring",
      "Saphenous opening",
    ],
    answer: "Superficial inguinal ring",
    explanation:
      "The slide states that an inguinal hernia protrudes through the superficial inguinal ring.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-058",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which bony landmark of the anterior thigh is formed by the junction of the two pubic bones?",
    options: [
      "Pubic tubercle",
      "Pubic crest",
      "Symphysis pubis",
      "Iliac tubercle",
    ],
    answer: "Symphysis pubis",
    explanation:
      "The symphysis pubis is the cartilaginous joint formed at the junction of the two pubic bones and is a bony landmark of the anterior thigh.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-059",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "True or False: The GSV communicates with the medial plantar veins, anterior tibial veins, and tributaries of the posterior tibial veins.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The GSV communicates with the medial plantar veins, anterior tibial veins, and tributaries of the posterior tibial veins as part of the superficial venous network.",
    is_visible: true,
  },
  {
    id: "ga101-apot001-060",
    subject: "gross-anatomy-101",
    topic: "anterior-part-of-the-thigh-001",
    question:
      "Which of the following statements best distinguishes the femoral triangle from the adductor canal?",
    options: [
      "The femoral triangle is deep to the sartorius while the adductor canal is superficial to it",
      "The femoral triangle is in the proximal thigh and contains femoral vessels and nerve; the adductor canal is in the middle third of the thigh and transmits vessels beneath the sartorius",
      "The femoral triangle transmits only the femoral nerve while the adductor canal transmits only the femoral artery",
      "They are different names for the same structure",
    ],
    answer:
      "The femoral triangle is in the proximal thigh and contains femoral vessels and nerve; the adductor canal is in the middle third of the thigh and transmits vessels beneath the sartorius",
    explanation:
      "The femoral triangle is in the proximal thigh containing femoral vessels, nerve, and lymphatics. The adductor canal begins at the apex of the femoral triangle and runs in the middle third of the thigh beneath the sartorius, transmitting the femoral vessels downward.",
    is_visible: true,
  },
  {
    id: "001",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which structure is known as the normal pacemaker of the heart?",
    options: ["AV node", "Purkinje fibers", "SA node", "Bundle of His"],
    answer: "SA node",
    explanation:
      "The sinoatrial (SA) node is the normal pacemaker because it has the highest intrinsic rate of spontaneous depolarization.",
    is_visible: true,
  },
  {
    id: "002",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: The AV node conducts impulses faster than Purkinje fibers.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "Purkinje fibers conduct impulses much faster than the AV node.",
    is_visible: true,
  },
  {
    id: "003",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "What is the normal resting heart rate range in adults?",
    options: ["20-40 bpm", "40-60 bpm", "60-100 bpm", "100-140 bpm"],
    answer: "60-100 bpm",
    explanation:
      "The normal resting heart rate for adults is between 60 and 100 beats per minute.",
    is_visible: true,
  },
  {
    id: "004",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: The fibrous AV ring allows free spread of impulses from atria to ventricles.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "The fibrous AV ring acts as an electrical insulator between atria and ventricles.",
    is_visible: true,
  },
  {
    id: "005",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which part of the cardiac conduction system delays the electrical impulse?",
    options: ["SA node", "AV node", "Bundle branches", "Purkinje fibers"],
    answer: "AV node",
    explanation: "The AV node delays the impulse to allow ventricular filling.",
    is_visible: true,
  },
  {
    id: "006",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Purkinje fibers have the fastest conduction velocity in the heart.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Purkinje fibers conduct impulses very rapidly to ensure simultaneous ventricular contraction.",
    is_visible: true,
  },
  {
    id: "007",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "What is the approximate resting membrane potential of ventricular muscle cells?",
    options: ["-30 mV", "-60 mV", "-90 mV", "+20 mV"],
    answer: "-90 mV",
    explanation:
      "Ventricular muscle cells have a stable resting membrane potential of about -90 mV.",
    is_visible: true,
  },
  {
    id: "008",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Phase 2 of the ventricular action potential is known as the plateau phase.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Phase 2 is the plateau phase caused by calcium influx balancing potassium efflux.",
    is_visible: true,
  },
  {
    id: "009",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which ion is mainly responsible for phase 0 depolarization in ventricular muscle cells?",
    options: ["Calcium", "Potassium", "Sodium", "Chloride"],
    answer: "Sodium",
    explanation:
      "Rapid sodium influx is responsible for phase 0 depolarization in ventricular muscle.",
    is_visible: true,
  },
  {
    id: "010",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Cardiac muscle can undergo tetany like skeletal muscle.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "The long refractory period prevents tetany in cardiac muscle.",
    is_visible: true,
  },
  {
    id: "031",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which hormone increases heart rate and contractility?",
    options: ["Insulin", "Thyroxine", "Parathyroid hormone", "Glucagon"],
    answer: "Thyroxine",
    explanation:
      "Thyroid hormones increase heart rate and cardiac contractility.",
    is_visible: true,
  },
  {
    id: "032",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "True or False: Catecholamines increase heart rate.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Catecholamines such as epinephrine and norepinephrine increase heart rate.",
    is_visible: true,
  },
  {
    id: "033",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "What is the formula for cardiac output?",
    options: ["CO = BP × HR", "CO = HR × SV", "CO = SV ÷ HR", "CO = MAP × SV"],
    answer: "CO = HR × SV",
    explanation:
      "Cardiac output is calculated by multiplying heart rate by stroke volume.",
    is_visible: true,
  },
  {
    id: "034",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: A normal cardiac output in adults is approximately 5 L/min.",
    options: ["true", "false"],
    answer: "true",
    explanation: "Normal resting cardiac output is around 5 liters per minute.",
    is_visible: true,
  },
  {
    id: "035",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "What is stroke volume?",
    options: [
      "Volume of blood pumped by one ventricle per beat",
      "Volume of blood in the atria",
      "Volume of blood returning to the heart",
      "Volume of blood in arteries",
    ],
    answer: "Volume of blood pumped by one ventricle per beat",
    explanation:
      "Stroke volume is the amount of blood ejected by one ventricle during each beat.",
    is_visible: true,
  },
  {
    id: "036",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Increasing venous return increases cardiac output.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Greater venous return increases end-diastolic volume and stroke volume.",
    is_visible: true,
  },
  {
    id: "037",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which law explains that increased filling of the heart leads to stronger contraction?",
    options: ["Laplace law", "Starling law", "Boyle law", "Poiseuille law"],
    answer: "Starling law",
    explanation:
      "The Frank-Starling law states that increased preload increases force of contraction.",
    is_visible: true,
  },
  {
    id: "038",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: The Frank-Starling mechanism depends on increased end-diastolic volume.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Increased end-diastolic volume stretches the myocardium and increases contraction.",
    is_visible: true,
  },
  {
    id: "039",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which of the following increases cardiac output?",
    options: [
      "Decreased heart rate",
      "Increased stroke volume",
      "Increased vagal activity",
      "Hypothyroidism",
    ],
    answer: "Increased stroke volume",
    explanation: "Cardiac output rises when stroke volume increases.",
    is_visible: true,
  },
  {
    id: "040",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Parasympathetic stimulation strongly increases ventricular contractility.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "Parasympathetic supply has little effect on ventricular myocardium.",
    is_visible: true,
  },
  {
    id: "041",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "What is systolic blood pressure?",
    options: [
      "Pressure during ventricular relaxation",
      "Pressure during ventricular contraction",
      "Pressure in veins",
      "Pressure in capillaries",
    ],
    answer: "Pressure during ventricular contraction",
    explanation:
      "Systolic pressure is the highest arterial pressure during ventricular systole.",
    is_visible: true,
  },
  {
    id: "042",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Diastolic blood pressure is the pressure during ventricular relaxation.",
    options: ["true", "false"],
    answer: "true",
    explanation: "Diastolic pressure occurs during ventricular relaxation.",
    is_visible: true,
  },
  {
    id: "043",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "What is pulse pressure?",
    options: [
      "Systolic pressure + diastolic pressure",
      "Systolic pressure - diastolic pressure",
      "Mean arterial pressure",
      "Diastolic pressure ÷ systolic pressure",
    ],
    answer: "Systolic pressure - diastolic pressure",
    explanation:
      "Pulse pressure is the difference between systolic and diastolic pressures.",
    is_visible: true,
  },
  {
    id: "044",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Mean arterial pressure is closer to diastolic pressure than systolic pressure.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "MAP is closer to diastolic pressure because the heart spends more time in diastole.",
    is_visible: true,
  },
  {
    id: "045",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which receptor detects changes in blood pressure?",
    options: [
      "Chemoreceptors",
      "Baroreceptors",
      "Proprioceptors",
      "Pain receptors",
    ],
    answer: "Baroreceptors",
    explanation:
      "Baroreceptors detect stretch changes caused by blood pressure changes.",
    is_visible: true,
  },
  {
    id: "046",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Baroreceptors are found in the carotid sinus and aortic arch.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The major arterial baroreceptors are located in the carotid sinus and aortic arch.",
    is_visible: true,
  },
  {
    id: "047",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "What happens when blood pressure rises suddenly?",
    options: [
      "Heart rate increases",
      "Baroreceptor firing decreases",
      "Parasympathetic activity increases",
      "Sympathetic activity increases",
    ],
    answer: "Parasympathetic activity increases",
    explanation:
      "Increased blood pressure stimulates baroreceptors and increases vagal activity.",
    is_visible: true,
  },
  {
    id: "048",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Sympathetic stimulation causes vasoconstriction in most blood vessels.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Sympathetic stimulation usually causes vasoconstriction through alpha receptors.",
    is_visible: true,
  },
  {
    id: "049",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which of the following decreases blood pressure?",
    options: [
      "Increased cardiac output",
      "Increased peripheral resistance",
      "Decreased blood volume",
      "Increased sympathetic activity",
    ],
    answer: "Decreased blood volume",
    explanation:
      "A fall in blood volume reduces venous return and blood pressure.",
    is_visible: true,
  },
  {
    id: "050",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Arterioles are the major resistance vessels of the circulation.",
    options: ["true", "false"],
    answer: "true",
    explanation: "Arterioles provide most of the resistance to blood flow.",
    is_visible: true,
  },
  {
    id: "051",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which vessels are primarily responsible for exchange of gases and nutrients?",
    options: ["Arteries", "Veins", "Capillaries", "Arterioles"],
    answer: "Capillaries",
    explanation:
      "Capillaries are thin-walled vessels specialized for exchange of gases, nutrients, and wastes.",
    is_visible: true,
  },
  {
    id: "052",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Capillary hydrostatic pressure promotes filtration of fluid out of capillaries.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Capillary hydrostatic pressure pushes fluid out of capillaries into the interstitial space.",
    is_visible: true,
  },
  {
    id: "053",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which pressure pulls fluid back into capillaries?",
    options: [
      "Capillary hydrostatic pressure",
      "Interstitial hydrostatic pressure",
      "Plasma oncotic pressure",
      "Arterial pressure",
    ],
    answer: "Plasma oncotic pressure",
    explanation:
      "Plasma proteins create oncotic pressure which pulls fluid into capillaries.",
    is_visible: true,
  },
  {
    id: "054",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Edema can result from increased capillary hydrostatic pressure.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Higher capillary hydrostatic pressure causes more fluid to leave capillaries and may lead to edema.",
    is_visible: true,
  },
  {
    id: "055",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which structure returns excess tissue fluid back to the bloodstream?",
    options: ["Arteries", "Capillaries", "Lymphatics", "Venules"],
    answer: "Lymphatics",
    explanation:
      "The lymphatic system returns excess interstitial fluid to the circulation.",
    is_visible: true,
  },
  {
    id: "056",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Decreased plasma protein concentration can lead to edema.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Reduced plasma proteins decrease oncotic pressure and favor fluid accumulation in tissues.",
    is_visible: true,
  },
  {
    id: "057",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which special circulation has the highest blood flow per gram of tissue?",
    options: [
      "Pulmonary circulation",
      "Coronary circulation",
      "Renal circulation",
      "Skin circulation",
    ],
    answer: "Renal circulation",
    explanation:
      "The kidneys receive a very high blood flow relative to their size.",
    is_visible: true,
  },
  {
    id: "058",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Coronary blood flow is greatest during ventricular diastole.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Coronary vessels are compressed during systole, so most coronary blood flow occurs during diastole.",
    is_visible: true,
  },
  {
    id: "059",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which circulation is characterized by low pressure and low resistance?",
    options: [
      "Systemic circulation",
      "Coronary circulation",
      "Pulmonary circulation",
      "Renal circulation",
    ],
    answer: "Pulmonary circulation",
    explanation:
      "Pulmonary circulation operates at much lower pressure than systemic circulation.",
    is_visible: true,
  },
  {
    id: "060",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Cerebral blood flow remains relatively constant despite moderate changes in blood pressure.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Cerebral autoregulation helps maintain fairly constant blood flow to the brain.",
    is_visible: true,
  },
  {
    id: "061",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which factor is the strongest local regulator of cerebral blood flow?",
    options: ["Oxygen", "Carbon dioxide", "Calcium", "Glucose"],
    answer: "Carbon dioxide",
    explanation: "Carbon dioxide is a major regulator of cerebral blood flow.",
    is_visible: true,
  },
  {
    id: "062",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "True or False: Skin blood flow increases in hot weather.",
    options: ["true", "false"],
    answer: "true",
    explanation: "Skin blood flow increases to promote heat loss.",
    is_visible: true,
  },
  {
    id: "063",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which blood vessel normally carries oxygenated blood from the lungs to the heart?",
    options: [
      "Pulmonary artery",
      "Aorta",
      "Pulmonary vein",
      "Superior vena cava",
    ],
    answer: "Pulmonary vein",
    explanation:
      "Pulmonary veins carry oxygenated blood from the lungs to the left atrium.",
    is_visible: true,
  },
  {
    id: "064",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "True or False: The pulmonary artery carries deoxygenated blood.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs.",
    is_visible: true,
  },
  {
    id: "065",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which valve closes to produce the first heart sound?",
    options: [
      "Aortic valve",
      "Pulmonary valve",
      "Mitral valve",
      "Aortic and pulmonary valves",
    ],
    answer: "Mitral valve",
    explanation:
      "The first heart sound occurs due to closure of the AV valves, including the mitral valve.",
    is_visible: true,
  },
  {
    id: "066",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: The second heart sound is produced by closure of the semilunar valves.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Closure of the aortic and pulmonary valves produces the second heart sound.",
    is_visible: true,
  },
  {
    id: "067",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which phase of the cardiac cycle immediately follows atrial systole?",
    options: [
      "Rapid ejection",
      "Reduced filling",
      "Isovolumetric ventricular contraction",
      "Rapid filling",
    ],
    answer: "Isovolumetric ventricular contraction",
    explanation:
      "Atrial systole is followed by isovolumetric ventricular contraction.",
    is_visible: true,
  },
  {
    id: "068",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: During isovolumetric contraction, all heart valves are closed.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "During isovolumetric contraction, both AV and semilunar valves are closed.",
    is_visible: true,
  },
  {
    id: "069",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which phase of ventricular diastole involves rapid entry of blood into the ventricles?",
    options: [
      "Protodiastole",
      "Rapid filling",
      "Isovolumetric relaxation",
      "Reduced ejection",
    ],
    answer: "Rapid filling",
    explanation:
      "Rapid filling occurs when AV valves open and blood enters the ventricles quickly.",
    is_visible: true,
  },
  {
    id: "070",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Ventricular systole lasts longer than ventricular diastole at rest.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "At rest, ventricular diastole lasts longer than ventricular systole.",
    is_visible: true,
  },
  {
    id: "071",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "What is the approximate duration of one normal cardiac cycle at 75 beats per minute?",
    options: ["0.2 seconds", "0.5 seconds", "0.8 seconds", "1.5 seconds"],
    answer: "0.8 seconds",
    explanation:
      "One normal cardiac cycle lasts about 0.8 seconds at a heart rate around 75 bpm.",
    is_visible: true,
  },
  {
    id: "072",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Atrial systole contributes the final portion of ventricular filling.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Atrial contraction provides the last portion of blood entering the ventricles.",
    is_visible: true,
  },
  {
    id: "073",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which chamber has the thickest wall?",
    options: [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle",
    ],
    answer: "Left ventricle",
    explanation:
      "The left ventricle has the thickest wall because it pumps blood to the systemic circulation.",
    is_visible: true,
  },
  {
    id: "074",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: The right ventricle pumps blood into the systemic circulation.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "The right ventricle pumps blood into the pulmonary circulation.",
    is_visible: true,
  },
  {
    id: "075",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which blood vessel leaves the left ventricle?",
    options: [
      "Pulmonary artery",
      "Aorta",
      "Superior vena cava",
      "Pulmonary vein",
    ],
    answer: "Aorta",
    explanation:
      "The aorta carries blood from the left ventricle to the systemic circulation.",
    is_visible: true,
  },
  {
    id: "076",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: The superior vena cava drains blood into the left atrium.",
    options: ["true", "false"],
    answer: "false",
    explanation: "The superior vena cava drains blood into the right atrium.",
    is_visible: true,
  },
  {
    id: "077",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which valve lies between the left atrium and left ventricle?",
    options: [
      "Tricuspid valve",
      "Pulmonary valve",
      "Mitral valve",
      "Aortic valve",
    ],
    answer: "Mitral valve",
    explanation:
      "The mitral valve separates the left atrium from the left ventricle.",
    is_visible: true,
  },
  {
    id: "078",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: The tricuspid valve lies between the right atrium and right ventricle.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The tricuspid valve separates the right atrium from the right ventricle.",
    is_visible: true,
  },
  {
    id: "079",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which vessel returns oxygenated blood from the lungs to the heart?",
    options: [
      "Pulmonary artery",
      "Pulmonary vein",
      "Aorta",
      "Inferior vena cava",
    ],
    answer: "Pulmonary vein",
    explanation: "Pulmonary veins carry oxygenated blood to the left atrium.",
    is_visible: true,
  },
  {
    id: "080",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: The aortic valve is located between the left ventricle and aorta.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The aortic valve controls blood flow from the left ventricle into the aorta.",
    is_visible: true,
  },
  {
    id: "081",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which blood vessel carries deoxygenated blood from the body to the right atrium?",
    options: [
      "Aorta",
      "Pulmonary vein",
      "Superior vena cava",
      "Pulmonary artery",
    ],
    answer: "Superior vena cava",
    explanation:
      "The superior vena cava carries deoxygenated blood from the upper body to the right atrium.",
    is_visible: true,
  },
  {
    id: "082",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: The pulmonary valve is located between the right ventricle and pulmonary artery.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "The pulmonary valve opens from the right ventricle into the pulmonary artery.",
    is_visible: true,
  },
  {
    id: "083",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which phase of ventricular systole involves blood being ejected from the ventricles?",
    options: [
      "Isovolumetric contraction",
      "Rapid ejection",
      "Rapid filling",
      "Protodiastole",
    ],
    answer: "Rapid ejection",
    explanation:
      "Rapid ejection occurs when blood is forcefully pumped out of the ventricles.",
    is_visible: true,
  },
  {
    id: "084",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "True or False: During rapid filling, the AV valves are open.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "During rapid filling, the AV valves are open, allowing blood into the ventricles.",
    is_visible: true,
  },
  {
    id: "085",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which phase of the cardiac cycle is also called diastasis?",
    options: [
      "Rapid filling",
      "Reduced ventricular filling",
      "Protodiastole",
      "Rapid ejection",
    ],
    answer: "Reduced ventricular filling",
    explanation: "Reduced ventricular filling is also called diastasis.",
    is_visible: true,
  },
  {
    id: "086",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "True or False: S1 is louder than S2 at the base of the heart.",
    options: ["true", "false"],
    answer: "false",
    explanation:
      "S2 is louder at the base of the heart, while S1 is louder at the apex.",
    is_visible: true,
  },
  {
    id: "087",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which heart sound is associated with closure of the mitral and tricuspid valves?",
    options: ["S1", "S2", "S3", "S4"],
    answer: "S1",
    explanation: "S1 is produced by closure of the AV valves.",
    is_visible: true,
  },
  {
    id: "088",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "True or False: S3 is always pathological in children.",
    options: ["true", "false"],
    answer: "false",
    explanation: "S3 can be normal in children and young adults.",
    is_visible: true,
  },
  {
    id: "089",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which heart sound may be heard in ventricular hypertrophy?",
    options: ["S1", "S2", "S3", "S4"],
    answer: "S4",
    explanation:
      "S4 may occur when the atria contract against a stiff ventricle.",
    is_visible: true,
  },
  {
    id: "090",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "True or False: S4 occurs during atrial contraction.",
    options: ["true", "false"],
    answer: "true",
    explanation: "S4 occurs when the atria contract against a stiff ventricle.",
    is_visible: true,
  },
  {
    id: "091",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which part of the circulation has the lowest blood pressure?",
    options: ["Aorta", "Arterioles", "Capillaries", "Vena cava"],
    answer: "Vena cava",
    explanation:
      "Blood pressure is lowest in the vena cava near the right atrium.",
    is_visible: true,
  },
  {
    id: "092",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "True or False: Veins act as capacitance vessels.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "Veins store large amounts of blood and are called capacitance vessels.",
    is_visible: true,
  },
  {
    id: "093",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "Which blood vessel has the highest pressure?",
    options: ["Aorta", "Capillary", "Vein", "Pulmonary artery"],
    answer: "Aorta",
    explanation: "The aorta has the highest pressure in the circulation.",
    is_visible: true,
  },
  {
    id: "094",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: Resistance to blood flow is inversely related to the fourth power of vessel radius.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "According to Poiseuille's law, resistance is inversely proportional to radius to the fourth power.",
    is_visible: true,
  },
  {
    id: "095",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which factor causes vasodilation in skeletal muscle during exercise?",
    options: [
      "Decreased carbon dioxide",
      "Increased oxygen",
      "Increased adenosine",
      "Decreased temperature",
    ],
    answer: "Increased adenosine",
    explanation:
      "Adenosine is a local vasodilator released during increased metabolic activity.",
    is_visible: true,
  },
  {
    id: "096",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "True or False: Nitric oxide causes vasoconstriction.",
    options: ["true", "false"],
    answer: "false",
    explanation: "Nitric oxide is a potent vasodilator.",
    is_visible: true,
  },
  {
    id: "097",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which substance is released by endothelial cells and causes vasodilation?",
    options: ["Histamine", "Bradykinin", "Nitric oxide", "Angiotensin II"],
    answer: "Nitric oxide",
    explanation:
      "Nitric oxide is released by endothelial cells and relaxes vascular smooth muscle.",
    is_visible: true,
  },
  {
    id: "098",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question: "True or False: Angiotensin II is a powerful vasodilator.",
    options: ["true", "false"],
    answer: "false",
    explanation: "Angiotensin II is a powerful vasoconstrictor.",
    is_visible: true,
  },
  {
    id: "099",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "Which hormone promotes sodium and water retention and increases blood pressure?",
    options: ["Insulin", "Aldosterone", "Thyroxine", "Glucagon"],
    answer: "Aldosterone",
    explanation:
      "Aldosterone increases sodium and water retention, increasing blood volume and pressure.",
    is_visible: true,
  },
  {
    id: "100",
    subject: "physiology-101",
    topic: "cardiovascular-system-001",
    question:
      "True or False: ADH can help increase blood pressure by increasing water reabsorption.",
    options: ["true", "false"],
    answer: "true",
    explanation:
      "ADH increases water reabsorption and can increase blood pressure.",
    is_visible: true,
  },
];
