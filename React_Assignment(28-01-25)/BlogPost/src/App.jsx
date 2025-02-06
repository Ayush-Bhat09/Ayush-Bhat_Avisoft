import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "", published: false });
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNewBlogs = (e) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const addBlog = () => {
    if (newBlog.title && newBlog.content) {
      setBlogs([...blogs, { ...newBlog, id: uuidv4(), rating: 0 }]);
      setNewBlog({ title: "", content: "", published: false });
    } else {
      alert("Title and content are required!");
    }
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const togglePublish = (id) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, published: !blog.published } : blog
      )
    );
  };

  const startEditing = (id) => {
    setEditingId(id);
  };

  const saveBlog = (id, updatedTitle, updatedContent) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, title: updatedTitle, content: updatedContent } : blog
      )
    );
    setEditingId(null);
  };

  const changeRating = (id, change) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, rating: Math.max(0, blog.rating + change) } : blog
      )
    );
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Blog App</h1>

      <input
        type="text"
        placeholder="Search blogs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div>
        <h3>Add New Blog</h3>
        <input type="text" name="title" placeholder="Title" value={newBlog.title} onChange={handleNewBlogs} />
        <input name="content" placeholder="Content" value={newBlog.content} onChange={handleNewBlogs} />
        <button onClick={addBlog}>Add Blog</button>
      </div>

      <div>
        <h3>Blog List</h3>
        {filteredBlogs.length === 0 ? (
          <p>No blogs found!</p>
        ) : (
          <ul>
            {filteredBlogs.map((blog) => (
              <li key={blog.id}>
                {editingId === blog.id ? (
                  <>
                    <input
                      type="text"
                      defaultValue={blog.title}
                      onChange={(e) => (blog.title = e.target.value)}
                    />
                    <input
                      defaultValue={blog.content}
                      onChange={(e) => (blog.content = e.target.value)}
                    />
                    <button onClick={() => saveBlog(blog.id, blog.title, blog.content)}>Save</button>
                  </>
                ) : (
                  <>
                    <h4>{blog.title}</h4>
                    <p>{blog.content}</p>
                    <button onClick={() => startEditing(blog.id)}>Edit</button>
                  </>
                )}
                <button onClick={() => togglePublish(blog.id)}>
                  {blog.published ? "Unpublish" : "Publish"}
                </button>
                <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                <p>{blog.published ? "Published" : "Unpublished"}</p>

                <p>Rating: {blog.rating}</p>
                <button onClick={() => changeRating(blog.id, 1)}>+</button>
                <button onClick={() => changeRating(blog.id, -1)}>-</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
