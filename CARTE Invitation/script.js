// JavaScript d'invitation d'anniversaire avec compatibilité maximale
(function() {
    'use strict';
    
    // Polyfill pour les navigateurs anciens
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    
    if (!Element.prototype.closest) {
        Element.prototype.closest = function(s) {
            var el = this;
            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }
    
    // Polyfill pour requestAnimationFrame
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.webkitRequestAnimationFrame || 
                                      window.mozRequestAnimationFrame || 
                                      window.oRequestAnimationFrame || 
                                      window.msRequestAnimationFrame ||
                                      function(callback) {
                                          return window.setTimeout(callback, 1000 / 60);
                                      };
    }
    
    // Variables globales
    var eventDate = new Date('2025-07-06T19:00:00');
    var canvas = null;
    var ctx = null;
    var fireworks = [];
    var countdownInterval = null;
    var isInitialized = false;
    
    // Fonction d'initialisation sécurisée
    function safeInit() {
        if (isInitialized) return;
        
        try {
            // Initialiser Feather Icons si disponible
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
            
            // Initialiser le canvas de feux d'artifice
            initFireworks();
            
            // Créer des étincelles
            createSparkles();
            
            // Démarrer le compte à rebours
            startCountdown();
            
            // Ajouter les événements
            addEventListeners();
            
            // Animations d'entrée
            addEntranceAnimations();
            
            // Effets de défilement
            addScrollEffects();
            
            // Effet tactile
            addTouchEffects();
            
            // Animations de portrait
            addPortraitAnimations();
            
            // Célébration initiale
            createInitialCelebration();
            
            // Étincelles de portrait
            startPortraitSparkles();
            
            // Optimisations de performance
            addPerformanceOptimizations();
            
            isInitialized = true;
            
        } catch (e) {
            console.warn('Erreur lors de l\'initialisation:', e);
        }
    }
    
    // Initialisation du canvas de feux d'artifice
    function initFireworks() {
        try {
            canvas = document.getElementById('fireworks-canvas');
            if (!canvas) return;
            
            ctx = canvas.getContext('2d');
            if (!ctx) return;
            
            resizeCanvas();
            if (window.addEventListener) {
                window.addEventListener('resize', resizeCanvas);
            } else if (window.attachEvent) {
                window.attachEvent('onresize', resizeCanvas);
            }
            
            startFireworksAnimation();
            
            // Créer des feux d'artifice périodiquement
            setInterval(createRandomFirework, 2000);
            
        } catch (e) {
            console.warn('Erreur lors de l\'initialisation des feux d\'artifice:', e);
        }
    }
    
    // Redimensionner le canvas
    function resizeCanvas() {
        if (!canvas) return;
        try {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        } catch (e) {
            console.warn('Erreur lors du redimensionnement du canvas:', e);
        }
    }
    
    // Classe Firework compatible avec les anciens navigateurs
    function Firework(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        this.createParticles();
    }
    
    Firework.prototype.createParticles = function() {
        var colors = ['#ffd700', '#ff1493', '#4a0e4e', '#e8b4a0', '#fff'];
        for (var i = 0; i < 15; i++) {
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
    };
    
    Firework.prototype.update = function() {
        for (var i = this.particles.length - 1; i >= 0; i--) {
            var particle = this.particles[i];
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.1; // gravité
            particle.life -= particle.decay;
            
            if (particle.life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    };
    
    Firework.prototype.draw = function() {
        if (!ctx) return;
        
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            ctx.save();
            ctx.globalAlpha = particle.life;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    };
    
    Firework.prototype.isDead = function() {
        return this.particles.length === 0;
    };
    
    // Créer un feu d'artifice aléatoire
    function createRandomFirework() {
        if (!canvas) return;
        try {
            var x = Math.random() * canvas.width;
            var y = Math.random() * canvas.height * 0.6;
            fireworks.push(new Firework(x, y));
        } catch (e) {
            console.warn('Erreur lors de la création d\'un feu d\'artifice:', e);
        }
    }
    
    // Animation des feux d'artifice
    function startFireworksAnimation() {
        if (!ctx) return;
        
        function animate() {
            try {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                for (var i = fireworks.length - 1; i >= 0; i--) {
                    var firework = fireworks[i];
                    firework.update();
                    firework.draw();
                    
                    if (firework.isDead()) {
                        fireworks.splice(i, 1);
                    }
                }
                
                requestAnimationFrame(animate);
            } catch (e) {
                console.warn('Erreur lors de l\'animation des feux d\'artifice:', e);
            }
        }
        
        animate();
    }
    
    // Créer des étincelles
    function createSparkles() {
        try {
            var sparkleContainer = document.querySelector('.sparkle-container');
            if (!sparkleContainer) return;
            
            for (var i = 0; i < 50; i++) {
                var sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 2 + 's';
                sparkleContainer.appendChild(sparkle);
            }
        } catch (e) {
            console.warn('Erreur lors de la création des étincelles:', e);
        }
    }
    
    // Démarrer le compte à rebours
    function startCountdown() {
        try {
            updateCountdown();
            countdownInterval = setInterval(updateCountdown, 1000);
        } catch (e) {
            console.warn('Erreur lors du démarrage du compte à rebours:', e);
        }
    }
    
    // Mettre à jour le compte à rebours
    function updateCountdown() {
        try {
            var now = new Date().getTime();
            var distance = eventDate.getTime() - now;
            var countdownElement = document.getElementById('countdown');
            
            if (!countdownElement) return;
            
            if (distance < 0) {
                countdownElement.innerHTML = 
                    '<div class="col-span-4 text-center">' +
                    '<p class="text-lg font-semibold text-burgundy">L\'événement a commencé!</p>' +
                    '</div>';
                return;
            }
            
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            var daysEl = document.getElementById('days');
            var hoursEl = document.getElementById('hours');
            var minutesEl = document.getElementById('minutes');
            var secondsEl = document.getElementById('seconds');
            
            if (daysEl) daysEl.textContent = padZero(days);
            if (hoursEl) hoursEl.textContent = padZero(hours);
            if (minutesEl) minutesEl.textContent = padZero(minutes);
            if (secondsEl) secondsEl.textContent = padZero(seconds);
            
        } catch (e) {
            console.warn('Erreur lors de la mise à jour du compte à rebours:', e);
        }
    }
    
    // Ajouter un zéro devant les nombres < 10
    function padZero(num) {
        return num < 10 ? '0' + num : num.toString();
    }
    
    // Ajouter les écouteurs d'événements
    function addEventListeners() {
        try {
            var whatsappBtn = document.getElementById('whatsapp-btn');
            
            if (whatsappBtn) {
                addClickListener(whatsappBtn, function() {
                    handleWhatsAppShare(this);
                });
            }
            
            // Gestion de la visibilité de la page
            if (document.addEventListener) {
                document.addEventListener('visibilitychange', handleVisibilityChange);
            } else if (document.attachEvent) {
                document.attachEvent('onvisibilitychange', handleVisibilityChange);
            }
            
        } catch (e) {
            console.warn('Erreur lors de l\'ajout des écouteurs d\'événements:', e);
        }
    }
    
    // Ajouter un écouteur de clic compatible
    function addClickListener(element, handler) {
        if (element.addEventListener) {
            element.addEventListener('click', handler);
        } else if (element.attachEvent) {
            element.attachEvent('onclick', handler);
        }
    }
    
    // Gérer le partage WhatsApp
    function handleWhatsAppShare(button) {
        try {
            // Animation de clic
            button.style.transform = 'scale(0.95)';
            setTimeout(function() {
                button.style.transform = 'scale(1)';
            }, 150);
            
            // Message WhatsApp
            var message = encodeURIComponent(
                '🎂 JOYEUX ANNIVERSAIRE sarah! 🎂\n\n' +
                '🎉 C\'est l\'anniversaire de Sophia Dubois! 🎉\n\n' +
                'Venez célébrer avec nous:\n\n' +
                '📅 Date de la fête: Mercredi 17 septembre 2025\n' +
                '🕖 Heure: 19h00\n' +
                '📍 Lieu: Tchimbamba Arrêt Colonel\n\n' +
                '🎊 Une soirée d\'anniversaire inoubliable vous attend! 🎊\n\n' +
                '✨ Créé par Valeque ✨'
            );
            
            var whatsappUrl = 'https://wa.me/?text=' + message;
            window.open(whatsappUrl, '_blank');
            
            // Feedback visuel
            var originalText = button.innerHTML;
            button.innerHTML = 
                '<i data-feather="check" class="w-6 h-6 inline mr-3"></i>' +
                'Invitation partagée! 🎉';
            
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
            
            // Feux d'artifice de célébration
            for (var i = 0; i < 5; i++) {
                setTimeout(function() {
                    createRandomFirework();
                }, i * 200);
            }
            
            setTimeout(function() {
                button.innerHTML = originalText;
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            }, 3000);
            
        } catch (e) {
            console.warn('Erreur lors du partage WhatsApp:', e);
        }
    }
    
    // Animations d'entrée
    function addEntranceAnimations() {
        try {
            var animateElements = document.querySelectorAll('#invitation-card > div > div');
            
            for (var i = 0; i < animateElements.length; i++) {
                var element = animateElements[i];
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.6s ease-out';
                
                (function(el, index) {
                    setTimeout(function() {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, 200 + (index * 100));
                })(element, i);
            }
        } catch (e) {
            console.warn('Erreur lors des animations d\'entrée:', e);
        }
    }
    
    // Effets de défilement
    function addScrollEffects() {
        try {
            var lastScrollTop = 0;
            var card = document.getElementById('invitation-card');
            
            if (!card) return;
            
            function handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop) {
                    card.style.transform = 'translateY(-5px) scale(0.98)';
                } else {
                    card.style.transform = 'translateY(0) scale(1)';
                }
                
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            }
            
            if (window.addEventListener) {
                window.addEventListener('scroll', handleScroll);
            } else if (window.attachEvent) {
                window.attachEvent('onscroll', handleScroll);
            }
            
        } catch (e) {
            console.warn('Erreur lors des effets de défilement:', e);
        }
    }
    
    // Effets tactiles
    function addTouchEffects() {
        try {
            var touchElements = document.querySelectorAll('button');
            
            for (var i = 0; i < touchElements.length; i++) {
                var element = touchElements[i];
                
                if (element.addEventListener) {
                    element.addEventListener('touchstart', function() {
                        this.style.transform = 'scale(0.95)';
                    });
                    
                    element.addEventListener('touchend', function() {
                        var self = this;
                        setTimeout(function() {
                            self.style.transform = 'scale(1)';
                        }, 150);
                    });
                }
            }
        } catch (e) {
            console.warn('Erreur lors des effets tactiles:', e);
        }
    }
    
    // Animations de portrait
    function addPortraitAnimations() {
        try {
            setTimeout(function() {
                var portraitContainer = document.getElementById('portrait-container');
                if (portraitContainer) {
                    if (portraitContainer.classList) {
                        portraitContainer.classList.add('animate-portrait-reveal');
                        portraitContainer.classList.add('magical-glow');
                    } else {
                        portraitContainer.className += ' animate-portrait-reveal magical-glow';
                    }
                }
            }, 500);
        } catch (e) {
            console.warn('Erreur lors des animations de portrait:', e);
        }
    }
    
    // Célébration initiale
    function createInitialCelebration() {
        try {
            setTimeout(function() {
                for (var i = 0; i < 12; i++) {
                    setTimeout(function() {
                        createRandomFirework();
                    }, i * 200);
                }
            }, 1000);
        } catch (e) {
            console.warn('Erreur lors de la célébration initiale:', e);
        }
    }
    
    // Étincelles de portrait
    function startPortraitSparkles() {
        try {
            setInterval(addPortraitSparkles, 3000);
        } catch (e) {
            console.warn('Erreur lors du démarrage des étincelles de portrait:', e);
        }
    }
    
    // Ajouter des étincelles au portrait
    function addPortraitSparkles() {
        try {
            var portraitContainer = document.getElementById('portrait-container');
            if (!portraitContainer) return;
            
            var sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.fontSize = '20px';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animation = 'sparkle 2s ease-out forwards';
            portraitContainer.appendChild(sparkle);
            
            setTimeout(function() {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 2000);
        } catch (e) {
            console.warn('Erreur lors de l\'ajout d\'étincelles au portrait:', e);
        }
    }
    
    // Gestion de la visibilité de la page
    function handleVisibilityChange() {
        try {
            if (document.hidden) {
                if (countdownInterval) {
                    clearInterval(countdownInterval);
                }
            } else {
                updateCountdown();
                countdownInterval = setInterval(updateCountdown, 1000);
            }
        } catch (e) {
            console.warn('Erreur lors de la gestion de la visibilité:', e);
        }
    }
    
    // Optimisations de performance
    function addPerformanceOptimizations() {
        try {
            // Effet de survol magique sur la carte
            var invitationCard = document.getElementById('invitation-card');
            if (invitationCard) {
                if (invitationCard.addEventListener) {
                    invitationCard.addEventListener('mouseenter', function() {
                        for (var i = 0; i < 3; i++) {
                            setTimeout(function() {
                                createRandomFirework();
                            }, i * 100);
                        }
                    });
                }
            }
            
            // Gestion des erreurs globales
            if (window.addEventListener) {
                window.addEventListener('error', function(e) {
                    console.warn('Erreur d\'application:', e.error);
                    if (e.error && e.error.message && e.error.message.indexOf('countdown') !== -1) {
                        updateCountdown();
                    }
                });
            }
            
            // Observer d'intersection si disponible
            if (typeof IntersectionObserver !== 'undefined') {
                var observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };
                
                var observer = new IntersectionObserver(function(entries) {
                    for (var i = 0; i < entries.length; i++) {
                        var entry = entries[i];
                        if (entry.isIntersecting) {
                            if (entry.target.classList) {
                                entry.target.classList.add('animate-fade-in');
                            } else {
                                entry.target.className += ' animate-fade-in';
                            }
                        }
                    }
                }, observerOptions);
                
                var cardElements = document.querySelectorAll('#invitation-card > div');
                for (var i = 0; i < cardElements.length; i++) {
                    observer.observe(cardElements[i]);
                }
            }
            
        } catch (e) {
            console.warn('Erreur lors des optimisations de performance:', e);
        }
    }
    
    // Fonction utilitaire pour formater le temps
    function formatTime(time) {
        return time.toString().length < 2 ? '0' + time : time.toString();
    }
    
    // Créer un effet de vague
    function createRippleEffect(event) {
        try {
            var button = event.currentTarget;
            var ripple = document.createElement('span');
            var rect = button.getBoundingClientRect();
            var size = Math.max(rect.width, rect.height);
            var x = event.clientX - rect.left - size / 2;
            var y = event.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple';
            
            button.appendChild(ripple);
            
            setTimeout(function() {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        } catch (e) {
            console.warn('Erreur lors de l\'effet de vague:', e);
        }
    }
    
    // Ajouter l'effet de vague aux boutons
    function addRippleEffects() {
        try {
            var buttons = document.querySelectorAll('button');
            for (var i = 0; i < buttons.length; i++) {
                var button = buttons[i];
                if (button.addEventListener) {
                    button.addEventListener('click', createRippleEffect);
                }
            }
        } catch (e) {
            console.warn('Erreur lors de l\'ajout des effets de vague:', e);
        }
    }
    
    // Initialisation principale
    function init() {
        try {
            // Attendre que le DOM soit prêt
            if (document.readyState === 'loading') {
                if (document.addEventListener) {
                    document.addEventListener('DOMContentLoaded', function() {
                        safeInit();
                        addRippleEffects();
                    });
                } else if (document.attachEvent) {
                    document.attachEvent('onreadystatechange', function() {
                        if (document.readyState === 'complete') {
                            safeInit();
                            addRippleEffects();
                        }
                    });
                }
            } else {
                safeInit();
                addRippleEffects();
            }
        } catch (e) {
            console.warn('Erreur lors de l\'initialisation principale:', e);
        }
    }
    
    // Démarrer l'initialisation
    init();
    
    // Exposer certaines fonctions globalement pour le débogage
    window.birthdayInvitation = {
        createFirework: createRandomFirework,
        updateCountdown: updateCountdown,
        formatTime: formatTime
    };
    
})();