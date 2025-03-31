// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Change icon
  const icon = themeToggle.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Update service icons HTML (replace old icons)
document.querySelectorAll('.fa-twitter').forEach(icon => {
  icon.classList.replace('fa-twitter', 'fa-x-twitter');
});

// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Price Calculator
const followersRange = document.getElementById('followersRange');
const followersValue = document.getElementById('followersValue');
const totalPrice = document.getElementById('totalPrice');

followersRange.addEventListener('input', function() {
  const value = this.value;
  followersValue.textContent = value;
  
  // Price calculation (customize as needed)
  let price = 0;
  if (value <= 1000) {
    price = value * 0.5; // ₹0.5 per follower
  } else if (value <= 5000) {
    price = value * 0.4; // Bulk discount
  } else {
    price = value * 0.3; // Large order discount
  }
  
  totalPrice.textContent = Math.round(price);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
    
    // Close mobile menu
    if (window.innerWidth <= 768) {
      document.querySelector('nav').style.display = 'none';
    }
  });
});

// WhatsApp Button (optional)
const whatsappBtn = document.createElement('a');
whatsappBtn.href = 'https://wa.me/91YOURNUMBER';
whatsappBtn.className = 'whatsapp-btn';
whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Chat on WhatsApp';
document.body.appendChild(whatsappBtn);

// Add WhatsApp button styles
const style = document.createElement('style');
style.textContent = `
  .whatsapp-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #25D366;
    color: white;
    padding: 10px 15px;
    border-radius: 50px;
    text-decoration: none;
    display: flex;
    align-items: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }
  .whatsapp-btn i {
    margin-right: 8px;
    font-size: 20px;
  }
`;
document.head.appendChild(style);
