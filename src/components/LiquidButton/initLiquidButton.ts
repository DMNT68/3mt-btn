export function initLiquidButton(button: HTMLDivElement) {
	const canvas = document.createElement('canvas');
	button.appendChild(canvas);
	const context = canvas.getContext('2d');

	if (!context) return;

	const pointsA: Point[] = [];
	const pointsB: Point[] = [];

	const points = 8;
	const viscosity = 20;
	const mouseDist = 70;
	const damping = 0.05;
	const showIndicators = false;

	let mouseX = 0,
		mouseY = 0;
	let relMouseX = 0,
		relMouseY = 0;
	let mouseLastX = 0,
		mouseLastY = 0;
	let mouseDirectionX = 0,
		mouseDirectionY = 0;
	let mouseSpeedX = 0,
		mouseSpeedY = 0;

	const buttonRect = button.getBoundingClientRect();
	const buttonWidth = button.offsetWidth;
	const buttonHeight = button.offsetHeight;

	canvas.width = buttonWidth + 100;
	canvas.height = buttonHeight + 100;
	canvas.style.position = 'absolute';
	canvas.style.top = '-50px';
	canvas.style.left = '-50px';
	canvas.style.zIndex = '1';

	class Point {
		x: number;
		y: number;
		ix: number;
		iy: number;
		vx = 0;
		vy = 0;
		cx1 = 0;
		cy1 = 0;
		cx2 = 0;
		cy2 = 0;
		level: number;

		constructor(x: number, y: number, level: number) {
			this.x = this.ix = 50 + x;
			this.y = this.iy = 50 + y;
			this.level = level;
		}

		move() {
			this.vx += (this.ix - this.x) / (viscosity * this.level);
			this.vy += (this.iy - this.y) / (viscosity * this.level);

			const dx = this.ix - relMouseX;
			const dy = this.iy - relMouseY;
			const relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;

			if (
				(mouseDirectionX > 0 && relMouseX > this.x) ||
				(mouseDirectionX < 0 && relMouseX < this.x)
			) {
				if (relDist > 0 && relDist < 1) {
					this.vx = (mouseSpeedX / 4) * relDist;
				}
			}

			this.vx *= 1 - damping;
			this.x += this.vx;

			if (
				(mouseDirectionY > 0 && relMouseY > this.y) ||
				(mouseDirectionY < 0 && relMouseY < this.y)
			) {
				if (relDist > 0 && relDist < 1) {
					this.vy = (mouseSpeedY / 4) * relDist;
				}
			}

			this.vy *= 1 - damping;
			this.y += this.vy;
		}
	}

	function addPoints(x: number, y: number) {
		pointsA.push(new Point(x, y, 1));
		pointsB.push(new Point(x, y, 2));
	}

	function initPoints() {
		const x = buttonHeight / 2;
		for (let j = 1; j < points; j++) {
			addPoints(x + ((buttonWidth - buttonHeight) / points) * j, 0);
		}
		addPoints(buttonWidth - buttonHeight / 5, 0);
		addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
		addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
		for (let j = points - 1; j > 0; j--) {
			addPoints(x + ((buttonWidth - buttonHeight) / points) * j, buttonHeight);
		}
		addPoints(buttonHeight / 5, buttonHeight);
		addPoints(-buttonHeight / 10, buttonHeight / 2);
		addPoints(buttonHeight / 5, 0);
	}

	function renderCanvas() {
		requestAnimationFrame(renderCanvas);

		context!.clearRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < pointsA.length; i++) {
			pointsA[i].move();
			pointsB[i].move();
		}

		const gradient = context!.createRadialGradient(
			relMouseX,
			relMouseY,
			300,
			relMouseX,
			relMouseY,
			0
		);
		gradient.addColorStop(0, '#102ce5');
		gradient.addColorStop(1, '#E406D6');

		[pointsA, pointsB].forEach((group, index) => {
			context!.fillStyle = index === 0 ? '#1CE2D8' : gradient;
			context!.beginPath();
			context!.moveTo(group[0].x, group[0].y);

			for (let i = 0; i < group.length; i++) {
				const p = group[i];
				const nextP = group[i + 1] || group[0];
				p.cx1 = (p.x + nextP.x) / 2;
				p.cy1 = (p.y + nextP.y) / 2;
				context!.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
			}
			context!.fill();
		});

		if (showIndicators) {
			context!.fillStyle = '#000';
			context!.beginPath();
			for (const p of pointsA) context!.rect(p.x - 1, p.y - 1, 2, 2);
			context!.fill();
		}
	}

	function handleMouseMove(e: MouseEvent) {
		const bounds = button.getBoundingClientRect();
		relMouseX = e.clientX - bounds.left;
		relMouseY = e.clientY - bounds.top;

		mouseDirectionX = e.clientX > mouseX ? 1 : e.clientX < mouseX ? -1 : 0;
		mouseDirectionY = e.clientY > mouseY ? 1 : e.clientY < mouseY ? -1 : 0;

		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	function trackMouseSpeed() {
		mouseSpeedX = mouseX - mouseLastX;
		mouseSpeedY = mouseY - mouseLastY;
		mouseLastX = mouseX;
		mouseLastY = mouseY;
		setTimeout(trackMouseSpeed, 50);
	}

	document.addEventListener('mousemove', handleMouseMove);
	trackMouseSpeed();
	initPoints();
	renderCanvas();
}
