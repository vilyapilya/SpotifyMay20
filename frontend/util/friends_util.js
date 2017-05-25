export const receiveFriends = user_id =>(
  $.ajax({
     url: `/api/users/${user_id}`,
     dataType: "json",
     method: "GET"
   })
);
export const createF = friendship =>(
  $.ajax({
     url: `/api/friends`,
     dataType: "json",
     method: "POST",
     data: {friendship}
   })
);
