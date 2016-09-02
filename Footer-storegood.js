var $v = jQuery.noConflict();
$v(document).ready(function(){
	//Right Click Protection
	//$(document).bind("contextmenu",function(e){ return false;});

	//Content Area Mods
	$v(".pagecontainer > table:eq(1) tr:first td:first").addClass("efusion-background");
	$v(".efusion-background table:eq(1)").addClass("efusion-content");

	//Getting and Setting Store Categories
	if($v("#efusion-categories").length > 0) {
		if($v("#LeftPanel .lcat").length > 0) {
			$v("#efusion-categories").html($v("#LeftPanel .lcat").html());
		}
		$v("#efusion-categories ul[class=lev1]").find("li:last").addClass("efusion-lastitem");
	}

	//Search Box
	var stxt = $v("#efusion-search #efusion-input").find("input[class=v4sbox]").val();
	$v("#efusion-search #efusion-input").find("input[class=v4sbox]").focus(function(){
		if($v("#efusion-search #efusion-input").find("input[class=v4sbox]").val() == stxt) {
			$v("#efusion-search #efusion-input").find("input[class=v4sbox]").val("");
		}
	});
	$v("#efusion-search #efusion-input").find("input[class=v4sbox]").blur(function(){
		if($v("#efusion-search #efusion-input").find("input[class=v4sbox]").val() == "") {
			$v("#efusion-search #efusion-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$v("#efusion-search #efusion-submit").find("input").click(function(){
		if($v("#efusion-search #efusion-input").find("input[class=v4sbox]").val() == stxt) {
			$v("#efusion-search #efusion-input").find("input[class=v4sbox]").val("");
		}
	});

//Footer
	var d = new Date();
	var footer = "\n\r<div class=\"efusion-wrapcens\"><div id=\"widesearchholder\"><div id=\"widesearch\"><form action=\"/The-Whole-Shebang-New-York/_i.html\" style=\"display: inline;\" method=\"get\" name=\"Search\"><div id=\"efusion-input2\"><input name=\"_nkw\" type=\"text\" class=\"v4sbox2\" onclick=\"this.value='';\" value=\"Looking for a specific item? Search Here\" size=\"13\" maxlength=\"300\" \/><\/div><div id=\"efusion-submit2\"><input name=\"submit\" type=\"submit\"  class=\"btn-search2\" \/><\/div><\/form><\/div><\/div><div id=\"efusion-footer\"><div class=\"f-col1\"><span><\/span><h1>Store Pages<\/h1><ul><li><a href=\"http://stores.ebay.com/The-Whole-Shebang-New-York/pages/about-us\">About Us<\/a><\/li><li><a href=\"http://stores.ebay.com/The-Whole-Shebang-New-York/pages/payment\">Payment Information<\/a><\/li><li><a href=\"http://stores.ebay.com/The-Whole-Shebang-New-York/pages/shipping\">Shipping Information<\/a></li><li><a href=\"http://stores.ebay.com/The-Whole-Shebang-New-York/pages/returns\">Returns<\/a><\/li><li><a href=\"http://contact.ebay.com/ws/eBayISAPI.dll?ReturnUserEmail&requested=thewholeshebang2013&frm=3692&iid=-1&de=off&redirect=0\">Contact Us<\/a><\/li><\/ul><\/div><div class=\"f-col2\"><span><\/span><h1>Store Newsletter<\/h1><div id=\"efusion-newsletter2\"><form action=\"http://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&sellerid=thewholeshebang2013&refid=store&ssPageName=STORE:HTMLBUILDER:SIMPLEPAGE\" method=\"post\"><div id=\"efusion-text2\"><div align=\"left\"><p>Add my Store to your Favorite and receive my email newsletters about new items and special promotions!<\/p><p> <\/p><br \/><input type=\"checkbox\" name=\"nlchxbox\" value=\"selectedMailingList_3800389\" checked=\"checked\">General Interest <\/div><div id=\"efusion-signup2\"><input name=\"submit\" type=\"submit\" class=\"btn-signup2\" value=\"Sign up\" width=\"auto\" height=\"auto\" /><\/div><\/div><\/form><\/div></div><div class=\"f-col3\"><span><\/span><h1>We Accept<\/h1><div id=\"f-payment\"><\/div><\/div><div class=\"f-col4\"><div id=\"efusion-copy\">Copyright &copy; " + d.getFullYear() +" All rights reserved.<\/div><div id=\"efusion-designedby\">Store Designed &amp; Developed By<\/div><div id=\"efusionfooterlogo\"><a href=\"http://www.upwork.com/o/profiles/users/_~015b640ac53e133434/\" target=\"_blank\"><img src=\"http://i61.photobucket.com/albums/h76/Nimo18/COMPONY13_zpsgoko2h3j11_zpsrvywslvk.png\" width=\"111\" height=\"18\"\ /><\/a><\/div><\/div><\/div><\/div>";
	if(pageName != "PageAboutMeViewStore") {
		if($v(".efusion-content").length > 0) {
			$v(".efusion-content").after(footer);
		}
	}
});
