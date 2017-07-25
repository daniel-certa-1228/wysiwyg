console.log( "wysiwyg.js" );

//Constructor Function
function personInfo(image, name, bio, lifespan) {
	this.Image = image
	this.Name = name;
	this.Bio = bio;
	this.Lifespan = lifespan;
}

function clearText(element) {
  element.value = '';
}

//array to hold famous people
var peopleStorage = [];
// console.log( "peopleStorage", peopleStorage );

//constructions
peopleStorage.push(new personInfo("img/colonel-sanders.jpg", "Colonel Sanders", "Colonel Harland David Sanders was an American businessman, best known for founding fast food chicken restaurant chain Kentucky Fried Chicken (now known as KFC) and later acting as the company's brand ambassador and symbol. His name and image are still symbols of the company.", "September 9, 1890 – December 16, 1980"))
peopleStorage.push(new personInfo("img/iron-sheik.jpg", "The Iron Sheik", "Hossein Khosrow Ali Vaziri (Persian: حسین خسرو علي وزیری‎‎) is an Iranian-American former professional wrestler, amateur wrestler and actor better known by his ring name The Iron Sheik. Vaziri is a one-time world champion, having won the WWF World Heavyweight Championship in 1983.", "March 15, 1942 - "))
peopleStorage.push(new personInfo("img/earhart.jpg", "Amelia Earhart", "Amelia Mary Earhart was an American aviation pioneer and author.  Earhart was the first female aviator to fly solo across the Atlantic Ocean.  During an attempt to make a circumnavigational flight of the globe in 1937 in a Purdue-funded Lockheed Model 10-E Electra, Earhart disappeared over the central Pacific Ocean near Howland Island.", "July 24, 1897 – disappeared July 2, 1937"))
peopleStorage.push(new personInfo("img/Helen-Forrest.jpg", "Helen Forrest", "Helen Forrest was an American singer of traditional pop and swing music.  She served as the 'girl singer' for three of the most popular big bands of the Swing Era (Artie Shaw, Benny Goodman, and Harry James), thereby earning a reputation as 'the voice of the name bands.'", "April 12, 1917 – July 11, 1999"))
peopleStorage.push(new personInfo("img/jpertwee.jpg", "Jon Pertwee", "John Pertwee was an English actor, entertainer and cabaret performer.  Pertwee starred as the Third Doctor in the science-fiction series <em>Doctor Who</em> between 1970 and 1974, and also spent 18 years (1959–1977) playing Chief petty officer Pertwee in <em>The Navy Lark</em> on BBC Radio. He later played the title character in the series <em>Worzel Gummidge</em> from 1979 to 1981, and again from 1987 to 1989.", "July 7, 1919 – May 20, 1996"))
peopleStorage.push(new personInfo("img/randy.jpg", "Randy Rhoads", "Randall William Rhoads was an American heavy metal guitarist who played with Ozzy Osbourne and Quiet Riot. A devoted student of classical guitar, Rhoads combined his classical music influences with his own heavy metal style. He died in a plane accident while on tour with Osbourne in Florida in 1982.", "December 6, 1956 – March 19, 1982"))

//for loop to pull the object data and spit it out to the DOM.
for (var i = 0; i < peopleStorage.length; i++) {

	let personPic = peopleStorage[i].Image;
	let personName = peopleStorage[i].Name;
	let personBio = peopleStorage[i].Bio;
	let personLifespan = peopleStorage[i].Lifespan;

	let peopleCard = `<article class="person-card" id="perCard--${i}">
					  <div class="image-holder">
					  <img class="person-img" id="pic--${i}" src="${personPic}">
					  </div>
					  <header class="card-header" id="header--${i}">
					  <h3 class="person-headline" id="person-h3--${i}">${personName}</h3>
					  </header>
					  <section class="card-bio" id="bio--${i}">
					  <p class="person-bio" id="bio-p--${i}">${personBio}</p>
					  </section>
					  <footer class="card-footer" id="footer--${i}"><p class="person-lifespan" id="lifespan-p--${i}">${personLifespan}</p></footer>
					  </article>`

	// console.log( "peopleCard", peopleCard );
	let personHolder = document.getElementById("person-container");
	// console.log( "personHolder", personHolder );
	personHolder.innerHTML += peopleCard;
};

////////////////////////////////////////////////////////////////
// variable to store the bio element of the selected person
let personBioType = "";
//Event bubbler to determine what was clicked and process it. 
document.getElementById("person-container").addEventListener("click", (event) => {
	let clickTarget = event.target;
	let personSelect = clickTarget.closest("article");
	//set the variable to be the bio element
	personBioType = personSelect.childNodes[5].childNodes[1];
	// console.log( "personBioType", personBioType );
	//add border to selected element
	clickTarget.classList.toggle("border")
	//add focus to text input
	textInput.focus()
});

//grab the text input from the DOM and store in a variable

let textInput = document.getElementById("main-input");

	textInput.addEventListener("keyup", (event) => {
		//capture the typing;
		let typing = event.target.value;
		//set the inner HTML of the bio element to the user typing
		personBioType.innerHTML = typing;
		//set return key to clear input;
		if (event.keyCode === 13) {
			clearText(textInput);
		}
	});





















