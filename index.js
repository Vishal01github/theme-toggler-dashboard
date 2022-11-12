var light_mode = true
function themeToggler(){
    var main_head = document.getElementById("main-heading")
    var overview = document.getElementById("overview");
    var blocks = document.getElementsByClassName("block");
    var grid_items = document.getElementsByClassName('grid-item');
    var follow_count = document.getElementsByClassName('follower-count');
    var item_count = document.getElementsByClassName('count');
    console.log(follow_count)
    if(light_mode){
        document.body.style.backgroundImage = 'linear-gradient(to bottom,hsl(232, 19%, 15%) 0%,hsl(232, 19%, 15%) 30%,hsl(230, 17%, 14%) 30%,hsl(230, 17%, 14%) 100%)'
        main_head.style.color = 'hsl(0, 0%, 100%)'
        overview.style.color = 'hsl(0, 0%, 100%)'
        for(var i=0;i<blocks.length;i++){
            if(i == 2){
                var x = document.getElementById('insta-block');
                x.style.backgroundColor = 'hsl(228, 28%, 20%)'
                continue
            }
            blocks[i].style.backgroundColor = 'hsl(228, 28%, 20%)'
        }
        for(var i=0;i<grid_items.length;i++){
            grid_items[i].style.backgroundColor = 'hsl(228, 28%, 20%)'
        }
        for(var i=0;i<follow_count.length;i++){

            follow_count[i].style.color = 'hsl(0, 0%, 100%)'
        }
        for(var i=0;i<item_count.length;i++){

            item_count[i].style.color = 'hsl(0, 0%, 100%)'
        }
        light_mode = !light_mode
    }else{
        document.body.style.backgroundImage = 'linear-gradient(to bottom,hsl(225, 100%, 98%) 0%,hsl(225, 100%, 98%) 30%,white 30%,white 100%)'
        main_head.style.color = '#000000'
        overview.style.color = 'hsl(228, 12%, 44%)'
        for(var i=0;i<blocks.length;i++){
            if(i == 2){
                var x = document.getElementById('insta-block');
                x.style.backgroundColor = 'hsl(227, 47%, 96%)'
                continue
            }
            blocks[i].style.backgroundColor = 'hsl(227, 47%, 96%)'
        }
        for(var i=0;i<grid_items.length;i++){
            grid_items[i].style.backgroundColor = 'hsl(227, 47%, 96%)'
        }
        for(var i=0;i<follow_count.length;i++){
            follow_count[i].style.color = 'hsl(230, 17%, 14%)'
        }
        for(var i=0;i<item_count.length;i++){

            item_count[i].style.color = 'hsl(230, 17%, 14%)'
        }
        light_mode = !light_mode
    }
}