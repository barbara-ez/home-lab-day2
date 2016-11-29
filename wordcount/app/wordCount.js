app=
{
	words: function(n)//function to count word occurences
	{
	  var check="";
	  var word="";
	  if (n.indexOf("\n")>=0)
	  {
	    word=n.replace("\n"," ").split(" ");//check new lines
	    
	  }
	  
	  else if(n.indexOf("\t")>=0)
	  {
	    
	    word=n.replace("\t"," ").split(" ");//check tab spaces
	  }
	  else
	  {
	    
	    n=n.replace(/\s+/g,' ');//check whitespaces
	    word=n.split(" ");
	  }
	  
	  var count;
	  var final={};
	  
	  for(i=0;i<word.length;i++)
	  {
	    count=0;
	    for(j=0;j<word.length;j++)
	    {
	      if(word[j]==word[i])
	      {
	       
	        count++;
	      }
	    }
	    final[word[i]]=count;
	    
	  }
	  return final;
	}
}
module.exports=app;