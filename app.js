function result(){
    var count = 0;
    var ans1 = document.getElementById('q1_correct');
    var ans2 = document.getElementById('q2_correct');
    var ans3 = document.getElementById('q3_correct');

    if (ans1.checked == true){
        count +10;
     //   alert('correct1');;
    }else{
       // alert('wrong');
    }
    if (ans2.checked == true){
        count +10;
        //alert('correct2');;
    }else{
    //    alert('wrong');
    }
    if (ans3.checked == true){
        count +10;
      //  alert('correct3');;
    }else{
        //alert('wrong');
    }
    document.getElementById("demo").innerHTML = count; 
 
}
