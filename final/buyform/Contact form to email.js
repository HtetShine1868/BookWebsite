function emailSend(){

  var userName = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var bookname = document.getElementById('bookname').value;
    var address = document.getElementById('address').value;

    var quantity = document.getElementById('quantity').value;

    var deli = document.getElementById('deli').value;



  var messageBody = "Name " + userName +
  "<br/> Phone " + phone +
  "<br/> Email " + email +
    "<br/> Book Name " + bookname +
    "<br/> Address " + address +
    "<br/> Quantity " + quantity +
    "<br/> Deli " + deli 

    ;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "painghtoo9789@gmail.com",
    Password : "94125DA9BEA2377CF3BD1B031986C67209BE",
    To : 'lukehtinn@gmail.com',
    From : "painghtoo9789@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
    if(message=='OK'){
      swal("Secussful", "Your order has been proceeded!", "success");
    }
    else{
      swal("Error", "You clicked the button!", "error");
    }
  }
);
}