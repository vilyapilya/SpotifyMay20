export const searchAudioBooks = query =>(
  $.ajax({
     url: "api/audiobooks/search",
     dataType: "json",
     method: "GET",
     data: { query }
   })
);

export const fetchAudioBooks = user_id => (
  $.ajax({
    method: 'GET',
    url: 'api/audiobooks',
    data: {user_id}
  })
);

export const fetchAudioBook = id => (
  $.ajax({
    method: 'GET',
    url: `api/audiobooks/${id}`
  })
);

export const createAudioBook = book => (
  $.ajax({
    method: 'POST',
    url: 'api/audiobooks',
    data: book,
    contentType: false,
    processData: false
  })
);
export const deleteAudioBook = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/audiobooks/${id}`
  })
);
export const editAudioBook = book => (
  $.ajax({
    method: 'PATCH',
    url: `api/audiobooks/${book.id}`,
    data:  {book}
  })
);
