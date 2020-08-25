'use strict'

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}


class NewPost {
    constructor(author, text, date) {
     this.author = author;
     this.text = text;
     this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class NewAttachedPost extends NewPost {
    constructor (author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post = new Post('John', 'message', '2020-08-21');
console.log(post.author + ': ' + post.text);
post.edit('new message');
console.log(post.author + ': ' + post.text);

const attachedPost = new AttachedPost('Bob', 'attached message', '2020-08-21');
console.log(attachedPost.author + ': ' + attachedPost.text);
attachedPost.edit('new attached message');
attachedPost.makeTextHighlighted();
console.log(attachedPost.author + ': ' + attachedPost.text);

const newPost = new NewPost('John', 'message', '2020-08-21');
console.log(newPost.author + ': ' + newPost.text);
newPost.edit('new message');
console.log(newPost.author + ': ' + newPost.text);

const newAttachedPost = new NewAttachedPost('Bob', 'attached message', '2020-08-21');
console.log(newAttachedPost.author + ': ' + newAttachedPost.text);
newAttachedPost.edit('new attached message');
newAttachedPost.makeTextHighlighted();
console.log(newAttachedPost.author + ': ' + newAttachedPost.text);