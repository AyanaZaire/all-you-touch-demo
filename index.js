document.addEventListener("DOMContentLoaded", function() {
	newQuoteHandler()
	dragElement(document.querySelector(".quotes-container"))
    dragElement(document.getElementById("image-1"))
    dragElement(document.getElementById("image-2"))
    dragElement(document.getElementById("image-3"))
})

function newQuoteHandler() {
    let button = document.getElementById("quote-button")
    button.addEventListener("click", () => {
        let quoteContentDiv = document.querySelector(".quotes-content")
        getRandomQuote()
    })
}

function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotesArray.length)
    displayQuote(quotesArray[randomQuote])
}

function displayQuote(quote) {
	console.log(quote);
	let quoteContentDiv = document.querySelector(".quotes-content")
	quoteContentDiv.innerText = quote
}

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;
	
	function dragMouseDown(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // get the mouse cursor position at startup:
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  document.onmouseup = closeDragElement;
	  // call a function whenever the cursor moves:
	  document.onmousemove = elementDrag;
	}
	
	function elementDrag(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // calculate the new cursor position:
	  pos1 = pos3 - e.clientX;
	  pos2 = pos4 - e.clientY;
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  // set the element's new position:
	  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}
	
	function closeDragElement() {
	  // stop moving when mouse button is released:
	  document.onmouseup = null;
	  document.onmousemove = null;
	}
}

const quotesArray = [
    `Chapter 1
    
    All that you touch
    You Change.
    All that you Change
    Changes you.
    The only lasting truth
    Is Change.
    God Is Change.`,
    `Chapter 2

    A gift of God
    May sear unready fingers.`,
    `Chapter 3
    
    We do not worship God.
    We perceive and attend God.
    We learn from God.
    With forethought and work,
    We shape God.
    In the end, we yield to God.
    We adapt and endure,
    For we are Earthseed
    And God is Change.`,
    `Chapter 4
    
    A victim of God may,
    Through learning adaption,
    Become a partner of God,
    A victim of God may,
    Through forethought and planning,
    Become a shaper of God.
    Or a victim of God may,
    Through shortsightedness and fear,
    Remain God’s victim,
    God’s plaything,
    God’s prey.`,
    `Chapter 5
    
    Belief
    Initiates and guides action—
    Or it does nothing.`,
    `Chapter 6
    
    Drowning people
    Sometimes die
    Fighting their rescuers.`,
    `Chapter 7
    
    We are all Godseed, but no more or less so than any other aspect of the universe, Godseed is all there is—all that Changes. Earthseed is all that spreads Earthlife to new earths. The universe is Godseed. Only we are Earthseed. And the Destiny of Earthseed is to take root among the stars.`,
    `Chapter 8
    
    To get along with God,
    Consider the consequences of your behavior.`,
    `Chapter 9
    
    All struggles
    Are essentially
    power struggles.
    Who will rule,
    Who will lead,
    Who will define,
    refine,
    confine,
    design,
    Who will dominate.
    All struggles
    Are essentially power struggles,
    And most are no more intellectual
    than two rams
    knocking their heads together`,
    `Chapter 10
    
    When apparent stability disintegrates,
    As it must—
    God is Change—
    People tend to give in
    To fear and depression,
    To need and greed.
    When no influence is strong enough
    To unify people
    They divide.
    They struggle,
    One against one,
    Group against group,
    For survival, position, power.
    They remember old hates and generate new ones,
    They create chaos and nurture it.
    They kill and kill and kill,
    Until they are exhausted and destroyed,
    Until they are conquered by outside forces,
    Or until one of them becomes
    A leader
    Most will follow,
    Or a tyrant
    Most fear.`,
    `Chapter 11
    
    Any Change may bear seeds of benefit.
    Seek them out.
    Any Change may bear seeds of harm.
    Beware.
    God is infinitely malleable.
    God is Change.`,
    `Chapter 12
    
    We are Earthseed
    The life that perceives itself
    Changing.`,
    `Chapter 13
    
    There is no end
    To what a living world
    Will demand of you.`,
    `Chapter 14
    
    In order to rise
    From its own ashes
    A phoenix
    First
    Must
    Burn.`,
    `Chapter 15
    
    Kindness eases Change`,
    `Chapter 16
    
    Earthseed
    Cast on new ground
    Must first perceive
    That it knows nothing.`,
    `Chapter 17
    
    Embrace diversity.
    Unite—
    Or be divided,
    robbed,
    ruled,
    killed
    By those who see you as prey.
    Embrace diversity
    Or be destroyed.`,
    `Chapter 18
    
    Once or twice
    each week
    A Gathering of Earthseed
    is a good and necessary thing.
    It vents emotion, then
    quiets the mind.
    It focuses attention,
    strengthens purpose, and
    unifies people.`,
    `Chapter 19
    
    Changes.
    The galaxies move through space.
    The stars ignite,
    burn,
    age,
    cool,
    Evolving.
    God is Change.
    God prevails.`,
    `Chapter 20
    
    God is neither good
    nor evil,
    neither loving
    nor hating.
    God is Power.
    God is Change.
    We must find the rest of what we need
    within ourselves,
    in one another,
    in our Destiny.`,
    `Chapter 21
    
    The Self must create
    Its own reasons for being.
    To shape God,
    Shape Self.`,
    `Chapter 22
    
    As wind,
    As water,
    As fire,
    As life,
    God
    Is both creative and destructive,
    Demanding and yielding,
    Sculptor and clay.
    God is Infinite Potential:
    God is Change.`,
    `Chapter 23
    
    Your teachers
    Are all around you.
    All that you perceive,
    All that you experience,
    All that is given to you
    or taken from you,
    All that you love or hate,
    need or fear
    Will teach you—
    If you will learn.
    God is your first
    and your last teacher.
    God is your harshest teacher:
    subtle,
    demanding.
    Learn or die.`,
    `Chapter 24
    
    Respect God:
    Pray working.
    Pray learning,
    planning,
    doing.
    Pray creating,
    teaching,
    reaching.
    Pray working.
    Pray to focus your thoughts,
    still your fears,
    strengthen your purpose.
    Respect God.
    Shape God.
    Pray working.`,
    `Chapter 25
    
    Create no images of God.
    Accept the images
    that God has provided.
    They are everywhere,
    in everything.
    God is Change—
    Seed to tree,
    tree to forest;
    Rain to river,
    river to sea;
    Grubs to bees,
    bees to swarm.
    From one, many;
    from many, one;
    Forever uniting, growing, dissolving—
    forever Changing.
    The universe
    is God’s self-portrait.`
]