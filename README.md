# jquery-dom-form-manipulation-
For the site Neuro Proteccion, JQuery was used to manipulate the theme based form provided by WP members plug in. The form is all based in dynamic php no html so in order to change the layout and structure of this form JQuery was the answer. 

If you visit http://neuroproteccion.com/registrate/ you will seee a registration form built on Wordpress with a custom theme 
I changed to the style, design, and structure of how the client wanted this website to be. 

The customer required a registration form to log in to there account so the solution was to use the WP Members plug in which
provided the most effective solution in providing a registration form quickly for the client. 

For this form however in order to change the layout of the design which is different from the standard structure the plug in 
provided, the form could only be changed with very complicated specific built in hooks which I thought in my opinion was not
very clear and effective. 

For this reason I decided to use the solution of manipulating the form structure and layout with JQuery. As you can see in the 
file provided, the file is the standard registration template I am using for the structure of the page with the JQuery code
included that first replaces the elements on the form to my like and then uses the JQuery method .wrapAll to achieve this
solution. 
