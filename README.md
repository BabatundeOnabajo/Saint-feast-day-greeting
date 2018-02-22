# Saint-feast-day-greeting
This is a code Catholic web owners can use to greet visitors according to the feast day/solemnity it is (England and Wales).

This source code is aimed at Catholic web owners who reside in England and/or Wales or are targeting their website to an English and/or Welsh Catholic audience. The result of this script is a greeting of a particular saint's feast day in the form of an alert box; upon visiting your website, the user is greeted with good wishes of that particular saint's day. For example, if it is the 28th January, a user visiting your website will be greeted with the message: "Wishing you  a blessed feast day of St. Thomas Aquinas", with the 28th January marking the feast day of St. Thomas Aquinas. The liturgical dates correspond to that provided by the Liturgy Office of England & Wales for the AD 2018. 

Furthermore, for simplicity, this code ignores the complexity associated with vigil days.

This code may not suit US Catholic web owners although sufficiently advanced readers of this code may edit the source code as appropriate to accommodate their local preferences. The author of this source code envisions developing a similar code for the US, Germany, Spain and Portugal. 

This code is free to use, distribute and modify. However, the author, Babatunde Valentine Onabajo, kindly asks this section is left intact for attribution purposes. For questions, feedback, comment or anything else, please contact: babatunde.onabajo@kcl.ac.uk . The author cannot be held responsible for any errors or issues that may result from the implementation of this code.

This code is designed to be customised to your preferences. Therefore, if you feel that "Wishing you a blessed" is better replaced by something else, you can edit it in the code below. A comment in the form of // will be used to highlight the section you will need to edit. 

This code should work on most, if not all, browsers on a computer without issue. It is unclear whether this code will work on mobile devices. 

This calendar begins from January 2018 and ends at December 2018. It is also important to note that this code is only suitable to run for the year of 2018. This is because certain liturgical days (e.g. Easter Sunday) are celebrated on different days in different years. Whilst there are other ways of solving this problem, this code gets around database and legal issues by ''hardcoding'' the days into the code itself, without relying on a third-party. That is to say, this code operates entirely at the client-side, not server-side. This comes at the expense of having to update the code annually, but this is a cost worth bearing.
Furthermore, this code does not request the user's location, to avoid concerns some users may have regarding their privacy.

In some cases, such as St. Teilo, although the feast day is properly commemorated in Wales, the code nevertheless greets visitors from England with the same greeting as well. This is for the sake of simplicity and to avoid issues regarding obtaining a user's location. 
