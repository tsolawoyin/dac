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
];
