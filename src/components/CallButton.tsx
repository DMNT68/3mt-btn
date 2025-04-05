import { IconPhone, IconPhoneOff } from '@tabler/icons-react';

interface Props {
	label: string;
	onClick: () => void;
	className?: string;
	isCalling: boolean;
}

const CallButton: React.FC<Props> = ({ label, onClick, className, isCalling }) => (
	<button className={className} onClick={onClick}>
		{isCalling ? <IconPhoneOff size={20} /> : <IconPhone size={20} />}
		{label}
	</button>
);

export default CallButton;
