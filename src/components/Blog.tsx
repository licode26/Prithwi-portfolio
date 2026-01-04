import { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const fetchBlogs = () => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedBlog]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('Please fill out all fields.');
      return;
    }
    const newBlog: BlogPost = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toISOString(),
    };
    const updatedBlogs = [newBlog, ...blogs];
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setTitle('');
    setContent('');
  };

  const handleDelete = (id: string) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const openModal = (blog: BlogPost) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

        <form onSubmit={handleSubmit} className="mb-16 max-w-2xl mx-auto p-6 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none transition mb-4"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:ring-2 focus:ring-pink-500 focus:outline-none transition mb-4"
            rows={6}
            required
          />
          <button type="submit" className="w-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg hover:opacity-90 transition-opacity">
            Add Blog Post
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogs.map((blog) => {
            const truncatedContent = blog.content.length > 200 ? blog.content.substring(0, 200) + '...' : blog.content;

            return (
              <div
                key={blog.id}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm relative cursor-pointer transition-all duration-300 hover:bg-white/[0.05] max-h-64 overflow-hidden"
                onClick={() => openModal(blog)}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(blog.id);
                  }}
                  className="absolute top-4 right-4 p-2 text-red-400 hover:text-red-300 transition-colors z-10"
                  title="Delete blog post"
                >
                  <Trash2 size={20} />
                </button>
                <h2 className="text-2xl font-bold mb-2 pr-12">{blog.title}</h2>
                <p className="text-white/50 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
                <p className="text-white/80 whitespace-pre-wrap">{truncatedContent}</p>
                {blog.content.length > 200 && (
                  <p className="text-cyan-400 mt-2 font-semibold">Click to read more</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="bg-gray-900 rounded-xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>
              <p className="text-white/50 mb-6">{new Date(selectedBlog.date).toLocaleDateString()}</p>
              <p className="text-white/80 whitespace-pre-wrap leading-relaxed">{selectedBlog.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}