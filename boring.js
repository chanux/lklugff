$(document).ready(function(){
        $("#url").click(function(){
            if($(this).val() == this.defaultValue){
                $(this).val("");
            }
        });

        $("#url").blur(function(){
            if($(this).val() == ""){
                $(this).val(this.defaultValue);
            }
        });

        $("#button").click(function(){
            $("#content").hide('fast', function(){$.getJSON("http://viewtext.org/api/text?url=" + $("#url").val() + "&callback=?",
                                        function(data){
                                            $("#content").html(data.content);
                                            $("#content").show('normal');
                                        })});
        });
});
