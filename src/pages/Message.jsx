import { useState, useEffect } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const correctPassword = "T@032567"; 

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthorized(true);
    } else {
      alert("Wrong password!");
    }
  };

  useEffect(() => {
    if (authorized) {
      setLoading(true);
      fetch("http://localhost:8080/api/messages")
        .then((res) => res.json())
        .then((data) => {
          setMessages(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [authorized]);

  if (!authorized) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Enter Admin Password</h1>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded border-gray-300 mr-2"
            placeholder="Password"
          />
          <button
            type="submit"
            className="p-2 rounded bg-blue-700 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-32">
      <h1 className="text-4xl font-bold mb-10">Messages</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full max-w-2xl flex flex-col gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-4 border rounded border-gray-300 bg-gray-50"
            >
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p><strong>Sent at:</strong> {new Date(msg.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;
