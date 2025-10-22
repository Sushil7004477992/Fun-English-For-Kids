// English Learning Application for Children
class EnglishLearningApp {
    constructor() {
        this.currentTopic = null;
        this.currentIndex = 0;
        this.topics = {
            alphabets: {
                title: "Alphabets A-Z",
                icon: "🔤",
                items: [
                    { visual: "🍎", text: "A", description: "A for Apple" },
                    { visual: "🐻", text: "B", description: "B for Bear" },
                    { visual: "🐱", text: "C", description: "C for Cat" },
                    { visual: "🐕", text: "D", description: "D for Dog" },
                    { visual: "🥚", text: "E", description: "E for Egg" },
                    { visual: "🐟", text: "F", description: "F for Fish" },
                    { visual: "🦒", text: "G", description: "G for Giraffe" },
                    { visual: "🏠", text: "H", description: "H for House" },
                    { visual: "🍦", text: "I", description: "I for Ice Cream" },
                    { visual: "🪁", text: "J", description: "J for Kite" },
                    { visual: "👑", text: "K", description: "K for King" },
                    { visual: "🦁", text: "L", description: "L for Lion" },
                    { visual: "🐒", text: "M", description: "M for Monkey" },
                    { visual: "🌙", text: "N", description: "N for Night" },
                    { visual: "🐙", text: "O", description: "O for Octopus" },
                    { visual: "🐷", text: "P", description: "P for Pig" },
                    { visual: "👸", text: "Q", description: "Q for Queen" },
                    { visual: "🐰", text: "R", description: "R for Rabbit" },
                    { visual: "⭐", text: "S", description: "S for Star" },
                    { visual: "🌳", text: "T", description: "T for Tree" },
                    { visual: "☂️", text: "U", description: "U for Umbrella" },
                    { visual: "🚐", text: "V", description: "V for Van" },
                    { visual: "🐋", text: "W", description: "W for Whale" },
                    { visual: "❌", text: "X", description: "X for X-ray" },
                    { visual: "🪀", text: "Y", description: "Y for Yo-yo" },
                    { visual: "🦓", text: "Z", description: "Z for Zebra" }
                ]
            },
            weekdays: {
                title: "Days of the Week",
                icon: "📅",
                items: [
                    { visual: "🌅", text: "Monday", description: "The first day of the week" },
                    { visual: "🌤️", text: "Tuesday", description: "The second day of the week" },
                    { visual: "☀️", text: "Wednesday", description: "The middle of the week" },
                    { visual: "🌤️", text: "Thursday", description: "Almost Friday!" },
                    { visual: "🎉", text: "Friday", description: "The last day of school" },
                    { visual: "🎪", text: "Saturday", description: "Fun weekend day" },
                    { visual: "⛪", text: "Sunday", description: "Family day" }
                ]
            },
            months: {
                title: "Months of the Year",
                icon: "📆",
                items: [
                    { visual: "❄️", text: "January", description: "The first month of the year" },
                    { visual: "💝", text: "February", description: "The month of love" },
                    { visual: "🌱", text: "March", description: "Spring begins" },
                    { visual: "🌸", text: "April", description: "April showers bring May flowers" },
                    { visual: "🌺", text: "May", description: "Beautiful spring month" },
                    { visual: "🌞", text: "June", description: "Summer begins" },
                    { visual: "🏖️", text: "July", description: "Hot summer month" },
                    { visual: "🏊", text: "August", description: "Vacation time" },
                    { visual: "🍎", text: "September", description: "Back to school" },
                    { visual: "🎃", text: "October", description: "Halloween month" },
                    { visual: "🦃", text: "November", description: "Thanksgiving month" },
                    { visual: "🎄", text: "December", description: "Christmas month" }
                ]
            },
            animals: {
                title: "Animals",
                icon: "🐾",
                items: [
                    { visual: "🐶", text: "Dog", description: "A friendly pet animal" },
                    { visual: "🐱", text: "Cat", description: "A soft furry pet" },
                    { visual: "🐰", text: "Rabbit", description: "A hopping animal with long ears" },
                    { visual: "🐻", text: "Bear", description: "A big furry animal" },
                    { visual: "🦁", text: "Lion", description: "The king of the jungle" },
                    { visual: "🐯", text: "Tiger", description: "A striped big cat" },
                    { visual: "🐘", text: "Elephant", description: "A very big animal with a trunk" },
                    { visual: "🦒", text: "Giraffe", description: "A tall animal with a long neck" },
                    { visual: "🐧", text: "Penguin", description: "A bird that cannot fly" },
                    { visual: "🐒", text: "Monkey", description: "A playful animal" },
                    { visual: "🐎", text: "Horse", description: "A strong runnig animal" },
                    { visual: "🐄", text: "Cow", description: "A gentle farm animal" },
                    { visual: "🦌", text: "Deer", description: "A gentle animal" },
                    { visual: "🐐", text: "Goat", description: "A farm animal" },
                    { visual: "🐑", text: "sheep", description: "A farm animal" },
                    { visual: "🐫", text: "Camel", description: "A desert animal" },
                    








                ]
            },
            numbers: {
                title: "Numbers 1-20",
                icon: "🔢",
                items: [
                    { visual: "1️⃣", text: "One", description: "The first number" },
                    { visual: "2️⃣", text: "Two", description: "One plus one equals two" },
                    { visual: "3️⃣", text: "Three", description: "Three little pigs" },
                    { visual: "4️⃣", text: "Four", description: "Four seasons in a year" },
                    { visual: "5️⃣", text: "Five", description: "Five fingers on one hand" },
                    { visual: "6️⃣", text: "Six", description: "Six sides on a cube" },
                    { visual: "7️⃣", text: "Seven", description: "Seven days in a week" },
                    { visual: "8️⃣", text: "Eight", description: "Eight legs on a spider" },
                    { visual: "9️⃣", text: "Nine", description: "Nine planets in our solar system" },
                    { visual: "🔟", text: "Ten", description: "Ten toes on your feet" },
                    { visual: "1️⃣1️⃣", text: "Eleven", description: "One more than ten" },
                    { visual: "1️⃣2️⃣", text: "Twelve", description: "Twelve months in a year" },
                    { visual: "1️⃣3️⃣", text: "Thirteen", description: "One more than twelve" },
                    { visual: "1️⃣4️⃣", text: "Fourteen", description: "One more than thirteen" },
                    { visual: "1️⃣5️⃣", text: "Fifteen", description: "One more than fourteen" },
                    { visual: "1️⃣6️⃣", text: "Sixteen", description: "One more than fifteen" },
                    { visual: "1️⃣7️⃣", text: "Seventeen", description: "One more than sixteen" },
                    { visual: "1️⃣8️⃣", text: "Eighteen", description: "One more than seventeen" },
                    { visual: "1️⃣9️⃣", text: "Nineteen", description: "One more than eighteen" },
                    { visual: "2️⃣0️⃣", text: "Twenty", description: "Two groups of ten" }
                ]
            },
            shapes: {
                title: "Shapes",
                icon: "📐",
                items: [
                    { visual: "⭕", text: "Circle", description: "A round shape like a ball" },
                    { visual: "🔷", text: "Square", description: "A shape with four equal sides" },
                    { visual: "🔺", text: "Triangle", description: "A shape with three sides" },
                    { visual: "🔶", text: "Diamond", description: "A shape like a kite" },
                    { visual: "⭐", text: "Star", description: "A shape that twinkles in the sky" },
                    { visual: "💙", text: "Heart", description: "A shape that means love" },
                    { visual: "🔵", text: "Oval", description: "A stretched circle" },
                    { visual: "🔷", text: "Rectangle", description: "A long square" },
                    { visual: "🔶", text: "Pentagon", description: "A shape with five sides" },
                    { visual: "🔷", text: "Hexagon", description: "A shape with six sides" }
                ]
            },
            fruits: {
                title: "Fruits",
                icon: "🍎",
                items: [
                    { visual: "🍎", text: "Apple", description: "A red or green fruit" },
                    { visual: "🍌", text: "Banana", description: "A yellow curved fruit" },
                    { visual: "🍊", text: "Orange", description: "A round orange fruit" },
                    { visual: "🍓", text: "Strawberry", description: "A red fruit with seeds" },
                    { visual: "🍇", text: "Grapes", description: "Small round fruits in bunches" },
                    { visual: "🍑", text: "Peach", description: "A soft fuzzy fruit" },
                    { visual: "🍐", text: "Pear", description: "A green or yellow fruit" },
                    { visual: "🍍", text: "Pineapple", description: "A spiky yellow fruit" },
                    { visual: "🥝", text: "Kiwi", description: "A small brown fruit with green inside" },
                    { visual: "🥭", text: "Mango", description: "A sweet tropical fruit" }
                ]
            },
            colors: {
                title: "Colors",
                icon: "🎨",
                items: [
                    { visual: "🔴", text: "Red", description: "The color of apples and roses" },
                    { visual: "🔵", text: "Blue", description: "The color of the sky and ocean" },
                    { visual: "🟡", text: "Yellow", description: "The color of the sun and bananas" },
                    { visual: "🟢", text: "Green", description: "The color of grass and leaves" },
                    { visual: "🟠", text: "Orange", description: "The color of oranges and carrots" },
                    { visual: "🟣", text: "Purple", description: "The color of grapes and flowers" },
                    { visual: "🟤", text: "Brown", description: "The color of tree trunks and chocolate" },
                    { visual: "⚫", text: "Black", description: "The color of night and coal" },
                    { visual: "⚪", text: "White", description: "The color of snow and clouds" },
                    { visual: "🩷", text: "Pink", description: "The color of flowers and cotton candy" },
                    { visual: "🩵", text: "Light Blue", description: "A soft blue color like the sky" },
                    { visual: "💚", text: "Light Green", description: "A soft green color like fresh grass" },
                    { visual: "🧡", text: "Light Orange", description: "A soft orange color like sunset" },
                    { visual: "💜", text: "Light Purple", description: "A soft purple color like lavender" },
                    { visual: "🤍", text: "Light Gray", description: "A soft gray color like clouds" }
                ]
            }
            
        };

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Topic selection
        document.querySelectorAll('input[name="topic"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.currentTopic = e.target.value;
            });
        });

        // Start button
        document.getElementById('start-btn').addEventListener('click', () => {
            if (!this.currentTopic) {
                alert('Please select a topic first!');
                return;
            }
            this.startLearning();
        });

        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => this.previousItem());
        document.getElementById('next-btn').addEventListener('click', () => this.nextItem());
        document.getElementById('finish-btn').addEventListener('click', () => this.finishLearning());
        document.getElementById('restart-btn').addEventListener('click', () => this.restart());

        // Visual content click for pronunciation (text-to-speech)
        document.getElementById('visual-content').addEventListener('click', () => {
            this.speakCurrentText();
        });
    }

    startLearning() {
        this.currentIndex = 0;
        document.getElementById('setup-section').classList.add('hidden');
        document.getElementById('learning-section').classList.remove('hidden');
        this.updateDisplay();
    }

    updateDisplay() {
        const topic = this.topics[this.currentTopic];
        const item = topic.items[this.currentIndex];

        // Update header
        document.getElementById('topic-label').textContent = `${topic.icon} ${topic.title}`;
        document.getElementById('progress').textContent = `${this.currentIndex + 1} of ${topic.items.length}`;

        // Update content
        document.getElementById('visual-content').textContent = item.visual;
        document.getElementById('main-text').textContent = item.text;
        document.getElementById('description-text').textContent = item.description;

        // Update navigation buttons
        document.getElementById('prev-btn').disabled = this.currentIndex === 0;
        document.getElementById('next-btn').disabled = this.currentIndex === topic.items.length - 1;
    }

    previousItem() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateDisplay();
        }
    }

    nextItem() {
        const topic = this.topics[this.currentTopic];
        if (this.currentIndex < topic.items.length - 1) {
            this.currentIndex++;
            this.updateDisplay();
        }
    }

    finishLearning() {
        const topic = this.topics[this.currentTopic];
        document.getElementById('learning-section').classList.add('hidden');
        document.getElementById('completion-section').classList.remove('hidden');
        document.getElementById('completion-message').textContent = 
            `Congratulations! You've learned all about ${topic.title}! 🎉`;
    }

    restart() {
        document.getElementById('completion-section').classList.add('hidden');
        document.getElementById('setup-section').classList.remove('hidden');
        this.currentTopic = null;
        this.currentIndex = 0;
        
        // Clear topic selection
        document.querySelectorAll('input[name="topic"]').forEach(radio => {
            radio.checked = false;
        });
    }

    speakCurrentText() {
        const item = this.topics[this.currentTopic].items[this.currentIndex];
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(item.text);
            utterance.rate = 0.8; // Slower rate for children
            utterance.pitch = 1.2; // Slightly higher pitch
            speechSynthesis.speak(utterance);
        }
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new EnglishLearningApp();
});


