# Automated News Scraper for Indian News Websites and YouTube Channels

## 📌 Project Overview:
This project is a web-based automated news scraper that extracts and categorizes news headlines from multiple Indian news websites. It provides a seamless way to access the latest news based on selected languages and also includes direct links to news websites and their YouTube channels.<br />

## 🚀 Features:
1. Multi-language Support - Tamil, Telugu, Malayalam, Hindi, and English.<br />
2. Real-time News Scraping - Fetches the latest headlines from popular news websites.<br />
3. Direct Access - Provides links to respective news websites and YouTube channels.<br />
4. User-friendly UI - Built with Tailwind CSS for a clean and responsive design.<br />

## 🛠️ Tech Stack:
~ Frontend: HTML, CSS, JavaScript, Tailwind CSS<br />
~ Backend: Node.js, Express.js, Cheerio.js<br />
~ API Communication: Fetch API for frontend-backend interaction<br />

## 📂 Project Setup:
1️⃣ Clone the Repository:<br />
git clone https://github.com/your-repo/news-scraper.git<br />
cd news-scraper<br />

2️⃣ Install Dependencies:<br />
npm install<br />

3️⃣ Run the Backend Server:<br />
node app.js<br />
The server runs on http://localhost:3000.<br />

4️⃣ Open the Frontend:<br />
Simply open index.html in a browser or use Live Server in VS Code.<br />

## 📡 API Usage:
Endpoint:<br />
GET /scrape-news?language={language}<br />

Example Response:<br />
[<br />
  {<br />
    "site": "NDTV",<br />
    "headlines": ["Breaking News: India wins the match"],<br />
    "website": "https://www.ndtv.com/",<br />
    "youtube": "https://www.youtube.com/@NDTV"<br />
  }<br />
]<br />

## 🖼️ Screenshots:
~ Homepage with Language Selection<br />
~ News Display with Website & YouTube Links<br />

## 🚀 Future Enhancements:
~ AI-based news categorization
~ Support for more regional languages
~ Historical news storage

## 🤝 Contributing:
Feel free to fork this repo, submit issues, or create pull requests!<br />

## 📜 License:
This project is open-source under the MIT License.
