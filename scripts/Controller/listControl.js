export function addOptions(selecID, optionsValue) {
 
    let select = document.getElementById(selecID);
    let newOption = document.createElement('option')

    newOption.value = optionsValue;
    newOption.text = optionsValue;

    select.appendChild(newOption);
}