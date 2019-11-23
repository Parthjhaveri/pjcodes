(function() {

	// JOB DESCRIPTION
	let jobs = {
		egc: [			
			'<strong>Front-End Developer</strong><br><br>Worked closely with back-end developer to build fully customizable Wordpress themes in PHP & JavaScript',
			' Maintained ownership of all Front-End development and managed projects from design phase to deployment',
			' Enhanced company-wide traffic organization by introducing & helping implement various project-management methodologies & tools',
			' Curated front-end interfaces for ADA compliance, fast, intuitive & seamless experience for all users',
			' Spearheaded development, launch and post-deployment management of high-traffic websites & landing-pages',
			' Coordinated project logistics in a fast-paced environment with creative, marketing & management teams',
			' Consistently executed quality & scalable deliverables under extremely tight deadlines',
			' Helped creative & marketing teams implement mockups, wireframes and SEO campaigns when needed',
			' Worked directly with clients during planning/wireframe, design/mockup, development & post-deployment phases'
		],
		harvard: [
			'<strong>Lead Front-End Developer Volunteer</strong><br><br>Collaborate closely with product and web design teams to further mission-statement and execute deliverables',
			' Convert wire-frames into pixel-perfect web and mobile experiences using HTML5, CSS3 and JavaScript',
			' Provide web-development expertise and consultation throughout all project phases',
			' Lead development of main website and external projects',
			' Maintain thorough communication with remote staff/team-members and CEO',
		],
		fs: [
			'<strong>Front-End Developer</strong><br><br>Developed a regimented system of routine site-maintenance, issue-tracking, organized weekly meetings and morning stand-ups',
			' Worked closely with Backend Engineers to develop and maintain clean, reusable code',
			' Responsible for front-end architecture, pull requests, post-merge deployments and management of all company GitHub repositories',
			' Managed multiple E-Commerce sitesʼ functionality and built client-facing features in JavaScript, HTML5, CSS3, SASS and PHP',
			' Curated UI for fast and easy UX across all devices and browsers',
			' Assisted marketing team in social-media campaigns',
		],
		pursuit: [
			'<strong>Full-Stack Developer</strong><br><br>Built responsive, interactive websites and web-applications focused on positive UI/UX',
			' Used HTML5, CSS3, JavaScript ES6 and React JS to build reusable and modular code for future use, performed user and unit tests',
			' Applied DOM manipulation techniques to ensure optimal functionality and scalability of all websites and applications',
			' Managed teams of 4-5 as a project manager and executed tasks under strict deadlines using Agile development strategies',
		],
		thump: [
			'<strong>Front-End Developer</strong><br><br>Wire-framed, developed and maintained mobile-friendly websites, landing-pages based on client specifications',
			' Coded clean, reusable front ends for traffic-heavy websites and landing pages using HTML5, CSS3, JavaScript and WordPress',
			' Embedded graphic design into development process, designed logos, graphic-art, curated images for web use',
			' Maintained thorough communication with management and clients throughout project phases, worked closely with marketing team',
		],
		upton: [
			'<strong>Front-End Developer Intern</strong><br><br>Managed reconstruction and renovation of company website using HTML5, CSS3, jQuery and by manipulating PHP',
			' Responsibilities included routine maintenance of company website and online content',
			' Coordinated closely with agents to get individual written biographies and incorporated them onto the company website',
		]
	}

	var job_boxes = document.getElementsByClassName('job-boxes');

	for (var i = 0; i < job_boxes.length; i++) {
		job_boxes[i].addEventListener('click', function() {

			if (event.target.parentNode.dataset.job) {

				document.querySelectorAll('#home-work aside.bubble')[0].style.display = 'none';

				var job_desc_ul = document.getElementById('job-desc-ul');				
				job_desc_ul.style.height = '200px';
				job_desc_ul.innerHTML = jobs[event.target.parentNode.dataset.job];
				
				$(event.target.parentNode).addClass('active-grey').siblings().removeClass('active-grey');

				// MEDIA QUERY
				if (window.innerWidth <= 992) {
					job_desc_ul.style.height = 'auto';
				}
			}			

		});
	}

	// HOME FEATURED QUIZ
	var feat_ex_submit = document.getElementById('feat-ex-sub');

	feat_ex_submit.addEventListener('click', function(event) {
		event.preventDefault();
		let selected_answer = document.querySelector('input[name="choice"]:checked').value;
		let confirmation = document.querySelectorAll('#home-code aside.confirmation')[0];
		let confirmation_text = document.querySelectorAll('#home-code aside.confirmation p')[0];
		
		if (selected_answer === 'choice-b') {
			confirmation_text.innerHTML = 'Correct Answer!'

			confirmation.style.display = 'flex';
			confirmation.style.backgroundColor = '#1bac9c';
			confirmation.style.transition = '0.4s';
		} else {
			confirmation_text.innerHTML = 'Wrong Answer!'

			confirmation.style.display = 'flex';
			confirmation.style.backgroundColor = '#e83e8c';
			confirmation.style.transition = '0.4s';
		}
	});


})();






