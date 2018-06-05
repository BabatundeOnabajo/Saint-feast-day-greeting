/* BEGINNINING OF NOTE

*** SAINT OF THE DAY GREETING, UK EDITION 2018

I would like to use this space in the first place to thank God and all those who actively and have actively contributed to making the Internet a better place.

This source code is aimed at Catholic web owners who reside in England and/or Wales or are targeting their website to an English and/or Welsh Catholic audience. The result of this script is a greeting of a particular saint's feast day in the form of an alert box; upon visiting your website, the user is greeted with good wishes of that particular saint's day. For example, if it is the 28th January, a user visiting your website will be greeted with the message: "Wishing you  a blessed feast day of St. Thomas Aquinas", with the 28th January marking the feast day of St. Thomas Aquinas. The liturgical dates correspond to that provided by the Liturgy Office of England & Wales for the AD 2018. 

Furthermore, for simplicity, this code ignores the complexity associated with vigil days.

This code may not suit US Catholic web owners although sufficiently advanced readers of this code may edit the source code as appropriate to accommodate their local preferences. The author of this source code envisions developing a similar code for the US, Germany, Spain and Portugal. 

This code is free to use, distribute and modify. However, the author, Babatunde Valentine Onabajo, kindly asks this section is left intact for attribution purposes. For questions, feedback, comment or anything else, please contact: babatunde.onabajo@kcl.ac.uk . The author cannot be held responsible for any errors or issues that may result from the implementation of this code.

This code is designed to be customised to your preferences. Therefore, if you feel that "Wishing you a blessed" is better replaced by something else, you can edit it in the code below. A comment in the form of // will be used to highlight the section you will need to edit. 

This code should work on most, if not all, browsers on a computer without issue. It is unclear whether this code will work on mobile devices. 

This calendar begins from January 2018 and ends at December 2018. It is also important to note that this code is only suitable to run for the year of 2018. This is because certain liturgical days (e.g. Easter Sunday) are celebrated on different days in different years. Whilst there are other ways of solving this problem, this code gets around database and legal issues by ''hardcoding'' the days into the code itself, without relying on a third-party. That is to say, this code operates entirely at the client-side, not server-side. This comes at the expense of having to update the code annually, but this is a cost worth bearing.
Furthermore, this code does not request the user's location, to avoid concerns some users may have regarding their privacy.

In some cases, such as St. Teilo, although the feast day is properly commemorated in Wales, the code nevertheless greets visitors from England with the same greeting as well. This is for the sake of simplicity and to avoid issues regarding obtaining a user's location. 

Kindest regards,
Babatunde Valentine Onabajo, AKC
London, United Kingdom
2018

END OF NOTE*/
<script = 'Javascript' type = 'text/javascript'>
	//The month of January 2018 begins here
	//Technical note: The getDate() method in JavaScript runs from 1 to 31 whilst the getMonth() method returns an integer from 0 to 11. 
	//This segment sets up the various feast days of the saints for January 2018. You may edit this section to suit your own particular needs. For example, suppose you would like to use the word "Saint" rather than the abbreviation "St". In that case, you can go through this list and edit as appropriate. Or suppose you would like to greet a visitor with the word "feast day" rather than "feast" (as is the case with some of the days here), then that can be done as well.
	januaryFeastDay = new Array('Solemnity of the Blessed Virgin Mary!', 'feast day of St. Basil the Great and St. Gregory Nazianzen!', 'feast of the Most Holy Name of Jesus!', 'Solemnity of the Epiphany of the Lord!', 'feast of the Baptism of the Lord', 'feast day of St. Aelread of Rievaulx!', 'feast day of St. Hilary!', 'feast day of St. Anthony!', 'feast day of St. Wulstan!', 'feast day of St. Fabian and St. Sebastian!', 'feast day of St. Vincent!', 'feast day of St. Francis de Sales!', 'feast of the Conversion of St. Paul!', 'feast day of St. Timothy and St. Titus!', 'feast day of St. Angela Merici!', 'feast day of St. John Bosco!');
	dayToday = new Date();
	var januaryFeastDate = dayToday.getDate();

var thisMonth = thisMonth.getMonth(); 
//Feel free to edit this message from 'Wishing you a blessed ' to something else if you feel that a different message is more suited to your needs. Please also note the space between the message and the closing quotation mark. This is deliberate to avoid inadvertent concatenation. For example, suppose you would state: "Wishing you a holy". You should write, "Wishing you a holy " as opposed to "Wishing you a holy". 
var greeting = 'Wishing you a blessed ';
if(thisMonth == 0){
	if(januaryFeastDate == 1){
		alert(greeting + januaryFeastDay[0])
	} 
	if(januaryFeastDate == 2){
		alert(greeting + januaryFeastDay[1])
	}if(januaryFeastDate == 3){
		alert(greeting + januaryFeastDay[2])
	}if(januaryFeastDate == 7){
		alert(greeting + januaryFeastDay[3])
	}if(januaryFeastDate == 8){
		alert(greeting + januaryFeastDay[4])
	}if(januaryFeastDate == 12){
		alert(greeting + januaryFeastDay[5])
	}if(januaryFeastDate == 13){
		alert(greeting + januaryFeastDay[6])
	}if(januaryFeastDate == 17){
		alert(greeting + januaryFeastDay[7])}
if(januaryFeastDate == 19){
	alert(greeting + januaryFeastDay[8])
}if(januaryFeastDate == 20){
	alert(greeting + januaryFeastDay[9])
}if(januaryFeastDate == 22){
	alert(greeting + januaryFeastDay[10])
}if(januaryFeastDate == 24){
	alert(greeting + januaryFeastDay[11])
}
	if(januaryFeastDate == 25){
		alert(greeting + januaryFeastDay[12])
	}if(januaryFeastDate == 26){
		alert(greeting + januaryFeastDay[13])
	}if(januaryFeastDate == 27){
		alert(greeting + januaryFeastDay[14])
	}if(januaryFeastDate == 31){
		alert(greeting + januaryFeastDay[15])
	}
}

//This section begins the month of February. Please note that there are fewer feast days than usual during the month of February because of Lent and the Easter Triduum. 
//'Pancake Day' is not celebrated liturgically but it is added here given the prevalence of its observation in England and Wales. 

februaryFeastDay = new Array('feast of the Presentation of the Lord!', 'feast of St. Blaise and St. Ansgar!', 'feast day of St. Agatha!', ' feast day of St. Paul Miki and Companions!', 'St. Jerome Emiliani and St. Josephine Bakhita!', 'St. Teilo!', 'St. Scholastica!', 'Shrove Tuesday or \'Pancake Day!', 'Ash Wednesday!', 'feast of The Seven Founders of the Order of Servants of the Blessed Virgin Mary!', 'feast day of St. Peter Damian!', 'feast of the Chair of Peter the Apostle!', 'feast day of St. Polycarp!');
var februaryFeastDate = dayToday.getDate();
if(thisMonth == 1){
	if(februaryFeastDate == 2){
		alert(greeting + februaryFeastDay[0])}
	if(februaryFeastDate == 3){
		alert(greeting + februaryFeastDay[1])}
	if(februaryFeastDate == 5){
		alert(greeting + februaryFeastDay[2])
	}
	if(februaryFeastDate == 6){
		alert(greeting + februaryFeastDay[3])
	}
	if(februaryFeastDate == 8){
		alert(greeting + februaryFeastDay[4])
	}
	if(februaryFeastDate == 9){
		alert(greeting + februaryFeastDay[5])
	}
	if(februaryFeastDate == 10){
		alert(greeting + februaryFeastDay[6])
	}
	if(februaryFeastDate == 13){
		alert(greeting + februaryFeastDay[7])
	}
	if(februaryFeastDate == 14){
		alert(greeting + februaryFeastDay[8])
	}
	if(februaryFeastDate == 17){
		alert(greeting + februaryFeastDay[9])
	}if(februaryFeastDate == 21){
		alert(greeting + februaryFeastDay[10])
	}if(februaryFeastDate == 22){
		alert(greeting + februaryFeastDay[11])
	}if(februaryFeastDate == 23){
		alert(greeting + februaryFeastDay[12])
	}
	}
//This section begins the month of March 2018
var marchFeastDate = dayToday.getDate();
//The commemoration of St. David is a solemnity in Wales and feast day in England. Feel free to change the words "solemnity" to suit your own circumstances
marchFeastDay = new Array('solemnity of St. David, Patron of Wales!', 'feast day of St. Perptua and St. Felicity!', 'feast day of St. John of God!', 'feast day of St. Frances of Rome!', 'feast day of St. Patrick!', 'solemnity of St. Joseph!', 'feast day of St. Turibius de Mogrovejo!', 'Palm Sunday!', 'Maundy Thursday!', 'Good Friday!', 'Holy Saturday!');
if(thisMonth == 2){
	if(marchFeastDate == 1){
		alert(greeting + marchFeastDay[0])
	}
	if(marchFeastDate == 7){
		alert(greeting + marchFeastDay[1])
	}
	if(marchFeastDate == 8){
		alert(greeting + marchFeastDay[2])
	}
	if(marchFeastDate == 9){
		alert(greeting + marchFeastDay[3])	
	}
	if(marchFeastDate == 17){
		alert(greeting + marchFeastDay[4])
	}
	if(marchFeastDate == 19){
		alert(greeting + marchFeastDay[5])
	}
	if(marchFeastDate == 23){
		alert(greeting + marchFeastDay[6])
	}
	if(marchFeastDate == 25){
		alert(greeting + marchFeastDay[7])
	}
	if(marchFeastDate == 29){
		alert(greeting + marchFeastDay[8])
	}
	if(marchFeastDate == 30){
		alert(greeting + marchFeastDay[9])
	}
	if(marchFeastDay == 31){
		alert(greeting + marchFeastDay[10])
	}
}

//This section begins the month of April 2018
var aprilFeastDate = dayToday.getDate();
//N.B.: The solemnity of St. George also marks the feast (technically memorial) of St. Adalbert in Wales. If you would like to change this, then this is worth highlighting.
aprilFeastDay = new Array('Easter Sunday!', 'Easter!', 'solemnity of the Annunciation of the Lord!', 'feast day of St. Stanislaus!', 'feast day of St. Pope Martin I!', 'feast day of St. Beuno!', 'feast day of St. Anselm!', 'solemnity of St. George, Patron of England!', 'feast day of St. Fidelis of Sigmaringen!', 'feast day of St. Mark!', 'feast day of St. Peter Chanel and St. Louis Marie Grignion de Montfort!', 'feast day of St. Pius V!');
if(thisMonth == 3){
	if(aprilFeastDate == 1){
		alert(greeting + aprilFeastDay[0])
	}
	//a for loop could have been used here as well but has been avoided for the sake of clarity in the code. 
	if(aprilFeastDate == 2 || aprilFeastDate == 3 || aprilFeastDate == 4 || aprilFeastDate == 5 || aprilFeastDate == 6 || aprilFeastDate == 7){
		alert(greeting + aprilFeastDay[1])
	}
	if(aprilFeastDate == 9){
		alert(greeting + aprilFeastDay[2])
	}
	if(aprilFeastDate == 11){
		alert(greeting + aprilFeastDay[3])
	}
	if(aprilFeastDay == 13){
		alert(greeting + aprilFeastDay[4])
	}
	if(aprilFeastDay == 20){
		alert(greeting + aprilFeastDay[5])
	}
	if(aprilFeastDate == 21){
		alert(greeting + aprilFeastDay[6])
	}
	if(aprilFeastDate == 23){
		alert(greeting + aprilFeastDay[7])
	}
	if(aprilFeastDate == 24){
		alert(greeting + aprilFeastDay[8])
	}
	if(aprilFeastDate == 25){
		alert(greeting + aprilFeastDay[9])}
	if(aprilFeastDate == 28){
		alert(greeting + aprilFeastDay[10])
	}
	if(aprilFeastDate == 30){
		alert(greeting + aprilFeastDay[11])
	}
	}

//This section begins the month of May 2018
var mayFeastDate = dayToday.getDate();
mayFeastDay = new Array('feast day of St. Joseph the Worker!', 'feast day of St. Athansius!', 'feast day of St. Philip and St. James!', 'feast day of the English Martyrs!', 'feast day of St. Asaph!', 'solemnity of the Ascension of the Lord!', 'feast day of St. Nereus, St. Achilleus and St. Pancras!', 'feast day of St. Matthias!', 'feast day of Pope St. John I!', 'feast day of St. Dunstan!', 'Pentecost Sunday!', 'feast day of St. Christopher Magallanes and companions!', 'feast day of St. Rita of Cascia!', 'feast day of Venerable St. Bede, Pope St. Gregory VII and St. Mary Magdalene de\'Pazzi!', 'feast day of St. Philip Neri!', 'solemnity of the Most Holy Trinity!', 'feast day of the Blessed Virgin Mary!');
if(thisMonth == 4){
	if(mayFeastDate == 1){
		alert(greeting + mayFeastDay[0])
	}
	if(mayFeastDate == 2){
		alert(greeting + mayFeastDay[1])
	}
	if(mayFeastDate == 3){
		alert(greeting + mayFeastDay[2])}
	if(mayFeastDate == 4){
		alert(greeting + mayFeastDay[3])}
	if(mayFeastDate == 5){
		alert(greeting + mayFeastDay[4])
	}
	if(mayFeastDate == 10){
		alert(greeting + mayFeastDay[5])
	}
	if(mayFeastDate == 12){
		alert(greeting + mayFeastDay[6])}
	if(mayFeastDate == 14){
		alert(greeting + mayFeastDay[7])}
	if(mayFeastDate == 18){
		alert(greeting + mayFeastDay[8])}
	if(mayFeastDate == 19){
		alert(greeting + mayFeastDay[9])}
	if(mayFeastDate == 20){
		alert(greeting + mayFeastDay[10])}
	if(mayFeastDate == 21){
		alert(greeting + mayFeastDay[11])}
	if(mayFeastDate == 22){
		alert(greeting + mayFeastDay[12])}
	if(mayFeastDate == 25){
		alert(greeting + mayFeastDay[13])}
	if(mayFeastDate == 26){
		alert(greeting + mayFeastDay[14])}
	if(mayFeastDate == 27){
		alert(greeting + mayFeastDay[15])}
	if(mayFeastDate == 31){
		alert(greeting + mayFeastDay[16])}
	}

//This section begins the month of June 2018
var juneFeastDate = dayToday.getDate();
juneFeastDay = new Array('feast day of St. Justin!', 'feast day of St. Marcellinus and St. Peter!', 'solemnity of the Most Holy Body and Blood of the Lord!', 'feast day of St. Boniface!', 'feast day of St. Norbert!', 'solemnity of the Most Sacred Heart of Jesus!', 'feast of the Immaculate Heart of Mary!', 'feast day of St. Barnabas!', 'feast day of St. Anthony of Padua!', 'feast day of St. Richard of Chichester!', 'feast day of St. Romuald!', 'feast day of St. Alban, St. Julius and St. Aaron!', 'feast day of St. Aloysius and St. Gonzaga!', 'feast day of St. John Fisher, St. Thomas More and St. Paulinus of Nola!', 'feast day of Ethelreda!', 'solemnity of the Nativity of St. John the Baptist!', 'feast day of St. Cyril of Alexandria!', 'feast day of St. Irenaeus!', 'solemnity of St. Peter and St. Paul!', 'feast day of the First Martyrs of the Holy Roman Church!');

if(thisMonth == 5){
	if(juneFeastDate == 1){
		alert(greeting + juneFeastDay[0])}
	if(juneFeastDate == 2){
		alert(greeting + juneFeastDay[1])}
	if(juneFeastDate == 3){
		alert(greeting + juneFeastDay[2])}
	if(juneFeastDate == 5){
		alert(greeting + juneFeastDay[3])
	}
	if(juneFeastDate == 6){
		alert(greeting + juneFeastDay[4])
	}
	if(juneFeastDate == 8){
		alert(greeting + juneFeastDay[5])}
	if(juneFeastDate == 9){
		alert(greeting + juneFeastDay[6])}
	if(juneFeastDate == 11){
		alert(greeting + juneFeastDay[7])}
	if(juneFeastDate == 13){
		alert(greeting + juneFeastDay[8])}
	if(juneFeastDate == 16){
		alert(greeting + juneFeastDay[9])}
	if(juneFeastDate == 19){
		alert(greeting + juneFeastDay[10])}
	if(juneFeastDate == 20){
		alert(greeting + juneFeastDay[11])}
	if(juneFeastDate == 21){
		alert(greeting + juneFeastDay[12])}
	if(juneFeastDate == 22){
		alert(greeting + juneFeastDay[13])}
	if(juneFeastDate == 23){
		alert(greeting + juneFeastDay[14])}
	if(juneFeastDate == 24){
		alert(greeting + juneFeastDay[15])}
	if(juneFeastDate == 27){
		alert(greeting + juneFeastDay[16])}
	if(juneFeastDate == 28){
		alert(greeting + juneFeastDay[17])}
	if(juneFeastDate == 29){
		alert(greeting + juneFeastDay[18])}
	if(juneFeastDate == 30){
		alert(greeting + juneFeastDay[19])
	}
}
	
//This section begins the month of July 2018
var julyFeastDate = dayToday.getDate();
julyFeastDay = new Array('feast day of St. Thomas!', 'feast day of St. Elizabeth of Portugal!', 'feast day of St. Anthony Mary Zaccaria!', 'feast day of St. Maria Goretti!', 'feast day of St. Augustine Rhong and Companions!', 'feast day of St. Benedict!', 'feast day of St. John Jones!', 'feast day of St. Henry!', 'feast day of St. Camillus de Lellis!', 'feast of Our Lady of Carmel!', 'feast day of St. Apollinaris!', 'feast day of St. Lawrence of Brindisi!', 'feast day of St. Bridget, St. Philip Evans and St. John Lloyd!', 'feast day of St. Sharbel Makhluf!', 'feast day of St. James!', 'feast day of St. Joachim and St. Ann!', 'feast day of St. Peter Chrysologus!', 'feast day of St. Ignatius of Loyola!');

if(thisMonth == 6){
	if(julyFeastDate == 3){
		alert(greeting + julyFeastDay[0])
	}
	if(julyFeastDate == 4){
		alert(greeting + julyFeastDay[1])
	}
	if(julyFeasstDate == 5){
		alert(greeting + julyFeastDay[2])
	}
	if(julyFeastDate == 6){
		alert(greeting + julyFeastDay[3])
	}
	if(julyFeastDate == 9){
		alert(greeting + julyFeastDay[4])
	}
	if(julyFeastDate == 11){
		alert(greeting + julyFeastDay[5])
	}
	if(julyFeastDate == 12){
		alert(greeting + julyFeastDay[6])
	}
	if(julyFeastDate == 13){
		alert(greeting + julyFeastDay[7])
	}
	if(julyFeastDate == 14){
		alert(greeting + julyFeastDay[8])
	}
	if(julyFeastDate == 16){
		alert(greeting + julyFeastDay[9])
	}
	if(julyFeastDate == 20){
		alert(greeting + julyFeastDay[10])
	}
	if(julyFeastDate == 21){
		alert(greeting + julyFeastDay[11])}
	if(julyFeastDate == 23){
		alert(greeting + julyFeastDay[12])}
	if(julyFeastDate == 24){
		alert(greeting + julyFeastDay[13])}
	if(julyFeastDate == 25){
		alert(greeting + julyFeastDay[14])
	}
	if(julyFeastDate == 26){
		alert(greeting + julyFeastDay[15])
	}
	if(julyFeastDate == 30){
		alert(greeting + julyFeastDay[16])
	}
	if(julyFeastDate == 31){
		alert(greeting + julyFeastDay[17])
	}
	}
	
//This section begins the month of August 2018	
var augustFeastDate = dayToday.getDate();
augustFeastDay = new Array('feast day of St. Alphonsus Mary de\' Ligouri!', 'feast day of St. Eusebius of Vercelli and St. Peter Julian Eymard!', 'feast day of St. Germanus of Auxerre!', 'feast day of St. John Mary Vianney!', 'feast of the Transfiguration of the Lord!', 'feast of St. Cajetan, Pope St. Sixtus II and companions!', 'feast day of St. Dominic!', 'feast day of Teresa Benedicta of the Cross!', 'feast day of St. Lawrence!', 'feast day of St. Clare!', 'feast day of St. Hippolytus and Pope St. Pontian!', 'feast day of St. Maximilian Mary Kolbe!', 'solemnity of the Assumption of the Blessed Virgin Mary!', 'feast day of St. Stephen of Hungary!', 'feast day of St. Bernard!', 'feast day of St. Pius X!', 'feast day of the Queenship of the Blessed Virgin Mary!', 'feast day of St. Rose of Lima!', 'feast day of St. Bartholomew!', 'feast day of St. Louis and St. Joseph Calasanz!', 'feast day of St. Monica!', 'feast day of St. Augustine!', 'feast of the Passion of St. John the Baptist!', 'feast day of St. Margaret Clitherow, St. Anne Line and St. Margaret Ward!', 'feast day of St. Aidan and the Saints of Lindisfarne!');
if(thisMonth == 7){
	if(augustFeastDate == 1){
		alert(greeting + augustFeastDay[0])
	}
	if(augustFeastDate == 2){
		alert(greeting + augustFeastDay[1])
	}
	if(augustFeastDate == 3){
		alert(greeting + augustFeastDay[2])
	}
	if(augustFeastDate == 4){
		alert(greeting + augustFeastDay[3])
	}
	if(augustFeastDate == 6){
		alert(greeting + augustFeastDay[4])
	}
	if(augustFeastDate == 7){
		alert(greeting + augustFeastDay[5])
	}
	if(augustFeastDate == 8){
		alert(greeting + augustFeastDay[6])
	}
	if(augustFeastDate == 9){
		alert(greeting + augustFeastDay[7])}
	if(augustFeastDate == 10){
		alert(greeting + augustFeastDay[8])}
	if(augustFeastDate == 11){
		alert(greeting + augustFeastDay[9])}
	if(augustFeastDate == 13){
		alert(greeting + augustFeastDay[10])}
	if(augustFeastDate == 14){
		alert(greeting + augustFeastDay[11])
	}
	if(augustFeastDate == 15){
		alert(greeting + augustFeastDay[12])
	}
	if(augustFeastDate == 16){
		alert(greeting + augustFeastDay[13])}
	if(augustFeastDate == 20){
		alert(greeting + augustFeastDay[14])
	}
	if(augustFeastDate == 21){
		alert(greeting + augustFeastDay[15])
	}
	if(augustFeastDate == 22){
		alert(greeting + augustFeastDay[16])
	}
	if(augustFeastDate == 23){
		alert(greeting + augustFeastDay[17])
	}
	if(augustFeastDate == 24){
		alert(greeting + augustFeastDay[18])
	}
	if(augustFeastDate == 25){
		alert(greeting + augustFeastDay[19])
	}
	if(augustFeastDate == 27){
		alert(greeting + augustFeastDay[20])
	}
	if(augustFeastDate == 28){
		alert(greeting + augustFeastDay[21])}
	if(augustFeastDate == 29){
		alert(greeting + augustFeastDay[22])
	}
	if(augustFeastDate == 30){
		alert(greeting + augustFeastDay[23])
	}
	if(augustFeastDate == 31){
		alert(greeting + augustFeastDay[24])
	}
	}

//This section begins the month of September 2018
var septemberFeastDate = dayToday.getDate();
septemberFeastDay = new Array('feast day of St. Gregory the Great!', 'feast day of St. Cuthbert!', 'feast of the Nativity of the Blessed Virgin Mary!', 'feast day of St. Deiniol!', 'feast day of the Most Holy Name of Mary!', 'feast day of St. John Chrysostom!', 'feast of the Exaltation of the Cross!', 'feast day of Our Lady of Sorrows!', 'feast day of St. Robert Bellarmine!', 'feast day of St. Januarius and St. Theodore of Canterbury!', 'feast day of St. Andrew Kim Tae-gon, St. Paul Chong Ha-Sang and companions!', 'feast of St. Matthew!', 'feast day of Our Lady of Walsingham!', 'feast day of St. Cosmas and St. Damian!', 'feast day of St. Vincent de Paul!', 'feast day of St. Wenceslaus, St. Lawrence Ruiz and companions!', 'feast day of St. Michael, St. Gabriel and St. Raphael!');

if(thisMonth == 8){
	if(septemberFeastDate == 3){
		alert(greeting + septemberFeastDay[0])
	}
	if(septemberFeastDate == 4){
		alert(greeting + septemberFeastDay[1])
	}
	if(septemberFeastDate == 8){
		alert(greeting + septemberFeastDay[2])
	}
	if(septemberFeastDate == 11){
		alert(greeting + septemberFeastDay[3])
	}
	if(septemberFeastDate == 12){
		alert(greeting + septemberFeastDay[4])
	}
	if(septemberFeastDate == 13){
		alert(greeting + septemberFeastDay[5])
	}
	if(septemberFeastDate == 14){
		alert(greeting + septemberFeastDay[6])
	}
	if(septemberFeastDate == 15){
		alert(greeting + septemberFeastDay[7])
	}
	if(septemberFeastDate == 17){
		alert(greeting + septemberFeastDay[8])
	}
	if(septemberFeastDate == 19){
		alert(greeting + septemberFeastDay[9])
	}
	if(septemberFeastDate == 20){
		alert(greeting + septemberFeastDay[10])
	}
	if(septemberFeastDate == 21){
		alert(greeting + septemberFeastDay[11])
	}
	if(septemberFeastDate == 24){
		alert(greeting + septemberFeastDay[12])
	}
	if(septemberFeastDate == 26){
		alert(greeting + septemberFeastDay[13])
	}
	if(septemberFeastDate == 27){
		alert(greeting + septemberFeastDay[14])
	}
	if(septemberFeastDate == 29){
		alert(greeting + septemberFeastDay[15])
	}
}

//This section begins the month of October 2018
var octoberFeastDate = dayToday.getDate();
//St. Therese is more properly known as "St. Therese of Lisieux" but officially the liturgical calendar refers to her as "St. Therese of the Child Jesus". This is worth highlighting in case you would like to change the code below to suit your own circumstances. The same similarly applies to St. Teresa of the Child Jesus, who is known more colloquially as "St. Teresa of Avila". 
octoberFeastDay = new Array('feast day of St. Therese of Lisieux!', 'feast day of the Holy Guardian Angels!', 'feast day of St. Francis of Assisi!', 'feast day of St. Bruno!', 'feast day of St. John Leonardi, Blessed John Henry Newman and St. Denis and his companions!', 'feast day of St. Paulinus!', 'feast day of Pope St. John XXIII!', 'feast day of St. Wilfred!', 'feast day of Edward the Confessor!', 'feast day of St. Teresa of Avila!', 'feast day of St. Richard Gwyn, St. Margaret Mary Alacoque and St. Hedwig!', 'feast day of St. Ignatius of Antioch!', 'feast day of St. Luke!', 'feast day of St. Paul of the Cross, St. Johhn de Brebeuf and St. Isaac Jogues with his companions!', 'feast day of St. John Paul II!', 'feast day of St. John of Capestrano!', 'feast day of St. Anthony Mary Claret!', 'feast of the six Welsh Martyrs and their Companions!', 'feast day of St. Chad and St. Cedd!');

if(thisMonth == 9){
	if(octoberFeastDate == 1){
		alert(greeting + octoberFeastDay[0])
	}
	if(octoberFeastDate == 2){
	alert(greeting + octoberFeastDay[1])	
	}
	if(octoberFeastDate == 4){
		alert(greeting + octoberFeastDay[2])
	}
	if(octoberFeastDate == 6){
		alert(greeting + octoberFeastDay[3])
	}
	if(octoberFeastDate == 9){
		alert(greeting + octoberFeastDay[4])
	}
	if(octoberFeastDate == 10){
		alert(greeting + octoberFeastDay[5])
	}
	if(octoberFeastDate == 11){
		alert(greeting + octoberFeastDay[6])
	}
	if(octoberFeastDate == 12){
		alert(greeting + octoberFeastDay[7])
	}
	if(octoberFeastDate == 13){
		alert(greeting + octoberFeastDay[8])
	}
	if(octoberFeastDate == 15){
		alert(greeting + octoberFeastDay[9])
	}
	if(octoberFeastDate == 16){
		alert(greeting + octoberFeastDay[10])
	}
	if(octoberFeastDate == 17){
		alert(greeting + octoberFeastDay[11])
	}
	if(octoberFeastDate == 18){
		alert(greeting + octoberFeastDay[12])
	}
	if(octoberFeastDate == 19){
		alert(greeting + octoberFeastDay[13])
	}
	if(octoberFeastDate == 22){
		alert(greeting + octoberFeastDay[14])
	}
	if(octoberFeastDate == 23){
		alert(greeting + octoberFeastDay[15])
	}
	if(octoberFeastDate == 24){
		alert(greeting + octoberFeastDay[16])
	}
	if(octoberFeastDate == 25){
		alert(greeting + octoberFeastDay[17])
	}
	if(octoberFeastDate == 26){
		alert(greeting + octoberFeastDay[18])
	}
}

//This section begins the month of November 2018

var novemberFeastDate = dayToday.getDate();

novemberFeastDay = new Array('All Saints\' day!', 'All Souls\' day', 'feast day of St. Martin de Porres and St. Winefride!', 'feast day of St. Illtud!', 'feast day of St. Willibrord!', 'feast day of All Saints of Wales!', 'feast day of the Dedication of the Lateran Basilica!', 'feast day of St. Leo the Great!', 'feast day of St. Josaphat!', 'feast day of St. Dyfrig!', 'feast day of St. Albert the Great!', 'feast day of St. Margaret of Scotland, St. Gertrude and St. Edmund of Abingdon!', 'feast day of St. Elizabeth of Hungary, St. Hilda and St. Hugh of Lincoln!', 'feast day of the Presentation of the Blessed Virgin Mary!', 'feast day of St. Cecilia!', 'feast day Pope St. Clement I and St. Columban!', 'feast day of St. Andrew Dung-Lac and his companions!', 'feast day of Our Lord Jesus Christ, Universal King!', 'feast day of St. Andrew the Apostle!')

if(thisMonth == 10){
	if(novemberFeastDate == 1){
		alert(greeting + novemberFeastDay[0])
	}
	if(novemberFeastDate == 2){
		alert(greeting + novemberFeastDay[1])
	}
	if(novemberFeastDate == 3){
		alert(greeting + novemberFeastDay[2])
	}
	if(novemberFeastDate == 6){
		alert(greeting + novemberFeastDay[3])
	}
	if(novemberFeastDate == 7){
		alert(greeting + novemberFeastDay[4])
	}
	if(novemberFeastDate == 8){
		alert(greeting + novemberFeastDay[5])
	}
	if(novemberFeastDate == 9){
		alert(greeting + novemberFeastDay[6])
	}
	if(novemberFeastDate == 10){
		alert(greeting + novemberFeastDay[7])
	}
	if(novemberFeastDate == 12){
		alert(greeting + novemberFeastDay[8])
	}
	if(novemberFeastDate == 14){
		alert(greeting + novemberFeastDay[9])
	}
	if(novemberFeastDate == 15){
		alert(greeting + novemberFeastDay[10])
	}
	if(novemberFeastDate == 16){
		alert(greeting + novemberFeastDay[11])
	}
	if(novemberFeastDate == 17){
		alert(greeting + novemberFeastDay[12])
	}
	if(novemberFeastDate == 21){
		alert(greeting + novemberFeastDay[13])
	}
	if(novemberFeastDate == 22){
		alert(greeting + novemberFeastDay[14])
	}
	if(novemberFeastDate == 23){
		alert(greeting + novemberFeastDay[15])
	}
	if(novemberFeastDate == 24){
		alert(greeting + novemberFeastDay[16])
	}
	if(novemberFeastDate == 25){
		alert(greeting + novemberFeastDay[17])
	}
	if(novemberFeastDate == 30){
		alert(greeting + novemberFeastDay[18])
	}
	
}

//This section begins the month of December 2018
var decemberFeastDate = dayToday.getDate();
//Although Christmas is liturgically and officially known as the "Solemnity of the Nativity of the Lord", the greeting is expressed here as "merry Christmas" because that is the more common greeting in England and Wales. However, feel free to change this to suit your own circumstances.
//There is no liturgical event called "Christmas Eve" but I have included it here given the popularity of the greeting in England and Wales. 
decemberFeastDay = new Array('first Sunday of Advent!', 'feast day of St. Francis Xavier!', 'feast day of St. John Damascene', 'Advent', 'feast day of St. Nicholas', 'feast day of St. Ambrose!', 'solemnity of the Immaculate Conception of the Blessed Virgin Mary!', 'feast day of St. John Roberts!', 'feast day of Pope St. John Damasus I!', 'feast day of Our Lady of Guadelupe!', 'feast day of St. Lucy!', 'feast day of St. John of the Cross!', 'feast day of St. Peter Canisius!', 'Christmas Eve', 'merry Christmas!', 'feast day of St. Stephen!', 'feast day of St. John!', 'feast of the Holy Innocents!', 'feast day of St. Thomas Becket!', 'feast day of the Holy Family of Jesus, Mary and Joseph!', 'feast day of Pope St. Sylvester I!');

//Please note that unlike the other months before, the dates are not in strict chronological order (i.e. beginning from the 1st of December through to the 31st December). The code begins on the 5th December with an Advent greeting and then looks for other days of Advent to wish the same greeting. This is for speed on the author's part. Extra attention is asked here for those who would like to alter the code. 
if(thisMonth == 11){
	if(decemberFeastDate == 5 || decemberFeastDate == 9 || decemberFeastDate == 15 || decemberFeastDate == 17 || decemberFeastDate == 18 || decemberFeastDate == 19 || decemberFeastDate == 20 || decemberFeastDate == 22 || decemberFeastDate == 23){
		alert(greeting + decemberFeastDay[3])
	}
	if(decemberFeastDate == 2){
		alert(greeting + decemberFeastDay[0])
	}
	if(decemberFeastDate == 3){
		alert(greeting + decemberFeastDay[1])
	}
	if(decemberFeastDate == 4){
		alert(greeting + decemberFeastDay[2])
	}
	if(decemberFeastDate == 6){
		alert(greeting + decemberFeastDay[4])
	}
	if(decemberFeastDate == 7){
		alert(greeting + decemberFeastDay[5])
	}
	if(decemberFeastDate == 8){
		alert(greeting + decemberFeastDay[6])
	}
	if(decemberFeastDate == 10){
		alert(greeting + decemberFeastDay[7])
	}
	if(decemberFeastDate == 11){
		alert(greeting + decemberFeastDay[8])
	}
	if(decemberFeastDate == 12){
		alert(greeting + decemberFeastDay[9])
	}
	if(decemberFeastDate == 13){
		alert(greeting + decemberFeastDay[10])
	}
	if(decemberFeastDate == 14){
		alert(greeting + decemberFeastDay[11])
	}
	if(decemberFeastDate == 21){
		alert(greeting + decemberFeastDay[12])
	}
	if(decemberFeastDate == 24){
		alert(greeting + decemberFeastDay[13])
	}
	if(decemberFeastDate == 25){
		alert(greeting + decemberFeastDay[14])
	}
	if(decemberFeastDate == 26){
		alert(greeting + decemberFeastDay[15])
	}
	if(decemberFeastDate == 27){
		alert(greeting + decemberFeastDay[16])
	}
	if(decemberFeastDate == 28){
		alert(greeting + decemberFeastDay[17])
	}
	if(decemberFeastDate == 29){
		alert(greeting + decemberFeastDay[18])
	}
	if(decemberFeastDate == 30){
		alert(greeting + decemberFeastDay[19])
	}
	if(decemberFeastDate == 31){
		alert(greeting + decemberFeastDay[20])
	}
}

</script>
