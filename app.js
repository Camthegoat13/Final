$("#sub2").on("click", function(){
    //Pull in the input values and store them in their own variables
let display = $('#input').val()
let comment = $('#input1').val()
$("#mainBox").append(`
<div class="firstComment">
                <div class="fix">
                    <div class ="back"></div>
                <div class = "content">
                    <h3>${display}</h3>
                    <p class = 'changeVal'>${comment}</p>
                    <div class="com">
                        <div id="commentContainer">
                            <input type="text" id="editComment">
                            <input type="submit" class="sub">
                        </div>
                    </div>
                </div>
            </div>
                    <div class= "edit"><h4 id ="edit">edit</h4> <h4 id="delete">delete</h4></div>
                </div> 
            </div>
`)
    //Append to the main comment container a new comment. You will use the 
    //variables you just created as the name and comment
})
$('#mainBox').on("click", "#delete", function(){
    let parent = $(this).parents()[1]
    $(parent).remove()
    console.log(parent)
    });
$('#mainBox').on("click", "#edit", function(){
    let fun = $(this).parents()[1]
    let thiss = $(fun).children()[0]
    let child = $(thiss).children()[1]
    let close = $(child).children()[2]
    $(close).toggleClass('com')
    });
    $('#mainBox').on('click', ".sub", function(){
        let start = $(this).parents()[1]
        let kid = $(start).children()[0]
        let total = $(kid).children()[0]
        let newComment = $(total).val()
        

        let editNew = $(this).parent()[0]
        let previ = $(editNew).parents()[0]
        let back = $(previ).prev()
        $(back).text(newComment)
        console.log(back)
    });
