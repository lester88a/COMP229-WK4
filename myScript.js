function validateForm()
{
    var result = true; //assume the form is correct
    var form = document.getElementById("theForm");
    var values = "";
    for (var i = 0; i < form.elements.length; i++)
    {
        values += "field[" + i + "] =" + form.elements[i].value + "\n";
    }
    alert(values);

    var firstName = form.elements[0];
    if ((firstName == null) || (firstName == ""))
    {
        alert("First name cannot be empty!")
        result = false;
    }
}