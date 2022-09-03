function changeContentOfH2(message)
{
    let valueBeforeChange = document.getElementById('message').textContent;
    document.getElementById('message').textContent = message;
    
    const logMessage = "Content of 'message' was changed";

    return `${logMessage} from '${valueBeforeChange}' to '${document.getElementById('message').textContent}'.` ;
}