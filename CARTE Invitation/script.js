// Birthday Invitation JavaScript with Fireworks
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    feather.replace();

    // Event date and time
    const eventDate = new Date('2025-07-06T19:00:00');

    // Initialize fireworks canvas
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Firework class
    class Firework {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.particles = [];
            this.createParticles();
        }

        createParticles() {
            const colors = ['#ffd700', '#ff1493', '#4a0e4e', '#e8b4a0', '#fff'];
            for (let i = 0; i < 15; i++) {
                this.particles.push({
                    x: this.x,
                    y: this.y,
                    vx: (Math.random() - 0.5) * 8,
                    vy: (Math.random() - 0.5) * 8,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    life: 1,
                    decay: Math.random() * 0.02 + 0.01
                });
            }
        }

        update() {
            this.particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.vy += 0.1; // gravity
                particle.life -= particle.decay;
            });

            this.particles = this.particles.filter(particle => particle.life > 0);
        }

        draw() {
            this.particles.forEach(particle => {
                ctx.save();
                ctx.globalAlpha = particle.life;
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });
        }

        isDead() {
            return this.particles.length === 0;
        }
    }

    // Fireworks array
    let fireworks = [];

    // Create fireworks periodically
    function createRandomFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6;
        fireworks.push(new Firework(x, y));
    }

    // Animation loop for fireworks
    function animateFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw();

            if (firework.isDead()) {
                fireworks.splice(index, 1);
            }
        });

        requestAnimationFrame(animateFireworks);
    }

    // Start fireworks animation
    animateFireworks();

    // Create fireworks every 2 seconds
    setInterval(createRandomFirework, 2000);

    // Create sparkles
    function createSparkles() {
        const sparkleContainer = document.querySelector('.sparkle-container');

        for (let i = 0; i < 50; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparkleContainer.appendChild(sparkle);
        }
    }

    createSparkles();

    // Countdown Timer
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate.getTime() - now;

        if (distance < 0) {
            // Event has passed
            document.getElementById('countdown').innerHTML = `
                <div class="col-span-4 text-center">
                    <p class="text-lg font-semibold text-burgundy">L'événement a commencé!</p>
                </div>
            `;
            return;
        }

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update countdown display
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Update countdown every second
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);



    // WhatsApp Share Button
    const whatsappBtn = document.getElementById('whatsapp-btn');

    whatsappBtn.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);

        // Create WhatsApp birthday message
        const message = encodeURIComponent(
            `🎂 JOYEUX ANNIVERSAIRE sarah! 🎂\n\n` +
            `🎉 C'est l'anniversaire de Sophia Dubois! 🎉\n\n` +
            `Venez célébrer avec nous:\n\n` +
            `📅 Date de la fête: Mercredi 17 septembre 2025\n` +
            `🕖 Heure: 19h00\n` +
            `📍 Lieu: Tchimbamba Arrêt Colonel\n\n` +
            `🎊 Une soirée d'anniversaire inoubliable vous attend! 🎊\n\n` +
            `✨ Créé par Valeque ✨`
        );

        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/?text=${message}`;
        window.open(whatsappUrl, '_blank');

        // Add temporary feedback and extra fireworks
        const originalText = whatsappBtn.innerHTML;
        whatsappBtn.innerHTML = `
            <i data-feather="check" class="w-6 h-6 inline mr-3"></i>
            Invitation partagée! 🎉
        `;
        feather.replace();

        // Create celebration fireworks
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height * 0.5;
                fireworks.push(new Firework(x, y));
            }, i * 200);
        }

        setTimeout(() => {
            whatsappBtn.innerHTML = originalText;
            feather.replace();
        }, 3000);
    });

    // Add entrance animation to elements
    const animateElements = document.querySelectorAll('#invitation-card > div > div');
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });

    // Add scroll effects for mobile
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const card = document.getElementById('invitation-card');

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            card.style.transform = 'translateY(-5px) scale(0.98)';
        } else {
            // Scrolling up
            card.style.transform = 'translateY(0) scale(1)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Add touch feedback for mobile
    const touchElements = document.querySelectorAll('button');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });

        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Enhanced portrait animations and effects
    setTimeout(() => {
        const portraitContainer = document.getElementById('portrait-container');
        if (portraitContainer) {
            portraitContainer.classList.add('animate-portrait-reveal');
            portraitContainer.classList.add('magical-glow');
        }
    }, 500);

    // Create spectacular celebration burst on page load
    setTimeout(() => {
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height * 0.6;
                fireworks.push(new Firework(x, y));
            }, i * 200);
        }
    }, 1000);

    // Add magical sparkle effect to portrait
    function addPortraitSparkles() {
        const portraitContainer = document.getElementById('portrait-container');
        if (portraitContainer) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.fontSize = '20px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animation = 'sparkle 2s ease-out forwards';
            portraitContainer.appendChild(sparkle);

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 2000);
        }
    }

    // Create portrait sparkles every 3 seconds
    setInterval(addPortraitSparkles, 3000);

    // Add magical hover effect to card
    const invitationCard = document.getElementById('invitation-card');
    if (invitationCard) {
        invitationCard.addEventListener('mouseenter', () => {
            // Create extra fireworks on hover
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height * 0.5;
                    fireworks.push(new Firework(x, y));
                }, i * 100);
            }
        });
    }

    // Performance optimization - pause countdown when tab is not visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            clearInterval(countdownInterval);
        } else {
            updateCountdown();
            setInterval(updateCountdown, 1000);
        }
    });

    // Add visual feedback for loading states
    const addLoadingState = (button) => {
        const originalContent = button.innerHTML;
        button.innerHTML = `
            <div class="flex items-center justify-center">
                <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Chargement...
            </div>
        `;
        button.disabled = true;

        return () => {
            button.innerHTML = originalContent;
            button.disabled = false;
            feather.replace();
        };
    };

    // Enhanced error handling
    window.addEventListener('error', function(e) {
        console.error('Application error:', e.error);
        // Graceful degradation - ensure countdown still works
        if (e.error.message.includes('countdown')) {
            updateCountdown();
        }
    });

    // Initialize intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe card elements for scroll animations
    document.querySelectorAll('#invitation-card > div').forEach(el => {
        observer.observe(el);
    });
});

// Utility functions
function formatTime(time) {
    return time.toString().padStart(2, '0');
}

function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });
});