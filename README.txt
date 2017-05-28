Speaking book is a web application for storing, playing and sharing audiobooks.

http://speakingbook.herokuapp.com/

Features:
User accounts with secure authentication
Users can upload and continuously play their audiobooks. They also can edit and delete them.
Once an audiobook is uploaded to the app, it become accessible to any user through  Search functionality.
Users can friend other users, and play their collection of books


Audiobooks consists of title, author, audio and image file urls. It is required to enter a title and an author’s name for creating an audiobook. Audio files are stored on ASW. Images are hosted on Cloudinary. 

handleAdd(e){
    e.preventDefault();
    var formData = new FormData();
    formData.append("book[user_id]", this.state.user_id);
    formData.append("book[title]", this.state.title);
    formData.append("book[audio]", this.state.audio);
    formData.append("book[author]", this.state.author);
    formData.append("book[description]", this.state.description);
    if(this.state.image_url == ""){
      this.state.image_url = "http://res.cloudinary.com/duxhobt9p/image/upload/v1495646684/o-livro-da-alma_dac597.jpg"
    }
    formData.append("book[image_url]", this.state.image_url);

    this.props.bookCreate(formData)
    .then((book)=>{this.props.history.push(`/audiobooks/${this.state.user_id}`)});
  }

The input fields for an audiobook are listening to the changes. The submit button triggers the ajax call and upon successful saving, it redirects to the audiobook index page (the list of all books)
The audio files can be continuously played while users navigate through the application.