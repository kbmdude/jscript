function changeContent(elementId, newContent)
{
    let valueBeforeChange = document.getElementById(elementId)?.textContent;
    
    let element = document.getElementById(elementId);

    if( element !== null)
    {
        element.textContent = newContent;
    }
    else
    { }
    
    const logMessage = "Content of 'message' was changed";

    return `${logMessage} from '${valueBeforeChange}' to '${document.getElementById(elementId)?.textContent}'.` ;
}

class Dog
{
    name;
    age;

    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    toString() {
        let yearString = this.yearsCalculator(this.age);
        return `${this.name} the dog is ${this.age} ${yearString} old.`;
    }

    yearsCalculator(age)
    {
        return (age > 1) ? "years" : "year";
    }
}
