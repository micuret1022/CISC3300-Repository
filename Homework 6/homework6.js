// 1. What is HTTP? What are the different HTTP request methods and how do they differ?
/*
HTTP (Hypertext Transfer Protocol) is the protocol used for transferring hypertext requests and
information on the Internet. There are a few HTTP request methods such as, GET, POST, PUT, DELETE,
PATCH, and HEAD. GET retrieves data from the server. POST submits data to be processed to a specified
resource. PUT updates a resource. DELETE deletes a specified resource. PATCH partially updates a resource.
HEAD asks for a response identical to that of a GET request but without the response body.
*/

// 2. What is an API? What is JSON?
/*
An API (Application Programming Interface) is a set of rules, protocols, and tools for building software
applications. It specifies how software components should interact with each other. An API can be used for
many different things, such as a web-based system, a database system, computer hardware, or software library.

JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data. JSON is "self-describing";
it is easy for humans to read and write, and it is easy for machines to parse and generate. It is often used when data is
sent from a server to a web page.
*/

// 3. What is AJAX? What is meant by asynchronous code?
/*
AJAX (Asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client side
to create asynchronous web applications. AJAX allows web applications to send and retrieve data from a server asynchronously
without interfering with the display or behavior of the existing page.

Asynchronous code means that operations can be performed concurrently or out of order, allowing the program to continue running
without waiting for one operation to complete before starting another.
*/

$(document).ready(function() {
    //GET request
    $.get("http://localhost:3000/posts", function(data) {
        console.log("GET request successful:", data);
    });

    //POST request
    $.post("http://localhost:3000/posts", {
        title: "New Post",
        text: "This is a new post!",
        views: 50
    }, function(data) {
        console.log("POST request successful:", data);
    });

    //PUT request
    $.ajax({
        url: "http://localhost:3000/posts/1",
        type: "PUT",
        data: {
            title: "Updated Post",
            body: "This post has been updated!",
            id: "1",
            views: 150
        },
        success: function (data) {
            console.log("PUT request successful:", data)
        }
    });

});




