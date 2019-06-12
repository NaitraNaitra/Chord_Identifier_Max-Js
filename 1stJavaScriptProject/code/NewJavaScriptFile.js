//inlets =1;
//outlets =5;

var scale = new Array();
scale[0] = new Array('C', 1);
scale[1] = new Array('Db', 2);
scale[2] = new Array('D', 3);
scale[3] = new Array('Eb', 4);
scale[4] = new Array('E', 5);
scale[5] = new Array('F', 6);
scale[6] = new Array('Gb', 7);
scale[7] = new Array('G', 8);
scale[8] = new Array('Ab',9);
scale[9] = new Array('A',10);
scale[10] = new Array('Bb',11);
scale[11] = new Array('B',12);


var chromaticMidi = new Array();
chromaticMidi[0] = new Array( 36, "C2", 65.4, 1,0);
chromaticMidi[1] = new Array(37, "C#2", 69.3, 2,0);
chromaticMidi[2] = new Array(38, "D2", 73.4, 3,0);
chromaticMidi[3] = new Array(39, "D#2", 77.8, 4,0);
chromaticMidi[4] = new Array( 40, "E2", 82.4, 5,0);
chromaticMidi[5] = new Array(41, "F2", 87.3, 6,0);
chromaticMidi[6] = new Array(42, "F#2", 92.5, 7,0);
chromaticMidi[7] = new Array(43, "G2", 98, 8,0);
chromaticMidi[8] = new Array(44, "G#2", 103.8, 9,0);
chromaticMidi[9] = new Array(45, "A2", 110, 10,0);
chromaticMidi[10] = new Array(46, "A#2", 116.5, 11,0);
chromaticMidi[11] = new Array(47, "B2", 123.5, 12,0);
chromaticMidi[12] = new Array(48, "C3", 130.8, 1,0);
chromaticMidi[13] = new Array(49, "C#3", 138.6, 2,0);
chromaticMidi[14] = new Array(50, "D3", 146.8, 3,0);
chromaticMidi[15] = new Array(51, "D#3", 155.6, 4,0);
chromaticMidi[16] = new Array(52, "E3", 164.8, 5,0);
chromaticMidi[17] = new Array(53, "F3", 174.6, 6,0);
chromaticMidi[18] = new Array(54, "F#3", 185, 7,0);
chromaticMidi[19] = new Array(55, "G3", 196, 8,0);
chromaticMidi[20] = new Array(56, "G#3", 207.7, 9,0);
chromaticMidi[21] = new Array(57, "A3", 220, 10,0);
chromaticMidi[22] = new Array(58, "A#3", 233, 11,0);
chromaticMidi[23] = new Array(59, "B3", 246.9, 12,0);
chromaticMidi[24] = new Array(60, "C4", 261.6, 1,0);
chromaticMidi[25] = new Array(61, "C#4", 277.2, 2,0);
chromaticMidi[26] = new Array(62, "D4", 293.7, 3,0);
chromaticMidi[27] = new Array(63, "D#4", 311.1, 4,0);
chromaticMidi[28] = new Array(64, "E4", 329.6, 5,0);
chromaticMidi[29] = new Array(65, "F4", 349.2, 6,0);
chromaticMidi[30] = new Array(66, "F#4", 370, 7,0);
chromaticMidi[31] = new Array(67, "G4", 392, 8,0);
chromaticMidi[32] = new Array(68, "G#4", 415.3, 9,0);
chromaticMidi[33] = new Array(69, "A4", 440, 10,0);
chromaticMidi[34] = new Array(70, "A#4", 466.2, 11,0);
chromaticMidi[35] = new Array(71, "B4", 493.9, 12,0);
chromaticMidi[36] = new Array(72, "C5", 523.3, 1,0);
chromaticMidi[37] = new Array(73, "C#5", 554.4, 2,0);
chromaticMidi[38] = new Array(74, "D5", 587.3, 3,0);
chromaticMidi[39] = new Array(75, "D#5", 622.3, 4,0);
chromaticMidi[40] = new Array(76, "E5", 659.3, 5,0);
chromaticMidi[41] = new Array(77, "F5", 698.5, 6,0);
chromaticMidi[42] = new Array(78, "F#5", 740, 7,0);
chromaticMidi[43] = new Array(79, "G5", 784, 8,0);
chromaticMidi[44] = new Array(80, "G#5", 830.6, 9,0);
chromaticMidi[45] = new Array(81, "A5", 880, 10,0);
chromaticMidi[46] = new Array(82, "A#5", 932.3, 11,0);
chromaticMidi[47] = new Array(83, "B5", 987.8, 12,0);
chromaticMidi[48] = new Array(84, "C6", 1046.5, 1,0);
var userArray = new Array();
var fetchedNotesFromCM = new Array();
var RandomNumberForFetchingNotes = new Array();

function generateScale(key){
    keynote = key;
    //var userArray = new Array();
    
    for(i=0; i < 12; i++) //iterate through the array to find the key that has been given
        if(scale[i][0] === key){
            note = i;
            post("==" +key, "major scale ==\n");
            break;
        }
        else note = -1;
    
    if(note >= 0){
        for (i=0; i < 7; i++){
            /* use table to translate pitch-class to note name */
            userArray[i] = scale[note%12];
            
            //console.log( scale[note%12]);
            
            
            if(i != 2) note += 2;
            
            else note++;
        }
        post("\n");
        
    }
    else{
        post("%s: invalid key\n", key);
        
    }
    
    var selectedNotesArray = new Array();
    
    
    
    //Fetches the notes from ChromaticMidi and puts them  in Selected notes array
    for (k=0; k < (chromaticMidi.length - 1) ; k++) {
        for (l = 0; l < (userArray.length - 1); l++){
            
            if ((chromaticMidi[k][3]) === (userArray[l][1])){
                selectedNotesArray[k] = chromaticMidi[k];
            } else {
                
            }
            
        }
    }
    
    
    
    
    //strip undefined
    //because we get undefined errors assigned it to a global called FetchedNotesFromCM
    fetchedNotesFromCM = selectedNotesArray.filter(function(n){ return n != undefined });
    
    
    
    
    for (i=0; i < fetchedNotesFromCM.length ; i++){
        
        fetchedNotesFromCM[i][4] = i;
        
        
    }
    
    
    
    
    
    ("\n");
    
    
    
};
var numberOfNotes = 1;

function getRandomNotes(numberOfNotes) {
    for (i = 0 ; i < numberOfNotes; i++){
        RandomNumberForFetchingNotes[i] = Math.floor(Math.random()*(fetchedNotesFromCM.length))
    } post(RandomNumberForFetchingNotes.toString())
	
    
}

//so we can replay the notes , should have a way of putting out the outlet.

/***************THISISWHEREIAM********************/
var thisIsWhereTheRandomNotesAreStored = new Array();
function playTheNotes(){
    for (i=0; i < RandomNumberForFetchingNotes.length; i++) {
        thisIsWhereTheRandomNotesAreStored[i]    = (fetchedNotesFromCM[RandomNumberForFetchingNotes[i]])
outlet(0,thisIsWhereTheRandomNotesAreStored[i]);    
}

    post(thisIsWhereTheRandomNotesAreStored.toString() +"\n");
}


var theRandomGotArray = new Array();

function receiveNotes(numb) {
    theRandomGotArray.push(numb);
    post(theRandomGotArray.toString())
}



function compareNotes(){
	   for (k=0; k < (theRandomGotArray.length - 1) ; k++) {
        for (l = 0; l < (thisIsWhereTheRandomNotesAreStored.length - 1); l++){
            post(theRandomGotArray[k])
post(thisIsWhereTheRandomNotesAreStored[l][3])
            if ((theRandomGotArray[k][3]) === (thisIsWhereTheRandomNotesAreStored[l][3])){
                post("wellDone")
            } else { post("eatDick\n")
            }
            
        }
    }
}





 //genScaleWorks!

getRandomNotes(numberOfNotes);
playTheNotes(RandomNumberForFetchingNotes ,fetchedNotesFromCM)


//console.log(fetchedNotesFromCM);








/*
 Make an array based on users choice, output duration based on users choice,
 give four random notes,
 compare the notes given, if true give a point, if false display the correct notes?
 */