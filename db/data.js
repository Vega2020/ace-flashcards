module.exports = [
  {
    tags: ["html", "acronym"],
    q: "What does HTML stand for?",
    a: "Hyper Text Markup Language.",
  },
  // copy the format above to enter more questions.
  { 
    tags: ["html"], 
    q: "Describe HTML.", 
    a: "Hypertext Markup Language or HTML is a markup language that is used to create website templates or WebPages to present the content on the World Wide Web." 
  },
  { 
    tags: ["html"], 
    q: "Write the basic structure of the HTML template?", 
    a: "The basic structure of the HTML template is:<html> <head> <title></title> </head> <body> </body></html>" 
  },
  { 
    tags: ["html"], 
    q: "What is HTML5?", 
    a: "HTML5 is the latest or updated version of the markup language that defines HTML." 
  },
  { 
    tags: ["html"], 
    q: "Name some new features which were not present in HTML but are added to HTML5?", 
    a: "Some new features in HTML5 include: DOCTYPE declaration: <!DOCTYPE html> section: Section tag defines a section in the document, such as a header, footer or in other sections of the document. It is used to define the structure of the document. <section></section> header: Header tag defines the head section of the document. A header section always sticks at the top of the document. <header></header> footer: Footer tag defines the footer section of the document. A footer section always sticks at the bottom of the document. <footer></footer> article: Article tag defines an independent piece of the content of a document. <article> </article> main: The main tag defines the main section in the document which contains the main content of the document. <main></main> figcaption: Figcaption tag defines the caption for the media elements such as an image or video. <figcaption></figcaption>" 
  },
  { 
    tags: ["html"], 
    q: "What is Anchor tag and how can you open an URL into a new tab when clicked?", 
    a: "Anchor tag in HTML is used to link between two sections or two different web pages or website templates. To open an URL into a new tab in the browser upon a click, we need to add target attribute equal to _blank. <a href=”#” target=”_blank”></a>" 
  },
  { 
    tags: ["html"], 
    q: "Define Semantic elements in HTML.", 
    a: "Semantic elements are HTML elements that represent its meaning to the browser and developer about its contents." 
  },
  { 
    tags: ["html"], 
    q: "Define attributes in HTML tag.", 
    a: "The HTML tag contains a field inside their tag which is called attributes of that tag. For Example: <img src=”#”> here in this tag src is img tag attributes.<input type=” text”> here in this tag type is input tag attributes." 
  },
  { 
    tags: ["html"], 
    q: "Can we modify the attribute's value of the HTML tag dynamically?", 
    a: "Yes, we can modify the value of the attributes by using JavaScript. Below is the input element whose attribute will be modified from text to password, JS code to modify the attribute value: <input type=“text” id=“inputField”>document.getElementById(“inputField”).attr(“type”, “password”);" 
  },
  { 
    tags: ["html"], 
    q: "How can we comment in HTML?", 
    a: "Comments are used by developers to keep a track of the code functionality and also help the other developers in understanding the code functionalities easily. The commented outlines will not be shown in the browser. To comment a line, the line should start by this <!– and end by this –>. Comments can be of one line or of multiple lines. For Example: <!-- This is one line comment ?<!-- This is multiple       line of two or       more line -->" 
  },
  { 
    tags: ["html"], 
    q: "What are inline elements and block-level elements in HTML?", 
    a: "Block elements are the blocks that take the full available width and always start from a new line. It will stretch itself to the full available width of the available container width. Block-level elements are <div>, <p>, <img>, <section> and many more. Inline elements are the elements that will only take the width that is required to fit into the container. For Example, take the flow of text on the page. When the line of the text takes the full width of the container it wraps itself into a new line and again goes in the same way. Whereas, the inline element will take only that much space or width that it is needed for them. Inline elements are <span>, <label>, <a>, <b> and many more." 
  },
  { 
    tags: ["html"], 
    q: "Can we change inline elements into block-level elements?", 
    a: "Yes, we can change inline elements into block-level elements by adding display equal to block in its CSS tag. Writing it will change the inline elements into block elements and then inline elements will also take the full width of the container. display: block;" 
  },
  { 
    tags: ["html"], 
    q: "What are the different browsers that support HTML5?", 
    a: "All modern browsers support HTML5 elements except some old browsers. But fortunately, most of the browsers will take html5 elements as inline elements." 
  },
  { 
    tags: ["html"], 
    q: "What are <br> tags in HTML?", 
    a: "<br> tags are used to enter a new line into the HTML contents. These tags are generally used to separate two different lines of text between each other." 
  },
  { 
    tags: ["html"], 
    q: "Why Meta tags are used in HTML?", 
    a: "Meta tags in HTML are used by the developer to tell the browser about the page description, author of the template, character set, keywords and many more.Meta tags are used for search engine optimization to tell the search engine about the page contents."
  },
  { 
    tags: ["html"], 
    q: "Explain list elements in HTML.", 
    a: "Enlisted below are the list elements in HTML: Ordered List (<ol>) – An Ordered List or ol tag is the list that lists the items in an ordered way, i.e. numbered or alphabetically. Unordered List (<ul>) – An Unordered List or ul tag is the list which will list the items in an unordered way, i.e. in bulleted format or in any other format. Definition List (<dl>) – A Definition List or dl tag arrange the items in the way in which they are arranged in a dictionary." 
  },
  { 
    tags: ["html"], 
    q: "Define forms in HTML.", 
    a: "Forms in HTML are required when we want to collect the user information whenever a user fills any form or provides any details and when we want to save it into our database." 
  },
  { 
    tags: ["html"], 
    q: "How can we create a hyperlink in HTML", 
    a: "An anchor tag or <a> tag in HTML is used to create hyperlinks. This creates a path between two different HTML web pages.Hyperlinks can be displayed in three ways: Unvisited Link – These links are blue in color and underlined. Visited Link – These links are purple in color and underlined. Active Link – These links are red in color and underlined." 
  },
  { 
    tags: ["html"], 
    q: "What is the SVG element?", 
    a: "SVG is a followed XML format; it stands for Scalable Vector Graphics which is used to create vector graphics with the support for interactivity and animation. SVG is resolution independent as it does not lose its quality when they are resized or zoomed." 
  },
  { 
    tags: ["html"], 
    q: "Why do we use the required attribute in HTML?", 
    a: "The required attribute is used in HTML to make the field mandatory. It forces the user to fill that particular field to submit the form. If the field is input then it will throw a default HTML error. <input type='email' name = 'user_email' required />" 
  },
  { 
    tags: ["css"], 
    q: "What does CSS stand for?", 
    a: "Cascading Style Sheet />" 
  },
  { 
    tags: ["css"], 
    q: "What is CSS?", 
    a: "CSS outlines the style of an HTML webpage. It is a language by which we can set the behavior of an HTML webpage. It describes how the HTML content will be shown on screen. CSS controls the layout of several HTML web pages." 
  },
  { 
    tags: ["css"], 
    q: "Name all the modules which are used in the current version of CSS?", 
    a: "There are several modules in CSS as stated below: Selectors, Box Model, Backgrounds and Borders, Text Effects, 2D/3D Transformations, Animations, Multiple Column Layout, User Interface." 
  },
  { 
    tags: ["css"], 
    q: "Cite different types of CSS.", 
    a: "There are three types of CSS as mentioned below: External: These are written in separate files. Internal: These are cited at the top of the web page code document. Inline: These are written right next to the text." 
  },
  { 
    tags: ["css"], 
    q: "Why is the external style sheet useful? ", 
    a: "External style sheet is very useful as we write all the styling codes in a single file and it can be used anywhere by just referring to the link of that external style sheet file. So, if we do any changes in that external file, then the changes can also be observed on the webpage. Thus we can say that it is very useful and it makes your work easy while working on larger files." 
  },
  { 
    tags: ["css"], 
    q: "How to use CSS selector?", 
    a: "By using the CSS selector, we can choose the content which we want to style so that we can say that it is a bridge between the style sheet and the HTML files. The syntax for CSS selector is “select” HTML elements created on their id, class, type, etc. " 
  },
  { 
    tags: ["css"], 
    q: "Explain the term Responsive web design.", 
    a: "It is a method in which we design and develop a web page according to the user activities and conditions which are based on various components like the size of the screen, portability of the web page on the different devices, etc. It is done by using different flexible layouts and grids." 
  },
  { 
    tags: ["css"], 
    q: "What is CSS specificity?", 
    a: "CSS specificity is a score or rank that decides which style declaration has to be used to an element. (*) this universal selector has low specificity while ID selectors have high specificity.There are four categories in CSS which authorize the specificity level of the selector. Inline style, IDs, Classes, Attributes, and pseudo-classes. Elements and pseudo-elements." 
  },
  { 
    tags: ["css"], 
    q: "How do we make a rounded corner by using CSS?", 
    a: "We can make a rounded corner by using the property “border-radius”. We can apply this property to any element." 
  },
  { 
    tags: ["css"], 
    q: "What are gradients in CSS?", 
    a: "It is a property of CSS which allows you to display a smooth transformation between two or more than two specified colors. There are two types of gradients that are present in CSS. They are: Linear Gradient & Radial Gradient" 
  },
  { 
    tags: ["css"], 
    q: "What is the difference between padding and margin?", 
    a: "In CSS, the margin is the property by which we can create space around elements. We can even create space to the exterior defined borders & padding is the property by which we can generate space around an element’s content as well as inside any known border." 
  },
  { 
    tags: ["css"], 
    q: "Name the margin properties & the defined values in CSS.", 
    a: "margin-top, margin-right, margin-bottom, Margin-left, Auto – Using this property browser calculates the margin. Length – It sets the margin values in px,pt,cm etc. % – It sets the width % of the element. Inherit – By this property we can inherit the margin property from the parent element." 
  },
  { 
    tags: ["css"], 
    q: "Name the padding properties in CSS.", 
    a: "Padding-top Padding-right Padding-bottom Padding-left" 
  },
  { 
    tags: ["css"], 
    q: "What is the use of the Box Model in CSS?", 
    a: "In CSS, the box model is a box that binds all the HTML elements and it includes features like margins, border, padding, and the actual content. By using a box model we will get the authority to add the borders all around the elements and we can also define the space between the elements." 
  },
  { 
    tags: ["css"], 
    q: "How can we add icons to the web page", 
    a: "We can add icons to the HTML webpage by using an icon library like font-awesome. We have to add the name of the given icon class to any inline HTML element. (<i> or <span>) . Icons in the icon libraries are scalable vectors that can be customized with CSS." 
  },
  { 
    tags: ["css"], 
    q: "What is a CSS pseudo-class?", 
    a: "This class can be used by styling an element when a user snooped over it and also it can style an HTML element when it gets the focus. selector:pseudo-class {property:value;}" 
  },
  { 
    tags: ["css"], 
    q: "Explain the concept of pseudo-elements in CSS.", 
    a: "It is a feature of CSS which is used to style the given parts of an element.For Example, we can style the first letter or line of an HTML element.selector::pseudo-element {property:value;}" 
  },
  { 
    tags: ["css"], 
    q: "What is CSS opacity?", 
    a: "It is the property that elaborates on the transparency of an element. By this property, we can transparent the image that can take the values from 0.0-1.0. If the value is lower, then the image is more transparent. IE8 and earlier versions of the browser can take the values from 0-100. img { opacity: 0.6;filter: alpha(opacity=60); /* For IE8 and earlier */}" 
  },
  { 
    tags: ["css"], 
    q: "Write all the position states used in CSS.", 
    a: "Static(default), Relative, Fixed, Absolute" 
  },
  { 
    tags: ["css"], 
    q: "What are the differences between relative and absolute in CSS?", 
    a: "The main difference between relative and absolute is that “relative” is used for the same tag in CSS and it means that if we write the left:10px then the padding will shift to 10px in the left while absolute is totally relative to the non-static parent. It means, if we write left:10px then the result will be 10px far from the left edge of the parent element." 
  },
  { 
    tags: ["Javascript"], 
    q: "What is JavaScript?", 
    a: "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers." 
  },
  { 
    tags: ["Javascript"], 
    q: "What are the data types supported by JavaScript?", 
    a: "The data types supported by JavaScript are: Undefined, Null, Boolean, String, Symbol, Number, Object" 
  },
  { 
    tags: ["Javascript"], 
    q: "What are the features of JavaScript", 
    a: "Following are the features of JavaScript: It is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complementary to and integrated with Java. It is an open and cross-platform scripting language." 
  },
  { 
    tags: ["Javascript"], 
    q: "Is JavaScript a case-sensitive language?", 
    a: "Yes, JavaScript is a case sensitive language.  The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters." 
  },
  { 
    tags: ["Javascript"], 
    q: "What are the advantages of JavaScript?", 
    a: "Following are the advantages of using JavaScript −Less server interaction − You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.Immediate feedback to the visitors − They don’t have to wait for a page reload to see if they have forgotten to enter something.Increased interactivity − You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard.Richer interfaces − You can use JavaScript to include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors." 
  },
  { 
    tags: ["Javascript"], 
    q: "Can you assign an anonymous function to a variable and pass it as an argument to another function?", 
    a: "Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function." 
  },
  { 
    tags: ["Javascript"], 
    q: "What are the scopes of a variable in JavaScript?", 
    a: "The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes. • Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code. • Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function." 
  },
  { 
    tags: ["Javascript"], 
    q: "What is the purpose of ‘This’ operator in JavaScript?", 
    a: "The JavaScript this keyword refers to the object it belongs to. This has different values depending on where it is used. In a method, this refers to the owner object and in a function, this refers to the global object." 
  },
  { 
    tags: ["Javascript"], 
    q: "What is Callback?", 
    a: "A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘. In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions." 
  },
  { 
    tags: ["Javascript"], 
    q: "What is Closure? Give an example.", 
    a: "Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it." 
  },
  { 
    tags: ["Javascript"], 
    q: "What are the variable naming conventions in JavaScript?", 
    a: "The following rules are to be followed while naming variables in JavaScript: You should not use any of the JavaScript reserved keyword as variable name. For example, break or boolean variable names are not valid. JavaScript variable names should not start with a numeral (0-9). They must begin with a letter or the underscore character. For example, 123name is an invalid variable name but _123name or name123 is a valid one. JavaScript variable names are case sensitive. For example, Test and test are two different variables." 
  },
  { 
    tags: ["Javascript"], 
    q: "How does TypeOf Operator work?", 
    a: "The typeof operator is used to get the data type of its operand. The operand can be either a literal or a data structure such as a variable, a function, or an object. It is a unary operator that is placed before its single operand, which can be of any type. Its value is a string indicating the data type of the operand." 
  },
  { 
    tags: ["Javascript"], 
    q: "How to read a cookie using JavaScript?", 
    a: "Reading a cookie is just as simple as writing one, because the value of the document.cookie object is the cookie. So you can use this string whenever you want to access the cookie. The document.cookie string will keep a list of name = value pairs separated by semicolons, where name is the name of a cookie and value is its string value. You can use strings’ split() function to break the string into key and values." 
  },
  { 
    tags: ["Javascript"], 
    q: "How to delete a cookie using JavaScript?", 
    a: "If you want to delete a cookie so that subsequent attempts to read the cookie return nothing, you just need to set the expiration date to a time in the past. You should define the cookie path to ensure that you delete the right cookie. Some browsers will not let you delete a cookie if you don’t specify the path." 
  },
  { 
    tags: ["Javascript"], 
    q: "What is the difference between Attributes and Property?", 
    a: "Attributes-  provide more details on an element like id, type, value etc. Property-  is the value assigned to the property like type=”text”, value=’Name’ etc." 
  },
  { 
    tags: ["Javascript"], 
    q: "In how many ways a JavaScript code can be involved in an HTML file?", 
    a: "There are 3 different ways in which a JavaScript code can be involved in an HTML file: Inline, Internal, External. An inline function is a JavaScript function, which is assigned to a variable created at runtime. You can differentiate between Inline Functions and Anonymous since an inline function is assigned to a variable and can be easily reused. When you need a JavaScript for a function, you can either have the script integrated in the page you are working on, or you can have it placed in a separate file that you call, when needed. This is the difference between an internal script and an external script." 
  },
  { 
    tags: ["Javascript"], 
    q: "What are the ways to define a variable in JavaScript?", 
    a: "The three possible ways of defining a variable in JavaScript are: Var – The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable. Example: var a =10; Variable declarations are processed before the execution of the code.Const – The idea of const functions is not allow them to modify the object on which they are called. When a function is declared as const, it can be called on any type of object. Let – It is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in." 
  },
  { 
    tags: ["Javascript"], 
    q: "What is a Typed language?", 
    a: "Typed Language is in which the values are associated with values and not with variables. It is of two types: Dynamically: in this, the variable can hold multiple types; like in JS a variable can take number, chars. Statically: in this, the variable can hold only one type, like in Java a variable declared of string can take only set of characters and nothing else." 
  },
  { 
    tags: ["Javascript"], 
    q: "What is the difference between Local storage & Session storage?", 
    a: "Local Storage – The data is not sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) – reducing the amount of traffic between client and server. It will stay until it is manually cleared through settings or program. Session Storage – It is similar to local storage; the only difference is while data stored in local storage has no expiration time, data stored in session storage gets cleared when the page session ends. Session Storage will leave when the browser is closed." 
  },
  { 
    tags: ["Javascript"], 
    q: "What is the difference between the operators ‘==‘ & ‘===‘", 
    a: "The main difference between “==” and “===” operator is that formerly compares variable by making type correction e.g. if you compare a number with a string with numeric literal, == allows that, but === doesn’t allow that, because it not only checks the value but also type of two variable, if two variables are not of the same type “===” return false, while “==” return true." 
  },
  { 
    tags: ["jQuery"], 
    q: "What does CSS stand for?", 
    a: "Cascading Style Sheet />" 
  },
];
