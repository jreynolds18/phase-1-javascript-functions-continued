function saturdayFun(task = "roller-skate") {
    return `This Saturday, I want to ${task}!`;
}

const mondayWork = function(task = "go to the office") {
    return `This Monday, I will ${task}.`
}

function wrapAdjective(flair = "*") {
    return function(compliment = "special") {
        return `You are ${flair}${compliment}${flair}!`
    }
}
const encouragement = wrapAdjective("~");