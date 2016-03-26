var commonPreLoadReaddata="What is this website about? Here user can select his any .txt file and his desired speed let say 5oo words per minute either from the drop down or in the text box and press start button you start seeing the effects, result is you know how many words you completed in how much time.Currently on an average reader have a habit of reading at a speed at 70 words per minute and guiness book hold the record of 4000 words per minute, so where we stand and whats the wrong in our approach. After analysis over 5 years by conducting survey with various group of readers we analyzed that to increase speed of reader we need to increase the width of there visibilty per instance.So how we gone help you?, get your own text file select your own speed and we make it for you.Psychologists and educational specialists working on visual acuity used a tachistoscope to conclude that, with training, an average person could identify minute images flashed on the screen for only one five-hundredth of a second. Though the images used were of airplanes, the results had implications for reading.It was not until the late 1950s that a portable, reliable and convenient device would be developed as a tool for increasing reading speed. Evelyn Wood, a researcher and schoolteacher, was committed to understanding why some people were naturally faster at reading and tried to force herself to read very quickly. In 1958, while brushing off the pages of a book she had thrown down in despair, she discovered that the sweeping motion of her hand across the page caught the attention of her eyes, and helped them move more smoothly across the page. She then used the hand as a pacer. Wood first taught the method at the University of Utah, before launching it to the public as Evelyn Wood's Reading Dynamics in Washington, D.C. in 1959.Some of the reading methods are Skimming and Scanning.Skimming is a process of speed reading that involves visually searching the sentences of a page for clues to meaning. For some people, this comes naturally, but is usually acquired by practice. Skimming is usually seen more in adults than in children. It is conducted at a higher rate (700 words per minute and above) than normal reading for comprehension (around 200–230 wpm), and results in lower comprehension rates, especially with information-rich reading material. Scanning is the process where one actively looks for information using a mind-map (organizing information in a visually hierarchical manner that showcases the interrelatedness of the information for better retrievability) formed from skimming.Meta guiding is the visual guiding of the eye using a finger or pointer, such as a pen, in order for the eye to move faster along the length of a passage of text. It involves drawing invisible shapes on a page of text in order to broaden the visual span for speed reading. For example, an audience of customers at a speed reading seminar will be instructed to use a finger or pen to make these shapes on a page and told that this will speed up their visual cortex, increase their visual span to take in the whole line, and even imprint the information into their subconscious for later retrieval. It has also been claimed to reduce subvocalization (saying words in your head rather than grasping the idea), thereby speeding up reading. Because this encourages the eye to skim over the text, it can reduce comprehension and memory, and lead to missing important details of the text. An emphasis on viewing each word, albeit briefly, is required for this method to be effective. E.g. S movement and Z movement.Speed reading is a skill honed through practice. Reading a text involves comprehension of the material. In speed reading practice this is done through multiple reading processes: preview, overview, read, review and recite; and by read and recall (recording through writing a short summary or a mental outline) exercises. Another important method for better comprehension is the SQ3R process. These processes help an individual to retain most of the presented ideas from a reading material. A better focus in comprehension is through a better reading process with good understanding of the topic.We are into social entrepreneurship a platform where a individual would be able to read his material at his own speed. To contribute to all readers society";

function reset()
{
filedata="";
limit = 0;
k=0;
arr="";
time=0;
myVar="";
loopp=0;
noOfWordsPerSecond=60;
fileChossen="N";
formatOfSelectedFile="";
totalheight=0;
count=0;
clearInterval(myVar);
stopClock();
document.getElementById("timerWatch").innerHTML="";
document.getElementById("noOfWordsPerMinute").innerHTML="";




}
var filedata;
var limit = 0;
var k=0;
var arr;
var time=0;
var myVar;
var loopp=0;
var noOfWordsPerSecond;
var fileChossen="N";
var formatOfSelectedFile;
var totalheight=0;
var count=0;
function Start()
{
	var noOfWordsPerMinute="140";
	noOfWordsPerMinute =document.getElementById('noOfWordsPerMinute').value;
	if(!isEmpty(document.getElementById('noOfWordsPerMinute').value))
	{
		noOfWordsPerMinute=document.getElementById('noOfWordsPerMinute').value;
	}
		
	else if(!isEmpty(document.getElementById('dropDownNoOfWordsPerMinute').value))
	{
		noOfWordsPerMinute=document.getElementById('dropDownNoOfWordsPerMinute').value;
	}
		
	if(isEmpty(noOfWordsPerMinute))
		noOfWordsPerMinute="140";
	if(noOfWordsPerMinute<60)
	{
	alert("Please select no of words per minute more han 60");
	}
	/*else if(filedata=="")
	{
	alert("Please either choose a file or load data from Editorial")
	}*/
	else if(fileChossen=="Y" && formatOfSelectedFile!="txt")
	{
	alert("Sorry guys we currently support only .txt file we will come up with new version for this but currently work with .txt");
	}
	else
	{
		if(isEmpty(filedata))
		{
			//radio logic
			//var radios = document.getElementsByTagName('optradio');
			//radio method 2
			/*var radios = $("input[type='radio'][name='optradio']:checked").val();
			console.log('radio value'+radios);
			filedata=radios;
			
			if (isEmpty(filedata))
			{
				filedata=commonPreLoadReaddata;
			}*/
			filedata=commonPreLoadReaddata;
		}
	arr=filedata.split(" ");
	noOfWordsPerSecond=noOfWordsPerMinute/60;
	console.log("length of file"+arr.length);
	console.log("No Of words per second to be displayed"+noOfWordsPerSecond);
	 count=0;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i]=="THE"
						|| arr[i]=="HE"
						|| arr[i]=="SHE"
						|| arr[i]=="THEY"
						|| arr[i]=="OF"
						|| arr[i]=="FOR"
						|| arr[i]=="TO"
						|| arr[i]=="THIS"
						|| arr[i]=="AND" || arr[i]=="WITH") {
					count++;
				}
			}
			console.log("length after removal of Faltu words" + (arr.length-count));
			//
			 loopp=(arr.length/noOfWordsPerSecond);
		// method 2
		startClock();
		limit = noOfWordsPerSecond;
		  myVar = setInterval(display ,1000);
		
	}
}
//display function
function display()
{ time++;
for (j = k; j < limit; j++) {
				k++;
				document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML +arr[j]+" ";
				}
			//stop call clearInterval(myVar)
			if(time>loopp)
			{
				clearInterval(myVar);
				 var captureLastTime=document.getElementById("timerWatch").innerHTML;
				document.getElementById("timerWatch").innerHTML="!!!Congrats you finished "+((arr.length-count))+" words in " +captureLastTime;
				stopClock();
			}
				limit = (time+1) * noOfWordsPerSecond;
				if(limit>arr.length)
				limit=arr.length-1;
				var elmnt = document.getElementById("demo");
				var tempHeight=$("#demo").height();
				if(tempHeight>300)
				{
					scrollDown();
					}
				
		
}

function openPopUp(link)
{
//window.open(link);
window.open(link, "", "width=800, height=800");
}

function refresh()
{
	clearInterval(myVar);
	document.getElementById("demo").innerHTML="";
	reset();
}

 function isEmpty (input) {
        if (input == null || input == undefined || input == "") {
            return true;
        }
        return false;
    };
	
	function scrollDown()
	{
		var wtf    = $('#upWindow');
				var height=$("#demo").height();  
				wtf.scrollTop(height);
	
	};

