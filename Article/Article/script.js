// --- SLIDING SOURCE CARDS FOR MORE NEWS ---
const sourcesData = [
  {
    name: "NDTV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/NDTV_logo.svg",
    tag: "India & World",
    news: [
      {
        title: "India's GDP growth fastest in the world, says IMF report",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=200&q=80",
        link: "https://www.ndtv.com/india-news/india-gdp-growth-imf-report-2025-09-17",
        category: "Economy"
      },
      {
        title: "UNGA: India calls for global action on climate change",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=200&q=80",
        link: "https://www.ndtv.com/world-news/unga-india-climate-change-2025-09-17",
        category: "World"
      },
      {
        title: "Delhi Metro launches new smart card system",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80",
        link: "https://www.ndtv.com/india-news/delhi-metro-smart-card-2025-09-17",
        category: "Local"
      }
    ]
  },
  {
    name: "Times of India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Times_of_India_Logo.svg",
    tag: "Top Headlines",
    news: [
      {
        title: "Sensex hits record high as markets rally",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
        link: "https://timesofindia.indiatimes.com/business/india-business/sensex-hits-record-high-2025-09-17/articleshow/104567891.cms",
        category: "Business"
      },
      {
        title: "India wins gold at Asian Games",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80",
        link: "https://timesofindia.indiatimes.com/sports/asian-games/india-wins-gold-2025-09-17/articleshow/104567892.cms",
        category: "Sports"
      },
      {
        title: "Mumbai monsoon: City records heaviest rainfall in a decade",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80",
        link: "https://timesofindia.indiatimes.com/city/mumbai/mumbai-monsoon-rainfall-2025-09-17/articleshow/104567893.cms",
        category: "Local"
      }
    ]
  },
  {
    name: "The Hindu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/The_Hindu_Logo.svg",
    tag: "Top India News",
    news: [
      {
        title: "U.S. President Trump dials PM Modi, greets him on birthday",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80",
        link: "https://www.thehindu.com/news/national/us-president-trump-dials-pm-modi-greets-him-on-birthday/article12345678.ece",
        category: "Modi’s 75th birthday"
      },
      {
        title: "India-Pakistan border sees a sharp rise in drone-driven drug ...",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
        link: "https://www.thehindu.com/news/national/india-pakistan-border-drone-drug-smuggling/article23456789.ece",
        category: "Smuggling"
      },
      {
        title: "After Indore, patients allege rat bites at Jabalpur medical c...",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80",
        link: "https://www.thehindu.com/news/national/rat-bites-jabalpur-medical/article34567890.ece",
        category: "Rat bites"
      }
    ]
  },
  {
    name: "NEWS24",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/News24_logo.svg",
    tag: "TOP STORIES",
    news: [
      {
        title: "Prime Minister Modi’s High-Tech Cars Over the Years, from BMW 7 Series to Range Rover",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80",
        link: "https://www.news24.com/news24/india/modi-high-tech-cars-2025-09-17",
        category: "Prime Minister Modi’s High-Tech Cars"
      },
      {
        title: "When you can watch the finale as per time zones",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=200&q=80",
        link: "https://www.news24.com/news24/entertainment/finale-time-zones-2025-09-17",
        category: "The Summer I Turned Pretty"
      },
      {
        title: "Jasprit Bumrah likely to be rested in match against Oman",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=200&q=80",
        link: "https://www.news24.com/news24/sports/bumrah-rested-oman-2025-09-17",
        category: "Asia Cup 2025"
      }
    ]
  },
  {
    name: "The Tribune",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/The_Tribune_Logo.svg",
    tag: "Top stories of the day",
    news: [
      {
        title: "Amid tariff standoff, President Trump calls up PM Modi, wishes him on his birthday",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80",
        link: "https://www.tribuneindia.com/news/nation/trump-calls-modi-birthday-2025-09-17",
        category: "Nation"
      },
      {
        title: "India rejects third-party mediation on bilateral issues: Pakistan Foreign Minister Dar",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=200&q=80",
        link: "https://www.tribuneindia.com/news/world/india-rejects-mediation-pakistan-2025-09-17",
        category: "World"
      },
      {
        title: "Rs 92 lakh, ornaments worth Rs 1.5 crore recovered from govt officer's residence in Assam",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80",
        link: "https://www.tribuneindia.com/news/nation/ornaments-recovered-assam-2025-09-17",
        category: "Nation"
      }
    ]
  }
];

function renderNewsSlider() {
  const slider = document.getElementById('news-slider');
  if (!slider) return;
  slider.innerHTML = '';
  sourcesData.forEach(source => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl shadow p-6 min-w-[320px] max-w-xs flex-shrink-0 snap-center border border-gray-100 flex flex-col';
    card.innerHTML = `
      <div class="mb-2">
        <div class="text-xl font-bold text-red-700 mb-1">${source.name}</div>
      </div>
      <div class="bg-gray-200 rounded text-xs font-bold text-gray-800 px-3 py-1 mb-3">${source.tag}</div>
      <div class="flex flex-col gap-3">
        ${source.news.map(n => `
          <a href="${n.link}" target="_blank" class="flex items-center gap-3 group">
            <div class="flex-1 min-w-0">
              <div class="text-xs text-gray-500 truncate">${n.category}</div>
              <div class="font-medium text-gray-900 group-hover:underline truncate">${n.title}</div>
            </div>
            <img src="${n.image}" alt="${n.category}" class="h-12 w-16 object-cover rounded-lg" />
          </a>
        `).join('')}
      </div>
      <div class="text-xs text-gray-400 mt-4 flex items-center"><span class="mr-1">Showcase</span>• 8 hours ago</div>
    `;
    slider.appendChild(card);
  });
}

// Slider navigation
function setupSliderNav() {
  const slider = document.getElementById('news-slider');
  const left = document.getElementById('slider-left');
  const right = document.getElementById('slider-right');
  if (!slider || !left || !right) return;
  left.classList.remove('hidden');
  right.classList.remove('hidden');
  left.onclick = () => slider.scrollBy({ left: -340, behavior: 'smooth' });
  right.onclick = () => slider.scrollBy({ left: 340, behavior: 'smooth' });
}

// Render on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  renderNewsSlider();
  setupSliderNav();
});
// News data for India, World, Business
const categoryNews = {
  india: [
    {
      title: "From Israel to Australia, leaders line up with rare video wishes for PM Modi",
      source: "India Today",
      author: "Abhishek De",
      date: "1 hour ago",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      link: "https://www.indiatoday.in/india/story/israel-australia-leaders-video-wishes-pm-modi-birthday-2436789-2025-09-17"
    },
    {
      title: "Trump, Modi Speak in Bid to Ease Clash Over Tariffs, Russian Oil",
      source: "Bloomberg.com",
      author: "Shruti Srivastava and Hadriana Lo...",
      date: "5 hours ago",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
      link: "https://www.bloomberg.com/news/articles/2025-09-17/trump-modi-speak-in-bid-to-ease-clash-over-tariffs-russian-oil"
    },
    {
      title: "Why did Delhi BMW accident accused take Navjot Singh to hospital 20 km away, ignoring...",
      source: "Hindustan Times",
      author: "",
      date: "3 hours ago",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      link: "https://www.hindustantimes.com/india-news/why-did-delhi-bmw-accident-accused-take-navjot-singh-to-hospital-20-km-away-ignoring-101693495789123.html"
    }
  ],
  world: [
    {
      title: "'Enough of his hatred': What Charlie Kirk's shooter Tyler Robinson wrote in texts to partn...",
      source: "Hindustan Times",
      author: "Poorva Joshi",
      date: "8 hours ago",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
        link: "https://www.hindustantimes.com/world-news/enough-of-his-hatred-what-charlie-kirk-s-shooter-tyler-robinson-wrote-in-texts-to-partner-101693495789124.html"
    },
    {
      title: "Kash Patel faces Senate hearing amid FBI turmoil and Charlie Kirk assassination probe",
      source: "Mint",
      author: "Ravi Hari",
      date: "20 hours ago",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        link: "https://www.livemint.com/news/world/kash-patel-faces-senate-hearing-amid-fbi-turmoil-and-charlie-kirk-assassination-probe-11693495789125.html"
    },
    {
      title: "Trump says US, China reach deal on TikTok; to speak with Xi on Friday",
      source: "Times of India",
      author: "",
      date: "19 hours ago",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        link: "https://timesofindia.indiatimes.com/world/us/trump-says-us-china-reach-deal-on-tiktok-to-speak-with-xi-on-friday/articleshow/104567891.cms"
    }
  ],
  business: [
    {
      title: "Urban Company's Shares Soar in Debut After Year's Most Popular India IPO",
      source: "Bloomberg.com",
      author: "Ashutosh Joshi",
      date: "3 hours ago",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
                link: "https://www.bloomberg.com/news/articles/2025-09-17/urban-company-s-shares-soar-in-debut-after-years-most-popular-india-ipo"
    },
    {
      title: "Nifty 50, Sensex today: What to expect from Indian stock market in trade on September 17, ahead...",
      source: "Mint",
      author: "Ankit Gohel",
      date: "7 hours ago",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
                link: "https://www.livemint.com/market/stock-market-news/nifty-50-sensex-today-what-to-expect-from-indian-stock-market-in-trade-on-september-17-ahead-11693495789126.html"
    }
  ]
};

// --- HERO/BANNER: Top Trending News ---
const trendingNews = {
  title: "From Israel to Australia, leaders line up with rare video wishes for PM Modi",
  summary: "World leaders send rare video wishes for PM Modi's birthday, highlighting India's growing global influence.",
  image: "Modi.jpg",
  link: "https://www.indiatoday.in/india/story/israel-australia-leaders-video-wishes-pm-modi-birthday-2436789-2025-09-17"
};

const heroContent = document.getElementById('hero-news-content');
const heroImage = document.getElementById('hero-news-image');
if (heroContent && heroImage) {
  heroContent.innerHTML = `
    <h2 class="text-4xl font-extrabold mb-4">${trendingNews.title}</h2>
    <p class="text-lg mb-6">${trendingNews.summary}</p>
    <a href="${trendingNews.link}" target="_blank" class="bg-white text-red-700 font-semibold px-6 py-2 rounded hover:bg-gray-100 inline-block">Read Full Story</a>
  `;
  heroImage.innerHTML = `<img src="${trendingNews.image}" alt="Trending News" class="rounded-lg shadow-lg w-full max-w-xs md:max-w-md">`;
}
function renderCategoryNews(category, containerId) {
  const list = document.getElementById(containerId);
  if (!list) return;
  list.innerHTML = '';
  const newsArr = categoryNews[category];
  for (let i = 0; i < newsArr.length; i++) {
    const n = newsArr[i];
    const div = document.createElement('div');
    div.className = 'flex items-start gap-3 mb-6 border-b pb-4 last:border-b-0 last:pb-0';
    div.innerHTML = `
      <div class="flex-1">
        <div class="text-xs font-semibold text-gray-700 mb-1 flex items-center">
          <span class="mr-1">${n.source}</span>
        </div>
  <a href="${n.link}" target="_blank" class="block font-medium text-gray-900 hover:underline leading-snug">${n.title}</a>
        <div class="text-xs text-gray-500 mt-1">${n.date}${n.author ? ' • By ' + n.author : ''}</div>
      </div>
      <img src="${n.image}" alt="${n.source}" class="h-12 w-12 object-cover rounded-lg ml-2" />
    `;
  list.appendChild(div);
}
}

renderCategoryNews('india', 'india-news-list');
renderCategoryNews('world', 'world-news-list');
renderCategoryNews('business', 'business-news-list');
const articles = [
  {
    title: "Global Markets Rally Amid Economic Optimism",
    date: "2025-09-17",
    summary: "Stock markets worldwide surged today as investors reacted positively to new economic data and policy announcements.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#finance",
    isPublished: true
  },
  {
    title: "Local Team Wins National Championship",
    date: "2025-09-16",
    summary: "The city celebrates as the underdog local team clinches the national title in a thrilling final match.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
    link: "#sports",
    isPublished: true
  },
  {
    title: "Government Launches New Green Initiative",
    date: "2025-09-15",
    summary: "A major new policy aims to reduce emissions and promote sustainable practices across the country.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    link: "#government",
    isPublished: true
  }
];

const container = document.getElementById("articles-container");


function animateArticles() {
  const tiles = document.querySelectorAll('#articles-container article.news-animate');
  const reveal = () => {
    tiles.forEach(tile => {
      const rect = tile.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        tile.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
}

for (let i = 0; i < articles.length; i++) {
  const article = articles[i];
  if (!article.isPublished) continue;
  const tile = document.createElement("article");
  tile.className = "bg-white shadow rounded overflow-hidden flex flex-col news-animate news-hover";
  tile.innerHTML = `
    <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover" />
    <div class="p-4 flex-1 flex flex-col">
      <h3 class="text-xl font-bold text-red-700 mb-1">${article.title}</h3>
      <span class="text-xs text-gray-400 mb-2">${article.date}</span>
      <p class="text-gray-600 text-sm flex-1 mb-2">${article.summary}</p>
      <a href="${article.link}" target="_blank" class="text-red-600 hover:underline mt-2 block">Read More</a>
    </div>
  `;
  container.appendChild(tile);
}

document.addEventListener('DOMContentLoaded', animateArticles);
