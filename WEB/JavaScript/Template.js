var name = 'chae';
var letter = 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.'
+ name + '\n\nAlthough most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL,'
+ name + 'and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications,'
+ name + 'and user interfaces for many mobile applications.';
console.log(letter);

var name = 'chae';
var letter = `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.
${name}

Although most often used to ${1+1} set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL,
${name} and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications,
${name} and user interfaces for many mobile applications.`;
console.log(letter);

// 둘 다 동일한 결과!