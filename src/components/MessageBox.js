import { useEffect } from "react";

export default function Selector({dispatcher}) {
    let txtElement, txtElementHeight, txtElementHeightOG;
    useEffect(() => {
        heightAdjust();
    }, [])
    const sendMessage = (e) => {
        txtElement = document.getElementById("messageTxt");
        if(e.code && e.code!="MetaRight") return;
        let txt = txtElement.value;
        console.log(txtElement);
        dispatcher({type: "MESSAGE_SEND", msg: txt});
        clearMessage();
    }
    const heightAdjust = (num) => {
        txtElement = document.getElementById("messageTxt");
        txtElementHeight = txtElement.scrollHeight;
        if(!txtElementHeightOG) txtElementHeightOG = txtElementHeight;
        txtElementHeight = (isNaN(num)) ? txtElementHeight : txtElementHeightOG;
        txtElement.style.height = txtElementHeight + "px";
    }
    const textareaFocus = () => {
        document.addEventListener("keyup", sendMessage);
    }
    const textareaBlur = () => {
        document.removeEventListener("keyup", sendMessage);
    }
    const clearMessage = () => {
        txtElement = document.getElementById("messageTxt");
        txtElement.value = "";
        heightAdjust(txtElementHeightOG);
    }
    return (
        <div className="c-messageBox">
            <textarea
                id="messageTxt"
                onChange={heightAdjust}
                onFocus={textareaFocus}
                onBlur={textareaBlur}
            ></textarea>
            {/* <button onClick={clearMessage}>Clear</button> */}
            <button onClick={sendMessage}>⬆</button>
        </div>
    )
}