import { useRef } from "react";

function CloudinaryWidget({ sendInfo, className } : { sendInfo : (url : string) => void, className : string }) {
    const cloudName = "dx9vdom9p";
    const uploadPreset = "NodensPublic";
  
    const abled = useRef<HTMLButtonElement>(null);
  
    //@ts-ignore
    let myWidget = cloudinary.createUploadWidget({
      cloudName : cloudName,
      uploadPreset, 
    },(error: any, result: { event: string; info: { url: any; }; }) => {
      if(!error && result && result.event === "success"){
        console.log("Done!, Here is the image info: ", result.info)
        sendInfo(result.info.url);
        abled.current!.disabled = true;
      }
    })
    
    return (
      <button className={className} ref={abled} type='button' onClick={e => myWidget.open()}>Subir Imagen</button>
    )
}

export default CloudinaryWidget;
