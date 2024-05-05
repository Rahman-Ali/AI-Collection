const keyword = {
    "education":           [0,4],
    "programming":         [0,1,2,5],
    "general purpose":     [0,4],
    "video editing":       [1],
    "image creation":      [1],
    "prompt generator":    [2],
    "web development":     [3],
    "code generation":     [5],
}

const tools = [
    {
        name : "Bard",
        text : "Hi! I'm Gemini, a large language model from Google. I'm not a person, but I can access and process information to answer your questions",
        paid : true,
        pic : "images/bard2.png"
    },

    {
        name : "Bard",
        text : "Hi! I'm Gemini, a large language model from Google. I'm not a person, but I can access and process information to answer your questions",
        paid : true,
        pic : "images/bard2.png"
    },

    {
        name : "Bard",
        text : "Hi! I'm Gemini, a large language model from Google. I'm not a person, but I can access and process information to answer your questions",
        paid : false,
        pic : "images/bard2.png"
    },

    {
        name : "Bard",
        text : "Hi! I'm Gemini, a large language model from Google. I'm not a person, but I can access and process information to answer your questions",
        paid : false,
        pic : "images/bard2.png"
    },

    {
        name : "Bard",
        text : "Hi! I'm Gemini, a large language model from Google. I'm not a person, but I can access and process information to answer your questions",
        paid : true,
        pic : "images/bard2.png"
    },

    {
        name : "Bard",
        text : "Hi! I'm Gemini, a large language model from Google. I'm not a person, but I can access and process information to answer your questions",
        paid : true,
        pic : "images/bard2.png"
    },
]


function getMatchingtoolsArr(key)
{
    for(prop in keyword)
    {
        if(prop.includes(key))
        return keyword[prop];
    }

    return false;
}



function getResult(toolArr)
{
    let result = ``;

    for(let indx of toolArr)
    {

        result += `<div class="card col-sm-3 animate__animated animate__rollIn">
                  <div class="icons">`;

        if(tools[indx].paid)
        {
            result += `<i class="fa-solid fa-sack-dollar"></i>`;
        }
        result +=
           `<i class="fa-regular fa-bookmark"></i>
            </div>
            <img src="${tools[indx].pic}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${tools[indx].name}</h5>
            <p class="card-text">
                ${tools[indx].text}
            </p>
            <div class="explore-btns">
                <span class="explore-btn">Explore me</span>
                <span class="try-btn">Try me <i class="fa-solid fa-arrow-up-right-from-square"></i> </span>
            </div>
            </div>
        </div>`;
    }

    return result;
}

function search()
{
    
    const query = document.getElementById('search-input').value.toLowerCase();

    const matchingArr = getMatchingtoolsArr(query);

    if(matchingArr === false)
    {   
        return;
    }

    let result = getResult(matchingArr);

    document.getElementById('tools').innerHTML = result;
    

}

document.getElementById('tools').innerHTML = getResult([0,1,2,3,4]);

