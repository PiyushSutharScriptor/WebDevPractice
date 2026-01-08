

console.log("Piyush") //check in console

// Smooth form submission with animation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = document.querySelector('.login-button');
    const originalText = button.textContent;
    
    // Button loading animation
    button.textContent = 'Connexion...';
    button.style.background = 'linear-gradient(135deg, #C19660, #B8875A)';
    button.disabled = true;
    
    // Simulate login process
    setTimeout(() => {
        button.textContent = '✓ Connecté';
        button.style.background = 'linear-gradient(135deg, #90EE90, #7FDD7F)';
        
        // Reset after demonstration
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'linear-gradient(135deg, #EDBD82, #D4A574)';
            button.disabled = false;
        }, 2000);
    }, 1500);
});

// Forgot password link interaction
document.getElementById('forgotLink').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create a temporary message
    const message = document.createElement('div');
    message.textContent = 'Fonctionnalité de démonstration';
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #EDBD82, #D4A574);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        font-size: 0.9rem;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
});

// Add slide animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Enhanced input focus effects
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
        this.parentElement.style.transition = 'transform 0.3s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});