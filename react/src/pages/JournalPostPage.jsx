// src/pages/JournalPage.jsx
import React from "react";
import journalPosts from "../data/journalPosts";
import { Link } from "react-router-dom";

const JournalPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 font-serif">Journal</h2>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {journalPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded p-6 bg-gray-50 hover:shadow transition"
          >
            <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link
              to={`/journal/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;