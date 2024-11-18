const phones = [
    {
        name: "iPhone 16 Pro",
        brand: "Apple",
        model: "16 Pro",
        price: "$999",
        image: "download.jpeg",
        description: "The latest Apple iPhone with advanced A16 chip, ProMotion display, and triple-camera system."
    },
    {
        name: "Samsung Galaxy S24",
        brand: "Samsung",
        model: "S24",
        price: "$899",
        image: "samsung s24.jpeg",
        description: "A high-end Samsung Galaxy device featuring a 120Hz display, Snapdragon 8 Gen 2, and amazing camera."
    },
    {
        name: "Google Pixel 9",
        brand: "Google",
        model: "Pixel 9",
        price: "$799",
        image: "google pixel 9.jpeg",
        description: "The latest Google phone with excellent camera quality and exclusive Android features."
    },
    {
        name: "OnePlus 12",
        brand: "OnePlus",
        model: "12",
        price: "$699",
        image: "one pluse 12.jpeg",
        description: "A powerful OnePlus flagship with a sleek design, fast performance, and incredible display."
    },
    {
        name: "Xiaomi 14",
        brand: "Xiaomi",
        model: "14",
        price: "$649",
        image: "xiaomi 14.jpeg",
        description: "Xiaomi’s top-end device with a Snapdragon processor, impressive display, and high-res camera."
    },
    {
        name: "Sony Xperia xz3",
        brand: "Sony",
        model: "xz3",
        price: "$799",
        image: "sony xperia xz3.jpeg",
        description: "Sony's compact powerhouse with exceptional camera capabilities and high-resolution audio support."
    },
    {
        name: "Huawei mate xt",
        brand: "Huawei",
        model: "mate xt",
        price: "$899",
        image: "huawei mate xt.jpeg",
        description: "The Huawei P50 Pro offers superb photography with Leica optics and cutting-edge processing power."
    },
    {
        name: "Nokia g42 ",
        brand: "Nokia",
        model: "g42",
        price: "$499",
        image: "nokia g42.jpeg",
        description: "Nokia's durable and eco-friendly smartphone with solid performance and clean Android experience."
    },
    {
        name: "Oppo reno 11",
        brand: "Oppo",
        model: "reno 11",
        price: "$849",
        image: "oppo.jpeg",
        description: "Oppo’s flagship device with Hasselblad camera optimization and an impressive AMOLED display."
    },
    {
        name: "Asus ROG Phone 8",
        brand: "Asus",
        model: "ROG Phone 8",
        price: "$999",
        image: "asus rog 8.jpeg",
        description: "The ultimate gaming phone with a high refresh rate display, RGB lighting, and exceptional cooling."
    },
    {
        name: "Realme narzo 70 pro",
        brand: "Realme",
        model: "narzo 70 pro",
        price: "$499",
        image: "realme narzo 70 pro.jpeg",
        description: "A high-performance phone from Realme with fast charging and smooth display experience."
    },
    {
        name: "Vivo X80",
        brand: "Vivo",
        model: "X80",
        price: "$799",
        image: "vivo x80.jpeg",
        description: "Flagship Vivo with advanced imaging technology and Zeiss optics for top-tier photography."
    },
    {
        name: "Motorola Edge 40 Pro",
        brand: "Motorola",
        model: "Edge 40 Pro",
        price: "$749",
        image: "motorola edge 40 pro.jpeg",
        description: "Motorola’s high-performance device with a curved OLED display and fast charging capabilities."
    },
    {
        name: "Sony Xperia 10 IV",
        brand: "Sony",
        model: "10 IV",
        price: "$449",
        image: "sony xperia 10 IV.jpeg",
        description: "Sony’s mid-range option with excellent build quality and a wide aspect ratio for media."
    },
    {
        name: "Samsung Galaxy Z Flip4",
        brand: "Samsung",
        model: "Z Flip4",
        price: "$999",
        image: "samsung flip.jpeg",
        description: "Innovative foldable device with a stylish design and compact form factor."
    },
    {
        name: "Google Pixel fold 9",
        brand: "Google",
        model: "Pixel fold 9",
        price: "$899",
        image: "google pixel 9.jpeg",
        description: "High-end Pixel phone with exceptional camera capabilities and a sleek design."
    },
    // Add any more phone entries here...
];

// Function to display all phones
function displayPhones(phoneList) {
    const phoneListContainer = document.getElementById("phoneList");
    phoneListContainer.innerHTML = "";  // Clear existing content

    phoneList.forEach(phone => {
        const phoneCard = document.createElement("div");
        phoneCard.classList.add("phone-card");

        phoneCard.innerHTML = `
            <img src="${phone.image}" alt="${phone.name}">
            <h2>${phone.name}</h2>
            <p><strong>Brand:</strong> ${phone.brand}</p>
            <p><strong>Model:</strong> ${phone.model}</p>
            <p class="price"><strong>Price:</strong> ${phone.price}</p>
            <p>${phone.description}</p>
            <button class="show-more-btn" onclick="toggleDetails(event)">Show More</button>
            <div class="additional-info" style="display:none;">
                <p><strong>Battery:</strong> 4000mAh</p>
                <p><strong>Display:</strong> 6.1 inches OLED</p>
                <p><strong>Camera:</strong> 12MP + 12MP + 12MP triple camera</p>
            </div>
        `;

        phoneListContainer.appendChild(phoneCard);
    });
}

// Call function to display phones on page load
displayPhones(phones);
