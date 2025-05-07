import { IconPhone, IconPhoneOff } from '@tabler/icons-react';
import '../assets/styles.css';

interface Props {
	label: string;
	onClick: () => void;
	className?: string;
	isCalling: boolean;
	isLabelPoweredBy?: boolean;
}

const CallButton: React.FC<Props> = ({
	label,
	onClick,
	className,
	isCalling,
	isLabelPoweredBy,
}) => (
	<button className={className} onClick={onClick}>
		<div className='button-content'>
			{isCalling ? <IconPhoneOff size={20} /> : <IconPhone size={20} />}
			{label}
		</div>
		{isLabelPoweredBy && <span className="powered-by">Powered by AI Connect Solutions</span>}
	</button>
);

export default CallButton;
