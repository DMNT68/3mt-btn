// Chat Widget Script
(function () {
	// Default configuration
	const defaultConfig = {
		webhook: {
			url: '',
			route: '',
		},
		branding: {
			logo: '',
			name: '',
			welcomeText: '',
			responseTimeText: '',
			poweredBy: {
				text: '',
				link: '#',
			},
		},
		icons: {
			send: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-send-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" /><path d="M6.5 12h14.5" /></svg>',
			close:
				'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>',
			back: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>',
			msg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" /></svg>',
			trash:
				'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>',
		},
		style: {
			primaryColor: '#003DA5',
			secondaryColor: '#0DB02B',
			position: 'right',
			backgroundColor: '#003DA5',
			backgroundColorSecondary: '#2E81C4',
			fontColor: '#333333',
		},
		button: '',
	};

	// Merge user config with defaults
	const config = window.ChatWidgetConfig
		? {
				webhook: { ...defaultConfig.webhook, ...window.ChatWidgetConfig.webhook },
				branding: { ...defaultConfig.branding, ...window.ChatWidgetConfig.branding },
				style: { ...defaultConfig.style, ...window.ChatWidgetConfig.style },
				icons: { ...defaultConfig.icons, ...window.ChatWidgetConfig.icons },
				button: { ...defaultConfig.button, ...window.ChatWidgetConfig.button },
		  }
		: defaultConfig;

	// Create and inject styles
	const styles = `
        .n8n-chat-widget {
            --chat--color-primary: var(--n8n-chat-primary-color, #${config.style.primaryColor});
            --chat--color-secondary: var(--n8n-chat-secondary-color, #${config.style.secondaryColor});
            --chat--color-background: var(--n8n-chat-background-color, #${config.style.backgroundColor});	
            --chat--color-background-secondary: var(--n8n-chat-background-secondary-color, #${config.style.backgroundColorSecondary});
            --chat--color-font: var(--n8n-chat-font-color,#${config.style.fontColor});
            font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .n8n-chat-widget .chat-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            display: none;
            width: 380px;
            height: 600px;
            background: linear-gradient(180deg , var(--chat--color-background) 0%, var(--chat--color-background-secondary) 20%);
            border-radius: 30px;
            box-shadow: 0 8px 32px rgba(0, 61, 165, 0.15);
            border: 1px solid rgba(0, 61, 165, 0.2);
            overflow: hidden;
            font-family: inherit;
        }

        .n8n-chat-widget .chat-container.position-left {
            right: auto;
            left: 20px;
        }

        .n8n-chat-widget .chat-container.open {
            display: flex;
            flex-direction: column;
        }

        .n8n-chat-widget .brand-header {
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            position: relative;
            z-index: 1;
        }

        .n8n-chat-widget .close-button, .back-button, .trash-button {
            background: none !important;
            border: none;
            cursor: pointer;
            border-radius: 100% !important;
            padding: 4px !important;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.2s;
            font-size: 20px;
            opacity: 1;
            width: 32px;
            color: #fff;
        }

        .n8n-chat-widget .close-button:hover, .back-button:hover, .trash-button:hover {
            opacity: 1.5;
            scale: 1.05;

        }
        .n8n-chat-widget .back-button {
            background-color: var(--chat--color-background-secondary);
            color: var(--chat--color-font);
        }

        .n8n-chat-widget .trash-button {
            color: #FF0000 !important;
        }

        .n8n-chat-widget .close-button {
            color: var(--chat--color-font);
        }

        .n8n-chat-widget .buttons-container-right{
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .n8n-chat-widget .brand-header img {
            width: 32px;
            height: 32px;
        }

        .n8n-chat-widget .brand-header span {
            font-size: 18px;
            font-weight: 500;
            color: var(--chat--color-font);
        }

        .n8n-chat-widget .chatbot-title {
            font-size: 16px;
            font-weight: semibold;
            color: var(--chat--color-font);
        }

        .n8n-chat-widget .logo {
            border-radius: 100%;
            width: 160px;
            height: 160px;
        }

        .n8n-chat-widget .logo-container {
            max-width: 160px;
            height: 160px;
            border-radius: 100%;
            padding: 1rem;
            background: linear-gradient(215deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            padding: 3px;
        }

        .n8n-chat-widget .new-conversation {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            text-align: center;
            width: 100%;
            max-width: 300px;
        }

        .n8n-chat-widget .new-conversation .chat-footer {
           background: transparent;
        }

        .n8n-chat-widget .new-conversatio-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .n8n-chat-widget .welcome-text {
            font-size: 24px;
            font-weight: semibold;
            color: var(--chat--color-font);
            margin-bottom: 24px;
            line-height: 1.3;
        }

        .n8n-chat-widget .new-chat-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            height: 52px;
            padding: 16px 24px;
            background: linear-gradient(215deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            border: none;
            border-radius: 30px !important;
            cursor: pointer;
            font-size: 1.1rem;;
            transition: transform 0.3s;
            font-weight: 500;
            font-family: inherit;
            margin-bottom: 12px;
        }

        .n8n-chat-widget .new-chat-btn:hover {
            transform: scale(1.02);
        }

        .n8n-chat-widget .message-icon {
            width: 20px;
            height: 20px;
        }

        .n8n-chat-widget .response-text {
            font-size: 15px;
            color: #838FA0;
            opacity: 0.7;
            margin: 12px 0;
        }

        .n8n-chat-widget .chat-interface {
            display: none;
            flex-direction: column;
            height: 100%;
        }

        .n8n-chat-widget .chat-interface.active {
            display: flex;
        }

        .n8n-chat-widget .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            scrollbar-width: thin;
            scrollbar-color: var(--chat--color-secondary)  var(--chat--color-background);
        }

        n8n-chat-widget .chat-messages::-webkit-scrollbar {
            width: 6px;
        }

        n8n-chat-widget .chat-messages::-webkit-scrollbar-track {
            background:  var(--chat--color-background);
            border-radius: 4px;
        }

        n8n-chat-widget .chat-messages::-webkit-scrollbar-thumb {
            background-color:var(--chat--color-secondary);
            border-radius: 4px;
            border: 1px solid  var(--chat--color-background);
        }

        .n8n-chat-widget .chat-message {
            padding: 12px 16px;
            margin: 8px 0;
            border-radius: 12px;
            max-width: 80%;
            word-wrap: break-word;
            font-size: 14px;
            line-height: 1.5;
        }

        .n8n-chat-widget .chat-message.user {
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            align-self: flex-end;
            box-shadow: 0 4px 12px rgba(0, 61, 165, 0.2);
            border: none;
        }

        .n8n-chat-widget .chat-message.bot {
            background: var(--chat--color-background-secondary);
            border: 1px solid rgba(0, 61, 165, 0.2);
            color: var(--chat--color-font);
            align-self: flex-start;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .n8n-chat-widget .chat-input {
            padding: 16px;
            display: flex;
            gap: 8px;
            background: var(--chat--color-background-secondary);
        }

        .n8n-chat-widget .chat-input .message-input {
            flex: 1;
            padding: 12px;
            border: 0;
            border-radius: 30px;
            background: var(--chat--color-background-secondary);
            color: var(--chat--color-font);
            font-family: inherit;
            font-size: 14px;
            width: 48px;
            box-shadow: 0 0 0 1px rgba(0, 61, 165 ,0.2)
        }

        .n8n-chat-widget .chat-input .message-input::placeholder {
            color: var(--chat--color-font);
            opacity: 0.6;
        }

        .n8n-chat-widget .chat-input .message-input:focus {
            outline: none;
            box-shadow: 0 0 0 1px rgba(0, 61, 165, 0.4);
        }

        .n8n-chat-widget .chat-input button {
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            border: none;
            border-radius: 30px;
            padding: 0 20px;
            cursor: pointer;
            transition: transform 0.2s;
            font-family: inherit;
            font-weight: 500;
            width: 60px;
        }

        .n8n-chat-widget .chat-input button:hover {
            transform: scale(1.05);
        }

        .n8n-chat-widget .chat-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 70px;
            height: 70px;
            border-radius: 50px !important;
            background: linear-gradient(135deg, var(--chat--color-primary) 0%, var(--chat--color-secondary) 100%);
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 61, 165, 0.3);
            z-index: 999;
            transition: transform 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .n8n-chat-widget .chat-toggle.position-left {
            right: auto;
            left: 20px;
        }

        .n8n-chat-widget .chat-toggle:hover {
            transform: scale(1.05);
        }

        .n8n-chat-widget .chat-toggle svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        .n8n-chat-widget .chat-footer {
            padding: 6px;
            text-align: center;
            border-top: 1px solid rgba(0, 61, 165, 0.2);
            background: var(--chat--color-background-secondary);
        }

        .n8n-chat-widget .chat-footer a {
            color: var(--chat--color-secondary);
            text-decoration: none;
            font-size: 12px;
            opacity: 0.8;
            transition: opacity 0.2s;
            font-family: inherit;
        }

        .n8n-chat-widget .chat-footer a:hover {
            opacity: 1;
        }

        .loading-dots {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            height: 20px;
        }

        .loading-dots span {
            width: 10px;
            height: 10px;
            background-color: var(--chat--color-primary) !important;
            border-radius: 50%;
            animation: bounce 1.2s infinite ease-in-out;
        }

        .loading-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }

        .loading-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes bounce {
            0%, 80%, 100% {
                transform: scale(0.8);
                opacity: 0.6;
            }
            40% {
                transform: scale(1.2);
                opacity: 1;
            }
        }


        .chat-message.bot h1,
        .chat-message.bot h2 {
            margin: 0.5em 0;
        }

        .chat-message.bot code {
            background: #eee;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: monospace;
        }

        .chat-message.bot pre {
            background: #f6f8fa;
            padding: 10px;
            overflow-x: auto;
            border-radius: 5px;
        }

        .chat-message.bot img {
            width: 160px;
            border-radius: 5px;
        }

        @media (max-width: 600px) {
          .n8n-chat-widget .chat-container {
                bottom: 0;
                right: 0;
                width: 100vw;
                height: 100%;
                border-radius: 0;
                z-index: 10001;
            }
        }
        
        .no-scroll {
            overflow: hidden !important;
            touch-action: none !important;
        }
    `;

	// Load Geist font
	const fontLink = document.createElement('link');
	fontLink.rel = 'stylesheet';
	fontLink.href = 'https://cdn.jsdelivr.net/npm/geist@1.0.0/dist/fonts/geist-sans/style.css';
	document.head.appendChild(fontLink);

	// Inject styles
	const styleSheet = document.createElement('style');
	styleSheet.textContent = styles;
	document.head.appendChild(styleSheet);

	// Prevent multiple initializations
	if (window.N8NChatWidgetInitialized) return;
	window.N8NChatWidgetInitialized = true;

	let currentSessionId = '';

	// Create widget container
	const widgetContainer = document.createElement('div');
	widgetContainer.className = 'n8n-chat-widget';

	// Set CSS variables for colors
	widgetContainer.style.setProperty('--n8n-chat-primary-color', config.style.primaryColor);
	widgetContainer.style.setProperty('--n8n-chat-secondary-color', config.style.secondaryColor);
	widgetContainer.style.setProperty('--n8n-chat-background-color', config.style.backgroundColor);
	widgetContainer.style.setProperty(
		'--n8n-chat-background-secondary-color',
		config.style.backgroundColorSecondary
	);
	widgetContainer.style.setProperty('--n8n-chat-font-color', config.style.fontColor);

	const chatContainer = document.createElement('div');
	chatContainer.className = `chat-container${
		config.style.position === 'left' ? ' position-left' : ''
	}`;

	const newConversationHTML = `
        <div class="brand-header">
            <span></span>
            <button class="close-button">${config.icons.close}</button>
        </div>
        <div class="new-conversation">
            <div class="new-conversatio-container">
                <h3 class="chatbot-title">Chatbot</h3>
                <div class="logo-container">
                    <img class="logo" src="${config.branding.logo}" alt="${config.branding.name}" width="160" height="160">
                </div>
                
                <h2 class="welcome-text">${config.branding.welcomeText}</h2>
                <p class="response-text">${config.branding.responseTimeText}</p>

               <div id="custom-chat-button"></div>

                <button class="new-chat-btn">
                    ${config.icons.send}
                    Start Chat
                </button>
            </div>
            <div class="chat-footer">
                <a href="${config.branding.poweredBy.link}" target="_blank">${config.branding.poweredBy.text}</a>
            </div>
        </div>
    `;

	const chatInterfaceHTML = `
        <div class="chat-interface">
            <div class="brand-header">
                <button class="back-button">
                    ${config.icons.back}
                </button>
                <span>Chatbot</span>
                <div class="buttons-container-right">
                    <button class="trash-button">
                        ${config.icons.trash}
                    </button>
                    <button class="close-button">
                        ${config.icons.close}
                    </button>
                </div>
            </div>
            <div class="chat-messages"></div>
            <div class="chat-input">
                <input class="message-input" type="text" placeholder="Type your message here..."></input>
                <button type="submit">${config.icons.send}</button>
            </div>
            <div class="chat-footer">
                <a href="${config.branding.poweredBy.link}" target="_blank">${config.branding.poweredBy.text}</a>
            </div>
        </div>
    `;

	chatContainer.innerHTML = newConversationHTML + chatInterfaceHTML;

	const toggleButton = document.createElement('button');
	toggleButton.className = `chat-toggle${config.style.position === 'left' ? ' position-left' : ''}`;
	toggleButton.innerHTML = `${config.icons.msg}`;

	widgetContainer.appendChild(chatContainer);
	widgetContainer.appendChild(toggleButton);
	document.body.appendChild(widgetContainer);

	const newChatBtn = chatContainer.querySelector('.new-chat-btn');
	const chatInterface = chatContainer.querySelector('.chat-interface');
	const messagesContainer = chatContainer.querySelector('.chat-messages');
	const messageInput = chatContainer.querySelector('.message-input');
	const sendButton = chatContainer.querySelector('button[type="submit"]');
	const backButton = chatContainer.querySelector('.back-button');
	const trashButton = chatContainer.querySelector('.trash-button');
	const closeButtons = chatContainer.querySelectorAll('.close-button');
	let initConversation = false;

	// Handle click events
	backButton.addEventListener('click', () => {
		chatInterface.classList.remove('active');
		chatContainer.querySelector('.brand-header').style.display = 'flex';
		chatContainer.querySelector('.new-conversation').style.display = 'block';
	});

	trashButton.addEventListener('click', () => {
		messagesContainer.innerHTML = '';
		localStorage.removeItem('chatMessages');
		localStorage.removeItem('chatSessionId');
		currentSessionId = '';
		initConversation = false;
		startNewConversation();
	});

	newChatBtn.addEventListener('click', startNewConversation);

	sendButton.addEventListener('click', () => {
		const message = messageInput.value.trim();
		if (message) {
			sendMessage(message);
			messageInput.value = '';
		}
	});

	messageInput.addEventListener('keypress', (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			const message = messageInput.value.trim();
			if (message) {
				sendMessage(message);
				messageInput.value = '';
			}
		}
	});

	toggleButton.addEventListener('click', () => {
		toggleChat(true);
	});

	// Add close button handlers
	closeButtons.forEach((button) => {
		button.addEventListener('click', () => {
			toggleChat(false);
		});
	});

	// Functions
	function generateUUID() {
		return crypto.randomUUID();
	}

	function showTypingIndicator() {
		const typingDiv = document.createElement('div');
		typingDiv.className = 'chat-message bot typing-indicator';
		typingDiv.innerHTML = `
		<div class="loading-dots">
			<span></span><span></span><span></span>
		</div>
	`;
		messagesContainer.appendChild(typingDiv);
		messagesContainer.scrollTop = messagesContainer.scrollHeight;

		// Guardamos este div en una variable global para reutilizarlo
		window.typingIndicator = typingDiv;
	}

	function hideTypingIndicator() {
		typingIndicator.style.display = 'none';
	}

	async function startNewConversation() {
		const data = [
			{
				action: 'loadPreviousSession',
				sessionId: currentSessionId,
				route: config.webhook.route,
				metadata: {
					userId: '',
				},
			},
		];

		try {
			if (!initConversation) {
				const response = await fetch(config.webhook.url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});

				const responseData = await response.json();

				const botMessageDiv = document.createElement('div');
				const botMessageText = Array.isArray(responseData)
					? responseData[0].output
					: responseData.output;

				botMessageDiv.className = 'chat-message bot';
				botMessageDiv.innerHTML = marked.parse(botMessageText);
				messagesContainer.appendChild(botMessageDiv);
				saveMessagesToLocalStorage();
			}
			chatContainer.querySelector('.brand-header').style.display = 'none';
			chatContainer.querySelector('.new-conversation').style.display = 'none';
			chatInterface.classList.add('active');
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		} catch (error) {
			console.error('Error:', error);
		}
	}

	async function sendMessage(message) {
		const messageData = {
			action: 'sendMessage',
			sessionId: currentSessionId,
			route: config.webhook.route,
			chatInput: message,
			metadata: {
				userId: '',
			},
		};

		const userMessageDiv = document.createElement('div');
		userMessageDiv.className = 'chat-message user';
		userMessageDiv.textContent = message;
		messagesContainer.appendChild(userMessageDiv);
		saveMessagesToLocalStorage();
		messagesContainer.scrollTop = messagesContainer.scrollHeight;

		try {
			showTypingIndicator();
			const response = await fetch(config.webhook.url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(messageData),
			});

			const data = await response.json();

			const botMessageText = Array.isArray(data) ? data[0].output : data.output;

			// Reemplaza el contenido del typingIndicator con el texto real
			typingIndicator.classList.remove('typing-indicator');
			typingIndicator.innerHTML = marked.parse(botMessageText);
			saveMessagesToLocalStorage();
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		} catch (error) {
			hideTypingIndicator();
			console.error('Error:', error);
		}
	}

	function renderCustomButton() {
		const buttonContainer = document.getElementById('custom-chat-button');

		if (config.button && buttonContainer) {
			buttonContainer.innerHTML = window.ChatWidgetConfig.button;
		}
	}

	function loadMarkedLibrary(callback) {
		const script = document.createElement('script');
		script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
		script.onload = callback;
		document.head.appendChild(script);
	}

	function saveMessagesToLocalStorage() {
		const messagesHTML = messagesContainer.innerHTML;
		localStorage.setItem('chatMessages', messagesHTML);
	}

	function restoreMessagesFromLocalStorage() {
		const savedMessages = localStorage.getItem('chatMessages');
		if (savedMessages) {
			messagesContainer.innerHTML = savedMessages;
			initConversation = true;
		} else {
			initConversation = false;
		}
	}

	function saveSessingIdToLocalStorage(sessionId) {
		localStorage.setItem('chatSessionId', sessionId);
	}

	function restoreSessionIdFromLocalStorage() {
		const savedSessionId = localStorage.getItem('chatSessionId');
		if (savedSessionId) {
			currentSessionId = savedSessionId;
		} else {
			currentSessionId = generateUUID();
			saveSessingIdToLocalStorage(currentSessionId);
		}
	}

	function toggleChat(open) {
		const isMobile = window.innerWidth <= 600;

		if (open) {
			chatContainer.classList.add('open');
			if (isMobile) document.body.classList.add('no-scroll');
		} else {
			chatContainer.classList.remove('open');
			if (isMobile) document.body.classList.remove('no-scroll');
		}
	}

	// Initialization functions
	toggleChat(true);
	loadMarkedLibrary();
	renderCustomButton();
	restoreMessagesFromLocalStorage();
	restoreSessionIdFromLocalStorage();
})();
