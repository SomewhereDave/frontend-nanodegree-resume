/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name: "David Richarz",
	role: "Web Analyst",
	contacts: {
		mobile: 0123-45678,
		email: "daricharz@gmail.com",
		github: "somewhereDave",
		location: "Mainz, Germany"
	},
	pictureURL: "images/me.jpg",
	welcomeMessage: "Get Riggity Riggity Wrecked",
	skills: ['Data Analysis', 'Front End Dev', 'Web Analytics', 'Online Marketing']
}

var work = {
	jobs: [
		{
			title: "Web Analyst",
			employer: "VRM Digital",
			years: 2,
			city: "Mainz"
		},
		{
			title: "Research Assistant",
			employer: "Faculty Information Systems & Business Administration at Johannes Gutenberg University",
			years: 0.3,
			city: "Mainz"

		}
	]
}

var education = {
	schools: [
		{
			school: "University of Passau",
			city: "Passau , BR, Germany",
			degree: "Bachelors",
			major: ["Media and Communication", "Business Administration and Economics"],
			dates: 2011,
			url: "http://www.uni-passau.de/en/"
		},
		{
			school: "Johannes Gutenberg Universität",
			city: "Mainz, RPL, Germany",
			degree: "Masters",
			major: ["Media Management"],
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
}

var projects = {
	projects: [
		{
			title: "Paper on Reward Based Crowdfunding",
			description: "Research on perception of rewards in reward-based crowdfunding. Based on a custom built Java Webscraper to collect data from Kickstarter crowdfunding projects I analyzed the impact of different reward types on funding behavior."
		}
	]
}





// formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
// formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
// formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contact.mobile);
// formattedHTMLemail = HTMLemail.replace("%data%", bio.contact.email);
// formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
// formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contact.github);
// formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contact.location);
// formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
// formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// $('#header').append(formattedHTMLheaderName);
// $('#header').append(formattedHTMLheaderRole);
// $('#topContacts').append(formattedHTMLmobile);
// $('#topContacts').append(formattedHTMLemail);
// $('#topContacts').append(formattedHTMLtwitter);
// $('#topContacts').append(formattedHTMLgithub);
// $('#topContacts').append(formattedHTMLlocation);
// $('#header').append(formattedHTMLbioPic);
// $('#header').append(formattedHTMLwelcomeMsg);
// $('#header').append(HTMLskillsStart);
// for (var i = bio.skills.length - 1; i >= 0; i--) {
// 	 formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
// 	$('#skills').append(formattedHTMLskills);
// }

// formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.title);

// $('#workExperience').append(HTMLworkStart);
// $('.work-entry').append(formattedHTMLworkEmployer);
// $('.work-entry a').append(formattedHTMLworkTitle);

// formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.name);
// $('#education').append(HTMLschoolStart);
// $('.education-entry').append(formattedHTMLschoolName);
