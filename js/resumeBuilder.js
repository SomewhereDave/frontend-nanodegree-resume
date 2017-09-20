/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name: "Rick Sanchez",
	role: "Genius",
	contact: {
		mobile: 0826172836,
		email: "rick@shoneys.com",
		twitter: "@wrecked",
		github: "SlickRick",
		location: "Dimension C137"
	},
	pictureURL: "images/me.jpg",
	welcomeMessage: "Get Riggity Riggity Wrecked",
	skills: ['Theft', 'Blackmail', 'Mockery', 'Destruction', 'Murder']
}

formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contact.mobile);
formattedHTMLemail = HTMLemail.replace("%data%", bio.contact.email);
formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contact.github);
formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contact.location);
formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$('#header').append(formattedHTMLheaderName);
$('#header').append(formattedHTMLheaderRole);
$('#topContacts').append(formattedHTMLmobile);
$('#topContacts').append(formattedHTMLemail);
$('#topContacts').append(formattedHTMLtwitter);
$('#topContacts').append(formattedHTMLgithub);
$('#topContacts').append(formattedHTMLlocation);
$('#header').append(formattedHTMLbioPic);
$('#header').append(formattedHTMLwelcomeMsg);
$('#header').append(HTMLskillsStart);
for (var i = bio.skills.length - 1; i >= 0; i--) {
	 formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
	$('#skills').append(formattedHTMLskills);
}

var work = {
	title: "Web Analyst",
	employer: "VRM Digital",
	years: 2,
	city: "Mainz"
}

var education = {
	schools: [
		{
			school: "University of Passau",
			city: "Passau , BR, Germany",
			degree: "Bachelors",
			major: ["Media and Communication", "Business Administration and Economics"]
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
			dates: ,
			url: ""
		}
	]
}

formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.title);

$('#workExperience').append(HTMLworkStart);
$('.work-entry').append(formattedHTMLworkEmployer);
$('.work-entry a').append(formattedHTMLworkTitle);

formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.name);
$('#education').append(HTMLschoolStart);
$('.education-entry').append(formattedHTMLschoolName);

