const SampleListing = [
  {
    "title": "Cozy Beachfront Apartment",
    "description": "A beautiful apartment with stunning ocean views and direct beach access.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fHww",
      "filename": "premium_photo-1687960116497-0dc41e1808a2"
    },
    "price": 120,
    "location": "Miami, FL",
    "country": "USA"
  },
  {
    "title": "Rustic Cabin in the Woods",
    "description": "A peaceful retreat surrounded by nature, perfect for a relaxing getaway.",
    "image": {
      "url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww",
      "filename": "photo-1551882547-ff40c63fe5fa"
    },
    "price": 90,
    "location": "Asheville, NC",
    "country": "USA"
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "A stylish loft with all modern amenities, located in the heart of the city.",
    "image": {
      "url": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
      "filename": "photo-1584132967334-10e028bd69f7"
    },
    "price": 150,
    "location": "New York, NY",
    "country": "USA"
  },
  {
    "title": "Seaside Villa with Pool",
    "description": "Luxury villa with a private pool and breathtaking sea views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww",
      "filename": "photo-1566073771259-6a8506099945"
    },
    "price": 300,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Traditional Japanese Ryokan",
    "description": "Experience authentic Japanese hospitality with tatami rooms and onsen baths.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1676321688630-9558e7d2be10?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fHww",
      "filename": "premium_photo-1676321688630-9558e7d2be10"
    },
    "price": 200,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Luxury Penthouse with City View",
    "description": "A high-end penthouse with an amazing skyline view and top-notch facilities.",
    "image": {
      "url": "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww",
      "filename": "photo-1625244724120-1fd1d34d00f6"
    },
    "price": 400,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Charming Cottage by the Lake",
    "description": "A peaceful escape with beautiful lake views and cozy interiors.",
    "image": {
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww",
      "filename": "photo-1571896349842-33c89424de2d"
    },
    "price": 110,
    "location": "Lake Tahoe, CA",
    "country": "USA"
  },
  {
    "title": "Minimalist Apartment in Berlin",
    "description": "A sleek and modern apartment in the heart of Berlin, close to attractions.",
    "image": {
      "url": "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fHww",
      "filename": "photo-1606046604972-77cc76aee944"
    },
    "price": 130,
    "location": "Berlin",
    "country": "Germany"
  },
  {
    "title": "Mountain Retreat with Hot Tub",
    "description": "A luxurious retreat with a hot tub, fireplace, and stunning mountain views.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fHww",
      "filename": "premium_photo-1675745329378-5573c360f69f"
    },
    "price": 180,
    "location": "Banff",
    "country": "Canada"
  },
  {
    "title": "Bohemian House with Garden",
    "description": "A charming home with artistic decor and a lovely garden for relaxation.",
    "image": {
      "url": "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "filename": "photo-1535827841776-24afc1e255ac"
    },
    "price": 140,
    "location": "Lisbon",
    "country": "Portugal"
  },
  {
    "title": "Historic Townhouse in Paris",
    "description": "A classic Parisian townhouse with elegant interiors and a view of the Eiffel Tower.",
    "image": {
      "url": "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "filename": "photo-1629140727571-9b5c6f6267b4"
    },
    "price": 250,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Desert Oasis with Private Pool",
    "description": "A stunning retreat in the desert with a private pool and breathtaking views.",
    "image": {
      "url": "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "filename": "photo-1596386461350-326ccb383e9f"
    },
    "price": 280,
    "location": "Marrakech",
    "country": "Morocco"
  },
  {
    "title": "Eco-Friendly Jungle Bungalow",
    "description": "A sustainable stay in the heart of the jungle with eco-friendly amenities.",
    "image": {
      "url": "https://plus.unsplash.com/premium_photo-1677626376739-e46c7e5994cb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "filename": "premium_photo-1677626376739-e46c7e5994cb"
    },
    "price": 95,
    "location": "Bali",
    "country": "Indonesia"
  },
  {
    "title": "Chic Studio near Buckingham Palace",
    "description": "A compact and stylish studio in the heart of London, close to major attractions.",
    "image": {
      "url": "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "filename": "photo-1596436889106-be35e843f974"
    },
    "price": 220,
    "location": "London",
    "country": "UK"
  },
  {
    "title": "Scandinavian Design Apartment",
    "description": "A modern and cozy apartment with minimalist Scandinavian decor.",
    "image": {
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "filename": "photo-1520250497591-112f2f40a3f4"
    },
    "price": 160,
    "location": "Stockholm",
    "country": "Sweden"
  }
];

module.exports = { data: SampleListing };
