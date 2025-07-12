<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invitation Anniversaire - Sophia Dubois</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes:wght@400&family=Outfit:wght@200;300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Feather Icons -->
    <script src="https://unpkg.com/feather-icons"></script>
    
    <!-- Custom CSS -->
    <style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes glow {
            0%, 100% { text-shadow: 0 0 10px rgba(255, 215, 0, 0.8); }
            50% { text-shadow: 0 0 20px rgba(255, 215, 0, 1), 0 0 30px rgba(255, 20, 147, 0.8); }
        }
        
        .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 2s infinite ease-in-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        
        .gradient-bg {
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .sparkle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            animation: sparkle 3s infinite ease-in-out;
        }
    </style>
    
    <!-- Tailwind Custom Config -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'great-vibes': ['Great Vibes', 'cursive'],
                        'dancing': ['Dancing Script', 'cursive'],
                        'playfair': ['Playfair Display', 'serif'],
                        'outfit': ['Outfit', 'sans-serif']
                    },
                    colors: {
                        'rose-gold': '#e8b4a0',
                        'champagne': '#f7e7ce',
                        'burgundy': '#722f37',
                        'cream': '#faf8f5',
                        'gold': '#ffd700',
                        'deep-purple': '#4a0e4e',
                        'hot-pink': '#ff1493'
                    }
                }
            }
        }
    </script>
</head>
<body class="min-h-screen gradient-bg font-outfit overflow-x-hidden">
    <!-- Sparkles Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <div id="sparkle-container"></div>
    </div>

    <!-- Main Container -->
    <div class="min-h-screen py-4 px-4 relative z-20">
        <div class="max-w-2xl mx-auto">
            
            <!-- Portrait Section -->
            <div class="text-center mb-8 animate-fadeInUp">
                <div class="relative inline-block">
                    <div class="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-4 border-gold shadow-2xl animate-float">
                        <img src="sophia-new.jpg" 
                             alt="Sophia Dubois" 
                             class="w-full h-full object-cover"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTQwIiByPSI4MCIgZmlsbD0iIzgwNTMzMSIvPjxjaXJjbGUgY3g9IjE3MCIgY3k9IjEyMCIgcj0iMTUiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIyMzAiIGN5PSIxMjAiIHI9IjE1IiBmaWxsPSIjRkZGIi8+PGNpcmNsZSBjeD0iMTcwIiBjeT0iMTIwIiByPSI2IiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iMjMwIiBjeT0iMTIwIiByPSI2IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTE1MCA4MFEyMDAgNjAgMjUwIDgwUTI3MCAyMDAgMjUwIDI1MFEyMDAgMjkwIDE1MCAyNTBRMTMwIDIwMCAxNTAgODBaIiBmaWxsPSIjMDAwIi8+PGVsbGlwc2UgY3g9IjIwMCIgY3k9IjE3MCIgcng9IjMwIiByeT0iMTUiIGZpbGw9IiNEQzI2MjYiLz48ZWxsaXBzZSBjeD0iMTUwIiBjeT0iMTQwIiByeD0iMjAiIHJ5PSIxNSIgZmlsbD0iI0ZGNjlCNCIvPjxlbGxpcHNlIGN4PSIyNTAiIGN5PSIxNDAiIHJ4PSIyMCIgcnk9IjE1IiBmaWxsPSIjRkY2OUI0Ii8+PGVsbGlwc2UgY3g9IjIwMCIgY3k9IjE1MCIgcng9IjEwIiByeT0iNSIgZmlsbD0iIzAwMCIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNzIyZjM3Ii8+PHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNmZjE0OTMiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmQ3MDAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4='">
                    </div>
                    <!-- Decorative elements around photo -->
                    <div class="absolute -top-4 -right-4 text-4xl animate-bounce">🎉</div>
                    <div class="absolute -bottom-4 -left-4 text-4xl animate-sparkle">✨</div>
                    <div class="absolute top-0 -left-8 text-3xl animate-float">🎂</div>
                    <div class="absolute -top-6 right-0 text-3xl animate-sparkle">🌟</div>
                </div>
            </div>

            <!-- Main Card -->
            <div class="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/30 animate-fadeInUp" style="animation-delay: 0.3s;">
                
                <!-- Invitation Message -->
                <div class="p-8 text-center bg-gradient-to-br from-hot-pink/10 to-gold/10">
                    <h1 class="font-dancing text-4xl sm:text-5xl text-deep-purple mb-4 animate-glow">
                        Je vous invite à mon anniversaire !
                    </h1>
                    <p class="text-lg text-burgundy font-medium">
                        Venez célébrer cette journée spéciale avec moi
                    </p>
                </div>

                <!-- Event Details -->
                <div class="p-6 space-y-4">
                    <!-- Date -->
                    <div class="flex items-center p-4 bg-gradient-to-r from-gold/20 to-hot-pink/20 rounded-xl">
                        <div class="w-12 h-12 bg-gradient-to-br from-gold to-hot-pink rounded-full flex items-center justify-center mr-4">
                            <i data-feather="calendar" class="w-6 h-6 text-white"></i>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-burgundy">📅 Date</p>
                            <p class="text-lg font-bold text-deep-purple">Samedi 6 juillet 2025</p>
                        </div>
                    </div>

                    <!-- Time -->
                    <div class="flex items-center p-4 bg-gradient-to-r from-hot-pink/20 to-deep-purple/20 rounded-xl">
                        <div class="w-12 h-12 bg-gradient-to-br from-hot-pink to-deep-purple rounded-full flex items-center justify-center mr-4">
                            <i data-feather="clock" class="w-6 h-6 text-white"></i>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-burgundy">🕖 Heure</p>
                            <p class="text-lg font-bold text-deep-purple">19h00</p>
                        </div>
                    </div>

                    <!-- Location -->
                    <div class="flex items-center p-4 bg-gradient-to-r from-deep-purple/20 to-burgundy/20 rounded-xl">
                        <div class="w-12 h-12 bg-gradient-to-br from-deep-purple to-burgundy rounded-full flex items-center justify-center mr-4">
                            <i data-feather="map-pin" class="w-6 h-6 text-white"></i>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-burgundy">📍 Lieu</p>
                            <p class="text-lg font-bold text-deep-purple">123 Avenue de la Fête</p>
                        </div>
                    </div>

                    <!-- Contact -->
                    <div class="flex items-center p-4 bg-gradient-to-r from-burgundy/20 to-gold/20 rounded-xl">
                        <div class="w-12 h-12 bg-gradient-to-br from-burgundy to-gold rounded-full flex items-center justify-center mr-4">
                            <i data-feather="phone" class="w-6 h-6 text-white"></i>
                        </div>
                        <div>
                            <p class="text-sm font-semibold text-burgundy">📞 Pour plus d'informations</p>
                            <p class="text-lg font-bold text-deep-purple">+33 6 12 34 56 78</p>
                        </div>
                    </div>
                </div>

                <!-- Countdown -->
                <div class="p-6 bg-gradient-to-br from-gold/10 via-hot-pink/10 to-deep-purple/10">
                    <h3 class="text-center text-deep-purple font-bold text-xl mb-4">
                        🎊 Compte à rebours 🎊
                    </h3>
                    <div id="countdown" class="grid grid-cols-4 gap-3 text-center">
                        <div class="bg-gradient-to-br from-gold to-hot-pink rounded-xl p-3 shadow-lg">
                            <div id="days" class="text-2xl font-bold text-white">00</div>
                            <div class="text-xs text-white/90 font-semibold">Jours</div>
                        </div>
                        <div class="bg-gradient-to-br from-hot-pink to-deep-purple rounded-xl p-3 shadow-lg">
                            <div id="hours" class="text-2xl font-bold text-white">00</div>
                            <div class="text-xs text-white/90 font-semibold">Heures</div>
                        </div>
                        <div class="bg-gradient-to-br from-deep-purple to-burgundy rounded-xl p-3 shadow-lg">
                            <div id="minutes" class="text-2xl font-bold text-white">00</div>
                            <div class="text-xs text-white/90 font-semibold">Minutes</div>
                        </div>
                        <div class="bg-gradient-to-br from-burgundy to-gold rounded-xl p-3 shadow-lg">
                            <div id="seconds" class="text-2xl font-bold text-white">00</div>
                            <div class="text-xs text-white/90 font-semibold">Secondes</div>
                        </div>
                    </div>
                </div>

                <!-- Share Button -->
                <div class="p-6 bg-gradient-to-r from-green-50 to-green-100">
                    <button id="whatsapp-btn" class="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95">
                        <i data-feather="share-2" class="w-6 h-6 inline mr-2"></i>
                        Partager l'invitation sur WhatsApp
                    </button>
                </div>

                <!-- Footer -->
                <div class="p-4 bg-gradient-to-r from-deep-purple via-burgundy to-hot-pink text-center">
                    <p class="text-gold font-bold animate-glow">
                        ✨ Créé avec amour par Valeque ✨
                    </p>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Initialize Feather Icons
        feather.replace();
        
        // Event date and time
        const eventDate = new Date('2025-07-06T19:00:00');
        
        // Create sparkles
        function createSparkles() {
            const container = document.getElementById('sparkle-container');
            for (let i = 0; i < 30; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 3 + 's';
                container.appendChild(sparkle);
            }
        }
        
        createSparkles();
        
        // Countdown Timer
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = eventDate.getTime() - now;
            
            if (distance < 0) {
                document.getElementById('countdown').innerHTML = `
                    <div class="col-span-4 text-center">
                        <p class="text-lg font-semibold text-deep-purple">C'est l'heure de faire la fête!</p>
                    </div>
                `;
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
        
        // WhatsApp Share
        document.getElementById('whatsapp-btn').addEventListener('click', function() {
            const invitationLink = window.location.href;
            const message = encodeURIComponent(
                `🎂 Invitation à mon anniversaire! 🎂\n\n` +
                `Je vous invite à célébrer mon anniversaire avec moi:\n\n` +
                `📅 Date: Samedi 6 juillet 2025\n` +
                `🕖 Heure: 19h00\n` +
                `📍 Lieu: 123 Avenue de la Fête\n` +
                `📞 Info: +33 6 12 34 56 78\n\n` +
                `Lien de l'invitation: ${invitationLink}\n\n` +
                `J'espère vous voir nombreux! 🎉\n\n` +
                `✨ Créé par Valeque ✨`
            );
            
            const whatsappUrl = `https://wa.me/?text=${message}`;
            window.open(whatsappUrl, '_blank');
            
            // Feedback
            const originalText = this.innerHTML;
            this.innerHTML = `
                <i data-feather="check" class="w-6 h-6 inline mr-2"></i>
                Invitation partagée! 🎉
            `;
            feather.replace();
            
            setTimeout(() => {
                this.innerHTML = originalText;
                feather.replace();
            }, 3000);
        });
    </script>
</body>
</html>