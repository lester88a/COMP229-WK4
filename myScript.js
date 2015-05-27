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
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++
    var firstName = form.elements[0].value;
    if ((firstName == null) || (firstName == ""))
    {
        alert("First name cannot be empty!");
        result = false;
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++
    var quantity = form.elements[3].value;
    if (isNaN(quantity))
    {
        alert("Quantity should be a number!");
        result = false;
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++
    var checkBox = document.getElementsByName("myCheckBox");
    //var checkBox = form.elements[5];
    if (checkBox.checked)
    {
        alert("myCheckBox is checked");
    }
    else
    {
        alert("myCheckBox is not checked");
        result = false;
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++
    var radioButton = document.getElementsByName("radioGroup");
    for (var i = 0; i < radioButton.length; i++)
    {
        if (radioButton[i].checked) {
            alert("Radio button " + radioButton[i].value + " is checked!");
        }
        else
        {
            alert("Radio button " + radioButton[i].value + " is not checked!");
            result = false;
        }
    }
    return result;
}