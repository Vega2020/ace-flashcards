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
    tags: ["javascript"], 
    q: "What is JavaScript?", 
    a: "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers." 
  },
  { 
    tags: ["javascript"], 
    q: "What are the data types supported by JavaScript?", 
    a: "The data types supported by JavaScript are: Undefined, Null, Boolean, String, Symbol, Number, Object" 
  },
  { 
    tags: ["javascript"], 
    q: "What are the features of JavaScript", 
    a: "Following are the features of JavaScript: It is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complementary to and integrated with Java. It is an open and cross-platform scripting language." 
  },
  { 
    tags: ["javascript"], 
    q: "Is JavaScript a case-sensitive language?", 
    a: "Yes, JavaScript is a case sensitive language.  The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters." 
  },
  { 
    tags: ["javascript"], 
    q: "What are the advantages of JavaScript?", 
    a: "Following are the advantages of using JavaScript −Less server interaction − You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.Immediate feedback to the visitors − They don’t have to wait for a page reload to see if they have forgotten to enter something.Increased interactivity − You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard.Richer interfaces − You can use JavaScript to include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors." 
  },
  { 
    tags: ["javascript"], 
    q: "Can you assign an anonymous function to a variable and pass it as an argument to another function?", 
    a: "Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function." 
  },
  { 
    tags: ["javascript"], 
    q: "What are the scopes of a variable in JavaScript?", 
    a: "The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes. • Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code. • Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function." 
  },
  { 
    tags: ["javascript"], 
    q: "What is the purpose of ‘This’ operator in JavaScript?", 
    a: "The JavaScript this keyword refers to the object it belongs to. This has different values depending on where it is used. In a method, this refers to the owner object and in a function, this refers to the global object." 
  },
  { 
    tags: ["javascript"], 
    q: "What is Callback?", 
    a: "A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘. In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions." 
  },
  { 
    tags: ["javascript"], 
    q: "What is Closure? Give an example.", 
    a: "Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it." 
  },
  { 
    tags: ["javascript"], 
    q: "What are the variable naming conventions in JavaScript?", 
    a: "The following rules are to be followed while naming variables in JavaScript: You should not use any of the JavaScript reserved keyword as variable name. For example, break or boolean variable names are not valid. JavaScript variable names should not start with a numeral (0-9). They must begin with a letter or the underscore character. For example, 123name is an invalid variable name but _123name or name123 is a valid one. JavaScript variable names are case sensitive. For example, Test and test are two different variables." 
  },
  { 
    tags: ["javascript"], 
    q: "How does TypeOf Operator work?", 
    a: "The typeof operator is used to get the data type of its operand. The operand can be either a literal or a data structure such as a variable, a function, or an object. It is a unary operator that is placed before its single operand, which can be of any type. Its value is a string indicating the data type of the operand." 
  },
  { 
    tags: ["javascript"], 
    q: "How to read a cookie using JavaScript?", 
    a: "Reading a cookie is just as simple as writing one, because the value of the document.cookie object is the cookie. So you can use this string whenever you want to access the cookie. The document.cookie string will keep a list of name = value pairs separated by semicolons, where name is the name of a cookie and value is its string value. You can use strings’ split() function to break the string into key and values." 
  },
  { 
    tags: ["javascript"], 
    q: "How to delete a cookie using JavaScript?", 
    a: "If you want to delete a cookie so that subsequent attempts to read the cookie return nothing, you just need to set the expiration date to a time in the past. You should define the cookie path to ensure that you delete the right cookie. Some browsers will not let you delete a cookie if you don’t specify the path." 
  },
  { 
    tags: ["javascript"], 
    q: "What is the difference between Attributes and Property?", 
    a: "Attributes-  provide more details on an element like id, type, value etc. Property-  is the value assigned to the property like type=”text”, value=’Name’ etc." 
  },
  { 
    tags: ["javascript"], 
    q: "In how many ways a JavaScript code can be involved in an HTML file?", 
    a: "There are 3 different ways in which a JavaScript code can be involved in an HTML file: Inline, Internal, External. An inline function is a JavaScript function, which is assigned to a variable created at runtime. You can differentiate between Inline Functions and Anonymous since an inline function is assigned to a variable and can be easily reused. When you need a JavaScript for a function, you can either have the script integrated in the page you are working on, or you can have it placed in a separate file that you call, when needed. This is the difference between an internal script and an external script." 
  },
  { 
    tags: ["javascript"], 
    q: "What are the ways to define a variable in JavaScript?", 
    a: "The three possible ways of defining a variable in JavaScript are: Var – The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable. Example: var a =10; Variable declarations are processed before the execution of the code.Const – The idea of const functions is not allow them to modify the object on which they are called. When a function is declared as const, it can be called on any type of object. Let – It is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in." 
  },
  { 
    tags: ["javascript"], 
    q: "What is a Typed language?", 
    a: "Typed Language is in which the values are associated with values and not with variables. It is of two types: Dynamically: in this, the variable can hold multiple types; like in JS a variable can take number, chars. Statically: in this, the variable can hold only one type, like in Java a variable declared of string can take only set of characters and nothing else." 
  },
  { 
    tags: ["javascript"], 
    q: "What is the difference between Local storage & Session storage?", 
    a: "Local Storage – The data is not sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) – reducing the amount of traffic between client and server. It will stay until it is manually cleared through settings or program. Session Storage – It is similar to local storage; the only difference is while data stored in local storage has no expiration time, data stored in session storage gets cleared when the page session ends. Session Storage will leave when the browser is closed." 
  },
  { 
    tags: ["javascript"], 
    q: "What is the difference between the operators ‘==‘ & ‘===‘", 
    a: "The main difference between “==” and “===” operator is that formerly compares variable by making type correction e.g. if you compare a number with a string with numeric literal, == allows that, but === doesn’t allow that, because it not only checks the value but also type of two variable, if two variables are not of the same type “===” return false, while “==” return true." 
  },
  { 
    tags: ["jquery"], 
    q: "What is jQuery?", 
    a: "jQuery is a feature-rich JavaScript library that makes HTML document traversal and manipulation, event handling, animation, and Ajax much simpler and faster. jQuery has an easy-to-use API that works across many browsers. UI related functions can be written with minimal lines of code using jQuery." 
  },
  { 
    tags: ["jquery"], 
    q: "What is the difference between JavaScript and jQuery?", 
    a: "JavaScript is an interpreted programming language whereas jQuery is a library with APIs built for JavaScript. jQuery simplifies the use of the JavaScript language." 
  },
  { 
    tags: ["jquery"], 
    q: "What are the effects methods used in jQuery?", 
    a: "jQuery enables us to add effects on a web page. jQuery effects can be categorized into fading, sliding, hiding/showing and animation effects. jQuery provides many methods for effects on a web page. These are the effects methods used in jQuery: show() - It displays or shows the selected elements. hide() - It hides the matched or selected elements.toggle() - It shows or hides the matched elements. In other words, it toggles between the hide() and show() methods.fadeIn() - It shows the matched elements by fading it to opaque. In other words, it fades in the selected elements. fadeOut() - It shows the matched elements by fading it to transparent. In other words, it fades out the selected elements." 
  },
  { 
    tags: ["jquery"], 
    q: "What is jQuery Ajax?", 
    a: "AJAX is an acronym standing for Asynchronous JavaScript and XML and this technology helps us to load data and exchange data with the server without a browser page refresh. JQuery is a great tool that provides a rich set of AJAX methods to develop next-generation web applications." 
  },
  { 
    tags: ["jquery"], 
    q: "What does ajax() method do?", 
    a: "This method sends an asynchronous http request to the server." 
  },
  { 
    tags: ["jquery"], 
    q: "What does the ajax method load() do?", 
    a: "The load() method sends an http request to load the html or text content from the server and adds them to the DOM element(s)." 
  },
  { 
    tags: ["jquery"], 
    q: "What are the jQuery Ajax Events?", 
    a: "The jQuery library also includes events that will be fired based on the state of the Ajax request, these are called Ajax events." 
  },
  { 
    tags: ["jquery"], 
    q: "What does the jQuery Ajax event method ajaxComplete() do?", 
    a: "Whenever an Ajax request completes, jQuery triggers the ajaxComplete event. Any and all handlers that have been registered with the .ajaxComplete() method are executed at this time." 
  },
  { 
    tags: ["jquery"], 
    q: "What does the jQuery ajax event method ajaxStart() do?", 
    a: "Whenever an Ajax request is about to be sent, jQuery checks whether there are any other outstanding Ajax requests. If none are in progress, jQuery triggers the ajaxStart event. Any and all handlers that have been registered with the .ajaxStart() method are executed at this time." 
  },
  { 
    tags: ["jquery"], 
    q: "What are Events in jQuery?", 
    a: "Responding to user actions on a webpage is called events. jQuery provides simple methods for attaching event handlers to selections. When an event occurs, the provided function is executed." 
  },
  { 
    tags: ["jquery"], 
    q: "What are the categories in jquery Events?", 
    a: "The common DOM events are as follows: Form, Keyboard, Mouse, Browser, Document, Loading" 
  },
  { 
    tags: ["jquery"], 
    q: "What is the use of css() method in JQuery?", 
    a: "The jQuery CSS() method is used to get (return)or set style properties or values for selected elements. It facilitates you to get one or more style properties." 
  },
  { 
    tags: ["jquery"], 
    q: "What is the difference between find and children methods?", 
    a: "Both the methods are used to filter the child of the matched elements. Find method is used to find all levels down the DOM tree but children method searches only a single level down the DOM tree." 
  },
  { 
    tags: ["jquery"], 
    q: "What is the difference between the ID selector and class selector in jQuery?", 
    a: "ID selector and class selector are the same as they are in CSS. ID selector uses ID while the class selector uses a class to select elements. You use an ID selector to select just one element. If you want to select a group of elements, having the same CSS class, you can use the class selector." 
  },
  { 
    tags: ["jquery"], 
    q: "What is the difference between onload() and document.ready() methods?", 
    a: "Body.Onload() event will be called only after the DOM and associated resources like images get loaded, but jQuery's document.ready() event will be called once the DOM is loaded and it does not wait for the resources such as images to be loaded." 
  },
  { 
    tags: ["jquery"], 
    q: "What is jQuery connect?", 
    a: "A ‘ jQuery connect’ is a plug-in used to connect or bind a function with another function. Connect is used to execute a function whenever a function from another object or plug-in is executed." 
  },
  { 
    tags: ["jquery"], 
    q: " Is jQuery required for bootstrap?", 
    a: "Bootstrap uses jQuery for JavaScript plugins (like models, tooltips, etc). However, if you just use the CSS part of Bootstrap, you don't need jQuery." 
  },
  { 
    tags: ["jquery"], 
    q: "What is the difference between jquery.min.js and jquery.js?", 
    a: "jquery.min.js is a compressed version of jquery.js(whitespaces and comments are removed, shorter variable names are used and so on) in order to preserve bandwidth. In terms of functionality, they are absolutely the same. It is recommended to use this compressed version in the production environment. The efficiency of web page increases when the minimized version of jQuery is used." 
  },
  { 
    tags: ["jquery"], 
    q: "Is it possible that jQuery HTML works for both HTML and XML documents?", 
    a: "No, jQuery HTML only works for HTML documents. It doesn't work for XML documents." 
  },
  { 
    tags: ["jquery"], 
    q: "Explain the difference between $(this) and this in jQuery?", 
    a: "$() is the jQuery constructor function, whereas this is a reference to the DOM element. To use jQuery methods, we use $(this)." 
  },
  { 
    tags: ["node"], 
    q: "What is Node.js? What is it used for?", 
    a: "Node.js is a run-time JavaScript environment built on top of Chrome’s V8 engine. It uses an event-driven, non-blocking I/O model. It is lightweight and so efficient. Node.js has a package ecosystem called npm. Node.js can be used to build different types of applications such as web application, real-time chat application, REST API server etc. However, it is mainly used to build network programs like web servers, similar to PHP, Java, or ASP.NET. Node.js was developed by Ryan Dahl in 2009." 
  },
  { 
    tags: ["node"], 
    q: "What is Event-driven programming?", 
    a: "Event-driven programming is building our application based on and respond to events. When an event occurs, like click or keypress, we are running a callback function which is registered to the element for that event."
  },
  { 
    tags: ["node"], 
    q: "What is Event loop in Node.js work? And How does it work?", 
    a: "The Event loop handles all async callbacks. Node.js (or JavaScript) is a single-threaded, event-driven language. This means that we can attach listeners to events, and when a said event fires, the listener executes the callback we provided.Whenever we are call setTimeout, http.get and fs.readFile, Node.js runs this operations and further continue to run other code without waiting for the output. When the operation is finished, it receives the output and runs our callback function. So all the callback functions are queued in an loop, and will run one-by-one when the response has been received." 
  },
  { 
    tags: ["node"], 
    q: "What is REPL in Node.js?", 
    a: "REPL means Read-Eval-Print-Loop. It is a virtual environment that comes with Node.js. We can quickly test our JavaScript code in the Node.js REPL environment. To launch the REPL in Node.js, just open the command prompt and type node. It will change the prompt to > in Windows and MAC. Now we can type and run our JavaScript easily. For example, if we type 10 + 20, it will print 30 in the next line." 
  },
  { 
    tags: ["node"], 
    q: "What is the difference between Asynchronous and Non-blocking?", 
    a: "Asynchronous literally means not synchronous. We are making HTTP requests which are asynchronous, means we are not waiting for the server response. We continue with other block and respond to the server response when we received. The term Non-Blocking is widely used with IO. For example non-blocking read/write calls return with whatever they can do and expect caller to execute the call again. Read will wait until it has some data and put calling thread to sleep." 
  },
  { 
    tags: ["node"], 
    q: "What is the difference between setImmediate() vs setTimeout()?", 
    a: "setImmediate() and setTimeout() are similar, but behave in different ways depending on when they are called.setImmediate() is designed to execute a script once the current poll (event loop) phase completes. setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed. The order in which the timers are executed will vary depending on the context in which they are called. If both are called from within the main module, then timing will be bound by the performance of the process." 
  },
  { 
    tags: ["node"], 
    q: "What is package.json? What is it used for?", 
    a: "This file holds various metadata information about the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. Some of the fields are: name, name, description, author and dependencies. When someone installs our project through npm, all the dependencies listed will be installed as well. Additionally, if someone runs npm install in the root directory of our project, it will install all the dependencies to ./node_modules directory." 
  },
  { 
    tags: ["node"], 
    q: "What are some of the most popular modules of Node.js?", 
    a: "There are many most popular, most starred or most downloaded modules in Node.js. Some of them are: express, async, browserify, socket.io, bower, gulp, grunt, etc" 
  },
  { 
    tags: ["node"], 
    q: "What is the difference between readFile vs createReadStream in Node.js?", 
    a: "readFile — is for asynchronously reads the entire contents of a file. It will read the file completely into memory before making it available to the User. readFileSync is synchronous version of readFile. createReadStream — It will read the file in chunks of the default size 64 kb which is specified before hand." 
  },
  { 
    tags: ["node"], 
    q: "What is the use of Timers is Node.js?", 
    a: "The Timers module in Node.js contains functions that execute code after a set period of time. Timers do not need to be imported via require(), since all the methods are available globally to emulate the browser JavaScript API. The Node.js API provides several ways of scheduling code to execute at some point after the present moment. The functions below may seem familiar, since they are available in most browsers, but Node.js actually provides its own implementation of these methods.Node.js Timer provides setTimeout(), setImmediate() and setInterval." 
  },
  { 
    tags: ["node"], 
    q: "What is the use of DNS module in Node.js?", 
    a: "dns module which provide underlying system's name resolution and DNS look up facilities. DNS module consists of an asynchronous network wrapper." 
  },
  { 
    tags: ["node"], 
    q: "What is the passport in Node.js?", 
    a: "Passport.js is a simple, unobtrusive Node.js authentication middleware for Node.js. Passport.js can be dropped into any Express.js-based web application. Passport recognizes that each application has unique authentication requirements. Authentication mechanisms, known as strategies, are packaged as individual modules. Applications can choose which strategies to employ, without creating unnecessary dependencies. By default, if authentication fails, Passport will respond with a 401 Unauthorized status, and any additional route handlers will not be invoked. If authentication succeeds, the next handler will be invoked and the req.user property will be set to the authenticated user." 
  },
  { 
    tags: ["node"], 
    q: "Is Node a single threaded application?", 
    a: "Yes! Node uses a single threaded model with event looping." 
  },
  { 
    tags: ["node"], 
    q: "What is npm?", 
    a: "npm stands for Node Package Manager. npm provides following two main functionalities: Online repositories for node.js packages/modules which are searchable on search.nodejs.org. Command line utility to install packages, do version management and dependency management of Node.js packages." 
  },
  { 
    tags: ["node"], 
    q: "How to check the already installed dependencies which are globally installed using npm?", 
    a: "Use the following command: C:\Nodejs_WorkSpace>npm ls -g" 
  },
  { 
    tags: ["node"], 
    q: "Which module is used for file based operations?", 
    a: "fs module is used for file based operations. var fs = require('fs')" 
  },
  { 
    tags: ["node"], 
    q: "What is the purpose of clearTimeout function? ", 
    a: "The clearTimeout( t ) global function is used to stop a timer that was previously created with setTimeout(). Here t is the timer returned by setTimeout() function." 
  },
  { 
    tags: ["node"], 
    q: "What is the purpose of setInterval function?", 
    a: "The setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days. This function returns an opaque value that represents the timer which can be used to clear the timer using the function clearInterval(t)." 
  },
  { 
    tags: ["node"], 
    q: "What is the purpose of console object?", 
    a: "console object is used to Used to print information on stdout and stderr." 
  },
  { 
    tags: ["node"], 
    q: "What is the purpose of process object?", 
    a: "Process object is used to get information on current process. Provides multiple events related to process activities." 
  },
  { 
    tags: ["react"], 
    q: "What is React?", 
    a: "React is a front-end JavaScript library developed by Facebook in 2011. It follows the component based approach which helps in building reusable UI components. It is used for developing complex and interactive web and mobile UI. Even though it was open-sourced only in 2015, it has one of the largest communities supporting it." 
  },
  { 
    tags: ["react"], 
    q: "What are the features of React? ", 
    a: "Major features of React are listed below: It uses the virtual DOM instead of the real DOM. It uses server-side rendering. It follows uni-directional data flow or data binding." 
  },
  { 
    tags: ["react"], 
    q: "List some of the major advantages of React.", 
    a: "Some of the major advantages of React are: It increases the application’s performance. It can be conveniently used on the client as well as server side. Because of JSX, code’s readability increases. React is easy to integrate with other frameworks like Meteor, Angular, etc. Using React, writing UI test cases become extremely easy." 
  },
  { 
    tags: ["react"], 
    q: "What are the limitations of React?", 
    a: "Limitations of React are listed below: React is just a library, not a full-blown framework. Its library is very large and takes time to understand. It can be little difficult for the novice programmers to understand. Coding gets complex as it uses inline templating and JSX" 
  },
  { 
    tags: ["react"], 
    q: "What is JSX?", 
    a: "JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance." 
  },
  { 
    tags: ["react"], 
    q: "Why can’t browsers read JSX?", 
    a: "Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser." 
  },
  { 
    tags: ["react"], 
    q: "What do you understand from “In React, everything is a component.”", 
    a: "Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI." 
  },
  { 
    tags: ["react"], 
    q: "Explain the purpose of render() in React.", 
    a: "Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked." 
  },
  { 
    tags: ["react"], 
    q: "What is Props?", 
    a: "Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data." 
  },
  { 
    tags: ["react"], 
    q: "What is a state in React and how is it used?", 
    a: "States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state()." 
  },
  { 
    tags: ["react"], 
    q: "What are the different phases of React component’s lifecycle?", 
    a: "There are three different phases of React component’s lifecycle: Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM. Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase. Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM." 
  },
  { 
    tags: ["react"], 
    q: "Explain the lifecycle methods of React components in detail.", 
    a: "Some of the most important lifecycle methods are: componentWillMount() – Executed just before rendering takes place both on the client as well as server-side. componentDidMount() – Executed on the client side only after the first render. componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called. shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false. componentWillUpdate() – Called just before rendering takes place in the DOM. componentDidUpdate() – Called immediately after rendering takes place. hcomponentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces." 
  },
  { 
    tags: ["react"], 
    q: "What is an event in React?", 
    a: "In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events are similar to handling events in DOM elements. But there are some syntactical differences like: Events are named using camel case instead of just using the lowercase. Events are passed as functions instead of strings. The event argument contains a set of properties, which are specific to an event. Each event type contains its own properties and behavior which can be accessed via its event handler only." 
  },
  { 
    tags: ["react"], 
    q: "What are synthetic events in React?", 
    a: "Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers." 
  },
  { 
    tags: ["react"], 
    q: "List some of the cases when you should use Refs.", 
    a: "Following are the cases when refs should be used: When you need to manage focus, select text or media playback. To trigger imperative animations. Integrate with third-party DOM librariesents or to add methods to the components." 
  },
  { 
    tags: ["react"], 
    q: "What are Pure Components?", 
    a: "Pure components are the simplest and fastest components which can be written. They can replace any component which only has a render(). These components enhance the simplicity of the code and performance of the application." 
  },
  { 
    tags: ["react"], 
    q: "What is the significance of keys in React?", 
    a: "Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI. They help React to optimize the rendering by recycling all the existing elements in the DOM. These keys must be a unique number or string, using which React just reorders the elements instead of re-rendering them. This leads to increase in application’s performance." 
  },
  { 
    tags: ["react"], 
    q: "What is Redux?", 
    a: "Redux is one of the hottest libraries for front-end development in today’s marketplace. It is a predictable state container for JavaScript applications and is used for the entire applications state management. Applications developed with Redux are easy to test and can run in different environments showing consistent behavior." 
  },
  { 
    tags: ["react"], 
    q: "What is React Router?", 
    a: "React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application. This keeps the URL in sync with data that’s being displayed on the web page. It maintains a standardized structure and behavior and is used for developing single page web applications. React Router has a simple API." 
  },
  { 
    tags: ["react"], 
    q: "List down the advantages of React Router.", 
    a: "Few advantages are: Just like how React is based on components, in React Router v4, the API is ‘All About Components’. A Router can be visualized as a single root component (<BrowserRouter>) in which we enclose the specific child routes (<route>). No need to manually set History value: In React Router v4, all we need to do is wrap our routes within the <BrowserRouter> component. The packages are split: Three packages one each for Web, Native and Core. This supports the compact size of our application. It is easy to switch over based on a similar coding style." 
  },
];
