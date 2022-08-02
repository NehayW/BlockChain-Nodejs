// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$('#close').click(function(e){
  modal.style.display = "none";
  location.replace("/voting/system")
})

$('#wallet').click(function(e){
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum
    .request({
      method: "eth_requestAccounts",
    })
    .then((accounts) => {
      console.log(accounts[0]);
      $('#connected_account').text(accounts[0])
       data = {
        'connected_account' : accounts[0],
          }
          $.ajax({url: "/connect/metamsk", method :'POST', data : data,success: function(result){
            modal.style.display = "block";
          }
        });
    })
    .catch((error) => {
      alert("Something went wrong");
    });
   } 
   else{
    alert("Metamask is not installed")
   }
})


$('#dwallet').click(async function(e){
      $.ajax({url: "/disconnect/metamsk", method :'POST',success: function(result){
        location.replace('/')
      }})
})


$('#close_voting').click(function(e){
      $.ajax({url: "/close/voting", method :'POST',success: function(result){
          alert("Voting is closed...!!")
          $('#close_voting').hide()
      },
      error: function (error) {
        alert('something went wrong');
      }
    })

})


$('#vote').click(function(e){
      $.ajax({url: "/vote", method :'GET',success: function(result){
        // alert(result['success'])
      }})

})

$('#winner').click(function(e){
      $.ajax({url: "/winner", method :'POST',success: function(result){
        alert(result['success'])
      }})

})

