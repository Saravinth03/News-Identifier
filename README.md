# Automated News Scraper for Indian News Websites and YouTube Channels

## 📌 Project Overview:
This project is a web-based automated news scraper that fetches and displays news headlines from various Indian news websites based on language selection. It also provides direct access to respective news websites and YouTube channels.<br />

## 🚀 Features:
1. **Multi-language Support** → Tamil, Telugu, Malayalam, Hindi, and English.<br />
2. **Real-time News Scraping** → Fetches the latest headlines from trusted sources.<br />
3. **Direct Access to News Sources** → Includes links to websites and YouTube channels.<br />
4. **User-friendly UI** → Built using Tailwind CSS for a modern UI experience.<br />

## 🛠️ Tech Stack:
~ **Frontend** → HTML, CSS, JavaScript, Tailwind CSS<br />
~ **Backend** → Node.js, Express.js, Cheerio.js(for web scraping) and Cors(for API communication)<br />

## 📂 Project Setup:
### 1️⃣ **Clone the Repository**:<br />
```bash<br />
git clone https://github.com/your-repo/news-scraper.git
cd news-scraper
```

### 2️⃣ **Install Dependencies**:<br />
```bash<br />
npm install
```

### 3️⃣ **Run the Backend Server**:<br />
```bash<br />
node app.js
```
The server runs on http://localhost:3000.<br />

### 4️⃣ **Open the Frontend**:<br />
Simply open index.html in a browser or use Live Server in VS Code.<br />

## 📡 API Usage:
**Endpoint**:<br />
GET /scrape-news?language={language}<br />

**Example Response**:<br />
[<br />
  {<br />
    "site": "NDTV",<br />
    "headlines": ["Breaking News: India wins the match"],<br />
    "website": "https://www.ndtv.com/",<br />
    "youtube": "https://www.youtube.com/@NDTV"<br />
  }<br />
]<br />

## 📌 Customization:
~ To add more news sources, update newsWebsites in app.js.<br />
~ Modify script.js for UI enhancements.<br />
~ Use Tailwind CSS for advanced styling.<br />

## 💡 Future Enhancements:
✅ AI-based news filtering<br />
✅ Adding more languages & sources<br />
✅ Storing data for historical analysis<br />

## 🤝 Contributing:
Feel free to fork this repo, submit issues, or create pull requests!<br />

## 📜 License:
This project is open-source under the MIT License.
