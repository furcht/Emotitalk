import { useEffect, useState } from "react";

export default function Selector({dispatcher}) {
    let txtElement, txtElementHeight, txtElementHeightOG, inputCount;
    let charMax = 512;

    let [charCount, setCharCount] = useState(0);
    useEffect(() => {
        textareaChange();
    }, [])

    //- textarea events
    const textareaReset = () => {
        txtElement = document.getElementById("messageTxt");
        txtElement.style.height = 0;
    }
    const textareaChange = (num) => {
        txtElement = document.getElementById("messageTxt");
        txtElementHeight = txtElement.scrollHeight;
        if(!txtElementHeightOG) txtElementHeightOG = txtElementHeight;
        txtElementHeight = (isNaN(num)) ? txtElementHeight : txtElementHeightOG;
        txtElement.style.height = txtElementHeight + "px";
        //- character count
        inputCount = txtElement.value.length;
        if(inputCount===0) txtElement.removeAttribute("style");
        setCharCount(inputCount);
    }
    const textareaFocus = () => {
        document.addEventListener("keyup", sendText);
    }
    const textareaBlur = () => {
        document.removeEventListener("keyup", sendText);
    }
    //- message features
    const clearText = () => {
        txtElement = document.getElementById("messageTxt");
        txtElement.value = "";
        textareaChange(txtElementHeightOG);
    }
    const sendText = (e) => {
        txtElement = document.getElementById("messageTxt");
        if(e.code && e.code!="MetaRight") return;
        let txt = txtElement.value;
        console.log(txtElement);
        dispatcher({type: "MESSAGE_SEND", msg: txt});
        clearText();
    }

    //- render
    return (
        <div className="c-messageBox">
            <div className="c-messageBox__input">
                <textarea
                    id="messageTxt"
                    rows="1"
                    maxLength={charMax}
                    onInput={textareaReset}
                    onChange={textareaChange}
                    onFocus={textareaFocus}
                    onBlur={textareaBlur}
                ></textarea>
                <span>{charCount}/{charMax}</span>
            </div>
            <button className="c-messageBox__action" onClick={sendText}>⬆</button>
            <div className="c-messageBox__footer">Keyboard Submit = ⌘ + Enter (Mac), Ctrl + Enter (Win)</div>
        </div>
    )
}