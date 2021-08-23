<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://www.amcharts.com/lib/4/core.js"></script>
    <script src="https://www.amcharts.com/lib/4/charts.js"></script>
    <script src="https://www.amcharts.com/lib/4/themes/material.js"></script>
    <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>  	
      <style>
        table,td, th {
            border-collapse: collapse;
            border: 1px solid #dddddd;
  			text-align: center;
  			padding: 8px;
            height:100%;
            width:100%;
        }
        td{
            height:400px;
            width:25%;
        }
        div{
              height:300px;
           	  width:100%;
         }
         p{
              font-size:30px;
         }
          h1{
               font-size:40px;
          }
        
    </style>
  </head>
  <body  id="data-item">
  </body>    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js" integrity="sha512-rmZcZsyhe0/MAjquhTgiUcb4d9knaFc7b5xAfju483gbEXTkeJRUMIPk6s3ySZMYUHEcjKbjLjyddGWMrNEvZg==" crossorigin="anonymous"></script>
    <script>
        //pass the json array from the data soure into javascript variable
    	var data = {{data|json_dump}};//variable to store the json array
        //pass the json array from the data soure into javascript variable 
        
        //variables used in the first loop
        var col_1=[];//array to store column 1 values
        var col_2=[];//array to store column 2 values
        var col_3=[];//array to store column 3 values
        var col_4=[];//array to store column 4 values
        var col_5=[];//array to store column 5 values
        //variables used in the first loop
        
       //variables used in the second loop
       var col_1_unique=[];//array to store the unique values of col_1
       var unique_total=[];//array to store the unique total value for each col_1 variable
       var unique_ctr=0;//varible to count the number of similarity of column 1 in the inner loop in j
       //variables used in the second loop
       
        //variables used in the third loop 
        var total_value_ctr=0;
        var total_value_arr=[];
        //variables used in the third loop
        
        //varibales used in the fourth loop
        var max_val=0;//varible to count the order of the total value
        var order_arr=[];//array to store the values of the total in desc order
        //varibales used in the fourth loop
        
        //variables used in the fifth loop
        var col_1_sort=[];//array to store the sorted col_1 value
        var total_sort=[];
        //variables used in the fifth loop
        
        //variable used in the sixth loop
        var col_2_sort=[];//array to sort col_2 in order
        var col_3_sort=[];//array to sort col_3 in order
        var col_4_sort=[];//array to sort col_4 in order
        var col_5_sort=[];//array to sort col_5 in order
        var total_arr=[];//array to store the sum of all the unique subset of col_2
        var start_arr=[0];//array to store the starting index of the new unique row
        var end_arr=[];//array to store the ending index of the old unique row
        var col_1_ctr=0;//counter to compare the current index of the loop
        //varibale used in the sixth loop
        
        //variables used in the seventh loop
        var col_1_reorganize=[];
        var col_2_order=[];//array to store column 2 order
        var col_2_ctr=0;//array to count the index of column 2 order
        //variables used in the seventh loop
        
        //variables used in the eight loop
        var sort_ctr=0;//counter to count the number of unique occurences in the index
        var col_2_reorganize=[];//array to sort the subclasses of col_1 in desc order
        var col_3_reorganize=[];//array to sort the subclasses of col_1 in desc order
        var col_4_reorganize=[];//array to sort the subclasses of col_1 in desc order//array to sort the subclasses or col_1 in desc order
        var col_5_reorganize=[];//array to sort the subclasses of col_1 in desc order
        var total_reorganize=[];//array to sort the total of col_1 in desc order
        //variables used in the eight loop
        
        //variables used in the ninth loop
        var table_ctr=0;
        var difference=0;
        var div_ctr=0;
        var div_name=[];
        var total_dup=[];
        var total_sort_reorganize=[];
        var html="";
        //variables used in the ninth loop
        
        //first loop to push all the data into the respective arrays
        for (var d of data){//loop for the amount of rows in the data source
            col_1.push(d['Col_1']);//push Col_1 value into the variable
            col_2.push(d['Col_2']);//push Col_2 value into the variable
            col_3.push(d['Col_3']);//push Col_3 value into the variable
            col_4.push(d['Col_4']);//push Col_4 value into the variable
            col_5.push(d['Col_5']);//push Col_5 value into the variable
        }1
        //first loop to push all the data into the respective arrays
        
        //second array to filter and check for the unique values in col_1
        for (var i=0;i<col_1.length;i++){//loop for the number of variables available in the first array
            if (i==0){//if i is 0 push the first value of col_1 into the array to start the other conditions
                col_1_unique.push(col_1[i]);//push the first value of col_1 into the array
            }
            else{//if i is not 0
                for (var j=0;j<col_1_unique.length;j++){//inner loop to check if the existing variable in the array matches with the variable in col_1
                    if (col_1_unique[j]==col_1[i]){//statement if the unique array has a duplicated value that matches col_1
                        unique_ctr++;//add 1 to the counter
                    }
                }
                if (unique_ctr==0){//if the unique counter is 0 then only push the data into the array
                    col_1_unique.push(col_1[i]);//push the unique varible into the array
                }
                unique_ctr=0;//reset the counter to 0 after every run for the logic to run
            }
        }
        //second array to filter and check for the unique values in col_1
        
        //third array to sum up all the unique values from col_1
        for (var i=0;i<col_1_unique.length;i++){//loop for the number of uniques values in col_1_unique
            for (var j=0;j<col_1.length;j++){//loop the original col_1 to sum up all the values using index
                if(col_1_unique[i]==col_1[j]){//if col_1 matches the unique col_1
                    total_value_ctr=total_value_ctr+col_3[j]+col_4[j]+col_5[j];//accumulate the value from all the other columns
                }
            }
            total_value_arr.push(total_value_ctr.toFixed(2));//push the total accumulated amount by the end of the loop
            total_value_ctr=0;//reset the value to 0
        }
        //third array to sum up all the unique values from col_1
        
        //fourth array to find the order of the amount in desc order
        for (var i=0;i<total_value_arr.length;i++){//loop though all the values that stores all the total value for each unique item in col_1
            for (var j=0;j<total_value_arr.length;j++){//inner loop to compare between each variable
                if (Number(total_value_arr[i])<Number(total_value_arr[j]) ){//if the current total value is more than the inner loop value
                    max_val++;//add 1 to the ranking counter
                }
            }
            order_arr.push(max_val);//push the ranking into the array
            max_val=0;//reset the counter to 0
        }
        //fourth array to find the order of the amount in desc order
           
        //fifth array to sort all the columns
        for (var i=0;i<col_1_unique.length;i++){//loop for the number of variables in the unique_col_1
            for (var j=0;j<order_arr.length;j++){//inner loop for the number of unique value in order_arr
                if (Number(order_arr[j])==Number(i)){//if the value in the order_arr matches the current i count
                   col_1_sort.push(col_1_unique[j]); //push the variable to col_1_sort
                   total_sort.push(total_value_arr[j]);
                }
            }
        }
        //fifth array to sort all the columns
        
        //sixth array to align all the other arrays in descending order
        for (var i=0;i<col_1_sort.length;i++){//loop for the number of variables in the array
            for (var j=0;j<col_1.length;j++){//loop col_1 to sort all the varibale in order
                if (col_1_sort[i]==col_1[j]){//if col_1 sort matches the value in col_1
                    col_1_reorganize.push(col_1[j]);
                    col_2_sort.push(col_2[j]);//push the value of col_2 into col_2_sort according to index
                    col_3_sort.push(col_3[j]);//push the value of col_3 into col_2_sort according to index
                    col_4_sort.push(col_4[j]);//push the value of col_4 into col_2_sort according to index
                    col_5_sort.push(col_5[j]);//push the value of col_5 into col_2_sort according to index
                    total_arr.push((col_3[j]+col_4[j]+col_5[j]).toFixed(2));//sum up all the values of col_1 to col_5 and put the vlaue in an array
                    col_1_ctr++;//add 1 to the counter to identify at which index the array becomes unique
                }
            }
            start_arr.push(col_1_ctr);//push the starting index into the array 
            end_arr.push(col_1_ctr-1);//push the ending index into the array and minus 1 because the condition of the loop is less than the length
        }
        //sixth array to align all the other arrays in descending order
        
        //seventh array to sort the subclasses of col_1
        for (var i=0;i<total_arr.length;i++){//loop for the number of items in total_arr
            for (var j=0;j<total_arr.length;j++){//inner loop that cross checks for the amount of same varibles in col_1
                if (col_1_reorganize[i]==col_1_reorganize[j]){//if the current index of col_1 matches with the inner loop index
                    if (Number(total_arr[i])<Number(total_arr[j])){//if the total at index is more than total in the inner loop
                        col_2_ctr++;//add 1 to the counter
                    }
                }
            }
            col_2_order.push(col_2_ctr);//rank column 2 in desc order and push it in col_2_order
            col_2_ctr=0;//reset the ranking to 0
        }
        //seventh array to sort the subclasses of col_1
        
        //eighth array to reorganize col_2 completely
        for (var i=0;i<col_2_sort.length;i++){
            for (var j=0;j<col_2_sort.length;j++){
            	if(Number(col_2_order[j])==sort_ctr && col_1_reorganize[i]==col_1_reorganize[j]){
                    col_2_reorganize.push(col_2_sort[j]);
                    col_3_reorganize.push(col_3_sort[j]);
         			col_4_reorganize.push(col_4_sort[j]);
        			col_5_reorganize.push(col_5_sort[j]);
         			total_reorganize.push(total_arr[j]);
                	break;
                }
            }
            sort_ctr++;
            if(col_1_reorganize[i]!=col_1_reorganize[i+1]){
            	sort_ctr=0;
            }
        }
        //eighth array to reorganize col_2 completely
        
        //ninth loop to create the table
        for (var i=0;i<col_1_sort.length;i++){
            table_ctr=0;
            html+="<center><h1>"+col_1_sort[i]+"</h1><table><tr>";
            difference=end_arr[i]-start_arr[i];
            if (difference>4){
                for (var j=start_arr[i];j<=end_arr[i];j++){
                	html+="<td><strong><p>"+col_2_reorganize[j]+"</p><p>RM"+total_reorganize[j]+"</p></strong><center><div id="+div_ctr.toString()+"><center>"; 
                    div_name.push(div_ctr.toString());
                    div_ctr++;
                    table_ctr++;
                    html+="<h1>V1000 : "+Number(col_3_reorganize[div_ctr]).toFixed(2)+"</h1>";
                    html+="<h1>N1000 : "+Number(col_4_reorganize[div_ctr]).toFixed(2)+"</h1>";
                    html+="<h1>L1000 : "+Number(col_5_reorganize[div_ctr]).toFixed(2)+"</h1></td>";
                    total_sort_reorganize.push(total_sort[i]);
                    if (table_ctr==4){
                        html+="</tr>";
                        table_ctr=0;
                    }
                }
                html+="</table></center><br>";
            }
            else {
                for (var j=start_arr[i];j<=end_arr[i];j++){
                	html+="<td><strong><p>"+col_2_reorganize[j]+"</p><p>RM"+total_reorganize[j]+"</p></strong><center><div id="+div_ctr.toString()+"><center>"; 
                    div_name.push(div_ctr.toString());
                    div_ctr++;
                    table_ctr++;
                    html+="<h1>V1000 : "+Number(col_3_reorganize[div_ctr]).toFixed(2)+"</h1>";
                    html+="<h1>N1000 : "+Number(col_4_reorganize[div_ctr]).toFixed(2)+"</h1>";
                    html+="<h1>L1000 : "+Number(col_5_reorganize[div_ctr]).toFixed(2)+"</h1></td>";
                    total_sort_reorganize.push(total_sort[i]);
                    if (table_ctr==4){
                        html+="</tr>";
                        table_ctr=0;
                    }
                }
                html+="</table></center><br>";
            }
        }
        //ninth loop to create the table
        
        //tenth loop to create am charts
        am4core.ready(function() {
        am4core.useTheme(am4themes_material);
        am4core.useTheme(am4themes_animated);
            for (var i=0;i<div_name.length;i++){
        	var chart = am4core.create(div_name[i], am4charts.RadarChart);
            chart.data = [{
            "category": "V1000",
                          "value": Number(col_3_reorganize[i])/total_reorganize[i]*100,
                          "full": 100
                        },{
                          "category": "N1000",
                          "value": Number(col_4_reorganize[i])/total_reorganize[i]*100,
                          "full": 100
                        },{
                          "category": "L1000",
                          "value":  Number(col_5_reorganize[i])/total_reorganize[i]*100,
                          "full": 100
                        }];
                        chart.startAngle = -80;
                        chart.endAngle = 260;
                        chart.innerRadius = am4core.percent(50)
                        chart.numberFormatter.numberFormat = "#.#'%'";
                        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
                        categoryAxis.dataFields.category = "category";
                        categoryAxis.renderer.grid.template.location = 0;
                        categoryAxis.renderer.grid.template.strokeOpacity = 0;
                        categoryAxis.renderer.labels.template.horizontalCenter = "right";
                        categoryAxis.renderer.labels.template.fontWeight = 500;
                        categoryAxis.renderer.labels.template.fontSize = 0;
                        chart.colors.list = [
                            am4core.color("#0000FF"),
                            am4core.color("#00FF00"),
                            am4core.color("#ff0000")
                        ];
                        categoryAxis.renderer.minGridDistance = 10;
                        var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
                        valueAxis.renderer.grid.template.strokeOpacity = 0;
                        valueAxis.min = 0;
                        valueAxis.max = 100;
                        valueAxis.strictMinMax = true;
                        var series1 = chart.series.push(new am4charts.RadarColumnSeries());
                        series1.dataFields.valueX = "full";
                        series1.dataFields.categoryY = "category";
                        series1.clustered = false;
                        series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
                        series1.columns.template.fillOpacity = 0.08;
                        series1.columns.template.cornerRadiusTopLeft = 20;
                        series1.columns.template.strokeWidth = 0;
                        series1.columns.template.radarColumn.cornerRadius = 20
                        var series2 = chart.series.push(new am4charts.RadarColumnSeries());
                        series2.dataFields.valueX = "value";
                        series2.dataFields.categoryY = "category";
                        series2.clustered = false;
                        series2.columns.template.strokeWidth = 0;
                        series2.columns.template.tooltipText = "{category}\n[bold]{value}[/]";
                        series2.tooltip.pointerOrientation = "down";
                        series2.tooltip.label.textAlign = "middle";
                        series2.tooltip.dy =  -10;
                        series2.columns.template.tooltipY = 0;
                        series2.columns.template.radarColumn.cornerRadius = 20;
                        series2.columns.template.adapter.add("fill", function(fill, target) {
                          return chart.colors.getIndex(target.dataItem.index);
                        });
                        chart.cursor = new am4charts.RadarCursor();
                        var label1 = chart.createChild(am4core.Label);
                        label1.text =(Number(total_reorganize[i])/Number(total_sort_reorganize[i])*100).toFixed(2)+"%";
                        label1.fontSize = 22;
                        label1.align = "left";
                        label1.isMeasured = false;
                        label1.x = am4core.percent(50);
                        label1.horizontalCenter = "middle";
                        label1.y = am4core.percent(45);
        } }); 
        //tenth loop to create am charts
        
       //alert(JSON.stringify(total_reorganize));
        $("#data-item").html(html);
    </script>

</html>