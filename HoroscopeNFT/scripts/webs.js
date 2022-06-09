if (typeof window.ethereum !== 'undefined') {
    $('#func_div').show()
    $('#imeta').hide()
}
else
{
  $('#func_div').hide()
  $('#imeta').show()
}

if($('#account').text() == '')
{
  $('#zodiacSignDiv').hide()
}

$("#mint").click(function(){
  var zodiacSign = $('#zodiacSign').text()
  var account = $('#account').text().split(':- ')[1]
  debugger;
  if(zodiacSign != '' && account != '')
  {
    data = {
      'account' : account,
      'zodiacSign' : zodiacSign
    }
    $.ajax({url: "/mintNFT", method :'POST', data : data,success: function(result){
      debugger;
      alert(result)
    }});
  }
  else
  {
    alert("Something went wrong.....!")
  }
});



$('#show').click(function(e){
  if (typeof window.ethereum !== 'undefined') {
     $('#zodiacSignDiv').show()
    window.ethereum
    .request({
      method: "eth_requestAccounts",
    })
    .then((accounts) => {
      console.log(accounts[0]);
      $('#account').text("Connected account :- "+accounts[0])
    })
    .catch((error) => {
      alert("Something went wrong");
    });
   } 
})

$('#dob').change(function(){
  calculateZodiacSign($(this).val())
})

function setZodiacSign(zodiacSign)
{
  $('#zodiacSign').text(zodiacSign)
}

function calculateZodiacSign(date) {
  let dateObject = new Date(date);
  let day = dateObject.getDate();
  let month = dateObject.getMonth();
  if (month == 0) {
    if (day >= 20) {
      setZodiacSign("Aquarius");
    } else {
      setZodiacSign("Capricorn");
    }
  } else if (month == 1) {
    if (day >= 19) {
      setZodiacSign("Pisces");
    } else {
      setZodiacSign("Aquarius");
    }
  } else if (month == 2) {
    if (day >= 21) {
      setZodiacSign("Aries");
    } else {
      setZodiacSign("Pisces");
    }
  } else if (month == 3) {
    if (day >= 20) {
      setZodiacSign("Taurus");
    } else {
      setZodiacSign("Aries");
    }
  } else if (month == 4) {
    if (day >= 21) {
      setZodiacSign("Gemini");
    } else {
      setZodiacSign("Taurus");
    }
  } else if (month == 5) {
    if (day >= 21) {
      setZodiacSign("Cancer");
    } else {
      debugger;
      setZodiacSign("Gemini");
    }
  } else if (month == 6) {
    if (day >= 23) {
      setZodiacSign("Leo");
    } else {
      setZodiacSign("Cancer");
    }
  } else if (month == 7) {
    if (day >= 23) {
      setZodiacSign("Virgo");
    } else {
      setZodiacSign("Leo");
    }
  } else if (month == 8) {
    if (day >= 23) {
      setZodiacSign("Libra");
    } else {
      setZodiacSign("Virgo");
    }
  } else if (month == 9) {
    if (day >= 23) {
      setZodiacSign("Scorpio");
    } else {
      setZodiacSign("Libra");
    }
  } else if (month == 10) {
    if (day >= 22) {
      setZodiacSign("Sagittarius");
    } else {
      setZodiacSign("Scorpio");
    }
  } else if (month == 11) {
    if (day >= 22) {
      setZodiacSign("Capricorn");
    } else {
      setZodiacSign("Sagittarius");
    }
  }
}