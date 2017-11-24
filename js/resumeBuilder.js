/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name: "David Richarz",
	role: "Web Analyst",
	contacts: {
		mobile: "0176-31350901",
		email: "daricharz@gmail.com",
		github: "somewhereDave",
		location: "Mainz, Germany"
	},
	welcomeMessage: "Get Riggity Riggity Wrecked",
	skills: ['Data Analysis', 'Front End Dev', 'Web Analytics', 'Online Marketing'],
	biopic: "images/me.jpg"
};

var work = {
	jobs: [
		{
			title: "Web Analyst",
			employer: "VRM Digital",
			dates : "04/2016 - Today",
			location: "Mainz, RPL, Germany",
			description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
		},
		{
			title: "Research Assistant",
			employer: "Faculty Information Systems & Business Administration at Johannes Gutenberg University",
			dates : "11/2015 - 02/2016",
			location: "Mainz, RPL, Germany",
			description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
		}
	]
};

var education = {
	schools: [
		{
			school: "University of Passau",
			location: "Passau , BR, Germany",
			degree: "Bachelors",
			majors: ["Media and Communication", "Business Administration and Economics"],
			dates: 2011,
			url: "http://www.uni-passau.de/en/"
		},
		{
			school: "Johannes Gutenberg University",
			location: "Mainz, RPL, Germany",
			degree: "Masters",
			majors: ["Media Management"],
			dates: 2015,
			url: "http://www.uni-mainz.de/eng/index.php"
		}
	],
	onlineCourses: [
		{
			name: "The Analytics Edge",
			school: "edx",
			dates: 2015,
			url: "https://verify.edx.org/cert/094f053cede34caea7fd9b2388a391fb"
		},
		{
			name: "Statistical Thinking for Data Science and Analytics",
			school: "edx",
			dates: 2016,
			url: "https://courses.edx.org/certificates/5930930ebbb8442ba0093baf23a569a1"
		},
		{
			name: "Introduction to Computer Science and Programming Using Python",
			school: "edx",
			dates: 2016,
			url: "https://courses.edx.org/certificates/02c8c9e2d9b44287a5528627866fdb28"
		}
	]
};

var projects = {
	projects: [
		{
			title: "Paper on Reward Based Crowdfunding",
			dates: "2017",
			description: "Research on perception of purchases in reward-based crowdfunding using data collected by a custom built Java Webscraper to collect information from Kickstarter. I analyzed the impact of different reward types on funding behavior giving entrepeneurs a tool to optimize their offerings to the crowd.",
			images: ["images/graphic1.png", "images/graphic2.png"]
		}
	]
};

bio.display = function() {

	$('#header').prepend(format(HTMLheaderRole, bio.role));
	$('#header').prepend(format(HTMLheaderName, bio.name));
	$('#header').append(format(HTMLbioPic, bio.biopic));
	$('#header').append(format(HTMLwelcomeMsg, bio.welcomeMessage));

	if(bio.contacts !== undefined) {
		for(var i = 0; i < Object.keys(bio.contacts).length; i++) {
			var formattedHTMLContacts = HTMLcontactGeneric.replace('%contact%', Object.keys(bio.contacts)[i]);
			formattedHTMLContacts = formattedHTMLContacts.replace('%data%', Object.values(bio.contacts)[i]);
			$('#topContacts').append(formattedHTMLContacts);
			$('#footerContacts').append(formattedHTMLContacts);
		}
	}

	if(bio.skills !== undefined) {
		$('#header').append(HTMLskillsStart);
		for (var j = 0; j < bio.skills.length; j++) {
			$('#skills').append(format(HTMLskills, bio.skills[j]));
		}
	}
};

work.display = function() {
	work.jobs.forEach(function(job) {
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(
		format(HTMLworkEmployer, job.employer)+
		format(HTMLworkTitle, job.title)+
		format(HTMLworkDates, job.dates)+
		format(HTMLworkLocation, job.location) +
		format(HTMLworkDescription, job.description));
	});
};

education.display = function() {

	education.schools.forEach(function(school){
		$('#education').append(HTMLschoolStart);

		$('.education-entry:last').append(format(HTMLschoolName, school.school));

		$('.education-entry a:last').append(format(HTMLschoolDegree, school.degree));

		$('.education-entry:last').append(format(HTMLschoolDates, school.dates));

		$('.education-entry:last').append(format(HTMLschoolLocation, school.location));

		var allMajors = "";
		school["majors"].forEach(function(major, index, array) {
				allMajors = allMajors + major;
				if(index !== array.length -1) {
					allMajors += ', ';
				}
		});

		$('.education-entry:last').append(format(HTMLschoolMajor, allMajors));
	});

	$("#education").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course) {
		$('#education').append(HTMLschoolStart);
		$(".education-entry:last").append(format(HTMLonlineTitle, course.name) + format(HTMLonlineSchool, course.school));
		$(".education-entry:last").append(format(HTMLonlineDates, course.dates));
		var formattedHTMLonlineURL = HTMLonlineURL.replace('%data%', 'certificate');
		$(".education-entry:last").append(format(formattedHTMLonlineURL, course.url, '#'));
	});
};

projects.display = function () {
	for(var i = 0; i < projects.projects.length; i++) {
		$('#projects').append(HTMLprojectStart);

		var formattedHTMLprojectsTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		var formattedHTMLprojectsDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		$('.project-entry').append(formattedHTMLprojectsTitle, formattedHTMLprojectsDescription);
		for (var j = 0; j < projects.projects[i].images.length; j++) {
			$('.project-entry').append(format(HTMLprojectImage, projects.projects[i].images[j]));
		}
	}
};

//Add sections to site
bio.display();
education.display();
work.display();
projects.display();
// Add Google Map
$('#mapDiv').append(googleMap);

//Helper function to reduce code redundancy
function format(content, value, input = '%data%') {
	return content.replace(input, value);
}