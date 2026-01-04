import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Corrected import path
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, Timestamp } from 'firebase/firestore';
import { Send, Star, MessageSquare } from 'lucide-react';

interface Feedback {
  id: string;
  name: string;
  message: string;
  rating: number;
  createdAt: Timestamp;
}

export const FeedbackSection: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  // Listen for real-time updates from Firestore
  useEffect(() => {
    if (!db) return;

    const q = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const feedbacks: Feedback[] = [];
      querySnapshot.forEach((doc) => {
        feedbacks.push({ id: doc.id, ...doc.data() } as Feedback);
      });
      setFeedbackList(feedbacks);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) {
      alert('Feedback system is not available at the moment.');
      return;
    }
    if (!name.trim() || !message.trim() || rating === 0) {
      alert('Please fill out all fields and provide a rating.');
      return;
    }
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'feedback'), {
        name,
        message,
        rating,
        createdAt: serverTimestamp(),
      });
      setName('');
      setMessage('');
      setRating(0);
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to submit feedback. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const StarRating = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={24}
          className={`cursor-pointer transition-colors ${
            star <= value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600 hover:text-yellow-500'
          }`}
          onClick={() => onChange(star)}
        />
      ))}
    </div>
  );

  return (
    <section id="feedback" className="w-full py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Real-time Feedback
            </span>
          </h2>
          <p className="text-lg text-white/60 font-mono">Leave a comment or suggestion!</p>
        </header>

        {/* Feedback Form */}
        <div className="mb-16 p-6 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
              required
            />
            <textarea
              placeholder="Your Feedback..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
              required
            />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <StarRating value={rating} onChange={setRating} />
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {submitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </form>
        </div>

        {/* Feedback List */}
        <div className="space-y-6">
          <h3 className="flex items-center gap-2 text-2xl font-bold text-white/80">
            <MessageSquare size={24} className="text-pink-400" />
            Comments
          </h3>
          {feedbackList.length > 0 ? (
            feedbackList.map((fb) => (
              <div key={fb.id} className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-lg text-white">{fb.name}</p>
                    <p className="text-sm text-white/50">
                      {fb.createdAt?.toDate().toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex">
                    {[...Array(fb.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-white/80">{fb.message}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-white/50 py-8">Be the first to leave feedback!</p>
          )}
        </div>
      </div>
    </section>
  );
};