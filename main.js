//Ryan Hamlet
//VFW 1307
//VFW Project 2


//Start when DOM is loaded.
window.addEventListener("DOMContentLoaded", function(){
	
//ID function	
	function walk(x){
	var theE = document.getElementById(x);	
		return theE;
		
	}
	
	 

	
// create select field element 
	function mCat(){
		var itemCategories = ["All","Auto","Electronics","Clothes","Jewelry","Furniture","Pets","Household","Collectables","Books"];
		var formTag = document.getElementsByTagName("form");// form tag is an array of all form tags
			mSelect = document.createElement("select");
			selectLi = walk("select"),
			
			mSelect.setAttribute("id", "SearchCategory");
		for(var i=0, c=itemCategories.length; i<c; i++){
			var mOption = document.createElement("option");
			var optText = itemCategories[i];
			mOption.setAttribute("value", optText);
			mOption.innerHTML = optText;
			mSelect.appendChild(mOption);
		}
		selectLi.appendChild(mSelect);
	}
	//Find value of selected radio.
	function activeRadio(){
		var radio = document.forms[0].condition;
		for(var i=0; i < radio.length; i++){
		if(radio[i].checked){
			var conditionValue = radio[i].value;
			}
		}
		
	}
	
	function activeCheckedbox(){
		if(walk("repostOption").checked){
			repostValue = walk("repostOption").value;
		}else{
			repostValue = "No"
		}
	}
	function keepData(){
		var id           = Math.floor(Math.random()*100000001);
		activeRadio();
		activeCheckedbox();
	
		var itemNum          = {};
			itemNum.title		 = ["Title:", walk("title").value];
			itemNum.price		 = ["Price:", walk("price").value];
			itemNum.category		 = ["Category:", walk("searchCategory").value];
			itemNum.conditionScale		 = ["Condition Scale:", walk("condition").value];
			
			//itemNum.itemCondition		 = ["Item Condition:", conditionValue];
			itemNum.repostOption		 = ["Repost Option", repostValue];
			
			itemNum.description		 = ["Description:", walk("description").value];
			itemNum.sellDate		 = ["Sell by date:", walk("sellDate").value];
			itemNum.email		 = ["Seller Email:", walk("email").value];
		
		localStorage.setItem(id, JSON.stringify(itemNum));
		alert("Item Saved!");
	}
	function showData(){
		var mDiv = document.createElement("div");
		mDiv.setAttribute("id", "items");
		var mList = document.createElement("ul");
		mDiv.appendChild(mList);
		document.body.appendChild(mDiv);
		for(var i=0, lSl=localStorage.length; i<lSl;i++){
			var mLi = document.createElement("li");
			mList.appendChild(mLi);
			var key = localStorage.key(i);
			var val =localStorage.getItem(key)
			var thing = JSON.parse(val);
			var mSl = document.createElement("ul");
			mLi.appendChild(mSl);
			for(var g in thing){
				var mSLi = document.createElement("li");
				mSl.appendChild(mSLi);
				var oSt = thing[g][0]+""+thing[g][1];
				mSLi.innerHTML = oSt;
			}
		}
		
	}
	function cLocal(){
		if(localStorage.length === 0){
			alert("Please complete the applcation.")
		}else{
			localStorage.clear();
			alert("Application Cleared!");
			window.location.reload();
			return false;
		}
	}
	//LOOK
	repostValue = "No";	
	mCat();
		 
	//Click Events
    var clearData = walk("clear");
	clearData.addEventListener("click", cLocal);
	
	var submitButton = walk("submit");
	submitButton.addEventListener("click", keepData);
	
	var dlink = walk("show");
	dlink.addEventListener("click", showData);
	

	
		
	
});