/*Swich EasyTabs Functions - no need to edit something here*/
function easytabs(menunr, active) 
{
	for (i=1; i <= 3; i++)
	{
		document.getElementById("tablink"+i).className='tab'+i;
    	document.getElementById("tabcontent"+i).style.display = 'none';
	}
	document.getElementById("tablink"+active).className='tab'+active+' tabactive';
	document.getElementById("tabcontent"+active).style.display = 'block';
}

window.onload=function(){
 easytabs('1','1');
}