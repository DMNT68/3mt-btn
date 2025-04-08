import { useEffect, useRef } from 'react';
import './LiquidButton.css';
import { initLiquidButton } from './initLiquidButton';

interface LiquidButtonProps {
	text: string;
	onClick: () => void;
}

const LiquidButton = ({ text, onClick }: LiquidButtonProps) => {
	const buttonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Aquí puedes pegar TODO el código JS que me pasaste (modificado ligeramente)
		// pero solo ejecutarlo una vez que el botón exista
		if (!buttonRef.current) return;

		// Aquí puedes inyectar el código directamente o importar una función que lo ejecute
		initLiquidButton(buttonRef.current);
	}, []);

	return (
		<div className="btn-liquid" onClick={onClick} ref={buttonRef}>
			<span className="inner">{text}</span>
		</div>
	);
};

export default LiquidButton;
