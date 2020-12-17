function minimumSwaps(arr) {

 
   
        var i,c=0,n=arr.length;
        
            for(i=0;i<n;i++)
        
            {
            
                if(arr[i]!=(i+1))
                  {
        
                    var b=arr[arr[i]-1];
                    var a=arr[i];      
                    arr[i]=b;
                    arr[b] = a;    
                    c++;
                
                   i--;
                  }       
            }
            return c;
        
         
        }
