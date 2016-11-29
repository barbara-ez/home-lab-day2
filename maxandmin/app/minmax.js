app={

findMinMax: function(a)
{
	var max;
            max=a[0];
            min=a[0];
            
            for(var i=0;i<=a.length;i++)
            
            {
            if(a[i]>max)
            {
                max=a[i];
            }
            if(a[i]<min)
            {
                min=a[i];
            }
            }
            if (max==min)
            {
              return [max];
            }
            return [min,max];



}

}
module.exports=app;