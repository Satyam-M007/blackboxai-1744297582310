// Particle animation
function createParticle() {
    const colors = ['#ff00ff', '#00ffff', '#ffff00'];
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 5 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 10 + 5;
    
    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.boxShadow = `0 0 ${size}px ${color}`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${animationDuration}s`;
    
    // Add to container
    const container = document.getElementById('particles-container');
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, animationDuration * 1000);
}

// Create particles periodically
setInterval(createParticle, 300);

// Set the target date (2 days from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2);
targetDate.setHours(0, 0, 0, 0);

// Update countdown timer
function updateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
        // Birthday has arrived!
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        // Show celebration message
        document.querySelector('.happy-birthday').textContent = 'Happy Birthday!';
        return;
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Audio controls
const audioElement = document.getElementById('birthdaySong');
const playButton = document.getElementById('playButton');
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        audioElement.pause();
        playButton.textContent = 'Play Birthday Song';
        playButton.classList.remove('neon-bg-cyan');
    } else {
        audioElement.play();
        playButton.textContent = 'Pause Song';
        playButton.classList.add('neon-bg-cyan');
    }
    isPlaying = !isPlaying;
});

// Handle audio errors
audioElement.addEventListener('error', () => {
    playButton.textContent = 'Audio Unavailable';
    playButton.disabled = true;
    playButton.classList.add('opacity-50');
});
