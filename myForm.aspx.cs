﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class myForm : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        FormSubmited.Text = "Thank you, " + Request.Form["firstName"] + " " + Request.Form["lassttName"] + "!";
    }
}