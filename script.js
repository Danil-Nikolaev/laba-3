
window.addEventListener("load", function() {
    this.document.getElementsByTagName("button")[0].addEventListener("click", function () {
        let items = document.getElementsByTagName("*");
        let items_length = items.length;
        let js_text = "";
        let count = 1;
        let count_text = ""
        let js = document.getElementsByClassName("js")[0];
        for(let i = 0; i < items_length; i++ ){
            count_text = "";
            count = 0;
            console.log(items[i].tagName);
            count = Parent(items[i], count);
            for (let j = 1; j <= count; j++){
                count_text += "|";
            }
            js_text += "<p> "+ count_text + items[i].tagName + "</p>";
        }
        js.innerHTML = js_text;
    })
});

function Parent(el, count) {
    if (el.parentElement != null){
        count += 1;
        return Parent(el.parentElement, count);
    } else {
        return count;
    }
}
