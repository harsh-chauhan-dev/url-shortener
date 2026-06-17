import { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [input, setInput] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const handleShorten = async () => {
    if (!input) {
      alert("Please enter a URL");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/shorten", {
        url: input,
      });
      setShortUrl(res.data.shortUrl);
    } catch (error) {
      console.error(error);
      alert("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipborad = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied");
  };
  const getAnalytics = async () => {
    const shortId = shortUrl.split("/").pop();

    const response = await axios.get(
      `http://localhost:5000/api/analytics/${shortId}`,
    );

    setAnalytics(response.data);
  
  };
  return (
    <>
      <div className="container">
        <h1>URL Shortener</h1>

        <input
          type="text"
          placeholder="Enter URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleShorten} disabled={loading}>
          {loading ? "Generating..." : "Shorten URL"}
        </button>
        {shortUrl && (
          <div className="result">
            <p>Short URL: </p>
            <a href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>
            <button onClick={copyToClipborad}>Copy</button>

            <button onClick={getAnalytics}>View Analytics</button>
          </div>
        )}
        {analytics && (
          <div className="info">
            <h3>Total Clicks: {analytics.totalClicks}</h3>
              <h3>Visit History Length: {analytics.visitHistory.length}</h3>
          </div>
       )}
        
      </div>
    </>
  );
}

export default App;
