// Q.1..
document.write( "<h4><u>Q.1</u></h4>");
var fName = prompt("Enter your first name");
var lName = prompt("Enter your last name");
var fullName = fName + " " + lName;
document.write("<h3>Welcome "+fullName+" !</h3>");
// Q.2....
document.write( "<h4><u>Q.2</u></h4>");
var favMobile=prompt("Enter your favorite mobile phone model");
document.write("My favorite phone is: " + favMobile + "<br> Length of string: " + favMobile.length);
// Q.3...
document.write( "<h4><u>Q.3</u></h4>");
var anyString="Pakistani";
document.write("String: "+anyString+"<br> Index of 'n': "+anyString.indexOf("n"));
// Q.4....
document.write( "<h4><u>Q.4</u></h4>");
var anyString2="Hello World";
document.write("String: "+anyString2+"<br>Last Index of 'l': "+anyString2.lastIndexOf("l"));
// Q.5...
document.write( "<h4><u>Q.5</u></h4>");
var anyString3="Pakistani";
document.write("String: "+anyString3+"<br> Character at index 3: "+anyString3.charAt(3));
// Q.6...
document.write( "<h4><u>Q.6</u></h4>");
var fullName2=fName.concat(" "+lName);
document.write("Hello "+fullName2);
// Q.7...
document.write( "<h4><u>Q.7</u></h4>");
var city="Hyderabad";
var afterRep=city.replace("Hyder","Islam");
document.write("City: "+city+" <br> After Replacement: "+afterRep);
// Q.8....
document.write( "<h4><u>Q.8</u></h4>");
var message = "Ali and Sami are best friends. They play cricket and football together.";
var repOfAnd = message.replace(/and/g,"&");
document.write("Message: "+message+"<br>After: "+repOfAnd);
// Q.9....
document.write( "<h4><u>Q.9</u></h4>");
var num=472;
var asString= num.toString();
document.write("Value: "+num+"<br> Type: "+typeof(num)+"<br> Value: "+asString+"<br> Type: "+typeof(asString));
// Q.10...
document.write( "<h4><u>Q.10</u></h4>");
var url = prompt("Enter url in the following format (www.facebook.com/www.yahoo.com )");
var indexNum = url.indexOf(".");
var domain = url.slice(indexNum + 1);
document.write("URL: " + url + "<br>Domain name: " + domain);
// Q.11...
document.write( "<h4><u>Q.11</u></h4>");
var anyWord = prompt("Enter any string.");
var capStr = anyWord.toUpperCase();
document.write("User Input = "+anyWord+"<br> Upper case = "+capStr);
// Q.12....
document.write( "<h4><u>Q.12</u></h4>");
var anyWord2 = prompt("Enter any string in upper case.");
var lowerStr = anyWord2.toLowerCase();
document.write("User Input = "+anyWord2+"<br> Lower case = "+lowerStr);
// Q.13....
document.write( "<h4><u>Q.13</u></h4>");
var anyWord3 = prompt("Enter any string in any case, it will change into title case.");
var fLetter = anyWord3.charAt(0).toUpperCase();
var remainText = anyWord3.substring(1).toLowerCase();
var titleCase = fLetter+remainText;
document.write("User input = "+anyWord3+"<br> Title case = "+titleCase);
// Q.14...
document.write( "<h4><u>Q.14</u></h4>");
var nmbr= 35.36;
var nmbrToStr = nmbr.toString();
var removeDot = nmbrToStr.replace(".","");
document.write("Number= "+nmbr+"<br> Result= "+removeDot);
// Q.15...
document.write( "<h4><u>Q.15</u></h4>");
var a="3";
var b="3";
var x=a+b;
document.write("a is "+a+"<br> b is "+b+"<br> a+b is "+x);
// Q.16...
document.write( "<h4><u>Q.16</u></h4>");
var y=a-b;
document.write("a is "+a+"<br> b is "+b+"<br> a-b is "+y);
// Q.17...
// document.write( "<h4><u>Q.17</u></h4>");


// Q.18....
document.write( "<h4><u>Q.18</u></h4>");
var bakeryItems =["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to our bakery! \nWhat do you want to order?");
var caseOfOrder=order.toLowerCase();
for(i=0; i<=bakeryItems.length; i++){
    if(bakeryItems[i]===caseOfOrder){
        document.write(caseOfOrder+" is available at index "+[i]);
    }
    if(bakeryItems[i]==!caseOfOrder){
        document.write(caseOfOrder+" is not available ");
    }
};
// Q.19....
document.write( "<h4><u>Q.19</u></h4>");
 var string_1= prompt("For the Comparison.\nEnter string one.");
 var string_2= prompt("Enter second string.");
 var compare = string_1.localeCompare(string_2);
 if (compare=== 1){
     document.write(string_1+" is greater than "+string_2);
 }
 else if(compare=== -1){
     document.write(string_2+" is greater than "+string_1);
 }
 else{
     document.write(string_2+" is equal to "+string_1);
 };
// Q.20....
// document.write( "<h4><u>Q.20</u></h4>");
// var inputPassword = prompt("Please enter password.");


// Q.21....
document.write( "<h4><u>Q.21</u></h4>");
var university = "University of Karachi";
var letSplit = university.split('');
for(var k=0; k<letSplit.length; k++){
    document.write(letSplit[k]+ "<br>");
};
// Q.22...
document.write( "<h4><u>Q.22</u></h4>");
var inputText = prompt("Please input a string");
var inputLength = inputText.length;
document.write("User input: "+inputText+ "<br> Last character of input: "+ inputText.slice(inputLength - 1));
// Q.23....
document.write( "<h4><u>Q.23</u></h4>");
var anyText = "The quick brown fox jumps over the lazy dog";
var textTransform = anyText.toLowerCase();
var countOfThe = 0;
for(h=0; h<=textTransform.length; h++){
    if(textTransform.substring(h, h + 3) === "the"){
        countOfThe += 1;
    }
};
document.write("Text: "+anyText+"<br> There are "+countOfThe+" occurrences of the word 'the'");
// Q.24....
document.write( "<h4><u>Q.24</u></h4>");
var str = "Pakistan";
var lower =str.toLowerCase();
var vowel =0;
var consonant=0;
for(t=0; t<=lower.length; t++){
    if(lower[t]==="a" || lower[t]==="e" || lower[t]==="i" || lower[t]==="o" || lower[t]==="u"){
        vowel +=1;
    }
    else{
        consonant+=1;
    }
}
document.write("String: "+str +"<br> Vowel: "+vowel+"<br> Consonant: "+consonant);
