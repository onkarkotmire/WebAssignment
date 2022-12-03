const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_button");
const emojiListContainer = document.getElementById('emoji_list')

init();

function init(){
renderingEmojis();
searchInput.addEventListener("keyup", renderingEmojis)
}

function renderingEmojis() {

    let html = '';
    let emojicopyList = [...emojiList];
    const inputvalue = searchInput.value;
    
    emojicopyList = emojicopyList.filter((emoji)=>{
        let flag = false;

        for(let i = 0 ;i < emoji.tags.length; i++){
           if(emoji.tags[i].toLowerCase().includes(inputvalue.toLowerCase())){
            flag = true;
            break;
           }
        }
        return flag;
    })

    for(let i = 0; i < emojicopyList.length; i++){
        html += ` <div class="emoji_row">
        <span class="emoji">${emojicopyList[i].emoji}</span>
        <span class="emoji_name">${emojicopyList[i].aliases[0]}</span>
        <span class="emoji_description">${emojicopyList[i].description}</span>
      </div>`
    }
    emojiListContainer.innerHTML = html;
}



