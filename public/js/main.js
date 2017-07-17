$(document).ready(function() {

  $('body').on('click', '.updateButton', update)

  $('body').on('click', '.deleteButton', del)

  $('body').on('click', '.submitButton', submit)
    // console.log('main working')

    $.getJSON('/messages')
        .done((results) => {
            console.log(results)
            for (var i = 0; i < results.length; i++) {
                let id = results[i].id
                $(".container").append(`<div class = "messy" id = "card-${results[i].id}">` + `${($(".messy").length+1)}-Name: ${results[i].name}<br/> Message: ${results[i].message}<button  id = "delete-${results[i].id}" class = "deleteButton">Delete</button><button id = "update-${results[i].id}" class ="updateButton">Update</button></div>` + `<br>`);
                // del(id);
                // up(id);
            }

        });





}());

function update(){
  let updateName = $('#name').val();
  let id = event.target.id.slice(7,8);
  let updateMessage = $('#msg').val();
  $.ajax({
      type: 'PATCH',
      url: '/messages/'+ id,
      data: {
          name: updateName,
          message: updateMessage
      },
      success: function(res) {
        console.log(res);
        window.location.href = '/'
        $('#name').val('');
        // console.log("success!");
        // console.log(res.name);
        // console.log(res.id)
        // console.log(id)
        // res.name = name;
        let messyClass = $('.container').hasClass('messy');
        console.log(messyClass);
      }
  })
  .then((response )=>{
    console.log("success");
  })

    console.log(id)

};


function submit() {
    let name = $('#name').val();
    console.log(name);
    let message = $('#msg').val();
    console.log(message);
    $.ajax({
        type: 'POST',
        url: '/messages',
        data: {
            name: name,
            message: message
        },
        success: function(res) {
            console.log('res' ,res);
            $(".container").append(`<div class = "messy" id = "card-${res.id}">` + ($(".messy").length + 1) + '-' + 'Name: ' + `${res.name}` + '<br/>' + 'Message: ' + res.messages + `<button  id = "delete-${res.id}" class = "deleteButton">Delete</button><button id = "update-${res.id}" class = "updateButton">Update</button>` + `<br>`);

            // del(id);
            window.location.href = '/';
            // up(id);
        }
    })
}

function del(){
  let id = event.target.id.slice(7,8)
  console.log(id);
  $('#card-' + id).remove();
  $.ajax({
      type: 'DELETE',
      url: '/messages/' + id,

      success: function(res) {
console.log(res)
      }

})};
