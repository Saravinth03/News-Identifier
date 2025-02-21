const customDropdown = document.getElementById('customDropdown');
const dropdownButton = document.getElementById('dropdownButton');
const dropdownOptions = document.getElementById('dropdownOptions');
const selectedLanguage = document.getElementById('selectedLanguage');
const newsContainer = document.getElementById('newsContainer');

// Channel links data
const channelLinks = {
  'News7 Tamil': {
    website: 'https://news7tamil.live/',
    youtube: 'https://www.youtube.com/@News7TamilPRIME',
  },
  'Polimer News': {
    website: 'https://www.polimernews.com/',
    youtube: 'https://www.youtube.com/@PolimerNews',
  },
  'India TV': {
    website: 'https://www.indiatvnews.com/',
    youtube: 'https://www.youtube.com/@IndiaTV',
  },
  'New World India': {
    website: 'https://www.newsworldindia.in/',
    youtube: 'https://www.youtube.com/@NewzWorldIndiaChannel',
  },
  'Aajtak Hindi': {
    website: 'https://www.aajtak.in/',
    youtube: 'https://www.youtube.com/@aajtak',
  },
  'Times Now': {
    website: 'https://www.timesnownews.com/',
    youtube: 'https://www.youtube.com/@TimesNow',
  },
  'NDTV': {
    website: 'https://www.ndtv.com/',
    youtube: 'https://www.youtube.com/@NDTV',
  },
  'NTV Telugu': {
    website: 'https://ntvtelugu.com/',
    youtube: 'https://www.youtube.com/@ntvtelugu',
  },
  'TV9 Telugu': {
    website: 'https://tv9telugu.com/',
    youtube: 'https://www.youtube.com/@TV9TeluguLive',
  },
  'AsiaNetNews Kannada': {
    website: 'https://kannada.asianetnews.com/',
    youtube: 'https://www.youtube.com/@AsianetSuvarnaNews',
  },
  'Manorama News Malayalam': {
    website: 'https://www.manoramanews.com/',
    youtube: 'https://www.youtube.com/@manoramanews',
  },
};

// Toggle dropdown visibility
dropdownButton.addEventListener('click', () => {
  dropdownOptions.classList.toggle('hidden');
});

// Handle dropdown option selection
dropdownOptions.addEventListener('click', (event) => {
  const option = event.target.closest('.dropdown-option');
  if (!option) return;

  const language = option.getAttribute('data-language');
  const languageName = option.textContent.trim();
  selectedLanguage.textContent = languageName;
  dropdownOptions.classList.add('hidden');

  // Fetch news based on selected language
  fetchNews(language);
});

// Fetch news from the backend
async function fetchNews(language) {
  newsContainer.innerHTML = '<p class="text-red-500">Loading...</p>';
  try {
    const response = await fetch(`http://localhost:3000/scrape-news?language=${language}`);
    const data = await response.json();

    newsContainer.innerHTML = ''; // Clear existing content
    data.forEach((site) => {
      const siteDiv = document.createElement('div');
      siteDiv.className = 'mb-4 p-4 bg-white shadow-md rounded';

      // Channel Title with Links
      const siteTitle = document.createElement('h2');
      siteTitle.className = 'text-xl font-bold mb-2 flex items-center gap-4';

      // Channel Name
      const channelName = document.createElement('span');
      channelName.textContent = site.site;

      // Website Link
      const websiteLink = document.createElement('a');
      websiteLink.href = channelLinks[site.site]?.website || '#';
      websiteLink.target = '_blank';
      websiteLink.className = 'text-blue-500 underline text-sm';
      websiteLink.textContent = 'Visit Website';

      // YouTube Link
      const youtubeLink = document.createElement('a');
      youtubeLink.href = channelLinks[site.site]?.youtube || '#';
      youtubeLink.target = '_blank';
      youtubeLink.className = 'text-red-500 underline text-sm ml-2';
      youtubeLink.textContent = 'YouTube Channel';

      // Append Title and Links
      siteTitle.appendChild(channelName);
      siteTitle.appendChild(websiteLink);
      siteTitle.appendChild(youtubeLink);

      // News Headlines
      const headlinesList = document.createElement('ul');
      headlinesList.className = 'list-disc pl-5';
      site.headlines.forEach((headline) => {
        const headlineItem = document.createElement('li');
        headlineItem.textContent = headline;
        headlinesList.appendChild(headlineItem);
      });

      siteDiv.appendChild(siteTitle);
      siteDiv.appendChild(headlinesList);
      newsContainer.appendChild(siteDiv);
    });
  } catch (error) {
    newsContainer.innerHTML = '<p class="text-red-500">Failed to fetch news.</p>';
  }
}
