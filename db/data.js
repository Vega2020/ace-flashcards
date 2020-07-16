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
];
