"use client";

import { subjects as defaultSubjects } from "@/data/subjects";
import { topics as defaultTopics } from "@/data/topics";
import { questions as defaultQuestions } from "@/data/questions";

import { createContext, useContext, useEffect, useState } from "react";
import { Subject } from "@/data/subjects";
import { Topic } from "@/data/topics";
import { Question } from "@/data/questions";
import { db, AppDB } from "@/lib/db";

interface App {
  subjects: Subject[];
  topics: Topic[];
  questions: Question[];
  db: AppDB;
}

export const AppContext = createContext<App | null>(null);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  console.log(subjects);
  console.log(topics);
  console.log(questions[0]);

  useEffect(() => {
    async function loadData() {
      // Check what's already in the db
      const [dbSubjects, dbTopics, dbQuestions] = await Promise.all([
        db.subjects.toArray(),
        db.topics.toArray(),
        db.questions.toArray(),
      ]);

      // Seed tables that are empty with the hardcoded defaults
      if (dbSubjects.length === 0) {
        await db.subjects.bulkPut(defaultSubjects);
        setSubjects(defaultSubjects);
      } else {
        setSubjects(dbSubjects);
      }

      if (dbTopics.length === 0) {
        await db.topics.bulkPut(defaultTopics);
        setTopics(defaultTopics);
      } else {
        setTopics(dbTopics);
      }

      if (dbQuestions.length === 0) {
        await db.questions.bulkPut(defaultQuestions);
        setQuestions(defaultQuestions);
      } else {
        setQuestions(dbQuestions);
      }
    }

    loadData();
  }, []);

  const app = {
    subjects,
    topics,
    questions,
    db,
  };

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);

  if (!ctx) throw new Error("Must be used in AppProvider");

  return ctx;
}
