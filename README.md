Speakingbook is a web application inspired by Spotify. It is a full-stack application utilizing Ruby on Rails, a PostgreSQL database, and React on the frontend.

The entire project was conceived, designed, and completed in a sctrict 10 days timeframe, although I look forward to revisiting it in the future to continue development and design improvement.

# Features

* Audiobook upload, deleted and edit.

  ... Users can upload audiofiles and images to create an audiobook. The
  ... application requires users to fill the title and author fields when
  ... creating an audiobook. Other fields
  ... are optional. If no image provided, then a default image is displayed
  ... When users edit an audiobook, the field on the form are prefilled
  ... with existing data.

![alt text](./public/img/readmeScreenshot.png)
* Audiobook continuous play.

  ... The audiofiles are played continuously while users navigate through the site.

* Search.

  ... Once an audiobook is uploaded to the system, it becomes visible
  ... for all users through the Search functionality. Audiobooks can be
  ... searched by their title. Using an onchange event handler, an AJAX
  ... call is sent for each letter typed in search bar. On the back end,
  ... the index controller takes an optional query parameter, returning
  ... courses filtered to only include those that have the query string
  ... in their title or description.


```handleTitleInput(e){
    e.preventDefault();
    const title = document.getElementById("TitleSearch").value;
    if (title !== "") {
      this.props.searchBook(title).then((books) => (<BooksIndex></BooksIndex>));
    }
  }

  def search
    if params[:query].present?
      @books = Audiobook.where("title ~ ?", params[:query])
      render :index
    else
      @books = Audiobook.none
    end
  end
```

 * Friending.

 ... Users can add friends and see the collection of the audiobooks of
 ... their friends. Friendship is represented by a self-join table. When
 ... users navigate to a friend's page, the index page displays
 ... audiobooks filtering them by friend's id.
