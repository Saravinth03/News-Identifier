const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for frontend-backend communication

// Sample list of websites categorized by language with YouTube links
const newsWebsites = [
  { name: 'News7 Tamil', url: 'https://news7tamil.live/', youtube: 'https://www.youtube.com/@News7TamilPRIME', language: 'Tamil' },
  { name: 'Polimer News', url: 'https://www.polimernews.com/', youtube: 'https://www.youtube.com/@PolimerNews', language: 'Tamil' },
  { name: 'India TV', url: 'https://www.indiatvnews.com/', youtube: 'https://www.youtube.com/@IndiaTV', language: 'English' },
  { name: 'New World India', url: 'https://www.newsworldindia.in/', youtube: 'https://www.youtube.com/@NewzWorldIndiaChannel', language: 'English' },
  { name: 'Aajtak Hindi', url: 'https://www.aajtak.in/', youtube: 'https://www.youtube.com/@aajtak', language: 'Hindi' },
  { name: 'Times Now', url: 'https://www.timesnownews.com/', youtube: 'https://www.youtube.com/@TimesNow', language: 'English' },
  { name: 'NDTV', url: 'https://www.ndtv.com/', youtube: 'https://www.youtube.com/@NDTV', language: 'English' },
  { name: 'NTV Telugu', url: 'https://ntvtelugu.com/', youtube: 'https://www.youtube.com/@ntvtelugu', language: 'Telugu' },
  { name: 'TV9 Telugu', url: 'https://tv9telugu.com/', youtube: 'https://www.youtube.com/@TV9TeluguLive', language: 'Telugu' },
  { name: 'AsiaNetNews Kannada', url: 'https://kannada.asianetnews.com/', youtube: 'https://www.youtube.com/@AsianetSuvarnaNews', language: 'Kannada' },
  { name: 'Manorama News Malayalam', url: 'https://www.manoramanews.com/', youtube: 'https://www.youtube.com/@manoramanews', language: 'Malayalam' },
];

// API to scrape news headlines based on language
app.get('/scrape-news', async (req, res) => {
  const { language } = req.query;

  if (!language) {
    return res.status(400).json({ error: 'Language query parameter is required.' });
  }

  try {
    const filteredWebsites = newsWebsites.filter((site) => site.language === language);
    const results = [];

    for (const site of filteredWebsites) {
      const response = await axios.get(site.url);
      const $ = cheerio.load(response.data);

      // Extract headlines (Modify selector according to site structure)
      const headlines = [];
      $('h1, h2, h3').each((_, element) => {
        const headline = $(element).text().trim();
        if (headline) headlines.push(headline);
      });

      results.push({
        site: site.name,
        website: site.url,
        youtube: site.youtube,
        headlines,
      });
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error scraping news.' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
