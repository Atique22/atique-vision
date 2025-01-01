

// Sample JSON data
const items = 
[
    
    {
      "id": 4,
      "category": "Entertainment",
      "title": "Netflix Subscription",
      "description": "Stream your favorite movies, TV shows, and original content.",
      "image": "./assets/netflix.jpeg"
    },
    {
      "id": 5,
      "category": "Entertainment",
      "title": "Tamasha App Subscription",
      "description": "Watch live TV shows, news, and entertainment programs.",
      "image": "./assets/tamasha.jpeg"
    },
    {
      "id": 6,
      "category": "AI Services",
      "title": "GPT-4 Subscription",
      "description": "Get access to the latest AI-powered language models.",
      "image": "./assets/gpt.png"
    },
    {
      "id": 7,
      "category": "Entertainment",
      "title": "Spotify Premium",
      "description": "Stream music ad-free and offline with premium access.",
      "image": "./assets/spotify.jpeg"
    },
    {
      "id": 8,
      "category": "Gaming",
      "title": "PlayStation Plus",
      "description": "Get free games, exclusive discounts, and multiplayer access.",
      "image": "./assets/playstation.jpeg"
    },
    {
        "id": 1,
        "category": "Electronics",
        "title": "Smartphone",
        "description": "A high-quality smartphone with advanced features. Apple's latest flagship smartphone with A17 Bionic chip and titanium design.",
        "image": "./assets/smartphone.jpeg"
    }
  ]
  











// Render category list
function renderCategoryList() {
  const categoryList = document.getElementById('category-list');
  categoryList.innerHTML = items.map(item => `
    <div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${item.image}" alt="${item.title}">
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${item.category}</h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${item.title}</h1>
          <p class="leading-relaxed mb-3">${item.description}</p>
          <button class="text-indigo-500 inline-flex items-center" onclick="showItemDetails(${item.id})">Learn More</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Show item details
function showItemDetails(itemId) {
  const item = items.find(i => i.id === itemId);
  document.getElementById('details-img').src = item.image;
  document.getElementById('details-category').textContent = item.category;
  document.getElementById('details-title').textContent = item.title;
  document.getElementById('details-description').textContent = item.description;

  // Update WhatsApp order link
  const orderMessage = `Hello! I am interested in the "${item.title}" from the ${item.category} category. Could you provide more details?`;
  const whatsappLink = `https://wa.me/03495791363?text=${encodeURIComponent(orderMessage)}`;
  document.getElementById('order-link').href = whatsappLink;

  document.getElementById('category-list').parentElement.classList.add('hidden');
  document.getElementById('item-details').classList.remove('hidden');
}

function generateWhatsAppMessage() {
    const productName = "Atique\Vision"; // Customize this dynamically
    const phoneNumber = "03495791363"; // Public phone number

    const orderMessage = `Hello! I am interested in the ${productName} from your website. Could you provide more details?`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(orderMessage);

    // Return the full WhatsApp link with the message and the phone number
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }

  // When the page loads, update the WhatsApp link dynamically
  window.onload = () => {
    const whatsappLink = document.getElementById("whatsapp-link");
    whatsappLink.href = generateWhatsAppMessage();
  };

// Show category list
function showCategoryList() {
  document.getElementById('category-list').parentElement.classList.remove('hidden');
  document.getElementById('item-details').classList.add('hidden');
}

// Initialize
renderCategoryList();

