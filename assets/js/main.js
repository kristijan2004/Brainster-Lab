let marketing = document.querySelector("#market");
let coding = document.querySelector("#code");
let design = document.querySelector("#design");
$(document).ready(function () {
    $('.category_item').click(function () {
        var category = $(this).attr('id');
        if (category == 'market') {
            marketing.classList.add("active");
            coding.classList.remove("active");
            design.classList.remove("active");
            $('.project_item').addClass('hide');
            $('.' + category).removeClass('hide');
        }
        if (category == 'code') {
            marketing.classList.remove("active");
            coding.classList.add("active");
            design.classList.remove("active");
            $('.project_item').addClass('hide');
            $('.' + category).removeClass('hide');
        }
        if (category == 'design') {
            marketing.classList.remove("active");
            coding.classList.remove("active");
            design.classList.add("active");
            $('.project_item').addClass('hide');
            $('.' + category).removeClass('hide');
            
        }
    });
});

$(document).ready(function(){
    $(".content").slice(0, 0).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".content:hidden").slice(0, 6).slideDown();
      if($(".content:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
  })


    function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
  

    function myFunction () {
      alert("Успешно го пративте вашето барање!")
    }
