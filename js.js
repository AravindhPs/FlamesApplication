function result()
{
    var array = ['f','l','a','m','e','s'];
    var yourName = document.getElementById("yourname").value.toUpperCase();
    var dreamPartnerName = document.getElementById("dreampartnername").value.toUpperCase();
    yourName = yourName.replace(/\s/g,'');
    dreamPartnerName = dreamPartnerName.replace(/\s/g,'');
    var yourNameArray = [];
    var dreamPartnerNameArray = [];
    var biggerName = [];
    var smallerName = [];
    for (var i = 0; i < yourName.length; i++) {
          yourNameArray.push([yourName.charAt(i)]);
      } 
    for (var k = 0; k < dreamPartnerName.length; k++) {
        dreamPartnerNameArray.push([dreamPartnerName.charAt(k)]);
    } 

    if(yourNameArray.length != dreamPartnerNameArray.length)
    {
    biggerName = yourNameArray.length > dreamPartnerNameArray.length ? yourNameArray : dreamPartnerNameArray;
    smallerName = yourNameArray.length < dreamPartnerNameArray.length ? yourNameArray : dreamPartnerNameArray; 
    }
    else
    {
        biggerName = yourNameArray;
        smallerName = dreamPartnerNameArray;
    }       

    for(var l = 0; l< biggerName.length; l++)
    {
        for (var j = 0; j < smallerName.length; j++)
        {                                   
            if(biggerName[l].toString() == smallerName[j].toString())
            {
                biggerName.splice(biggerName.indexOf(biggerName[l]), 1);
                smallerName.splice(smallerName.indexOf(smallerName[j]), 1);
                l=-1;
                j=-1;                            
                break;
            }           
        }        
    }
    
    var length = biggerName.length + smallerName.length;  
    alert("The Length of the character after removing common letter is : " + " " + length);  
    var stp = 1; 
    // var array3 = [];
    // var array4 = []; 
    // var bool = false;
    
    for(var x=6; x>1; x--)
        {
           var g=((length%x)+stp)-1;
                if(g>x)
                 {
                    g=g%x;
                 }
                 if(g===0)
                 {
                    g=array.length;
                 }
              array.splice(g-1,1);
              stp=g;              
             alert("Removing characters by using length :" + " " + array);
             if(array.length == 1)
               {
                document.getElementById("yourname").value = "";
                document.getElementById("dreampartnername").value = "";
                switch(array[0])
                {
                          case 'f':
                          document.getElementById("result").innerText = yourName + "  " + " and " + dreamPartnerName + "  " +" were FRIENDS";
                          document.getElementById("resultimg").src ="Images/Friends.jpg"; 
                          break;                         
                          case 'l':
                          document.getElementById("result").innerText = yourName + "  " + " and " + dreamPartnerName + "  " +" are Lovers";
                          document.getElementById("resultimg").src ="Images/lover.jpg";  
                          break;
                          case 'a':
                          document.getElementById("result").innerText = yourName + "  " + " and " + dreamPartnerName + "  " +" are Affectionate"; 
                          document.getElementById("resultimg").src ="Images/Affection.jpg"; 
                          break;
                          case 'm':
                          document.getElementById("result").innerText = yourName + "  " + " and " + dreamPartnerName + "  " +" will get 'MARRIAGE'";
                          document.getElementById("resultimg").src ="Images/Marriage.jpg";  
                          break;
                          case 'e':
                          document.getElementById("result").innerText = yourName + "  " + " and " + dreamPartnerName + "  " +" become ENEMIES"; 
                          document.getElementById("resultimg").src ="Images/Enemy.jpg"; 
                          break;
                          case 's':
                          document.getElementById("result").innerText = yourName + "  " + " and " + dreamPartnerName + "  " +" are SISTER";
                          document.getElementById("resultimg").src ="Images/sisters.jpg";  
                          break;
                          case 'default':
                          break;
                }
               }
        }
    }
    // while(array.length>1)
    // {
    //     for(var i = 0; i < length; i++)
    //     {
    //        if(i == length-1 && !bool)
    //        {
    //           array.splice(array.indexOf(array[i]),1);
    //           bool = true; 
    //           i--; 
    //           continue;     
    //        }
    //        if(array.length < length)
    //        {
    //            if(array.length > 1)
    //            {
    //           stp = ((length%array.length) + array.length - 1) -1;
    //           if(stp==0)
    //           stp = 1;
    //           array.splice(array.indexOf(array[stp-1]),1);
    //           if(array.length == 1)
    //           {   
    //            alert(array);            
    //            return;
    //           }
    //           continue;
    //            }
              
    //        }          
    //        if(bool)
    //        {               
    //            array3.push(array[i]);
    //        }
    //        else
    //        {
    //            array4.push(array[i]);
    //        }
    //     }

    //     for (var j = 0;j < array4.length; j++) {
    //         array3.push(array4[j]);
    //     } 

    //      array = array3;
    //      bool = false;
    //      array3 =[];
    //      array4 = [];
    // }  