const logger = output =>{
    console.log(output);
}
export var appName = "ES6 Review";
export var dummyFunction = () => {
    let feedback = "I am a dummy function";
    feedback = "I am still a dummy function";
    return feedback;
}
export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    let [firstLang, secondLang, ...otherLanguages] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}.The rest are ${otherLanguages}`
    }
export default logger;
