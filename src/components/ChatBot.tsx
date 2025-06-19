import { useEffect } from 'react';

declare global {
	interface Window {
		ChatWidgetConfig?: any;
	}
}

type ChatWidgetProps = {
	webhookUrl: string;
	route: string;
	logo: string;
	name: string;
	welcomeText: string;
	subtitleWelcome: string;
	responseTimeText: string;
	poweredByText: string;
	poweredByLink: string;
	primaryColor: string;
	secondaryColor: string;
	backgroundColor: string;
	backgroundColorSecondary: string;
	fontColor: string;
	position?: 'right' | 'left';
};

const ChatWidget = ({
	webhookUrl,
	route,
	logo,
	name,
	welcomeText,
	subtitleWelcome,
	responseTimeText,
	poweredByText,
	poweredByLink,
	primaryColor,
	secondaryColor,
	backgroundColor,
	backgroundColorSecondary,
	fontColor,
	position = 'right',
}: ChatWidgetProps) => {
	useEffect(() => {
		window.ChatWidgetConfig = {
			webhook: {
				url: webhookUrl,
				route,
			},
			branding: {
				logo,
				name,
				welcomeText,
				responseTimeText,
				subtitleWelcome,
				poweredBy: {
					text: poweredByText,
					link: poweredByLink,
				},
			},
			style: {
				primaryColor,
				secondaryColor,
				position,
				backgroundColor,
				backgroundColorSecondary,
				fontColor,
			},
			button: ``,
		};

		// Cargar el script externo
		const script = document.createElement('script');
		script.src = 'https://aiconnect.flec-ec.com/widget-chat.js';
		script.async = true;
		document.body.appendChild(script);

		// Limpieza (opcional)
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return null; // No renderiza nada visualmente
};

export default ChatWidget;
