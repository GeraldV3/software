// src/data/TestBank.js
// const testBank = [
//     { id: 1, question: "What is the capital of France?", answer: "Paris" },
//     { id: 2, question: "What is 2 + 2?", answer: "4" },
//     { id: 3, question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
//     { id: 4, question: "What is the boiling point of water (°C)?", answer: "100" },
//     { id: 5, question: "What year did WW2 end?", answer: "1945" },
//     { id: 6, question: "What is the chemical symbol for gold?", answer: "Au" },
//     { id: 7, question: "What is the largest planet in our solar system?", answer: "Jupiter" },
//     { id: 8, question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
//     { id: 9, question: "What is the currency of Japan?", answer: "Yen" },
//     { id: 10, question: "What language is spoken in Brazil?", answer: "Portuguese" },
//     // ... add more if needed
// ];

// export default testBank;

import { supabase } from "../supabase";

export const fetchTestBanks = async () => {
  try {
    const { data, error } = await supabase.from("test_banks").select("*");

    if (error) throw error;

    // Map and count questions
    const formatted = data.map((bank) => {
      let mc = 0,
        tf = 0,
        id = 0;

      Object.values(bank.items).forEach((section) => {
        const type = section.identifier;

        switch (type) {
          case "multipleChoice":
            mc += section.items.length;
            break;
          case "trueOrFalse":
            tf += section.items.length;
            break;
          case "identification":
            id += section.items.length;
            break;
          // optionally handle essay, matchingType, etc.
        }
      });

      return {
        id: bank.id,
        name: bank.title,
        mc,
        tf,
        id,
        raw: bank,
      };
    });

    return { data: formatted, error: null };
  } catch (err) {
    console.error("Error fetching test banks:", err.message);
    return { data: null, error: err.message };
  }
};
