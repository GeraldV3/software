import { supabase } from "../supabase";

export const insertExam = async ({
  title,
  course_code,
  questions,
  created_by,
}) => {
  const { data, error } = await supabase
    .from("exams")
    .insert([
      {
        title,
        course_code,
        questions, // array of question objects
        created_by,
      },
    ])
    .select()
    .single();

  return { data, error };
};
