export const receiveFriend = user_id =>(
  $.ajax({
     url: `/api/users/${user_id}`,
     dataType: "json",
     method: "GET"
   })
);
