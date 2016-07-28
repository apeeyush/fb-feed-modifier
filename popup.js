$(document).ready(function() {

    chrome.storage.local.get("status", function(item){
        if(item["status"] === undefined){
            $('#GRE').css('background', '#D3D3D3');
        }else if(item["status"] == 'GRE'){
            $('#GRE').css('background', '#D3D3D3');
        }else if(item["status"] == 'empty'){
            $('#empty').css('background', '#D3D3D3');
        }else if(item["status"] == 'disable'){
            $('#disable').css('background', '#D3D3D3');
        }
    });

    $('#GRE').click(function(){
        chrome.storage.local.set({ "status": "GRE" }, function(){
            window.close();
        });
    });
    $('#empty').click(function(){
        chrome.storage.local.set({ "status": "empty" }, function(){
            window.close();
        });
    });
    $('#disable').click(function(){
        chrome.storage.local.set({ "status": "disable" }, function(){
            window.close();
        });
    });
});
