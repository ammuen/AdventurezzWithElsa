<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adventures with Elsa</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gloock:wght@400;700&family=Montserrat:wght@400;600&display=swap">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            background: linear-gradient(to right, #FFDDC1, #FFABAB); /* Peach gradient */
        }

        header {
            background: #FFABAB;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }

        header h1 {
            margin: 0;
            font-family: 'Gloock', serif;
            font-size: 36px;
        }

        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }

        nav ul li {
            margin: 0 15px;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-size: 18px;
        }

        nav ul li a:hover {
            text-decoration: underline;
        }

        .container {
            width: 80%;
            margin: 0 auto;
        }

        section {
            padding: 20px 0;
        }

        h2 {
            font-family: 'Gloock', serif;
            font-size: 28px;
            margin-bottom: 10px;
        }

        .section-content {
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* Booking Popup Styles */
        .popup {
            display: none; /* Hidden by default */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
            z-index: 1000; /* Ensure it's on top */
        }

        .popup-content {
            background: #fff;
            padding: 20px;
            border-radius: 15px;
            max-width: 500px;
            width: 100%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .popup-close {
            float: right;
            font-size: 24px;
            color: #333;
            cursor: pointer;
        }

        .popup-close:hover {
            color: #000;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        form label {
            margin: 10px 0 5px;
            font-weight: bold;
        }

        form input,
        form select {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        form button {
            background-color: #FFABAB; /* Peach color */
            color: white;
            border: none;
            padding: 12px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 10px;
            transition: background-color 0.3s ease;
        }

        form button:hover {
            background-color: #FF8C8C; /* Darker peach */
        }

        #mapid {
            height: 500px;
            border-radius: 10px;
        }

        footer {
            background: #FFABAB;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: relative;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Adventures with Elsa</h1>
            <nav aria-label="Main Navigation">
                <ul>
                    <li><a href="#home" onclick="showSection('home')">Home</a></li>
                    <li><a href="#destinations" onclick="showSection('destinations')">Destinations</a></li>
                    <li><a href="#map" onclick="showSection('map')">Interactive Map</a></li>
                    <li><a href="#about" onclick="showSection('about')">About</a></li>
                    <li><a href="#contact" onclick="showSection('contact')">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <!-- Home Section -->
        <section id="home" class="section">
            <div class="container section-content">
                <h2>Welcome to Adventures with Elsa</h2>
                <p>Discover breathtaking destinations and immerse yourself in captivating travel stories. Our blog is a gateway to your next adventure, offering you insights and inspiration from around the globe. Whether you're looking for hidden gems or popular hotspots, we have something for every traveler. Join us as we explore the world's wonders and guide you through unforgettable experiences.</p>
            </div>
        </section>

        <!-- Destinations Section -->
        <section id="destinations" class="section">
            <div class="container section-content">
                <h2>Destinations</h2>
                <p>Explore some of the most exciting destinations around the world:</p>
                <ul>
                    <li><strong>Tokyo, Japan:</strong> A vibrant city known for its modern skyline, historic temples, and unique culture.</li>
                    <li><strong>Bali, Indonesia:</strong> Famous for its beautiful beaches, lush landscapes, and cultural richness.</li>
                    <li><strong>New York City, USA:</strong> The city that never sleeps, offering iconic landmarks, museums, and diverse neighborhoods.</li>
                    <li><strong>Paris, France:</strong> Known as the "City of Light," Paris is renowned for its art, fashion, and historic sites.</li>
                    <li><strong>Rio de Janeiro, Brazil:</strong> Famous for its Carnival, stunning beaches, and vibrant nightlife.</li>
                    <li><strong>Venice, Italy:</strong> A romantic city of canals, historic architecture, and rich cultural heritage.</li>
                    <li><strong>London, UK:</strong> Known for its historic landmarks, museums, and cultural diversity.</li>
                    <li><strong>Sydney, Australia:</strong> Famous for its iconic Opera House, beautiful harbor, and vibrant lifestyle.</li>
                    <li><strong>Dubai, UAE:</strong> Known for its luxury shopping, futuristic architecture, and vibrant nightlife.</li>
                </ul>
            </div>
        </section>

        <!-- Interactive Map Section -->
        <section id="map" class="section">
            <div class="container section-content">
                <h2>Interactive Map</h2>
                <div id="mapid"></div>
                <button onclick="togglePopup()">Book Now</button>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="section">
            <div class="container section-content">
                <h2>About Us</h2>
                <p>Welcome to Adventures with Elsa, where my passion for exploration meets your wanderlust! I'm <strong>Vidhya Varshini</strong>, a travel enthusiast who believes in the transformative power of discovering new cultures, breathtaking landscapes, and unforgettable experiences. This blog is my way of sharing my adventures, offering practical tips and honest insights, and inspiring you to embrace the world's magic. Expect captivating stories, stunning visuals, and tips to help you plan your own dream trips, whether you're seeking budget-friendly adventures or luxury escapes. Join me on this journey of discovery, and let's explore the world together!</p>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="section">
            <div class="container section-content">
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to collaborate, feel free to reach out!</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:vidhyavarshinin.23bir@kongu.edu">vidhyavarshinin.23bir@kongu.edu</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+8122753359">+91 81227 53359</a></li>
                </ul>
                <h3>Support Us</h3>
                <p>If you love our content and want to support us, consider making a donation or using our affiliate links:</p>
                <button onclick="window.location.href='https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID'">Donate</button>
                <p><a href="https://www.amazon.com/?tag=YOUR_AMAZON_ASSOCIATE_ID" target="_blank">Shop on Amazon and support us!</a></p>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 Adventures with Elsa. All rights reserved.</p>
        </div>
    </footer>

                       <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Booking</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Travel Booking</h1>
            <button onclick="togglePopup()">Book Now</button>
        </div>
    </header>

    <div id="signup-popup" class="popup">
        <div class="popup-content">
            <span class="popup-close" onclick="togglePopup()">&times;</span>
            <h2>Booking Details</h2>
            <form id="booking-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required>

                <label for="destination">Select Destination:</label>
                <select id="destination" name="destination" required>
                    <option value="Tokyo, Japan">Tokyo, Japan</option>
                    <option value="Bali, Indonesia">Bali, Indonesia</option>
                    <option value="New York City, USA">New York City, USA</option>
                    <option value="Paris, France">Paris, France</option>
                    <option value="Rio de Janeiro, Brazil">Rio de Janeiro, Brazil</option>
                    <option value="Venice, Italy">Venice, Italy</option>
                    <option value="London, UK">London, UK</option>
                    <option value="Sydney, Australia">Sydney, Australia</option>
                    <option value="Dubai, UAE">Dubai, UAE</option>
                </select>

                <label for="date">Date of Travel:</label>
                <input type="date" id="date" name="date" required>

                <label for="price">Price:</label>
                <input type="text" id="price" name="price" readonly value="$1000"> <!-- Example price -->

                <button type="submit">Book Now</button>
            </form>
        </div>
    </div>

    <footer>
        <div class="container">
            <p>&copy; 2024 Travel Booking. All rights reserved.</p>
        </div>
    </footer>

    <script src="scripts.js"></script>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script>
        // Initialize the map and set its view to the desired geographical coordinates and zoom level
        var map = L.map('mapid').setView([51.505, -0.09], 13);

        // Add a tile layer to the map (the background map layer)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add multiple markers with custom popups
        var locations = [
            { lat: 35.6762, lng: 139.6503, message: "Tokyo, Japan" },
            { lat: -8.3405, lng: 115.0919, message: "Bali, Indonesia" },
            { lat: 40.7128, lng: -74.0060, message: "New York City, USA" },
            { lat: 48.8566, lng: 2.3522, message: "Paris, France" },
            { lat: -22.9068, lng: -43.1729, message: "Rio de Janeiro, Brazil (Carnival)" },
            { lat: 45.4408, lng: 12.3155, message: "Venice, Italy" },
            { lat: 51.5074, lng: -0.1278, message: "London, UK" },
            { lat: -33.8688, lng: 151.2093, message: "Sydney, Australia" },
            { lat: 25.276987, lng: 55.296249, message: "Dubai, UAE" }
        ];

        locations.forEach(function(location) {
            L.marker([location.lat, location.lng]).addTo(map)
                .bindPopup(location.message)
                .openPopup();
        });

        // Add a click event listener to the map
        map.on('click', function(e) {
            alert("You clicked the map at " + e.latlng.toString());
        });

        // Popup toggle function
        function togglePopup() {
            var popup = document.getElementById('signup-popup');
            popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
        }

        // Function to show section
        function showSection(id) {
            document.querySelectorAll('.section').forEach(function(section) {
                section.style.display = section.id === id ? 'block' : 'none';
            });
        }
    </script>
</body>
</html>
