interface Props {
	label: string;
	onClick: () => void;
	className?: string;
}

const CallButton: React.FC<Props> = ({ label, onClick, className }) => (
	<button className={className} onClick={onClick}>
		{label}
	</button>
);

export default CallButton;
